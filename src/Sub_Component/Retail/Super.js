import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import { TbMathGreater } from "react-icons/tb";

const Super = () => {
  return (
    <div>
      <h1 class="fs-1 font-bold mb-5  mt-5 text-center">Super Offer</h1>
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ display: "flex", justify: "center", align: "center" }}
      >
        <Row xs={2} md={4}>
          <Col>
            <div id="content" class="m-2 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/BluePear100ml_50_50_ShortfillbySeriouslyPodFill.png?updatedAt=1706280301052"
                alt=""
                class=" w-[50rem] xs:h-[13rem] md:h-[17rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 "
              />
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                alt=""
                class="absolute z-50 top-10 right-[8px] md:right-3 w-[5rem] md:w-24"
              />
              <p class="absolute z-50 top-[42px] right-[15px] md:top-12 md:right-7 text-white font-semibold">
                4 for £14
              </p>
              <p class="text-black font-semibold px-3" style={{ fontSize: 15 }}>
                Slix Disposable Vape
              </p>
              <p
                class="text-[#0B428B] font-semibold px-3"
                style={{ fontSize: 15 }}
              >
                £14.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/Pod-Salt-GO-600-Disposable-Vape_23e5808b-7666-40cb-948a-85ca4c561107@2x.png?updatedAt=1706280180197"
                alt=""
                class="w-[50rem] xs:h-[13rem] md:h-[17rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 "
              />
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%206@2x.png?updatedAt=1706280379167"
                alt=""
                class="absolute z-50  right-[7px] top-10 md:right-3 w-[5rem] md:w-24"
              />
              <p class="absolute z-50 top-[42px] right-[15px] md:top-12 md:right-7 text-white font-semibold">
                4 for £10
              </p>
              <p
                class="text-black font-semibold  px-3"
                style={{ fontSize: 15 }}
              >
                Vinci Q Vape Pod Kit
              </p>
              <p
                class="text-[#0B428B] font-semibold  px-3"
                style={{ fontSize: 15 }}
              >
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/Ske-Crystal-Bar-Disposable-Vape-Pen.png?updatedAt=1704456241942"
                alt=""
                class="w-[50rem] xs:h-[13rem] md:h-[17rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 "
              />
              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%205@2x.png?updatedAt=1706280379141"
                alt=""
                class="absolute z-50  right-[7px] top-10 md:right-3 w-[5rem] md:w-24"
              />
              <p class="absolute z-50 top-[42px] right-[15px] md:top-12 md:right-7 text-white font-semibold">
                3 for £30
              </p>
              <p
                class="text-black font-semibold  px-3"
                style={{ fontSize: 15 }}
              >
                Pod Salt GO 600 Disposable
              </p>
              <p
                class="text-[#0B428B] font-semibold  px-3"
                style={{ fontSize: 15 }}
              >
                £7.95
              </p>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2 relative">
              <img
                src="https://ik.imagekit.io/2nuimwatr/SikaryS600DisposableVapeDevice.png?updatedAt=1704456241970"
                alt=""
                class="w-[50rem] xs:h-[13rem] md:h-[17rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 "
              />

              <img
                src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                alt=""
                class="absolute z-50  right-[7px] top-10 md:right-3 w-[5rem] md:w-24"
              />
              <p class="absolute z-50 top-[42px] right-[15px] md:top-12 md:right-7 text-white font-semibold">
                4 for £14
              </p>

              <p
                class="text-black font-semibold  px-3"
                style={{ fontSize: 15 }}
              >
                Sikari S600 Disposable Vape
              </p>
              <p
                class="text-[#0B428B] font-semibold  px-3"
                style={{ fontSize: 15 }}
              >
                £7.95
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Super;
