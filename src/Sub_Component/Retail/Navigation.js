import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavbarBrand } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { IoIosSearch } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import "./SwitchBtn.css";
import Modal from "react-bootstrap/Modal";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";

// import { AiOutlineShoppingCart } from "react-icons/ai";

function Navigation() {
  const [open1, setOpen1] = useState(false);

  const [status, setStatus] = useState(false);
  const [statusType, setStatusType] = useState(false);
  const [statusBrand, setStatusBrand] = useState(false);
  const [statusFeature, setStatusFeature] = useState(false);
  const [icon, setIcon] = useState("+");
  const [type, setType] = useState("+");
  const [feature, setFeature] = useState("+");
  const [brand, setBrand] = useState("+");

  const changeIcon1 = () => {
    setOpen1(!open1);
  };

  const changeIcon = () => {
    setIcon(icon === "+" ? "-" : "+");
    setStatus(!status);
  };
  const changeType = () => {
    setType(type === "+" ? "-" : "+");
    setStatusType(!statusType);
  };
  const changeFeature = () => {
    setFeature(feature === "+" ? "-" : "+");
    setStatusFeature(!statusFeature);
  };
  const changeBrand = () => {
    setBrand(brand === "+" ? "-" : "+");
    setStatusBrand(!statusBrand);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ zIndex: "1000" }}>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-white p-0 m-0 border-b box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
        >
          <Container fluid style={{ boxShadow: "0px 4px 6px 0px #e9ecef" }}>
            <Navbar.Brand href="/">
              <img
                width="70px"
                alt=""
                src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-01%20at%2012.04.01%20AM.jpeg?updatedAt=1704049949841"
              />
            </Navbar.Brand>

            <NavbarBrand>
              <div class="hidden md:block">
                {" "}
                <InputGroup className="sm:w-75 md:w-96  ">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={{ height: 35 }}
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    className="text-white"
                    style={{ height: 36, backgroundColor: "#59A0B8" }}
                  >
                    <IoIosSearch className="text-2xl" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </NavbarBrand>

            <NavbarBrand class="flex items-center" style={{ display: "flex" }}>
              <div class="flex items-center">
                <div class="flex items-center">
                  {/* <label class="toggle-label">
                  <input type="checkbox" />
                  <span class="back">
                    <span class="toggle"></span>
                    <span class="label on ">Retail</span>
                    <span class="label off ">Wholesale</span>
                  </span>
                </label> */}

                  <span class="px-1">
                    <img
                      class="sm:block md:hidden "
                      height="29px"
                      alt=""
                      width="32px"
                      style={{ marginTop: 3, marginLeft: 5 }}
                      onClick={handleShow}
                      src="https://ik.imagekit.io/p2slevyg1/magnifying-glass.png?updatedAt=1704116657709"
                    />
                  </span>

                  <Link to="/cartView">
                    <span class="px-1">
                      <img
                        id="cart"
                        height="29px"
                        width="32px"
                        alt=""
                        // style={{ marginTop: 3 }}
                        src="https://ik.imagekit.io/p2slevyg1/shopping-cart%20(3).png?updatedAt=1704101372255"
                      />
                    </span>
                  </Link>

                  <span class="px-1">
                    {/* <Link to="/register"> */}
                    <img
                      height="30px"
                      width="32px"
                      alt=""
                      class="cursor-pointer"
                      onClick={changeIcon1}
                      src="https://ik.imagekit.io/p2slevyg1/profile%20(1).png?updatedAt=1704099476479"
                    />
                    {/* </Link> */}
                  </span>
                  <span class="px-1">
                    <Link to="/login" class="hover:text-[#59a0b8] text-black">
                      <p>LogIn</p>
                    </Link>
                  </span>
                </div>
              </div>
              <Navbar.Toggle
                className="md:hidden sm:block"
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                className="md:hidden sm:block"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    class="flex items-center "
                  >
                    <GoSignOut class="text-2xl me-2" />
                    <span class="text-[20px] font-semibold">Sign in</span>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body class="p-0">
                  <Nav className="justify-content-end flex-grow-1 ">
                    <h1
                      className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer"
                      onClick={changeIcon}
                    >
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Vape Kits
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            {icon}
                          </p>
                        </span>
                      </Link>
                    </h1>

                    {status ? (
                      <>
                        {" "}
                        <h1
                          className="bg-gray-100 hover:bg-gray-200 hover:text-black pt-3 pb-1 pl-6"
                          onClick={changeType}
                        >
                          <Link to="#">
                            <span className="hover:text-black text-base font-semibold text-[15px] ">
                              Shop by Type
                              <p
                                className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                                style={{ marginTop: "-10px" }}
                              >
                                {type}
                              </p>
                            </span>
                          </Link>
                        </h1>
                        {statusType ? (
                          <>
                            {" "}
                            <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black  ">
                              <h3 className="fw-bold"></h3>
                              <ul>
                                <li role="menuitem">
                                  <a href="#">Starter Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Advanced Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Vape Pen Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Pod Kits</a>
                                </li>
                              </ul>
                            </div>
                            <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black ">
                              <h3 className="fw-bold"></h3>
                              <ul>
                                <li role="menuitem">
                                  <a href="#">Disposables Vapes</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">MLT Vape Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Bundle Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Shop All Vape Kits</a>
                                </li>
                              </ul>
                            </div>
                            <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black ">
                              <ul>
                                <li role="menuitem">
                                  <a href="#">User Level</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">First Time Switcher</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Intermediate / Mid Range Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Advanced User Vapes</a>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : null}
                        <h1
                          className="bg-gray-100 hover:bg-gray-200 hover:text-black pt-3 pb-1 pl-6"
                          onClick={changeFeature}
                        >
                          <Link to="#">
                            <span className="hover:text-black text-base font-semibold text-[15px] ">
                              Shop by Feature
                              <p
                                className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                                style={{ marginTop: "-10px" }}
                              >
                                {feature}
                              </p>
                            </span>
                          </Link>
                        </h1>
                        {statusFeature ? (
                          <>
                            <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black">
                              <h3 className="fw-bold"></h3>
                              <ul>
                                <li role="menuitem">
                                  <a href="#">Inhale- Activated Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Rechargable Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Closed Pod Kits</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Adjustable Airflow</a>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : null}
                        <h1
                          className="bg-gray-100 hover:bg-gray-200 hover:text-black pt-3 pb-1 pl-6"
                          onClick={changeBrand}
                        >
                          <Link to="#">
                            <span className="hover:text-black text-base font-semibold text-[15px] ">
                              Feature Brand
                              <p
                                className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                                style={{ marginTop: "-10px" }}
                              >
                                {brand}
                              </p>
                            </span>
                          </Link>
                        </h1>
                        {statusBrand ? (
                          <>
                            {" "}
                            <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black ">
                              <h3 className="fw-bold"></h3>
                              <ul>
                                <li role="menuitem">
                                  <a href="#">Aspire</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Elf Bar</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Geek Vape</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Innokin</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">JUUL</a>
                                </li>
                              </ul>
                            </div>
                            <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black ">
                              <h3 className="fw-bold"></h3>
                              <ul>
                                <li role="menuitem">
                                  <a href="#">OXVA</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">SMOKE</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Vaporesso</a>
                                </li>
                                <li role="menuitem">
                                  <a href="#">Voopoo</a>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : null}
                      </>
                    ) : null}

                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black  mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          E-Liquids
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>

                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Disposible
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Refill & Pods
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Tanks
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Mods
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Coils
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Accessories
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          CBD
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                    <h1 className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer">
                      <Link>
                        <span className="hover:text-black text-base font-semibold text-[15px] ">
                          Help
                          <p
                            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
                            style={{ marginTop: "-10px" }}
                          >
                            +
                          </p>
                        </span>
                      </Link>
                    </h1>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>{" "}
            </NavbarBrand>
            {open1 ? (
              <ul
                id="talkbubble"
                className="flex flex-col justify-start item-center right-[8rem] md:right-[75px] top-[8rem] z-[100] fixed px-2 border-[#59a0b8] shadow-md rounded-md border mx-2 items-baseline "
                style={{ zIndex: "100" }}
              >
                <li class="flex justify-start item-center ">
                  <p className="py-2">
                    <Link to="/profilePage" class="hover:text-white">
                      Profile
                    </Link>
                  </p>
                </li>

                <li class="flex justify-start item-center ">
                  <p className="py-2">
                    <Link to="/myOrder" class="hover:text-white">
                      My Order
                    </Link>
                  </p>
                </li>
                <li class="flex justify-start item-center ">
                  <p className="py-2">
                    <Link to="/setting" class="hover:text-white">
                      Setting
                    </Link>
                  </p>
                </li>
              </ul>
            ) : null}
          </Container>
        </Navbar>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <InputGroup className="sm:w-75 md:w-96  ">
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ height: 35 }}
            />
            <InputGroup.Text
              id="basic-addon1"
              className="text-white"
              style={{ height: 36, backgroundColor: "#59A0B8" }}
            >
              <IoIosSearch className="text-2xl" />
            </InputGroup.Text>
          </InputGroup>
        </Modal.Header>
      </Modal>
      <Outlet />
    </div>
  );
}

export default Navigation;
