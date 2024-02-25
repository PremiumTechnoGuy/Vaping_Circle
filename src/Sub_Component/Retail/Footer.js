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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#00000029] text-black">
      <Container>
        <Row className="p-4">
          <Col xs={12} md={3}>
            <div class="flex flex-col justify-center align-center">
              <img
                className="mt-3 ml-[3rem] md:ml-0 w-[8rem] md:w-[187px] md:h-[187px] "
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-01_at_12.04.01_AM-removebg-preview.png?updatedAt=1704471063051"
                width={"187px"}
                height={"187px"}
                alt=""
              />
              <div class="hidden md:block">
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
                      backgroundColor: "#59A0B8",
                    }}
                  >
                    Subscribe
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} className=" flex row">
            <p className="text-left  leading-loose mt-4">
              <h6 className="lg:ml-[10px] text-[15px]  py-2 font-bold">
                About Us
              </h6>
              <span className="lg:ml-[10px]">
                <Link to="/aboutus" class="hover:text-black">
                  About Us
                </Link>
              </span>{" "}
              <br />
              <span className="lg:ml-[10px]">
                {" "}
                <Link to="/age_varification" class="hover:text-black">
                  Age Verification
                </Link>
              </span>{" "}
              <br />
              <span className="lg:ml-[10px]">
                <Link to="/compliance" class="hover:text-black">
                  Compliance (TPD)
                </Link>
              </span>{" "}
              <br />
              <span className="lg:ml-[10px]">
                <Link to="/term_conditions" class="hover:text-black">
                  Terms & Conditions
                </Link>
              </span>
              <br />
              <span className="lg:ml-[10px]">
                <Link to="/return_policy" class="hover:text-black">
                  Return Policy
                </Link>
              </span>
              <br />
              <span className="lg:ml-[10px]">
                <Link to="/our_partner" class="hover:text-black">
                  Our Partners
                </Link>
              </span>
              <br />    

            </p>
          </Col>
          <Col xs={6} md={3} className=" flex row">
            <p className="text-left  leading-loose mt-4">
              <h6 className="lg:ml-[15px] text-[15px] py-2 font-bold ">
                Our Products
              </h6>
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

          <Col xs={12} md={3} className="flex row ">
            <p className="text-left   mt-4 ">
              <h6 className="lg:ml-[50px] text-[15px] font-bold ">
                CONTACT US
              </h6>
              <p className="lg:ml-[50px] flex mt-4 col mb-3">
                <h5>
                  <MdLocationOn class="text-white bg-[#0B428B] rounded-full p-1 text-2xl" />
                </h5>
                <span className="ml-2" style={{ fontSize: 12 }}>
                  194 Mansfield Road, DE1 3RB, Derby, UK
                </span>
              </p>

              <p className="lg:ml-[50px]   flex  col">
                <h5>
                  <FaPhoneAlt class="text-white bg-[#0B428B] rounded-full p-1 text-2xl" />
                </h5>
                <span onClick={() => window.location.href = 'https://wa.me/+447939278187'} >
                  +447939278187
                </span>              </p>
              <p className="lg:ml-[50px] mt-2  flex  col">
                <h5>
                  <MdEmail class="text-white bg-[#0B428B] rounded-full p-1 text-2xl" />
                </h5>
                <span className="text-sm ml-2 leading-5">

                  <a href="mailto:info@vapingcircle.com" >
                    info@vapingcircle.com
                  </a>
                </span>
              </p>
              <p className="lg:ml-[50px] mt-3  flex  col">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/facebook%202.png?updatedAt=1704366024353"
                  alt=""
                  class="bg-white rounded-full p-1 mx-3 mt-2"
                />
                <img
                  src="https://ik.imagekit.io/2nuimwatr/twitter.png?updatedAt=1706280737508"
                  alt=""
                  //   width="80px"
                  class="bg-white rounded-full p-2 mx-3 mt-2"
                />
                <img
                  src="https://ik.imagekit.io/2nuimwatr/instagram%20(1).png?updatedAt=1706280737487"
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
      <h1 class="bg-[#59A0B8] text-white text-[16px] py-3  text-center">
        © 2024 Vaping Circle. All rights reserved <br></br>Designed by <a href="https://www.webcraftio.com/">WebCraftio</a>
      </h1>
    </div>
  );
};

export default Footer;
