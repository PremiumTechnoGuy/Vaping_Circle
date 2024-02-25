import React from "react";
import Fixed_Component from "../Fixed_Component";
import Footer from "../Footer";

const Compliance = ({ categories, filters }) => {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component categories={categories} filters={filters} />{" "}
        <h1 class="md:fs-1 fs-3 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
          Compliance - Tobacco Products Directive (TPD)
        </h1>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5 pt-1">
            VapingCircle, and all products on its platform fully comply with
            TPD. Some of the aspects of TPD that relate directly to vaping are
            outd below.
          </p>
          <p class="fs-4 text-black font-semibold  pt-1">
            Maximum Nicotine Strength:{" "}
            <span class="text-[#575757] font-normal tracking-wide leading-6 mb-2 fs-5">
              The TPD imposed limits on the nicotine strength of e-liquids at
              20mg/ml.
            </span>
          </p>

          <p class="fs-4 text-black font-semibold  pt-1">
            Tank Capacity:
            <span class="text-[#575757] tracking-wide leading-6 mb-2 fs-5 font-normal">
              It specifies maximum tank capacity for refillable tanks, which is
              capped at 2ml.
            </span>
          </p>

          <p class="fs-4 text-black font-semibold  pt-1">
            Bottle Size:
            <span class="text-[#575757] tracking-wide leading-6 mb-2 fs-5 font-normal">
              Maximum volume of e-liquid with nicotine is now 10ml.
            </span>
          </p>

          <p class="fs-4 text-black font-semibold mb-5 pt-1">
            Packaging and Labelling:{" "}
            <span class="text-[#575757] tracking-wide leading-6 mb-2 fs-5 font-normal">
              Requirements for packaging and labelling, including warning labels
              for nicotine, and its addictive nature, were established. All
              products sold on VapingCircle are carefully chosen to ensure they
              are appropriately packed and labelled.
            </span>
          </p>
        </div>
        <Footer categories={categories} />
      </div>
    </div>
  );
};

export default Compliance;
