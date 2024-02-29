import React, { useState, useEffect } from "react";
import "./JustArrived.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const JustArrived = ({ categories, products }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?._id);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Update filtered products when selected category changes
    const filProds = products.filter((p) => p.category === selectedCategory);
    setFilteredProducts(filProds);
  }, [selectedCategory, products]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Set default category and filtered products on mount
  useEffect(() => {
    setSelectedCategory(categories[1]?._id);
    const filProds = products.filter((p) => p.category === categories[1]?._id);
    setFilteredProducts(filProds);
  }, [categories, products]);

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
            id={categories[0]?._id}
            name={categories[0]?._id}
            value={categories[0]?._id}
            checked={selectedCategory === categories[0]?._id}
            onChange={() => handleCategoryChange(categories[0]?._id)}
          />
          <label
            htmlFor={categories[0]?._id}
            class="text-[#555555] text-[18px] font-semibold"
          >
            {categories[0]?.name || "Category 1"}
          </label>
        </div>
        <div
          class="bg-[#f5f5f5]  w-[134px] h-[60px] flex justify-center items-center"
          style={{ boxShadow: " 2px 3px 3px 0px #dee2e6" }}
        >
          <input
            type="radio"
            id={categories[1]?._id}
            name={categories[1]?._id}
            value={categories[1]?._id}
            checked={selectedCategory === categories[1]?._id}
            onChange={() => handleCategoryChange(categories[1]?._id)}
          />
          <label
            htmlFor={categories[1]?._id}
            class="text-[#555555] text-[18px] font-semibold"
          >
            {categories[1]?.name || "Category 2"}
          </label>
        </div>
        <div
          class="bg-[#f5f5f5]  rounded-r-full w-[150px] h-[60px] flex justify-center items-center"
          style={{ boxShadow: "2px 3px 3px 0px #dee2e6" }}
        >
          <input
            type="radio"
            id={categories[2]?._id}
            name={categories[2]?._id}
            value={categories[2]?._id}
            checked={selectedCategory === categories[2]?._id}
            onChange={() => handleCategoryChange(categories[2]?._id)}
          />
          <label
            htmlFor={categories[2]?._id}
            class="text-[#555555] text-[18px] font-semibold"
          >
            {categories[2]?.name || "Category 3"}
          </label>
        </div>
      </span>

      <div>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center my-5"
          style={{ display: "flex", justify: "center", align: "center" }}
        >
          <Row xs={2} md={4}>
            {filteredProducts?.map((prod) => {
              return (
                <Col key={prod._id}>
                  <div id="content" class="m-2 relative">
                    <Link to={`/productDetails/${prod._id}`}>
                      {prod.offer?.isOffer ? (
                        <>
                          <img
                            src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                            alt=""
                            class="absolute z-50 top-10 right-0 w-[5rem] md:w-24"
                          />
                          <p class="absolute hidden md:block z-50 top-12 right-3 font-semibold">
                            {prod.offer.offerName}
                          </p>
                          <p class="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                            Multi Buy
                          </p>
                        </>
                      ) : null}

                      <img
                        src={prod.coverImage.url.replace(
                          "/product",
                          "/tr:ar-1-1,w-301.5,h-336/product"
                        )}
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            {prod.name}
                          </p>
                        </div>
                        <p class="text-[#000000] font-semibold text-[15px] px-3">
                          £{prod.basePrice}
                        </p>
                      </div>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>

        {/* {selectedCategory === categories[1]?._id && (
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

        {selectedCategory === categories[2]?._id && (
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
        )} */}
      </div>
    </div>
  );
};

export default JustArrived;
