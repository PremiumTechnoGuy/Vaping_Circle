import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";
import Footer from "../Footer";
import PaginationComp from "../Product/PaginationComp";

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

      <PaginationComp filteredProducts={filProds || []} />

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default FilterProductPage;
