import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import { TbMathGreater } from "react-icons/tb";

const Super = ({ products }) => {
  const filteredProds = products.filter((p) => p.featured).slice(0, 4);
  // console.log("fils featured: ", filteredProds);

  return (
    <div>
      <h1 class="fs-1 font-bold mb-5  mt-5 text-center">Featured Products</h1>
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ display: "flex", justify: "center", align: "center" }}
      >
        <Row xs={2} md={4}>
          {filteredProds?.map((p) => {
            return (
              <Col>
                <div id="content" class="m-2 relative">
                  <img
                    src={p.coverImage.replace(
                      "/product",
                      "/tr:w-245,h-272/product"
                    )}
                    alt={p.name}
                    class="w-[50rem] xs:h-[13rem] md:h-[17rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 "
                  />
                  {/* <img
                    src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                    alt=""
                    class="absolute z-50 top-10 right-[8px] md:right-3 w-[5rem] md:w-24"
                  />
                  <p class="absolute z-50 top-[42px] right-[15px] md:top-12 md:right-7 text-white font-semibold">
                    4 for £14
                  </p> */}
                  <p
                    class="text-black font-semibold px-3"
                    style={{ fontSize: 15 }}
                  >
                    {p.name}
                  </p>
                  <p
                    class="text-[#0B428B] font-semibold px-3"
                    style={{ fontSize: 15 }}
                  >
                    £{p.basePrice}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Super;
