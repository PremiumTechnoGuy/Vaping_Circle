import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../Footer";
import { data } from "./../../../data/Cdata.js";

import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "../Fixed_Component.js";

function CategoryPage({ categories, filters }) {
  return (
    <div class="mt-36 md:mt-64 ">
      <Fixed_Component categories={categories} filters={filters} />
      <h1 class="fs-1 font-bold mb-5 text-center">Categories</h1>

      <Container
        fluid
        className="d-flex justify-content-center mb-5 align-items-center"
      >
        <Row xs={2} md={3}>
          {categories?.map((item, i) => (
            <Col
              key={item.id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div id="content" class="">
                <Link
                  to={`/productPage/${categories[i]?._id}/${categories[i]?.name}`}
                >
                  <div className="item e6">
                    <img
                      class="relative object-cover transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                      src={item.image.replace(
                        "/category",
                        "/tr:ar-1-1,w-285.5/category"
                      )}
                      alt={item.name}
                      width="330px"
                      height="270px"
                    />
                    <button class=" p-3 left-[2rem] lg:left-[4rem] right-[2rem]  md:w-44 absolute shadow-md bg-white font-bold text-[14px] md:fs-6 rounded-md text-[#59A0B8] bottom-[2rem] md:bottom-[3rem] z-5">
                      {item.name}
                    </button>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer categories={categories} />
    </div>
  );
}

export default CategoryPage;
