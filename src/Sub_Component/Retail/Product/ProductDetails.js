import "./productpage.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
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
import { set, keys } from "idb-keyval";

function ProductDetails({ products, categories, filters, setCart }) {
  const { currentProdId } = useParams();
  const nav = useNavigate();
  const [filteredProd] = products?.filter((prod) => prod._id === currentProdId);
  const [allImages, setAllImages] = React.useState([
    filteredProd.coverImage,
    ...filteredProd.images,
  ]);

  const [totalPrice, setTotalPrice] = useState(filteredProd?.basePrice);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
      );
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }
  };
  const handleImageClick = (clickedIndex) => {
    setCurrentImageIndex(clickedIndex);
  };

  const [openOpt, setOpenOpt] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSelectVariant = (value) => {
    const [currOption] = currentVariantType.options.filter(
      (opt) => opt.optionValue === value
    );

    if (currOption.optionImg) {
      setAllImages((imgs) => {
        const newImgs = imgs;
        newImgs.shift();
        newImgs.unshift(currOption.optionImg);
        return newImgs;
      });
      handleImageClick(0);
    }

    setSelectedVariants((vars) => {
      const newVars = vars.map((vr) => {
        if (vr.variantType === currentVariantType.variantType)
          return {
            variantType: currentVariantType.variantType,
            chosenOption: currOption,
          };
        else
          return {
            variantType: vr.variantType,
            chosenOption: vr.chosenOption,
          };
      });
      return newVars;
    });
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

  const [currentVariantType, setCurrentVariantType] = useState("");
  const [selectedVariants, setSelectedVariants] = useState(
    filteredProd?.variants
  );
  // const [chosenVariants, setChosenVariants] = useState([]);

  const showDrawer = (v) => {
    console.log(selectedVariants);
    setOpenOpt(true);
    setCurrentVariantType(v);
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
      <Fixed_Component categories={categories} filters={filters} />
      <div class="mt-64">
        <div>
          <Container fluid class="p-3">
            <Row>
              <Col>
                <div>
                  <Row>
                    <Col md={4} className="hidden md:block">
                      <div class="d-flex flex-col gap-3 p-2 px-5 ">
                        {allImages?.slice(1, 5).map((url, i) => (
                          <img
                            key={i + 1}
                            class={`w-36 h-28 shadow-md ${
                              i + 1 === currentImageIndex
                                ? "border-2 border-[#59A0B8]"
                                : ""
                            }`}
                            alt={`Product Img ${i + 1}`}
                            src={url.url}
                            onClick={() => handleImageClick(i + 1)}
                          />
                        ))}
                      </div>
                    </Col>
                    <Col md={8} className="hidden md:block">
                      <div className="relative">
                        <img
                          class="shadow-md h-full w-full"
                          alt="imageprod"
                          src={allImages[currentImageIndex].url}
                        />
                        <div className="absolute top-40 left-0 flex justify-between w-full p-3">
                          <div
                            className="cursor-pointer"
                            onClick={() => handleArrowClick("left")}
                          >
                            <div style={{ fontSize: "24px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                class="bi bi-arrow-left-circle"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleArrowClick("right")}
                          >
                            <div style={{ fontSize: "24px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                class="bi bi-arrow-right-circle"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* smallscreen */}
              <Col sm={12} className=" block md:hidden">
                <Row>
                  <img
                    class="shadow-md h-full "
                    alt={`Product Img main`}
                    src={allImages[currentImageIndex].url}
                    // onClick={() => handleImageClick(0)}
                  />
                </Row>

                <Row>
                  <div class="d-flex flex-row gap-2 py-5 ">
                    {allImages?.slice(1, 5).map((url, y) => (
                      <img
                        key={y + 1}
                        class={`w-36 h-24 shadow-md  ${
                          y + 1 === currentImageIndex
                            ? "border-2 border-[#59A0B8]"
                            : ""
                        }`}
                        alt={`Product Img ${y + 1}`}
                        src={url.url}
                        onClick={() => handleImageClick(y + 1)}
                      />
                    ))}
                  </div>
                </Row>
              </Col>
              {/* -----deatils------ */}
              <Col>
                <p class="fs-2 px-2 py-3 font-semibold text-black">
                  {filteredProd?.name}
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
                  £{filteredProd?.basePrice * count}
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
                    {filteredProd?.variants?.map((variant, i) => {
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
                            onClick={(e) => showDrawer(variant)}
                          >
                            {Boolean(selectedVariants)
                              ? selectedVariants[i]?.chosenOption
                                  ?.optionValue ||
                                `Select ${variant.variantType}`
                              : `Select ${variant.variantType}`}
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
                    class="px-3 py-1 mx-2 bg-white  text-[20px] shadow-lg shadow-cyan-500/50 cursor-pointer"
                    onClick={decrement}
                  >
                    -
                  </p>
                  <p class="px-3 py-1 mx-2 bg-white  text-[20px] shadow-lg shadow-cyan-500/50">
                    {count}
                  </p>
                  <p
                    class="px-3 py-1 mx-2 bg-white  text-[20px] shadow-lg shadow-cyan-500/50 cursor-pointer"
                    onClick={increment}
                  >
                    +
                  </p>
                </div>
                <p class="py-2"></p>

                <div class="flex flex-col justify-center items-center mt-3">
                  {/* <Link to="/cartView"> */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const bool = selectedVariants?.every(
                        (sVar) => sVar.chosenOption !== undefined
                      );
                      if (bool) {
                        // setCart((c) => [...c, filteredProd._id]);

                        set(filteredProd._id, {
                          _id: filteredProd._id,
                          price: filteredProd.basePrice,
                          variants: selectedVariants,
                          nm: filteredProd.name,
                          image: filteredProd.coverImage,
                          quantity: count,
                          offer: filteredProd.offer,
                        });
                        nav("/cartView");
                      } else {
                        alert("Select all variants before adding to cart!");
                      }
                    }}
                    class="bg-[#59A0B8] font-bold text-white px-5 text-xl w-64 py-2 rounded-[24px]"
                    id="btn"
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
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
                    {filteredProd?.overview}
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
            title={`Choose your ${currentVariantType.variantType}`}
            class="p-0 font-semibold"
            onClose={onClose}
            open={openOpt}
            style={{ padding: "0" }}
          >
            <div class="px-2 py-3">
              {" "}
              <Select
                // defaultValue={currentVariantType?.variantType}
                value={currentVariantType?.variantType}
                style={{ width: "100%" }}
                onChange={handleChange}
                onSelect={handleSelectVariant}
                options={currentVariantType?.options
                  ?.filter((opt) => (opt.optionQuantity === 0 ? false : true))
                  .map((opt) => {
                    return { value: opt.optionValue, label: opt.optionValue };
                  })}
              />
            </div>
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

            <button
              class="absolute bottom-0 right-0 bg-[#59a0b8] py-1 px-3 rounded-md text-[18px] m-2 font-semibold text-white"
              onClick={onClose}
            >
              Save
            </button>
          </Drawer>
        </div>
        <Outlet />

        <Footer categories={categories} />
      </div>
    </div>
  );
}

export default ProductDetails;
