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
import PaginationComp from "../Product/PaginationComp";

function DealProductPage({ products, categories, filters }) {
  const { offerId, offerName } = useParams();

  const filteredProducts = products.filter((product) => {
    return product.offer?.offerId === offerId;
  });

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const [icon2, setIcon2] = useState(<BsChevronUp />);
  const [icon3, setIcon3] = useState(<BsChevronUp />);
  const [icon4, setIcon4] = useState(<BsChevronUp />);
  const [icon5, setIcon5] = useState(<BsChevronUp />);
  const [icon6, setIcon6] = useState(<BsChevronUp />);

  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };
  const changeIcon2 = () => {
    setIcon2(!icon2);
    setOpen2(!open2);
  };
  const changeIcon3 = () => {
    setIcon3(!icon3);
    setOpen3(!open3);
  };
  const changeIcon4 = () => {
    setIcon4(!icon4);
    setOpen4(!open4);
  };
  const changeIcon5 = () => {
    setIcon5(!icon5);
    setOpen5(!open5);
  };
  const changeIcon6 = () => {
    setIcon6(!icon6);
    setOpen6(!open6);
  };

  const [buttonVisible, setButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setButtonVisible(false);
  };

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
        Vape Deal ({offerName})
      </h2>

      <Container fluid></Container>

      <PaginationComp filteredProducts={filteredProducts || []} />

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default DealProductPage;
