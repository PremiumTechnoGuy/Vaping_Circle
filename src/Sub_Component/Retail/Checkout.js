import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";
import Fixed_Component from "./Fixed_Component";

function Checkout({ categories, filters }) {
  return (
    <div>
      <Fixed_Component categories={categories} filters={filters} />
      <div class="bg-[#FFFFFF] md:bg-[#F1FCFF] mt-[7rem] md:mt-[11rem]">
        <h2 class="text-3xl  font-bold text-center py-5">Checkout</h2>
        <Container fluid>
          <Row>
            <Col sm={12} md={8}>
              <div class="bg-[#FFFFFF] rounded-lg md:mx-5 my-3">
                <div class="p-5">
                  <div class="mx-4 p-1">
                    <div class="flex items-center">
                      <div class="flex items-center text-[#59A0B8] relative">
                        <FaCircle />

                        <div class="absolute top-0  text-center mt-10 -ml-[10px] text-xs font-medium  text-gray-500">
                          Cart
                        </div>
                      </div>
                      <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#59A0B8]"></div>
                      <div class="flex items-center  relative">
                        <FaRegCircle class="relative text-[#59A0B8] text-lg" />
                        <FaCircle class="z-5 absolute text-[#59A0B8] px-1" />

                        <div class="absolute top-0  text-center mt-10 -ml-[13px] text-xs font-medium  text-gray-500">
                          Information
                        </div>
                      </div>
                      <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                      <div class="flex items-center text-gray-500 relative">
                        <FaRegCircle />
                        <div class="absolute top-0 -ml-[12px] text-center mt-10 text-xs font-medium  text-gray-500">
                          Payment
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 p-4">
                    <div>
                      <Form sm={12}>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              First Name
                            </Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Last Name
                            </Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="" sm={6}>
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Email
                            </Form.Label>
                            <Form.Control type="email" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="" sm={6}>
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Phone
                            </Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              City
                            </Form.Label>
                            <Form.Control />
                          </Form.Group>

                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              State
                            </Form.Label>
                            <Form.Control />
                          </Form.Group>

                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Zip Code
                            </Form.Label>
                            <Form.Control />
                          </Form.Group>
                        </Row>
                        <Form.Group
                          className="mb-3"
                          controlId="formGridAddress1"
                        >
                          <Form.Label class="text-[#59A0B8] font-semibold py-2">
                            Address
                          </Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group
                          className="mb-3 text-black"
                          class="text-[#707070]"
                          id="formGridCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="By making a purchase with Vape Superstore, you confirm to be Age Verified via 1Account and agree to our terms & conditions. Please tick to confirm."
                          />
                        </Form.Group>

                        <div class="flex flex-col justify-center items-center ">
                          <button
                            id="btn"
                            class="bg-[#59A0B8] text-white mt-5 px-5 lg:text-xl font-semibold  py-2 rounded-[50px] "
                          >
                            Proceed to Payment
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="bg-[#FFFFFF] rounded-lg mx-5 my-3">
                <div class="flex px-4 py-5 justify-between">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/ELFAPodKitbyElfBarBlack.png?updatedAt=1704572966669"
                    alt=""
                    class="w-[70px] h-[70px]"
                  />
                  <p class="text-[#707070]" style={{ fontSize: 12 }}>
                    Elf Bar Disposable Vape
                  </p>

                  <div class="border flex  w-16 h-5 border-black ">
                    <p class="text-[#59A0B8]  ml-2">-</p>
                    <p class="text-[#59A0B8] ml-2">01</p>
                    <p class="text-[#59A0B8] ml-2 ">+</p>
                  </div>
                </div>

                <hr class="mx-4" />
                <div class="px-4 pt-4 flex justify-between">
                  <p>Subtotal</p>
                  <p>£7.95</p>{" "}
                </div>
                <div class="px-4 pt-3 flex justify-between">
                  <p>Shipping</p>
                  <p>-</p>{" "}
                </div>
                <div class="px-4 pt-3 pb-2 flex justify-between">
                  <p>Tax</p>
                  <p>-</p>{" "}
                </div>
                <hr class="mx-4" />
                <div class="px-4 flex justify-between pt-3 pb-4">
                  <h2 class="text-xl font-bold">Estimated Total</h2>
                  <h2 class="text-xl font-bold">£7.95</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer categories={categories} />
      </div>
    </div>
  );
}

export default Checkout;
