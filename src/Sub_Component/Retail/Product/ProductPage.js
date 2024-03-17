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
import PaginationComp from "./PaginationComp.js";

function BarFilter({ filter, handleSelectOpt, handleFilterChange }) {
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
        style={{
          overflowY:
            filter.options && filter.options.length > 5 ? "scroll" : "auto",
        }}
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
        <ul
          className="flex flex-col justify-start item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline"
          style={{
            maxHeight:
              filter.options && filter.options.length > 5 ? "200px" : "auto",
            overflowY: "auto",
          }}
        >
          {filter.options?.map((opt, i) => {
            return (
              <li className="flex justify-start gap-2  item-center" key={i}>
                <input
                  type="checkbox"
                  id={opt}
                  className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex"
                  onChange={(e) =>
                    handleFilterChange(filter._id, opt, e.target.checked)
                  }
                />
                <label htmlFor={opt} className="py-2">
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function BarFilterMobile({ filter, handleFilterChange }) {
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
                <input
                  type="checkbox"
                  id={opt}
                  className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex"
                  onChange={(e) =>
                    handleFilterChange(filter._id, opt, e.target.checked)
                  }
                />
                <label htmlFor={opt} className="py-2">
                  {opt}
                </label>
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

  // const filteredProducts = products?.filter(
  //   (prod) => prod.category === categoryId
  // );

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

  const [selectedFilters, setSelectedFilters] = useState({});

  // Filter products based on the selected filters
  const filteredProducts = products
    ?.filter((p) => p.category === categoryId)
    .filter((product) => {
      return Object.entries(selectedFilters).every(([filterId, options]) => {
        // If no options are selected for a filter, include the product
        if (options.length === 0) return true;
        // Otherwise, check if the product has at least one of the selected options for the filter
        return options.some((option) =>
          product.chosenFilters.some(
            (filter) =>
              filter.filterId === filterId && filter.chosenOption === option
          )
        );
      });
    });

  // Update selected filters when a checkbox is changed
  const handleFilterChange = (filterId, option, checked) => {
    setSelectedFilters((prevFilters) => {
      // Clone the previous selected filters object
      const updatedFilters = { ...prevFilters };
      // If the filter is not yet in the selected filters, initialize it as an empty array
      if (!updatedFilters[filterId]) {
        updatedFilters[filterId] = [];
      }
      // Update the selected options for the filter based on the checkbox change
      if (checked) {
        updatedFilters[filterId].push(option);
      } else {
        updatedFilters[filterId] = updatedFilters[filterId].filter(
          (selectedOption) => selectedOption !== option
        );
      }
      return updatedFilters;
    });
  };

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
                      handleFilterChange={handleFilterChange}
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
                      handleFilterChange={handleFilterChange}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>

      <PaginationComp filteredProducts={filteredProducts || []} />

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default ProductPage;
