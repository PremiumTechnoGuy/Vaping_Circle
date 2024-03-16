import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";
import Footer from "../Footer";

function FilterProductPage({ products, categories, filters }) {
  const { categoryId, filId, filNameEnc, chosenOptionEnc } = useParams();
  const filName = filNameEnc.replaceAll("@", "/");
  const chosenOption = chosenOptionEnc?.replaceAll("@", "/") || null;
  const [filProds, setFilProds] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryId
    );

    if (chosenOption === "null") {
      const filteredProductsByFilter = filteredProducts.filter((product) => {
        const chosenFilter = product.chosenFilters.find(
          (filter) => filter.filterId === filId
        );
        return chosenFilter;
      });
      setFilProds(filteredProductsByFilter);
    } else {
      const filteredProductsByOption = filteredProducts.filter((product) => {
        const chosenFilter = product.chosenFilters.find(
          (filter) => filter.chosenOption === chosenOption
        );
        return chosenFilter && chosenFilter.chosenOption === chosenOption;
      });
      setFilProds(filteredProductsByOption);
    }
  }, [categoryId, filId, chosenOption, products]);

  return (
    <div className="mt-36 md:mt-52">
      <Fixed_Component categories={categories} filters={filters} />
      <h2 className="fs-1 py-5 font-bold text-center text-[#59A0B8]">
        {filName} {chosenOption === "null" ? null : `(${chosenOption})`}
      </h2>

      <Container fluid className="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {filProds?.map((item) => (
            <Col
              key={item._id}
              className="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="mx-3 my-4 relative product-card">
                <Link to={`/productDetails/${item._id}`}>
                  <img
                    src={
                      item.coverImage?.url?.replace(
                        "/product",
                        "/tr:ar-1-1,w-285.5/product"
                      ) || ""
                    }
                    alt={item.name}
                    className=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150 bg-[#0000000D] rounded-lg shadow-md product-image"
                  />
                </Link>
                <Link to={`/productDetails/${item._id}`}>
                  <button className="bg-white text-black px-4 py-2 font-semibold rounded-full add-to-cart-btn md:block hidden absolute top-[65%] left-[50%]">
                    Add to Cart
                  </button>
                  <button className="bg-white text-black px-4 py-2 font-semibold rounded-full add-to-cart-btn block md:hidden absolute top-[50%] left-[50%]">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/shopping-cart%20(3).png?updatedAt=1704101372255"
                      alt=""
                    />
                  </button>
                </Link>
                {item.offer?.isOffer ? (
                  <>
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/Union%208.png?updatedAt=1706280379202"
                      alt=""
                      className="absolute z-50 top-10 right-0 w-[5rem] md:w-24"
                    />
                    <p className="absolute hidden md:block z-50 top-12 right-3 font-semibold">
                      {item.offer.offerName}
                    </p>
                    <p className="absolute bg-[#0B428B] z-50 top-4 left-4 py-1 px-3 text-white font-semibold">
                      Multi Buy
                    </p>
                  </>
                ) : null}
                <div>
                  <Link to={`/productDetails/${item._id}`}>
                    <p
                      className="text-black font-semibold  py-2"
                      style={{ fontSize: 15 }}
                    >
                      {item.name}
                    </p>
                  </Link>
                </div>
                <p
                  className="text-[#59A0B8] font-semibold "
                  style={{ fontSize: 15 }}
                >
                  {item.basePrice}£
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="flex justify-center items-center mb-5">
        <div className="pagination">
          <div>
            <a href className="active">
              1
            </a>
            <a href>2</a>
            <a href>3</a>
            <a href>4</a>
            <a href>5</a>
            <a href className="active">
              «
            </a>
            <a href className="active_end">
              »
            </a>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default FilterProductPage;
