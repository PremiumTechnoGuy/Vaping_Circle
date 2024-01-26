import React, { useState } from "react";
import "./JustArrived.css";
import { Container, Row, Col } from "react-bootstrap";

const JustArrived = () => {
  const [selectedCategory, setSelectedCategory] = useState("disposable");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1 class="fs-1 font-bold mb-5 mt-20 text-center">Just Arrived</h1>
      <span class="flex justify-center items-center  ">
        {" "}
        <div
          class="bg-[#f5f5f5] rounded-l-full  w-[115px] h-[60px] flex justify-center items-center"
          style={{ boxShadow: "1px 3px 3px 0px #dee2e6" }}
        >
          <input
            type="radio"
            id="eliquids"
            name="category"
            value="eliquids"
            checked={selectedCategory === "eliquids"}
            onChange={() => handleCategoryChange("eliquids")}
          />
          <label
            htmlFor="eliquids"
            class="text-[#555555] text-[18px] font-semibold"
          >
            Eliquids
          </label>
        </div>
        <div
          class="bg-[#f5f5f5]  w-[134px] h-[60px] flex justify-center items-center"
          style={{ boxShadow: " 2px 3px 3px 0px #dee2e6" }}
        >
          <input
            type="radio"
            id="disposable"
            name="category"
            value="disposable"
            checked={selectedCategory === "disposable"}
            onChange={() => handleCategoryChange("disposable")}
          />
          <label
            htmlFor="disposable"
            class="text-[#555555] text-[18px] font-semibold"
          >
            Disposable
          </label>
        </div>
        <div
          class="bg-[#f5f5f5]  rounded-r-full w-[150px] h-[60px] flex justify-center items-center"
          style={{ boxShadow: "2px 3px 3px 0px #dee2e6" }}
        >
          <input
            type="radio"
            id="refill&pods"
            name="category"
            value="refill&pods"
            checked={selectedCategory === "refill&pods"}
            onChange={() => handleCategoryChange("refill&pods")}
          />
          <label
            htmlFor="refill&pods"
            class="text-[#555555] text-[18px] font-semibold"
          >
            Refill & Pods
          </label>
        </div>
      </span>

      <div>
        {selectedCategory === "eliquids" && (
          <Container
            fluid
            className="d-flex justify-content-center align-items-center my-5"
            style={{ display: "flex", justify: "center", align: "center" }}
          >
            <Row xs={2} md={4}>
              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Ske-Crystal-Bar-Disposable-Vape-Pen.png?updatedAt=1705572057544"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Slix Disposable Vape
                      </p>
                     
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £14.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Aroma%20King%20Gem%20600%20Disposable%C2%A0Vape@2x.png?updatedAt=1705572053563"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p
                        class="text-black font-semibold  px-3"
                        style={{ fontSize: 15 }}
                      >
                        IVG 2400 Disposable Vape
                      </p>
                      
                    </div>
                    <p
                      class="text-[#000000] font-semibold  px-3"
                      style={{ fontSize: 15 }}
                    >
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Component%2069%20_%209.png?updatedAt=1705572629744"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Aroma King 600 Disposable
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/SikaryS600DisposableVapeDevice.png?updatedAt=1705572053288"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Elf Bar Metro 500 Pod
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}

        {selectedCategory === "disposable" && (
          <Container
            fluid
            className="d-flex justify-content-center align-items-center my-5"
            style={{ display: "flex", justify: "center", align: "center" }}
          >
            <Row xs={2} md={4}>
              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Slix%20Disposable%20Vape.png?updatedAt=1706280544310"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Slix Disposable Vape
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £14.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/IVG%202400%20Disposable%20Vape.png?updatedAt=1706280544245"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p
                        class="text-black font-semibold  px-3"
                        style={{ fontSize: 15 }}
                      >
                        IVG 2400 Disposable Vape
                      </p>
                      
                    </div>
                    <p
                      class="text-[#000000] font-semibold  px-3"
                      style={{ fontSize: 15 }}
                    >
                      £7.95
                    </p>
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
                        Aroma King 600 Disposable
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/prodcut%202%20hot%20seller.png?updatedAt=1706280544100"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Elf Bar Metro 500 Pod
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}

        {selectedCategory === "refill&pods" && (
          <Container
            fluid
            className="d-flex justify-content-center align-items-center my-5"
            style={{ display: "flex", justify: "center", align: "center" }}
          >
            <Row xs={2} md={4}>
              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/mod3.png?updatedAt=1705572053538"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Slix Disposable Vape
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £14.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/accc1.png?updatedAt=1705572053503"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p
                        class="text-black font-semibold  px-3"
                        style={{ fontSize: 15 }}
                      >
                        IVG 2400 Disposable Vape
                      </p>
                      
                    </div>
                    <p
                      class="text-[#000000] font-semibold  px-3"
                      style={{ fontSize: 15 }}
                    >
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/acsrs2.png?updatedAt=1705572053555"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Aroma King 600 Disposable
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>

              <Col>
                <div id="content" class="m-2">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/mod1.png?updatedAt=1705572053508"
                    alt=""
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                  />
                  <div class="flex justify-between">
                    {" "}
                    <div>
                      <p class="text-black font-semibold text-[15px] px-3">
                        Elf Bar Metro 500 Pod
                      </p>
                      
                    </div>
                    <p class="text-[#000000] font-semibold text-[15px] px-3">
                      £7.95
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default JustArrived;
