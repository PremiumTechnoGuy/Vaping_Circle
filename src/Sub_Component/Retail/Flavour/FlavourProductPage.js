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

function FlavourProductPage({ products, categories, filters }) {
  const { flavourId, subFlavour, flavourName } = useParams();

  // Filter the products based on the chosenFlavs array
  const filteredProducts = products.filter((product) => {
    // Check if any chosenFilter matches the flavId and chosenOption
    return product.chosenFlavours.some((flav) => {
      return (
        flav.flavourId === flavourId && flav.chosenSubFlavour === subFlavour
      );
    });
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
        {flavourName} ({subFlavour})
      </h2>

      <Container fluid></Container>

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

export default FlavourProductPage;
