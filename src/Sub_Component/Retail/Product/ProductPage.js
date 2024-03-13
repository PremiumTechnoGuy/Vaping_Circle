import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./productpage.css";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Footer from "../Footer";
import { Link, Outlet, useParams } from "react-router-dom";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { data } from "./../../../data/Pdata.js";
import Pagination from "react-bootstrap/Pagination";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";
import Fixed_Component from "../Fixed_Component.js";
import { apiUrl } from "../../../data/env.js";

function BarFilter({ filter, handleSelectOpt }) {
  const [open1, setOpen1] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };

  return (
    <div>
      <div
        className="flex justify-center item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline"
        onClick={changeIcon1}
        style={{ overflowY: filter.options && filter.options.length > 5 ? 'scroll' : 'auto' }}
      >
        <p className="text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base font-semibold flex">
          {filter.alternateName}
        </p>
        <p>
          {icon1 ? (
            <BsChevronDown className="text-[#707070] font-semibold" />
          ) : (
            <BsChevronUp className="text-[#707070] font-semibold" />
          )}
        </p>
      </div>{" "}
      {open1 ? (
        <ul className="flex flex-col justify-start item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline" style={{ maxHeight: filter.options && filter.options.length > 5 ? '200px' : 'auto', overflowY: 'auto' }}>
          {filter.options?.map((opt, i) => {
            return (
              <li className="flex justify-start gap-2  item-center" key={i}>
                <input type="checkbox" className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex" />
                <p className="py-2">{opt}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>

  );
}

function BarFilterMobile({ filter }) {
  const [open1, setOpen1] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };

  return (
    <div>
      <div
        className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
        onClick={changeIcon1}
      >
        <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
          {filter.alternateName}
        </p>
        <p className="">
          {icon1 ? (
            <BsChevronDown class="text-[#707070] font-semibold" />
          ) : (
            <BsChevronUp class="text-[#707070] font-semibold" />
          )}
        </p>
      </div>
      {open1 ? (
        <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
          {filter.options?.map((opt, i) => {
            return (
              <li class="flex justify-start item-center " key={i}>
                <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                  {" "}
                  <FaRegSquare />
                </p>
                <p className="py-2">{opt}</p>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function ProductPage({
  products,
  // currentCategory,
  categories,
  // setCurrentProductId,
  filters,
}) {
  const { categoryId, currentCategoryName } = useParams();
  console.log("hellllll", categoryId);

  const filteredProducts = products?.filter(
    (prod) => prod.category === categoryId
  );

  const filteredBarFilters = [...filters].filter(
    (fil) => fil.categoryId === categoryId && fil.showFilterbar
  );

  // const filteredCategory = categories?.filter(cat => cat._id === currentCategory);

  // console.log("allllllll", products);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  function handleFilterProducts() {
    const allOptions = document.querySelectorAll(".special-element");

    const optionsArr = allOptions.map((el) =>
      el.dataset.opt ? el.dataset.opt : null
    );
    console.log(optionsArr);
  }

  return (
    <div class="mt-36 md:mt-52">
      <Fixed_Component categories={categories} filters={filters} />
      <h2 class="fs-1 py-5 font-bold text-center text-[#59A0B8]">
        {currentCategoryName}
      </h2>

      <Container fluid>
        <Row>
          <Col xs={4} md={2}>
            <p class="font-semibold py-3 text-center text-[#59A0B8]">
              Scroll Left
            </p>
          </Col>
          <Col xs={12} md={9}>
            {" "}
            <div class="md:block hidden">
              <Slider {...settings}>
                {filteredBarFilters?.map((fil, i) => {
                  return (
                    <BarFilter
                      filter={fil}
                      handleSelectOpt={handleFilterProducts}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
            <div class="block md:hidden">
              <Slider {...settings1}>
                {filteredBarFilters?.map((fil, i) => {
                  return (
                    <BarFilterMobile
                      filter={fil}
                      handleSelectOpt={handleFilterProducts}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid class="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {filteredProducts?.map((item) => (
            <Col
              key={item._id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div id="content" class="mx-3 my-4 relative product-card">
                <Link to={`/productDetails/${item._id}`}>
                  {" "}
                  <img
                    src={
                      item.coverImage?.url?.replace(
                        "/product",
                        "/tr:ar-1-1,w-285.5/product"
                      ) || ""
                    }
                    alt={item.name}
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md product-image"
                  />{" "}
                </Link>
                {/* <Link to="/cartView"> */}
                <Link to={`/productDetails/${item._id}`}>
                  <button class="bg-white text-black px-4 py-2 font-semibold rounded-full add-to-cart-btn md:block hidden absolute top-[65%] left-[50%]">
                    Add to Cart
                  </button>
                  <button class="bg-white text-black px-4 py-2 font-semibold rounded-full add-to-cart-btn block md:hidden absolute top-[50%] left-[50%]">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/shopping-cart%20(3).png?updatedAt=1704101372255"
                      alt=""
                    />
                  </button>
                </Link>
                {item.offer?.isOffer ? (
                  <>
                    {/* <img
                      src={getSvg('#f0f0f0')}
                      alt=""
                      class="absolute z-50 top-10 right-0 w-[5rem] md:w-24"
                    /> */}
                    <svg
                      class="absolute z-50 top-10 right-0 w-[3.5rem] md:w-24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="114.173"
                      height="32.999"
                      viewBox="0 0 114.173 32.999"
                    >
                      <path
                        id="Union_6"
                        data-name="Union 6"
                        d="M396.316,65h-.143v-.081L367,48.5l29.173-16.419V32h85V65Z"
                        transform="translate(-367 -32)"
                        fill={`#${Math.floor(Math.random() * (907000 - 100000 + 1)) +
                          100000
                          }`}
                      />
                    </svg>
                    <p class="absolute hidden md:block  z-50 top-12 right-3 font-semibold text-white">
                      {item.offer.offerName}
                    </p>
                    <p class="absolute bg-[#0B428B] z-50 md:text-[14px] text-[9px] top-4 md:left-4 left-0 py-1 md:px-3 px-2 text-white font-semibold">
                      Multi Buy
                    </p>
                  </>
                ) : null}
                <div>
                  <Link to={`/productDetails/${item._id}`}>
                    {" "}
                    <p
                      class="text-black font-semibold  py-2"
                      style={{ fontSize: 15 }}
                    >
                      {item.name}
                    </p>
                  </Link>
                </div>
                <p
                  class="text-[#59A0B8] font-semibold "
                  style={{ fontSize: 15 }}
                >
                  £ {item.basePrice}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div class="flex justify-center items-center mb-5">
        <div class="pagination">
          <div>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#" className="active">
              «
            </a>
            <a href="#" className="active_end">
              »
            </a>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default ProductPage;
