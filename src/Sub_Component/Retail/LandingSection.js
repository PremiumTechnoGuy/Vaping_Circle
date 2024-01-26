import React from "react";
import "./landingSection.css";
import { FaArrowRight } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <div class="mt-[195px]">
      <div class="px-5 text-center block md:hidden">
        <img
          class="w-[29rem] relative "
          src="https://ik.imagekit.io/p2slevyg1/Effortless%20Delivery,%20Express%20to%20Your%20Doorstep@3x.png?updatedAt=1705343775955"
          alt=""
          style={{ margin: "0 auto" }}
        />
        {/* <h1 class="text-3xl  py-2 font-bold text-[#1B94A0]">
          EFFORTLESS DELIVERY, EXPRESS TO YOUR DOORSTEP
        </h1> */}
        <p
          class="text-[#707070] py-3 text-base "
          style={{ letterSpacing: "1px" }}
        >
          Receive your orders within
          <span class="text-[#1B94A0]"> THREE HOURS</span> in Derby and
          Leicester. NEXT-DAY delivery available across the UK!
        </p>
        <Link to="/category_page">
          <button id="btn" class="mt-3 w-48">
            Shop Now
            <p
              class="absolute cursor-pointer "
              style={{ marginTop: -18, marginLeft: 118 }}
            >
              <FaArrowRight />
            </p>
          </button>
        </Link>
      </div>

      <div class="md:block hidden">
        <img
          class="relative w-screen h-[72vh] d-flex flex-grow"
          src="https://ik.imagekit.io/p2slevyg1/a50541f5-34e2-4511-90a2-5eb77dfa7bc2.jpg?updatedAt=1704570757435"
        />

        <div
          class=" p-4 lg-col-6 ml-3 sm-col-12 absolute"
          style={{ marginTop: -370 }}
        >
          <img
            class="w-72"
            style={{ marginTop: -20 }}
            src="https://ik.imagekit.io/p2slevyg1/Express%20to%20Your%20Doorstep.png?updatedAt=1704311809896"
          />
          <p class="text-[#888888]">Receive Your Orders Within</p>

          <img
            class="w-64"
            style={{ marginTop: 0 }}
            src="https://ik.imagekit.io/p2slevyg1/three%20HOURS.png?updatedAt=1704311874074"
          />
          <p class="text-[#888888] font-bold mt-2">In Derby And Liecester.</p>
          <p
            class="text-[#888888] leading-relaxed font-bold"
            style={{ marginTop: 0 }}
          >
            Receive Your Orders Within Three <br /> Hours In Derby And
            Liecester.
          </p>
          <Link to="/category_page">
            <button id="btn" class="mt-3 w-48">
              Shop Now
              <p
                class="absolute cursor-pointer "
                style={{ marginTop: -18, marginLeft: 118 }}
              >
                <FaArrowRight />
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
