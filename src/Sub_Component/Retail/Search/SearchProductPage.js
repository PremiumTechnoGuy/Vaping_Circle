import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";
import Footer from "../Footer";
import PaginationComp from "../Product/PaginationComp";

function SearchProductPage({ products, categories, filters }) {
  const { query } = useParams();
  const srchQuery = query.replaceAll("@", "/").toLowerCase();
  const [filProds, setFilProds] = useState([]);

  useEffect(() => {
    // Search Click Func
    const searchTerms = srchQuery.split(" ").map((term) => term.toLowerCase());

    const searchedProds = products?.filter((p) =>
      searchTerms.some((term) => p.name.toLowerCase().includes(term))
    );
    setFilProds(searchedProds);
  }, [srchQuery, products]);

  return (
    <div className="mt-36 md:mt-52">
      <Fixed_Component categories={categories} filters={filters} />
      <h2 className="fs-1 py-5 font-bold text-center text-[#59A0B8]">
        {query}
      </h2>

      <PaginationComp filteredProducts={filProds || []} />

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default SearchProductPage;
