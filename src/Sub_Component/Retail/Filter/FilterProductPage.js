import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { Link, Outlet, useParams } from "react-router-dom";
import Slider from "react-slick";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Pagination from "react-bootstrap/Pagination";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Footer from "../Footer";
import { FaRegSquare } from "react-icons/fa";
import Fixed_Component from "../Fixed_Component";

function FilterProductPage({ products, categories, filters }) {
  const { categoryId, filId, filNameEnc, chosenOptionEnc } = useParams();
  const filName = filNameEnc.replaceAll("@", "/");
  const chosenOption = chosenOptionEnc?.replaceAll("@", "/") || null;
  const [filProds, setFilProds] = useState([]);

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === categoryId
  );

  // Find the filter based on filId
  // const filter = filters.find((filter) => filter._id === filId);

  const [options, setOptions] = useState([]);

  React.useEffect(() => {
    // filter products according to main filter
    if (chosenOption === "null") {
      const filteredProductsByFilter = filteredProducts.filter((product) => {
        const chosenFilter = product.chosenFilters.find(
          (filter) => filter.filterId === filId
        );
        return chosenFilter;
      });
      // console.log("filterProductOnly: ", filteredProductsByFilter);
      setFilProds(filteredProductsByFilter);
    } else {
      // Filter products based on the chosen option for the filter
      // // modified so products filtered axording to chosen option not filter id
      const filteredProductsByOption = filteredProducts.filter((product) => {
        const chosenFilter = product.chosenFilters.find(
          (filter) => filter.chosenOption === chosenOption
        );
        return chosenFilter && chosenFilter.chosenOption === chosenOption;
      });
      // console.log(filteredProductsByOption);
      setFilProds(filteredProductsByOption);
    }
  }, []);

  function handleFilterProducts() {
    const allOptions = document.querySelectorAll(".special-element");

    const optionsArr = allOptions.map((el) =>
      el.dataset.opt ? el.dataset.opt : null
    );
    console.log(optionsArr);
  }

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

  return (
    <div class="mt-36 md:mt-52">
      <Fixed_Component categories={categories} filters={filters} />
      <h2 class="fs-1 py-5 font-bold text-center text-[#59A0B8]">
        {filName} {chosenOption === "null" ? null : `(${chosenOption})`}
      </h2>

      <Container fluid>
        {/* <Row>
          <Col xs={4} md={2}>
            <p class="font-semibold py-3 text-center text-[#59A0B8]">
              Scroll Left
            </p>
          </Col>
          <Col xs={12} md={9}>
            {" "}
            <div class="md:block hidden">
              <Slider {...settings}>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open1 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon2}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Flavor Type
                    </p>
                    <p className="">
                      {icon2 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open2 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Fruits</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Deserts & Creams</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Drinks</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Cereal</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Menthol</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Sweet & Candy</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Tobacco</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon3}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Flavor
                    </p>
                    <p className="">
                      {icon3 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open3 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon4}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Brand
                    </p>
                    <p className="">
                      {icon4 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open4 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon5}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Size
                    </p>
                    <p className="">
                      {icon5 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open5 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon6}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      PG/VG Ratio
                    </p>
                    <p className="">
                      {icon6 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open6 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                </div>
              </Slider>
            </div>
            <div class="block md:hidden">
              {" "}
              <Slider {...settings1}>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open1 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon2}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Flavor Type
                    </p>
                    <p className="">
                      {icon2 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open2 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Fruits</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Deserts & Creams</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Drinks</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Cereal</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Menthol</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Sweet & Candy</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Tobacco</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon3}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Flavor
                    </p>
                    <p className="">
                      {icon3 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open3 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon4}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Brand
                    </p>
                    <p className="">
                      {icon4 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open4 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon5}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Size
                    </p>
                    <p className="">
                      {icon5 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open5 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon6}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      PG/VG Ratio
                    </p>
                    <p className="">
                      {icon6 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                  {open6 ? (
                    <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Freebase 10ml</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Pre-Filled Pod</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Shortfill</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Hybrid</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Shot</p>
                      </li>
                      <li class="flex justify-start item-center ">
                        <p className=" text-[#707070] text-[15px] px-2  py-2 text-base  font-semibold flex">
                          {" "}
                          <FaRegSquare />
                        </p>
                        <p className="py-2">Nic Salt</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                </div>
                <div>
                  <div
                    className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
                    onClick={changeIcon1}
                  >
                    <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
                      {" "}
                      Type
                    </p>
                    <p className="">
                      {icon1 ? (
                        <BsChevronDown class="text-[#707070] font-semibold" />
                      ) : (
                        <BsChevronUp class="text-[#707070] font-semibold" />
                      )}
                    </p>
                  </div>{" "}
                </div>
              </Slider>
            </div>
          </Col>
        </Row> */}
      </Container>

      <Container fluid class="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {filProds?.map((item) => (
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
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                      alt=""
                      class="absolute z-50 top-10 right-0 w-[5rem] md:w-24"
                    />
                    <p class="absolute hidden md:block z-50 top-12 right-3 font-semibold">
                      {item.offer.offerName}
                    </p>
                    <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
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
                  {item.basePrice}£
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

export default FilterProductPage;
