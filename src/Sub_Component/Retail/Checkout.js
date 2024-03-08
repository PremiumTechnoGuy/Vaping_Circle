import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "./Footer";
import Fixed_Component from "./Fixed_Component";
import { values } from "idb-keyval";
import { useAuth } from "../../utils/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../data/env";
import { cityArray } from "../../utils/data";

function Checkout({ categories, filters }) {
  const [cartArr, setCartArr] = React.useState([]);
  const nav = useNavigate();

  function getSavedCartProducts() {
    values()
      .then((res) => {
        // setCartArr(res.map((cId) => products.find((p) => p._id === cId)));
        setCartArr(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    getSavedCartProducts();
  }, []);

  const auth = useAuth();

  const handleCheckout = () => {};

  // Modal states
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [phone, setPhone] = React.useState(auth.user.phone || "");
  const [city, setCity] = React.useState(auth.user.city || "");
  const [postcode, setPostcode] = React.useState(auth.user.postcode || "");
  const [address, setAddress] = React.useState(auth.user.address || "");

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
                            <Form.Control
                              type="text"
                              disabled
                              defaultValue={auth.user.firstName}
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              disabled
                              defaultValue={auth.user.lastName}
                            />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="" sm={6}>
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              disabled
                              defaultValue={auth.user.email}
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="" sm={6}>
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Phone
                            </Form.Label>
                            <Form.Control
                              type="text"
                              disabled
                              defaultValue={auth.user.phone || "N/A"}
                            />
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              City
                            </Form.Label>
                            <Form.Control
                              type="text"
                              disabled
                              defaultValue={auth.user.city || "N/A"}
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="">
                            <Form.Label class="text-[#59A0B8] font-semibold py-2">
                              Postcode
                            </Form.Label>
                            <Form.Control
                              type="text"
                              disabled
                              defaultValue={auth.user.postcode || "N/A"}
                            />
                          </Form.Group>
                        </Row>
                        <Form.Group
                          className="mb-3"
                          controlId="formGridAddress1"
                        >
                          <Form.Label class="text-[#59A0B8] font-semibold py-2">
                            Address
                          </Form.Label>
                          <Form.Control
                            type="text"
                            disabled
                            defaultValue={auth.user.address || "N/A"}
                          />
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
                            onClick={(e) => {
                              e.preventDefault();
                              if (
                                auth.user.phone &&
                                auth.user.address &&
                                auth.user.city &&
                                auth.user.postcode
                              )
                                handleCheckout();
                              else {
                                toast.error("Complete your information");
                                handleShow();
                              }
                            }}
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
                {cartArr?.map((crt, i) => {
                  return (
                    <div key={i} class="flex px-4 py-5 justify-between">
                      <img src={crt.image} alt="" class="w-[70px] h-[70px]" />
                      <p class="text-[#707070]" style={{ fontSize: 12 }}>
                        {crt.nm}
                      </p>

                      {/* <div class="border flex  w-16 h-5 border-black "> */}
                      <p class="text-[#59A0B8] ml-2">
                        Qty.&nbsp;{crt.quantity}
                      </p>
                      {/* </div> */}
                    </div>
                  );
                })}

                <hr class="mx-4" />
                <div class="px-4 pt-4 flex justify-between">
                  <p>Subtotal</p>
                  <p>
                    £
                    {cartArr
                      .map((c) => c.price * c.quantity)
                      .reduce((p, c) => p + c, 0)
                      .toFixed(2)}
                  </p>
                </div>
                <div class="px-4 pt-3 flex justify-between">
                  <p>Shipping</p>
                  <p>£{0}</p>
                </div>
                <div class="px-4 pt-3 pb-2 flex justify-between">
                  <p>Tax</p>
                  <p>-</p>{" "}
                </div>
                <hr class="mx-4" />
                <div class="px-4 flex justify-between pt-3 pb-4">
                  <h2 class="text-xl font-bold">Estimated Total</h2>
                  <h2 class="text-xl font-bold">
                    £
                    {cartArr
                      .map((c) => c.price * c.quantity)
                      .reduce((p, c) => p + c, 0)
                      .toFixed(2)}
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer categories={categories} />
      </div>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Body>
          <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
            <Form.Label class="font-semibold w-20">Phone:</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-70"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
            <Form.Label class="font-semibold w-20">Address:</Form.Label>
            <Form.Control
              placeholder="Address Line"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-70"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
            <Form.Label class="font-semibold w-20">Postcode:</Form.Label>
            <Form.Control
              placeholder="Postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="w-70"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
            <Form.Label class="font-semibold w-20">City:</Form.Label>
            <Form.Select
              placeholder="City"
              defaultValue={auth.user.city || "Select City"}
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="w-70"
            >
              <option selected hidden>
                Select City
              </option>
              {cityArray?.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
            variant="info"
            class="rounded-1 py-2 px-2 bg-[#1B94A0] text-white hover:bg-[#1B94A0] hover:text-white"
          >
            Save & Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Toaster />
    </div>
  );
}

export default Checkout;
