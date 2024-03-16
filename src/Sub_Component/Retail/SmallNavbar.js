import React from "react";
import "./smallNavbar.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../data/env";

function chunkArray(array, size, categories) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

function CategoryComponent({ allFilters, category }) {
  const nav = useNavigate();

  const thisCategoryFilters = allFilters?.filter(
    (fil) => fil.categoryId === category._id
  );
  // console.log(category.name, thisCategoryFilters);
  return (
    <li role="menuitem">
      <a
        href
        class="hover:underline  hover:font-bold hover:decoration-blue-800 hover:underline-offset-[19px] hover:text-blue-900"
      >
        {category.name}
      </a>
      <div
        className="mega-menu1  left-[0px]"
        id="submenu"
        aria-hidden="true"
        role="menu"
      >
        {thisCategoryFilters?.map((aFilter) => {
          const chunkedArray = chunkArray(aFilter.options, 5);
          return (
            <div className="nav-column">
              <li role="menuitem">
                <h3
                  class="font-bold hover:text-blue-900"
                  onClick={(e) => {
                    e.preventDefault();
                    nav(
                      `/filterProductPage/${category._id}/${
                        aFilter._id
                      }/${aFilter.name.replaceAll("/", "@")}/null`
                    );
                  }}
                >
                  {aFilter.name}
                </h3>
                <div
                  className="mega-menu  left-[0px]"
                  aria-hidden="true"
                  role="menu"
                >
                  {chunkedArray.map((chunk, i) => {
                    return (
                      <div className="nav-column " key={i}>
                        <ul>
                          {chunk.map((option, i) => (
                            <li role="menuitem" key={i}>
                              <a
                                href
                                onClick={(e) => {
                                  e.preventDefault();
                                  nav(
                                    `/filterProductPage/${category._id}/${
                                      aFilter._id
                                    }/${aFilter.name.replaceAll(
                                      "/",
                                      "@"
                                    )}/${option.replaceAll("/", "@")}`
                                  );
                                }}
                              >
                                {option}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                  {/* <div className="flex col gap-2  float-right  p-3">
                    <img
                      style={{ height: 200 }}
                      src="https://www.geekvape.com/upload/blog/blog-7.401.jpg"
                      width="400px"
                      alt="filter img"
                    />
                  </div> */}
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </li>
  );
}

function SmallNavbar({ filters, categories }) {
  // React.useEffect(() => {
  //   axios
  //     .get(`${apiUrl}/api/v1/category?sort=priority`)
  //     .then((res) => setCategories(res.data.data))
  //     .catch((err) => console.error(err));

  //   axios
  //     .get(`${apiUrl}/api/v1/filter?sort=priority`)
  //     .then((res) => setFilters(res.data.data))
  //     .catch((err) => console.error(err));

  //   console.log("cats", categories, "filters", filters);
  // }, []);

  return (
    <div
      id="smallnav"
      class="absolute z-5  hidden md:block"
      style={{ zIndex: "5" }}
    >
      <div
        className="menu-wrapper "
        class="pb-2 bg-white"
        role="navigation"
        style={{ borderBottom: "1px solid #00000014" }}
      >
        <ul className="nav gap-3 w-full" role="menubar">
          {categories?.map((category) => (
            <CategoryComponent
              key={category._id}
              allFilters={filters}
              category={category}
            />
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <Link to="/vapedeals">
              <button
                id="btn"
                class="float-end mt-2 right-0 p-2 w-[8rem] text-[15px]  rounded-md hover:bg-[#0B428B]  text-white bg-[#59A0B8]"
                // style={{ height: 35, margin: "0 auto" }}
              >
                <p class="">Vapes Deal</p>
              </button>
            </Link>
          </div>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default SmallNavbar;
