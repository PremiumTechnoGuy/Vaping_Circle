import "./static.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Fixed_Component from "../Fixed_Component";
import Footer from "../Footer";

function Term_Conditions() {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component />{" "}
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
          Terms & Conditions
        </h1>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-black font-semibold line">
            Eligibility and Age Verification
          </p>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            By accessing and purchasing from VapingCircle, customers affirm that
            they are over 18 years old. Age verification is mandatory before
            order fulfilment, except locations where physical ID verification is
            performed.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-black font-semibold line">
            Corporate Information
          </p>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            VapingCircle, a registered company, operates in accordance with the
            laws of England and Wales. Customers can contact us through phone,
            live chat (WhatsApp Page Link), or email.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Order Placement</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Order acceptance occurs via email, establishing a contractual
              agreement.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Unfulfillable orders prompt timely communication, citing reasons.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Customers are assigned an order number for reference.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Age Verification</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Strict adherence to age verification laws is maintained.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Electronic verification via reputable services is conducted.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Documentary proof may be requested if electronic verification
              fails.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Product Details</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Product images serve as illustrations; actual products may
              slightly vary.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Safety risks associated with vaping are outlined for customer
              awareness.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Changes and Delivery</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              Customers may request changes to orders.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ">
              The company reserves the right to make minor adjustments for legal
              compliance or safety.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Returns and Refunds</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Customers must notify VapingCircle of contract termination.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Products must be returned following specified procedures for a
              refund.
              <Link
                to="/return_policy"
                class="text-[#59a0b8] hover:text-[#59a0b8]"
              >
                {" "}
                See Returns Policy{" "}
              </Link>
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Refunds include the product price only; the delivery charge will
              not be refunded.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Products sealed for health protection or hygiene purposes are
              non-returnable once unsealed.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Pricing and Payment</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Product price, inclusive of VAT, is indicated during order
              placement.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Changes in VAT rates are adjusted accordingly.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Pricing errors addressed with customer confirmation.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">Liability</p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              VapingCircle is not liable for any unforeseeable loss or
              business-related losses.
            </li>
          </ul>
          <div class="  pt-3 pb-5">
            <p class="fs-4 text-black font-semibold line">
              {" "}
              Personal Information
            </p>
            <ul style={{ listStyle: "disc" }}>
              <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
                Use of personal information adheres to the privacy policy.
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default Term_Conditions;
