import React from "react";
import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";

const Return_Policy = ({ categories, filters }) => {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component categories={categories} filters={filters} />{" "}
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
          Returns Policy
        </h1>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            At VapingCircle, we strive to ensure your satisfaction with our
            products. Our Returns Policy is designed to provide you with the
            flexibility and assistance you need.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-black font-semibold line">
            Eligibility for Returns
          </p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            You can return unopened and unwanted items within 14 days of
            receiving your purchase. To be eligible for returns:
          </p>
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Your item must be unopened, and unused, and must be in its
              original packaging.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              The item must be received at our address within 14 days of your
              receipt of the item.
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">
            Returning a Faulty Item
          </p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            If you believe your item is faulty within the 6-month warranty
            period, contact us via email, live chat, or phone. We may help
            identify and resolve the fault without returning the item. If
            returned and found faulty, we'll refund your postage cost (up to £5)
            and replace or refund the item.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">
            Incorrect Item Received
          </p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            If you receive an incorrect item, contact us with a picture of the
            incorrect item and your receipt. We aim to provide a resolution
            within 24 hours.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
          <p class="fs-4 text-black font-semibold line">
            How to Make a Return?
          </p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            We have designed a simple 3 step process to process your return.
          </p>
          <ul style={{ listStyle: "dotted" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Contact our team through one of our communication channels
              providing your order number, and payee details.
              <ul style={{ listStyle: "disc" }}>
                <li class="py-1 ml-5">Phone: +44 (0)744 853 8313</li>
                <li class="py-1 ml-5">Email: support@vapingcircle.co.uk</li>
                <li class="py-1 ml-5">Live Chat: (Link to WhatsApp Page)</li>
              </ul>
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Once you are issued with a returns ticket number, please pack your
              product using appropriate packaging, including the returns ticker
              number with the return, either written on a paper inside, or
              outside on the packaging.
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Post the package to the following address, ensuring the package
              reaches us within 14 days of item receipt.
              <ul style={{ listStyle: "disc" }}>
                <li class="py-1 ml-5">194 Mansfield Road</li>
                <li class="py-1 ml-5">194 Mansfield Road DE1</li>
                <li class="py-1 ml-5">3RB Derby </li>
                <li class="py-1 ml-5">UK</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5  pb-5">
          <p class="fs-4 text-black font-semibold line">Refund Process</p>
          <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
            Refunds are processed to the payment method used at checkout. Allow
            up to 5 working days (excluding bank holidays and weekends) for the
            funds to be credited back to your account. For further assistance or
            inquiries, feel free to reach out to us through the provided contact
            options. Your satisfaction is our priority at VapingCircle.
          </p>
        </div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
};

export default Return_Policy;
