import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function PaginationComp({ filteredProducts }) {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of products to display per page
  const productsPerPage = 16;

  // Calculate the index of the first and last product to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Slice the array to get the products for the current page
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Container fluid class="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {currentProducts.map((item) => (
            <Col
              key={item._id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div id="content" class="mx-3 my-4 relative product-card">
                <Link to={`/productDetails/${item._id}`}>
                  {" "}
                  <img
                    src={
                      item.coverImage?.url?.replace(
                        "/product",
                        "/tr:ar-1-1,w-285.5/product"
                      ) || ""
                    }
                    alt={item.name}
                    class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md product-image"
                  />{" "}
                </Link>
                {/* <Link to="/cartView"> */}
                <Link to={`/productDetails/${item._id}`}>
                  <button class="bg-white text-black px-4 py-2 font-semibold rounded-full add-to-cart-btn md:block hidden absolute top-[65%] left-[50%]">
                    Add to Cart
                  </button>
                  <button class="bg-white text-black px-4 py-2 font-semibold rounded-full add-to-cart-btn block md:hidden absolute top-[50%] left-[50%]">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/shopping-cart%20(3).png?updatedAt=1704101372255"
                      alt=""
                    />
                  </button>
                </Link>
                {item.offer?.isOffer ? (
                  <>
                    {/* <img
                      src={getSvg('#f0f0f0')}
                      alt=""
                      class="absolute z-50 top-10 right-0 w-[5rem] md:w-24"
                    /> */}
                    <svg
                      class="absolute z-50 top-10 right-0 w-[3.5rem] md:w-24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="114.173"
                      height="32.999"
                      viewBox="0 0 114.173 32.999"
                    >
                      <path
                        id="Union_6"
                        data-name="Union 6"
                        d="M396.316,65h-.143v-.081L367,48.5l29.173-16.419V32h85V65Z"
                        transform="translate(-367 -32)"
                        fill={`#${
                          Math.floor(Math.random() * (907000 - 100000 + 1)) +
                          100000
                        }`}
                      />
                    </svg>
                    <p class="absolute hidden md:block  z-50 top-12 right-3 font-semibold text-white">
                      {item.offer.offerName}
                    </p>
                    <p class="absolute bg-[#0B428B] z-50 md:text-[14px] text-[9px] top-4 md:left-4 left-0 py-1 md:px-3 px-2 text-white font-semibold">
                      Multi Buy
                    </p>
                  </>
                ) : null}
                <div>
                  <Link to={`/productDetails/${item._id}`}>
                    {" "}
                    <p
                      class="text-black font-semibold  py-2"
                      style={{ fontSize: 15 }}
                    >
                      {item.name}
                    </p>
                  </Link>
                </div>
                <p
                  class="text-[#59A0B8] font-semibold "
                  style={{ fontSize: 15 }}
                >
                  £ {item.basePrice}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="flex justify-center items-center mb-5">
        <div className="pagination">
          <div>
            {/* Previous button */}
            <a
              href
              className={currentPage === 1 ? "disabled" : ""}
              style={{ cursor: "pointer" }}
              onClick={() =>
                currentPage === 1 ? null : setCurrentPage(currentPage - 1)
              }
            >
              « Previous
            </a>

            {/* Pagination links */}
            {Array.from({ length: totalPages }, (_, i) => (
              <a
                key={i}
                href
                className={currentPage === i + 1 ? "active" : ""}
                style={{ cursor: "pointer" }}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </a>
            ))}

            {/* Next button */}
            <a
              href
              className={currentPage === totalPages ? "disabled" : ""}
              style={{ cursor: "pointer" }}
              onClick={() =>
                currentPage === totalPages
                  ? null
                  : setCurrentPage(currentPage + 1)
              }
            >
              Next »
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginationComp;
