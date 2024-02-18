import "./productpage.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Footer from "../Footer";
import Servcies_V from "../Servcies_V";
import ProductServices from "./ProductServices";
import Fixed_Component from "../Fixed_Component";
import { Drawer } from "antd";
import { Select, Space } from "antd";
import { apiUrl } from "../../../data/env";

function ProductDetails({ products }) {
  const { currentProdId } = useParams();
  const [filteredProd] = products?.filter((prod) => prod._id === currentProdId);

  const [openOpt, setOpenOpt] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  const showDrawer = () => {
    setOpenOpt(true);
  };

  const onClose = () => {
    setOpenOpt(false);
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [icon, setIcon] = useState(<FiPlus />);
  const [icon2, setIcon2] = useState(<FiPlus />);
  const [icon3, setIcon3] = useState(<FiPlus />);

  const changeIcon = () => {
    setIcon(!icon);
    setOpen(!open);
  };
  const changeIcon2 = () => {
    setIcon2(!icon2);
    setOpen2(!open2);
  };
  const changeIcon3 = () => {
    setIcon3(!icon3);
    setOpen3(!open3);
  };
  return (
    <div>
      <Fixed_Component />
      <div class="mt-64">
        <div>
          <Container fluid class="p-3">
            <Row>
              <Col>
                <div>
                  <Row>
                    <Col md={4} className="hidden md:block">
                      <div class="d-flex flex-col gap-3 p-2 px-5 ">
                        {filteredProd?.images?.map((url, i) => (
                          <img
                            class="w-36 h-28 shadow-md"
                            alt={`Product Img ${i}`}
                            src={url}
                          />
                        ))}
                      </div>
                    </Col>
                    <Col md={8} className="hidden md:block">
                      <img
                        class="shadow-md h-full "
                        alt="imageprod"
                        src={filteredProd?.coverImage}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* smallscreen */}
              <Col sm={12} className=" block md:hidden">
                <Row>
                  <img
                    class="shadow-md h-full "
                    src="https://ik.imagekit.io/p2slevyg1/JWNELFAProPodKit4.webp?updatedAt=1704644605618"
                  />
                </Row>

                <Row>
                  <div class="d-flex flex-row gap-2 py-5 ">
                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/p2slevyg1/JWNELFAProPodKit1.webp?updatedAt=1704644757475"
                    />

                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/p2slevyg1/JWNELFAProPodKit4_1.webp?updatedAt=1704644829533"
                    />

                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/p2slevyg1/JWNELFAProPodKit3.webp?updatedAt=1704644899350"
                    />

                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/p2slevyg1/JWNELFAProPodKit4.webp?updatedAt=1704644605618"
                    />
                  </div>
                </Row>
              </Col>
              {/* -----deatils------ */}
              <Col>
                <p class="fs-2 px-2 py-3 font-semibold text-black">
                  {filteredProd?.name}{" "}
                </p>
                {/* <p class="text-[#707070] text-sm px-2">
                  Brand :{" "}
                  <span class="text-[#59A0B8] font-bold text-[13px]">
                    Elf Bar
                  </span>
                </p> */}
                <p class="text-[#707070] text-[15px] px-2 pt-2">
                  {/* The ELFA Pro Pod Kit is the brand new pod vape kit by Elf Bar.
                  It has a built-in <br />
                  500mAh battery that lasts an entire day of vaping before
                  needing to be recharged. */}
                  {filteredProd?.description}
                </p>
                <p class="text-xl py-3 font-semibold px-2 text-[#59A0B8] mb-2">
                  £{filteredProd?.basePrice}
                </p>
                <Container className="border-y py-3 mx-auto text-center p-0 m-0">
                  <Row className="flex  flex-wrap">
                    {/* <Col
                      className="flex py-2"
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      xl={6}
                    >
                      <Button
                        className=" button-48 cursor-pointer border-[#59A0B8] font-semibold bg-white text-[#59A0B8]  hover:border-[#59A0B8] grow py-3 px-4 rounded-none text-md"
                        onClick={showDrawer}
                      >
                        <span class="z-5 hover:text-[#59A0B8]">
                          Choose Flavor
                        </span>
                      </Button>
                    </Col> */}
                    {filteredProd?.variants?.map((variant) => {
                      return (
                        <Col
                          className="flex py-2 "
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                          xl={6}
                        >
                          <Button
                            className="cursor-pointer border-[#59A0B8] font-semibold bg-[#59A0B8] text-white grow hover:border-[#59A0B8] hover:bg-[#59A0B8] py-3 px-4 rounded-none text-md"
                            onClick={showDrawer}
                          >
                            {variant.variantType}
                          </Button>
                        </Col>
                      );
                    })}

                    {/* <Col
                      className="flex py-1 "
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <Button
                        variant="primary"
                        className="cursor-pointer border-black font-semibold bg-black text-white grow hover:border-black py-2 px-3 rounded-none text-sm"
                      >
                        BUY IT NOW
                      </Button>
                    </Col> */}
                  </Row>
                </Container>

                <p class="py-2"></p>
                <div class="flex px-2">
                  <p class="text-[#707070] text-[16px]  pr-2">Quantity</p>
                  <p
                    class="px-2 py-1 mx-2 bg-white rounded-full text-[20px] shadow-sm shadow-cyan-500/50 cursor-pointer"
                    onClick={decrement}
                  >
                    -
                  </p>
                  <p class="px-2 py-1 mx-2 bg-white rounded-full text-[20px] shadow-sm shadow-cyan-500/50">
                    {count}
                  </p>
                  <p
                    class="px-2 py-1 mx-2 bg-white rounded-full text-[20px] shadow-sm shadow-cyan-500/50 cursor-pointer"
                    onClick={increment}
                  >
                    +
                  </p>
                </div>
                <p class="py-2"></p>
                <div class="d-flex gap-2 justify-center items-center mt-3">
                  <Link to="/checkout">
                    <button id="btn" class="bg-[#59A0B8] font-bold text-white px-5 text-xl w-64 py-2 rounded-[24px]">
                      Buy Now
                    </button>
                  </Link>
                  <Link to="/cartView">
                    <button id="btn" class="bg-[#59A0B8] font-bold text-white px-5 text-xl w-64 py-2 rounded-[24px]">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>

            <Row>
              <ProductServices />
            </Row>

            <Row class="py-8 ">
              {" "}
              <div class="mx-auto  w-75 ">
                <div
                  className="flex justify-between px-2 bg-[#E9E9E9] my-2 items-baseline "
                  onClick={changeIcon}
                >
                  <p className=" text-[#383838] text-[15px]  pt-3 py-3 text-base  font-semibold flex">
                    {" "}
                    Product Overview
                  </p>
                  <p className="">{icon ? <FiPlus /> : <FiMinus />}</p>
                </div>{" "}
                {open ? (
                  <p className="text-[#383838] text-[15px] px-2  pt-3 py-3  flex ">
                    {filteredProd?.description}
                  </p>
                ) : null}
                <div
                  className="flex justify-between px-2  bg-[#E9E9E9] my-2 items-baseline "
                  onClick={changeIcon2}
                >
                  <p className=" text-[#383838] text-[15px]  pt-3 py-3 text-base  font-semibold flex">
                    {" "}
                    Customer Reviews
                  </p>
                  <p className="">{icon2 ? <FiPlus /> : <FiMinus />}</p>
                </div>{" "}
                {open2 ? (
                  <p className="text-[#383838] text-[15px] px-2  pt-3 py-3  flex ">
                    The Lorem ipsum text is derived from sections 1.10.32 and
                    1.10.33 of Cicero's De finibus bonorum et malorum.The
                    physical source may have been the 1914 Loeb Classical
                    Library.
                  </p>
                ) : null}
                <div
                  className="flex justify-between px-2 bg-[#E9E9E9] my-2 items-baseline "
                  onClick={changeIcon3}
                >
                  <p className=" text-[#383838] text-[15px]  pt-3 py-3 text-base  font-semibold flex">
                    {" "}
                    Delivery Information
                  </p>
                  <p className="">{icon3 ? <FiPlus /> : <FiMinus />}</p>
                </div>{" "}
                {open3 ? (
                  <p className="text-[#383838] text-[15px] px-2  pt-3 py-3  flex ">
                    Neque porro quisquam est qui do- and continues on page 36
                    with "lorem ipsum ...", suggesting that the galley type of
                    that page was mixed up to make the dummy text seen today.
                  </p>
                ) : null}
              </div>
            </Row>

            <Row>
              <h1 class="fs-3 font-bold mt-5 ">More For You</h1>
              <Container
                fluid
                className="d-flex justify-content-center align-items-center mt-[3rem]"
                style={{ display: "flex", justify: "center", align: "center" }}
              >
                <Row xs={2} md={4}>
                  <Col>
                    <div id="content" class="m-2 relative">
                      <img
                        src="https://ik.imagekit.io/2nuimwatr/Slix%20Disposable%20Vape.png?updatedAt=1704592106815"
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            Slix Disposable Vape
                          </p>
                          <p class=" font-semibold text-[#59A0B8] text-[15px] px-3">
                            £14.95
                          </p>
                        </div>
                        {/* <p class="text-[#000000] font-semibold text-[15px] px-3" >£14.95</p> */}
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div id="content" class="m-2 relative">
                      <img
                        src="https://ik.imagekit.io/2nuimwatr/IVG%202400%20Disposable%20Vape.png?updatedAt=1704592106819"
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            Slix Disposable Vape
                          </p>
                          <p class=" font-semibold text-[#59A0B8] text-[15px] px-3">
                            £14.95
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div id="content" class="m-2 relative">
                      <img
                        src="https://ik.imagekit.io/2nuimwatr/Aroma%20King%20Gem%20600%20Disposable%C2%A0Vape.png?updatedAt=1704592106742"
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            Slix Disposable Vape
                          </p>
                          <p class=" font-semibold text-[#59A0B8] text-[15px] px-3">
                            £14.95
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div id="content" class="m-2">
                      <img
                        src="https://ik.imagekit.io/2nuimwatr/prodcut%202%20hot%20seller.png?updatedAt=1704592106814"
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            Slix Disposable Vape
                          </p>
                          <p class=" font-semibold text-[#59A0B8] text-[15px] px-3">
                            £14.95
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
          <Drawer
            title="Choose Your Flavour"
            class="p-0 font-semibold"
            onClose={onClose}
            open={openOpt}
            style={{ padding: "0" }}
          >
            {filteredProd?.variants.map((variant) => {
              return (
                <div class="px-2 py-3">
                  {" "}
                  <Select
                    defaultValue={variant.variantType}
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    options={variant.options.map((opt) => {
                      return { value: opt.optionValue, label: opt.optionValue };
                    })}
                  />
                </div>
              );
            })}
            {/* <div class="px-2 py-3">
              {" "}
              <Select
                defaultValue="Choose your flavor & Stenght"
                style={{ width: "100%" }}
                onChange={handleChange}
                options={[
                  { value: "Aurora Blue", label: "Aurora Blue" },
                  { value: "Aurora Purple", label: "Aurora Purple" },
                  { value: "Black", label: "Black" },
                  { value: "Navy Blue", label: "Navy Blue" },
                ]}
              />
            </div> */}

            {/* <div class="px-2 py-3">
              <Select
                defaultValue="Strength"
                style={{ width: "100%" }}
                onChange={handleChange}
                options={[
                  { value: "3mg", label: "3mg" },
                  { value: "6mg", label: "6mg" },
                  { value: "9mg", label: "9mg" },
                ]}
              />
            </div> */}

            <button class="absolute bottom-0 right-0 bg-[#59a0b8] py-1 px-3 rounded-md text-[18px] m-2 font-semibold text-white">
              Save
            </button>
          </Drawer>
        </div>
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;
