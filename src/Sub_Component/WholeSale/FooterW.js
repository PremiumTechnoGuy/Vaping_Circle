import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdOutlineMail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const FooterW = () => {
  return (
    <div className="bg-[#00000029] text-black mt-14">
      <Container>
        <Row className="p-4">
          <Col md={3} sm={12}>
            <div class="flex flex-col justify-center align-center">
              <img
                className="mt-3"
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-01_at_12.04.01_AM-removebg-preview.png?updatedAt=1704471063051"
                width={"187px"}
                height={"187px"}
                alt=""
              />
              <InputGroup className="w-80 mt-4 mb-3 ">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{ height: 40, fontSize: 15 }}
                />
                <InputGroup.Text
                  id="basic-addon1"
                  className="text-white"
                  style={{
                    height: 40,
                    fontSize: 15,
                    backgroundColor: "#464545",
                  }}
                >
                  Subscribe
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>
          <Col md={3} sm={12} className=" flex row">
            <p className="text-left  leading-loose mt-4">
              <h6 className="lg:ml-[10px] text-[15px] font-bold">About Us</h6>
              <span className="lg:ml-[10px]" >Privacy Policy</span> <br/>
              <span className="lg:ml-[10px]">Terms & Conditions</span>
              <br />
            </p>
          </Col>
          <Col md={3} sm={12} className=" flex row">
            <p className="text-left  leading-loose mt-4">
              <h6 className="lg:ml-[15px] text-[15px] font-bold ">Our Products</h6>
              <span className="lg:ml-[15px]">Disposables</span> <br />
              <span className="lg:ml-[15px]">Eliquids</span>
              <br />
              <span className="lg:ml-[15px]">Vape Kits</span>
              <br />
              <span className="lg:ml-[15px]">Tanks</span>
              <br />
              <span className="lg:ml-[15px]">Mods</span>
              <br />
              <br />
            </p>
          </Col>

          <Col md={3} sm={12} className="flex row ">
            <p className="text-left   mt-4 ">
              <h6 className="lg:ml-[50px] text-[15px] font-bold ">CONTACT US</h6>
              <p className="lg:ml-[50px] flex mt-4 col mb-3">
                <h5>
                  <MdLocationOn class="text-white bg-[#464545] rounded-full p-1 text-2xl" />
                </h5>
                <span className="ml-2" style={{ fontSize: 12 }}>
                  118 Uttoxeter Old Rd,Derby DEI IGE,United Kingdom
                </span>
              </p>

              <p className="lg:ml-[50px]   flex  col">
                <h5>
                  <FaPhoneAlt class="text-white bg-[#464545] rounded-full p-1 text-2xl" />
                </h5>
                <span className="text-sm ml-2 leading-5"> +44 7511 906313</span>
              </p>
              <p className="lg:ml-[50px] mt-2  flex  col">
                <h5>
                  <MdEmail class="text-white bg-[#464545] rounded-full p-1 text-2xl" />
                </h5>
                <span className="text-sm ml-2 leading-5">
                  {" "}
                  Touseefsiddique@icloud.com
                </span>
              </p>
              <p className="lg:ml-[50px] mt-3  flex  col">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/facebook%202.png?updatedAt=1704366024353"
                  alt=""
                 
                  class="bg-white rounded-full p-1 mx-3 mt-2"
                />
                <img
                  src="https://ik.imagekit.io/2nuimwatr/twitter.png?updatedAt=1704472411674"
                  alt=""
                //   width="80px"
                  class="bg-white rounded-full p-2 mx-3 mt-2"
                />
                <img
                  src="https://ik.imagekit.io/2nuimwatr/instagram%20(1).png?updatedAt=1704472541844"
                  alt=""
                //   width="80px"
                //   height="10px"
                  class="bg-white rounded-full p-2 mx-3 mt-2"
                />
              </p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterW;