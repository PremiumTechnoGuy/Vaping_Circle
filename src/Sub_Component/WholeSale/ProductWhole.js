import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./ProductWhole.css";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
// import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";

function ProductWhole() {
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setButtonVisible(false);
  };

  // const handleClick =()=>{
  //   console.log("kjhjgfd")

  // };

  return (
    <div class="mt-64">
      <h2 class="text-3xl py-3 font-bold text-center text-[#59A0B8]">
        E-Liquids
      </h2>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <p class="font-semibold py-3 text-center text-[#59A0B8]">
              Scroll Left
            </p>
          </Col>
          <Col>
            <div class="flex my-3 mx-2">
              <Form.Select aria-label="Default select example">
                <option selected hidden class="text-[#59A0B8]">
                  Type
                </option>
                <option value="1">Nic Salt</option>
                <option value="2">Freebase 10ml</option>
                <option value="3">Pre-Filled Pod</option>
                <option value="4">Pre-Filled Pod</option>
                <option value="5">Pre-Filled Pod</option>
                <option value="6">Shortfill</option>
                <option value="7">Hybrid</option>
                <option value="8">Nic Shot</option>
              </Form.Select>
              <p class="mx-2"></p>
              <Form.Select aria-label="Default select example">
                <option selected hidden>
                  Flavor Type
                </option>
                <option value="1">Fruits</option>
                <option value="2">Deserts & Creams</option>
                <option value="3">Drinks</option>
                <option value="4">Cereal</option>
                <option value="5">Menthol</option>
                <option value="6">Sweet & Candy</option>
                <option value="7">Tobacco</option>
              </Form.Select>
              <p class="mx-2"></p>
              <Form.Select aria-label="Default select example">
                <option selected hidden>
                  Flavor
                </option>
                <option value="1">Nic Salt</option>
                <option value="2">Freebase 10ml</option>
                <option value="3">Pre-Filled Pod</option>
                <option value="4">Shortfill</option>
                <option value="5">Hybrid</option>
                <option value="6">Nic Shot</option>
              </Form.Select>
              <p class="mx-2"></p>
              <Form.Select aria-label="Default select example">
                <option selected hidden>
                  Brand
                </option>
                <option value="1">Nic Salt</option>
                <option value="2">Freebase 10ml</option>
                <option value="3">Pre-Filled Pod</option>
                <option value="4">Shortfill</option>
                <option value="5">Hybrid</option>
                <option value="6">Nic Shot</option>
              </Form.Select>
              <p class="mx-2"></p>
              <Form.Select aria-label="Default select example">
                <option selected hidden>
                  Size
                </option>
                <option value="1">Nic Salt</option>
                <option value="2">Freebase 10ml</option>
                <option value="3">Pre-Filled Pod</option>
                <option value="4">Shortfill</option>
                <option value="5">Hybrid</option>
                <option value="6">Nic Shot</option>
              </Form.Select>
              <p class="mx-2"></p>
              <Form.Select aria-label="Default select example">
                <option selected hidden>
                  PG/VG Ratio
                </option>
                <option value="1">Nic Salt</option>
                <option value="2">Freebase 10ml</option>
                <option value="3">Pre-Filled Pod</option>
                <option value="4">Shortfill</option>
                <option value="5">Hybrid</option>
                <option value="6">Nic Shot</option>
              </Form.Select>
            </div>
          </Col>
        </Row>

        <Row xs={2} md={4}>
          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <Link to="/productDetails">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                  alt=""
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  class="relative w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
                />{" "}
              </Link>

              {buttonVisible && (
                //  <Link to="/productDetails">
                <button
                  class=" absolute btn rounded-full bg-white text-[14px] font-bold shadow-md text-black p-2  top-[280px]"
                  style={{ marginLeft: 100 }}
                >
                  Add to Cart
                </button>
                //  </Link>
              )}

              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>

              <div>
                <p
                  class="text-black font-semibold  py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold" style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold  py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold " style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold  py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold" style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold " style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>
        </Row>
        <Row xs={2} md={4}>
          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold  py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold " style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold " style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold " style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="mx-3 my-4 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-07_at_3.15.40_PM-removebg-preview.png?updatedAt=1704627921426"
                alt=""
                class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md"
              />{" "}
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206.png?updatedAt=1704454095286"
                alt=""
                class="absolute z-50 top-10   top-10 right-0 w-24"
              />
              <p class="absolute z-50 top-12 right-3 font-semibold">
                4 for £14
              </p>
              <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                Multi Buy
              </p>
              <div>
                <p
                  class="text-black font-semibold  py-2"
                  style={{ fontSize: 15 }}
                >
                  Polar Menthol 18mg Juul2 Pods
                </p>
              </div>
              <p class="text-[#59A0B8] font-semibold" style={{ fontSize: 15 }}>
                £7.95
              </p>
            </div>
          </Col>
        </Row>

        <div id="wrapper" class="mb-5 mt-5">
          <ul id="pagination">
            <li>
              <a href="#" class="active2">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" class="active2 text-2xl pb-2 mx-1 mt-1 mb-[-13px]">
                <MdArrowBack />
              </a>
            </li>
            <li>
              <a href="#" class="active text-2xl pb-2 mx-1 mt-1 mb-[-13px]">
                <MdArrowForward />
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Outlet />
    </div>
  );
}

export default ProductWhole;
