import React from "react";
import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";

const Fusion_Vape = ({ categories, filters }) => {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component categories={categories} filters={filters} />{" "}
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
          Our Partner <br />
          Fusion Vapes - Leicester Store
        </h1>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Discover a world of electronic cigarettes and vape liquids at our
            Leicester outlet, located at 12 Northampton St, Leicester LE1 1PA.
            At Fusion Vapes, we take pride in delivering unparalleled customer
            service to both new vapers and enthusiasts alike. Our knowledgeable
            team is dedicated to addressing any queries and resolving issues,
            ensuring a seamless and enjoyable experience for every customer.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-black font-semibold line">Fusion Vapes</p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            Step into our Leicester store and experience a welcoming atmosphere
            where you can comfortably explore the healthier alternative to
            smoking. We offer an extensive range of products, including
            high-quality vape juices, electronic cigarette starter kits, tanks,
            mods, and various accessories.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Store Locator:</p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            Visit our Store Locator to find the{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              <a
                href="https://maps.app.goo.gl/hZK9FHzb11LpbKLAA"
                target="empty"
              >
                Fusion Vapes
              </a>
            </span>{" "}
            outlet closest to you for more details.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Store Address:</p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            12 Northampton St,<br></br> Leicester LE1 1PA.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Store Contact:</p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            Phone: 07961500665
          </p>
          <p class="fs-4 text-black font-semibold line">Opening Times:</p>

          <ul style={{ listStyle: "disc", fontSize: "1.5rem" }}>
            <li class="py- ml-5">Monday: 10:00 am - 7:00 pm</li>
            <li class="py-1 ml-5">Tuesday: 10:00 am - 7:00 pm</li>
            <li class="py-1 ml-5">Wednesday: 10:00 am - 7:00 pm</li>
            <li class="py-1 ml-5">Thursday: 10:00 am - 7:00 pm</li>
            <li class="py-1 ml-5">Friday: 11:00 am - 9:00 pm</li>
            <li class="py-1 ml-5">Saturday: 11:00 am - 9:00 pm</li>
            <li class="py-1 ml-5">Sundays: 11:00 am - 5:00 pm</li>
          </ul>
        </div>
        <br></br>
        <Footer categories={categories} />
      </div>
      <Outlet />
    </div>
  );
};

export default Fusion_Vape;
