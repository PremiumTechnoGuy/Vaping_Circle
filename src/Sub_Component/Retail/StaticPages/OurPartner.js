import React from "react";
import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";

const Our_Partner = ({ categories, filters }) => {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component categories={categories} filters={filters} />
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
          Our Partners
        </h1>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 flex justify-center items-center"></div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <Link target="_blank" class="hover:text-black" to="/fusion_vape">
            <p class="fs-4 text-[#59A0B8] font-semibold line">Fusion Vapes</p>
            <p class="fs-5 text-black font-semibold ">
              Address: 12 Northampton Street, LE1 1PA, Leicester, UK
            </p>
          </Link>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Fusion Vapes is in the heart of Leicester, in the city centre.
            Walking distance from Leicester’s busy train station, as well as
            University of Leicester, and De Monfort University. Fusion Vapes
            offers the full range of vaping products including disposables,
            e-liquids, kits, and{" "}
            <span style={{ color: "blue" }}>
              <Link target="_blank" class="hover:text-black" to="/fusion_vape">
                much more
              </Link>
            </span>
            .
          </p>
        </div>

        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <Link target="_blank" class="hover:text-black" to="/cloud_partner">
            <p class="fs-4 text-[#59A0B8] font-semibold line">Cloud 194</p>
            <p class="fs-5 text-black font-semibold ">
              Address: 194 Mansfield Rd., Little Chester, Derby DE1 3RB.
            </p>
          </Link>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Step into our Derby store and immerse yourself in a relaxed
            environment where you can explore the diverse range of products,
            including premium vape juices, electronic cigarette starter kits,
            tanks, mods, and an assortment of accessories. and{" "}
            <span style={{ color: "blue" }}>
              <Link
                target="_blank"
                class="hover:text-black"
                to="/cloud_partner"
              >
                much more
              </Link>
            </span>
            .
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4  font-semibold line text-[#59A0B8]">
            Sparkuff Vapes <span class="text-[#59A0B8]">(Comming Soon)</span>
          </p>
          <p class="fs-5 text-black font-semibold ">
            Address: 194 Mansfield Rd., DE1 3RB, Derby, UK
          </p>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Sparkuff Vapes is located on the busy Mansfield Road. Sparkuff Vapes
            offers the full range of vaping products including disposables,
            e-liquids, kits, and much more.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-[#59A0B8] font-semibold line">
            Ultimate Vapes Derby{" "}
          </p>
          <p class="fs-5 text-black font-semibold ">
            <Link
              target="_blank"
              class="hover:text-black"
              to="https://www.google.com/maps/place/Ultimate+Vapes+Derby/@52.9227612,-1.4940785,563m/data=!3m1!1e3!4m6!3m5!1s0x4879f10b2aacef23:0x8edebf937141443e!8m2!3d52.9227612!4d-1.4940785!16s%2Fg%2F11rvh0gjqv?entry=ttu"
            >
              Address: 118 Uttoxeter Old Rd, DE1 1GE, Derby, UK
            </Link>
          </p>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Ultimate Vapes Derby offers the full range of vaping products
            including disposables, e-liquids, kits, and much more.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-[#59A0B8] font-semibold line">iBlaze Vapour </p>
          <p class="fs-5 text-black font-semibold mb-5">
            <Link
              target="_blank"
              class="hover:text-black"
              to="https://www.google.com/maps/place/iBlaze+Vapour/@52.9001199,-1.492426,794m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4879f0d08b88ced1:0xc845a0961e926e6b!8m2!3d52.9001167!4d-1.4898457!16s%2Fg%2F11b86x_tg2?entry=tts"
            >
              Address: 77 Stenson Rd, DE23 1JF, Sunny Hill, Derby, UK
            </Link>
          </p>
        </div>
        <br></br>

        <Footer />
      </div>
      <Outlet />
    </div>
  );
};

export default Our_Partner;
