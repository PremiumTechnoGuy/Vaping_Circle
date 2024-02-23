import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";

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
                  <Link to={`/productDetails/${p._id}`}>
                    <img
                      src={p.coverImage.replace(
                        "/product",
                        "/tr:w-245,h-272/product"
                      )}
                      alt={p.name}
                      class="w-[50rem] xs:h-[13rem] md:h-[17rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 "
                    />
                    {p.offer?.isOffer ? (
                      <>
                        <img
                          src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                          alt=""
                          class="absolute z-50 top-10 right-0 w-[5rem] md:w-24"
                        />
                        <p class="absolute hidden md:block z-50 top-12 right-3 font-semibold">
                          {p.offer.offerName}
                        </p>
                        <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                          Multi Buy
                        </p>
                      </>
                    ) : null}
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
                  </Link>
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
