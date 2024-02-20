import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "./Fixed_Component";

function CartPage({ categories, filters }) {
  return (
    <div>
      <Fixed_Component categories={categories} filters={filters} />
      <div class="bg-[#FFFFFF] md:bg-[#F1FCFF] mt-[7rem] md:mt-[11rem] ">
        <h1 class="fs-2 py-5 font-bold text-center">Your Cart</h1>
        <Container fluid>
          <Row>
            <Col xs={12} md={8}>
              <div class="bg-[#FFFFFF] rounded-lg m-2 md:mx-5 md:my-5">
                <div>
                  {/* <Row>
                    <Col >
                      <img
                        src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                        alt=""
                        style={{maxWidth:'none'}}
                        class=" xs:p-0 md:px-12 md:py-3"
                      />
                    </Col>
                    <Col>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div class=" py-3 mb-5">
                          <p class="text-[#000000] font-bold text-sm">
                            ELFA Pod Kit By Elf Bar
                          </p>
                          <p class="text-[#000000] font-bold text-sm">
                            Aurora Purple
                          </p>
                        </div>
                        <div class="flex">
                          <p>Quantity : 1</p>
                          <p class="text-xl mx-5">
                            <RiDeleteBin5Line />
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div class=" py-3 text-[#000000] font-bold text-sm">
                        £7.95
                      </div>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col
                      class="flex justify-start items-start"
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      {" "}
                      <span>
                        <img
                          src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                          alt=""
                          style={{ maxWidth: "none" }}
                          class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
                        />{" "}
                      </span>
                      <span>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div class="px-2 py-3 mb-5">
                            <p class="text-[#000000] font-bold text-sm">
                              ELFA Pod Kit By Elf Bar
                            </p>
                            <p class="text-[#000000] font-bold text-sm">
                              Aurora Purple
                            </p>
                            <div class="flex justify-between items-center block md:hidden">
                              {" "}
                              <span>
                                <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                                  £7.95
                                </p>
                              </span>{" "}
                              <div
                                class="flex  justify-between items-center"
                                style={{ display: "flex" }}
                              >
                                <span class="">Quantity : 1</span>
                                <span class="">
                                  {" "}
                                  <RiDeleteBin5Line class="text-xl mx-3" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="flex hidden md:block justify-between items-center"
                            style={{ display: "flex" }}
                          >
                            <span class="hidden md:block">Quantity : 1</span>
                            <span class="hidden md:block">
                              {" "}
                              <RiDeleteBin5Line class="text-xl mx-3" />
                            </span>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                          £7.95
                        </div>
                      </span>
                    </Col>
                  </Row>
                  <hr class="mx-5 hidden md:block" />
                  <Row>
                    <Col
                      class="flex justify-start items-start"
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      {" "}
                      <span>
                        <img
                          src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Aurora-Blue%20(1).png?updatedAt=1704572865305"
                          alt=""
                          style={{ maxWidth: "none" }}
                          class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
                        />{" "}
                      </span>
                      <span>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div class="px-2 py-3 mb-5">
                            <p class="text-[#000000] font-bold text-sm">
                              ELFA Pod Kit By Elf Bar
                            </p>
                            <p class="text-[#000000] font-bold text-sm">
                              Aurora Purple
                            </p>
                            <div class="flex justify-between items-center block md:hidden">
                              {" "}
                              <span>
                                <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                                  £7.95
                                </p>
                              </span>{" "}
                              <div
                                class="flex  justify-between items-center"
                                style={{ display: "flex" }}
                              >
                                <span class="">Quantity : 1</span>
                                <span class="">
                                  {" "}
                                  <RiDeleteBin5Line class="text-xl mx-3" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="flex hidden md:block justify-between items-center"
                            style={{ display: "flex" }}
                          >
                            <span class="hidden md:block">Quantity : 1</span>
                            <span class="hidden md:block">
                              {" "}
                              <RiDeleteBin5Line class="text-xl mx-3" />
                            </span>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                          £7.95
                        </div>
                      </span>
                    </Col>
                  </Row>

                  <hr class="mx-5 hidden md:block" />
                  <Row>
                    <Col
                      class="flex justify-start items-start"
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      {" "}
                      <span>
                        <img
                          src="https://ik.imagekit.io/2nuimwatr/ELFAPodKitbyElfBarBlack.png?updatedAt=1704572966669"
                          alt=""
                          style={{ maxWidth: "none" }}
                          class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
                        />{" "}
                      </span>
                      <span>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div class="px-2 py-3 mb-5">
                            <p class="text-[#000000] font-bold text-sm">
                              ELFA Pod Kit By Elf Bar
                            </p>
                            <p class="text-[#000000] font-bold text-sm">
                              Aurora Purple
                            </p>
                            <div class="flex justify-between items-center block md:hidden">
                              {" "}
                              <span>
                                <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                                  £7.95
                                </p>
                              </span>{" "}
                              <div
                                class="flex  justify-between items-center"
                                style={{ display: "flex" }}
                              >
                                <span class="">Quantity : 1</span>
                                <span class="">
                                  {" "}
                                  <RiDeleteBin5Line class="text-xl mx-3" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="flex hidden md:block justify-between items-center"
                            style={{ display: "flex" }}
                          >
                            <span class="hidden md:block">Quantity : 1</span>
                            <span class="hidden md:block">
                              {" "}
                              <RiDeleteBin5Line class="text-xl mx-3" />
                            </span>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                          £7.95
                        </div>
                      </span>
                    </Col>
                  </Row>

                  <hr class="mx-5 hidden md:block" />
                  <Row>
                    <Col
                      class="flex justify-start items-start"
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                      }}
                    >
                      {" "}
                      <span>
                        <img
                          src="https://ik.imagekit.io/2nuimwatr/Blue-Burst-Hybrid-Salt-E-Liquid-by-Riot-Squad-removebg-preview.png?updatedAt=1704572966581"
                          alt=""
                          style={{ maxWidth: "none" }}
                          class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
                        />{" "}
                      </span>
                      <span>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div class="px-2 py-3 mb-5">
                            <p class="text-[#000000] font-bold text-sm">
                              ELFA Pod Kit By Elf Bar
                            </p>
                            <p class="text-[#000000] font-bold text-sm">
                              Aurora Purple
                            </p>
                            <div class="flex justify-between items-center block md:hidden">
                              {" "}
                              <span>
                                <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                                  £7.95
                                </p>
                              </span>{" "}
                              <div
                                class="flex  justify-between items-center"
                                style={{ display: "flex" }}
                              >
                                <span class="">Quantity : 1</span>
                                <span class="">
                                  {" "}
                                  <RiDeleteBin5Line class="text-xl mx-3" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="flex hidden md:block justify-between items-center"
                            style={{ display: "flex" }}
                          >
                            <span class="hidden md:block">Quantity : 1</span>
                            <span class="hidden md:block">
                              {" "}
                              <RiDeleteBin5Line class="text-xl mx-3" />
                            </span>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                          £7.95
                        </div>
                      </span>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="bg-[#FFFFFF] rounded-lg mx-5 my-5">
                <h2 class="text-xl py-3 font-bold text-center">Summary</h2>
                <div class="px-4 flex justify-between">
                  <p>Subtotal</p>
                  <p>£7.95</p>{" "}
                </div>
                <div class="px-4 flex justify-between">
                  <p>Shipping</p>
                  <p>-</p>{" "}
                </div>
                <div class="px-4 flex justify-between">
                  <p>Tax</p>
                  <p>-</p>{" "}
                </div>
                <hr class="mx-4" />
                <div class="px-4 flex justify-between p-2">
                  <h3 class="text-xl font-bold">Estimated Total</h3>
                  <h3 class="text-xl font-bold">£7.95</h3>
                </div>

                <div class="flex flex-col justify-center items-center pb-5">
                  <Link to="/checkout">
                    <button class="bg-[#59A0B8] text-white mt-5 px-5  py-2 rounded-[24px]">
                      Go to Checkout
                    </button>
                  </Link>
                  <p class="text-[#59A0B8] p-2 underline underline-offset-2">
                    Continue Shopping
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />

        <Outlet />
      </div>
    </div>
  );
}

export default CartPage;
