import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FilterProductPage({ products, categories, filters }) {
  const { categoryId, filId, filName, chosenOption } = useParams();
  // console.log("catId", categoryId);
  // console.log("filId", filId);
  // console.log("filName", filName);
  // console.log("chosenOpt", chosenOption);

  // const filteredProducts = products?.filter(
  //   (prod) => prod.category === categoryId
  // );

  // console.log(filteredProducts);

  // const [filteredFilter] = filters?.filter((fil) => fil._id === filId);
  // console.log(filteredFilter);

  // filteredProducts.forEach((prod) => {
  //   prod.chosenFilters.forEach((fil) => {
  //     if (
  //       fil.filterId === filId &&
  //       filteredFilter.options.some((opt) => opt === chosenOption)
  //     )
  //       console.log(
  //         "prod filId match",
  //         prod.name,
  //         fil.name,
  //         fil.filterName,
  //         filName,
  //         chosenOption
  //       );
  //     else
  //       console.log(
  //         "prod filId not match",
  //         prod.name,
  //         fil.filterName,
  //         filName,
  //         chosenOption
  //       );
  //   });
  // });

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === categoryId
  );

  // Find the filter based on filId
  const filter = filters.find((filter) => filter._id === filId);

  // Filter products based on the chosen option for the filter
  const filteredProductsByOption = filteredProducts.filter((product) => {
    const chosenFilter = product.chosenFilters.find(
      (filter) => filter.filterId === filId
    );
    return chosenFilter && chosenFilter.chosenOption === chosenOption;
  });
  console.log(filteredProductsByOption);

  // const filteredCategory = categories?.filter(cat => cat._id === currentCategory);

  // console.log("allllllll", products);

  return <div>hello</div>;
}

export default FilterProductPage;
