import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";

const Privacy_Policy = ({ categories, filters }) => {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component categories={categories} filters={filters} />{" "}
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
          Privacy Policy
        </h1>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy_Policy;
