import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavbarBrand } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { IoIosSearch } from "react-icons/io";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./SwitchBtn.css";
import Modal from "react-bootstrap/Modal";
// import { GoSignIn } from "react-icons/go";
import { GoPerson, GoSignOut } from "react-icons/go";
import { useAuth } from "../../utils/auth";
import toast, { Toaster } from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { keys } from "idb-keyval";

// import { AiOutlineShoppingCart } from "react-icons/ai";

function Navigation({ categories, filters }) {
  const nav = useNavigate();

  const [open1, setOpen1] = useState(false);

  const changeIcon1 = () => {
    setOpen1(!open1);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const auth = useAuth();

  const [cartLength, setCartLength] = useState(0);

  keys().then((keys) => setCartLength(keys.length));

  return (
    <div style={{ zIndex: "1000" }}>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-white p-0 m-0 border-b box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
        >
          <Container fluid style={{ boxShadow: "0px 4px 6px 0px #e9ecef" }}>
            <Navbar.Brand href>
              <img
                width="70px"
                alt=""
                src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-01%20at%2012.04.01%20AM.jpeg?updatedAt=1704049949841"
                onClick={() => nav("/")}
                style={{ cursor: "pointer" }}
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
                      src="https://ik.imagekit.io/mctozv7td/Icon%20ionic-ios-search.svg?updatedAt=1709101380385"
                    />
                  </span>

                  {auth.loggedIn ? (
                    <>
                      <Link to="/cartView">
                        <span class="px-1">
                          <div className="relative">
                            {cartLength === 0 ? null : (
                              <span
                                className="absolute -right-2 -top-2 text-center text-white font-bold text-sm bg-primaryColor rounded-[50%] py-[1px] px-[5px] "
                                style={{ backgroundColor: "black" }}
                              >
                                {cartLength}
                              </span>
                            )}
                            <FiShoppingCart className=" text-3xl text-[#A8A8A8]" />
                          </div>
                          {/* <img
                            id="cart"
                            height="29px"
                            width="32px"
                            alt=""
                            // style={{ marginTop: 3 }}
                            src="https://ik.imagekit.io/p2slevyg1/shopping-cart%20(3).png?updatedAt=1704101372255"
                          /> */}
                        </span>
                      </Link>

                      <span class="px-1">
                        {/* <Link to="/register"> */}
                        <IoPersonCircleOutline
                          className="cursor-pointer text-[#A8A8A8]"
                          style={{ height: "30px", width: "32px", }}
                          onClick={changeIcon1}
                        />
                        {/* <GoPerson
                          className=" text-3xl text-primaryColor cursor-pointer"
                          onClick={changeIcon1}
                        /> */}
                        {/* <img
                          height="30px"
                          width="32px"
                          alt=""
                          class="cursor-pointer"
                          onClick={changeIcon1}
                          src="https://ik.imagekit.io/p2slevyg1/profile%20(1).png?updatedAt=1704099476479"
                        /> */}
                        {/* </Link> */}
                      </span>
                    </>
                  ) : (
                    <>
                      <span class="px-1">
                        <span
                          onClick={() => nav("/login")}
                          class="hover:text-[#59a0b8] text-black cursor-pointer"
                        >
                          <p>Login</p>
                        </span>
                      </span>
                      <span class="px-1">
                        <span class="hover:text-[#59a0b8] text-black">
                          <p>/</p>
                        </span>
                      </span>
                      <span class="px-1">
                        <span
                          onClick={() => nav("/register")}
                          class="hover:text-[#59a0b8] text-black cursor-pointer"
                        >
                          <p>Signup</p>
                        </span>
                      </span>{" "}
                    </>
                  )}
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
                    {auth.loggedIn ? (
                      <>
                        <GoSignOut
                          class="text-2xl me-2"
                          onClick={() => {
                            auth.logout();
                            window.location.reload();
                          }}
                        />
                        <span
                          class="text-[20px] font-semibold"
                          onClick={() => {
                            auth.logout();
                            window.location.reload();
                          }}
                        >
                          Sign Out
                        </span>
                      </>
                    ) : null}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body class="p-0">
                  <Nav className="justify-content-end flex-grow-1 ">
                    {categories.map((cat) => (
                      <CategoryComp
                        key={cat._id}
                        category={cat}
                        filters={filters}
                      />
                    ))}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>{" "}
            </NavbarBrand>
            {open1 ? (
              <ul
                id="talkbubble"
                className="flex flex-col justify-start item-center right-[4.5rem] md:right-[20px] top-[8rem] z-[100] fixed px-2 border-[#59a0b8] shadow-md rounded-md border mx-2 items-baseline "
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
                    <span
                      class="hover:text-white cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        auth.logout();
                        toast.loading("Logging Out...");
                        setTimeout(() => {
                          window.location.reload();
                        }, 500);
                      }}
                    >
                      Logout
                    </span>
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
      <Toaster />
    </div>
  );
}

function CategoryComp({ category, filters }) {
  const [status, setStatus] = useState(false);
  const [icon, setIcon] = useState("+");

  const changeIcon = () => {
    setIcon(icon === "+" ? "-" : "+");
    setStatus(!status);
  };

  const filteredFilters = filters.filter(
    (fil) => fil.categoryId === category._id
  );

  return (
    <>
      <h1
        className="bg-gray-100 hover:bg-gray-200 pt-3 pb-3 pl-6 hover:text-black mb-1 cursor-pointer"
        onClick={changeIcon}
      >
        <span className="hover:text-black text-base font-semibold text-[15px] ">
          {category.name}
          <p
            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
            style={{ marginTop: "-10px" }}
          >
            {icon}
          </p>
        </span>
      </h1>

      {status ? (
        <>
          {filteredFilters.map((filter) => (
            <MainFilterComp
              key={filter._id}
              filter={filter}
              categoryId={category._id}
            />
          ))}
        </>
      ) : null}
    </>
  );
}

function MainFilterComp({ filter, categoryId }) {
  const nav = useNavigate();

  const [statusType, setStatusType] = useState(false);
  const [type, setType] = useState("+");

  const changeType = () => {
    setType(type === "+" ? "-" : "+");
    setStatusType(!statusType);
  };

  return (
    <>
      <h1
        className="bg-gray-100 hover:bg-gray-200 hover:text-black pt-3 pb-1 pl-6"
        style={{ cursor: "pointer" }}
        onClick={changeType}
      >
        <span className="hover:text-black text-base font-semibold text-[15px] ">
          {filter.name}
          <p
            className="d-inline float-right mr-5 text-4xl pt-1 font-normal  hover:text-black "
            style={{ marginTop: "-10px" }}
          >
            {type}
          </p>
        </span>
      </h1>
      {statusType ? (
        <div className="px-4 py-2 font-[13px] hover:text-grey-800 text-black">
          {/* <h3 className="fw-bold"></h3> */}
          <ul>
            {filter.options.map((option) => (
              <li role="menuitem" style={{ cursor: "pointer" }}>
                <a
                  href
                  onClick={(e) => {
                    e.preventDefault();
                    nav(
                      `/filterProductPage/${categoryId}/${filter._id
                      }/${filter.name.replaceAll("/", "@")}/${option.replaceAll(
                        "/",
                        "@"
                      )}`
                    );
                  }}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Navigation;
