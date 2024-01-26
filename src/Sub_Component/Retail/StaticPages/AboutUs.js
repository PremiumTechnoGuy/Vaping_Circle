import "../flavor.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Fixed_Component from "../Fixed_Component";
import Footer from "../Footer";

function AboutUs() {
  return (
    <div>
      <div class="mt-36 md:mt-[12rem] mb-5">
        <Fixed_Component />{" "}
        <img
          src="https://ik.imagekit.io/2nuimwatr/Rectangle%201286.png?updatedAt=1706133377509"
          alt=""
          class="relative md:block hidden"
        />
        <div class=" flex  justify-center items-center">
          <h1 class="fs-1 font-bold  text-white text-center absolute h-[10rem] md:h-[15rem] top-[2rem] md:top-[9rem] ">
            About Us
          </h1>
        </div>
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem] block md:hidden"></h1>
        <div>
          <Container fluid class="hidden md:block">
            {" "}
            <Row>
              <Col>
                <div class="grid grid-rows-2 p-5 grid-flow-col gap-3">
                  <div class="col-span-2  ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/2310-VS-Website-Pages-Disposable-Alternatives%201.png?updatedAt=1706216934828"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "5px 5px 5px 5px",
                      }}
                    />
                  </div>
                  <div class="col-span-2  ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/geek%20vape%20kits%201.png?updatedAt=1706216934581"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                  <div class="row-span-2 col-span-2 ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/Flavorless_New%201.png?updatedAt=1706216935409"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                {" "}
                <div class=" mt-5  ">
                  <p class="fs-2 my-3  text-[#59A0B8] font-semibold line">
                    Welcome!
                  </p>
                  <p class="fs-3 my-3  text-black font-semibold ">Mission</p>
                  <p class=" my-2 pr-5 mr-5 text-[#575757] tracking-wider leading-10 fs-5 mb-4">
                    At VapingCircle, our mission revolves around empowering
                    individuals to break free from smoking through the adoption
                    of vaping. We understand that transitioning from smoking to
                    vaping is a personal journey, and we are dedicated to making
                    this shift accessible, informative, and successful for
                    everyone.
                  </p>
                  <button class="bg-[#59A0B8] py-2 px-4 rounded-md font-semibold  text-white text-xl">
                    Contact now
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <div class="mx-5 md:mx-5 mt-5  md:px-5   block md:hidden">
            <p class="fs-2   text-[#59A0B8] font-semibold line">Welcome!</p>
            <p class="fs-3   text-black font-semibold ">Mission</p>
            <p class="    text-[#575757] tracking-wider leading-6 mb-3 fs-5 ">
              At VapingCircle, our mission revolves around empowering
              individuals to break free from smoking through the adoption of
              vaping. We understand that transitioning from smoking to vaping is
              a personal journey, and we are dedicated to making this shift
              accessible, informative, and successful for everyone.
            </p>
            <button class="bg-[#59A0B8] py-2 px-4 rounded-md font-semibold  text-white text-xl">
              Contact now
            </button>
          </div>
          <div class="mx-5 md:mx-5 mt-5  md:px-5   block md:hidden">
            <div class="grid grid-rows-2  grid-flow-col gap-3">
              <div class="col-span-2  ...">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/2310-VS-Website-Pages-Disposable-Alternatives%201.png?updatedAt=1706216934828"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />
              </div>
              <div class="col-span-2  ...">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/geek%20vape%20kits%201.png?updatedAt=1706216934581"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />
              </div>
              <div class="row-span-2 col-span-2 ...">
                <img
                  src="https://ik.imagekit.io/2nuimwatr/Flavorless_New%201.png?updatedAt=1706216935409"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />
              </div>
            </div>
          </div>
          <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
            <p class="fs-4 text-black font-semibold line">Our Approach</p>
            <p class="text-[#575757] tracking-wide leading-6 fs-5">
              Whether you're a seasoned vaper or just starting your journey to
              quit smoking, VapingCircle is here for you. We provide a carefully
              curated range of vaping products, from beginner-friendly starter
              kits to advanced mods and a diverse selection of e-liquids.
            </p>
          </div>
          <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
            <p class="fs-4 text-black font-semibold line">
              In-Store Experience
            </p>
            <p class="text-[#575757] tracking-wide leading-6 fs-5">
              Visit our partner stores where our knowledgeable staff are ready
              to assist you. We prioritize creating a comfortable and welcoming
              environment for customers at all stages of their quitting journey.
              Your success in quitting smoking is our ultimate goal, and we're
              here to guide you through the process.
            </p>
          </div>
          <Container fluid class="hidden md:block">
            {" "}
            <Row>
              <Col>
                <div class="grid grid-rows-2 p-5 grid-flow-col gap-3">
                  <div class="row-span-2 col-span-2 ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/Rectangle%201285.png?updatedAt=1706216935138"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                  <div class="col-span-2  ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/romain-b-PYOgYPnNYO0-unsplash%201.png?updatedAt=1706216933982"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                  <div class="col-span-2  ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/cdc-3_OGgbdPIdA-unsplash%201.png?updatedAt=1706216934569"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                {" "}
                <div class=" mt-5  ">
                  <p class="fs-4 my-2 mt-5 text-[#59A0B8] font-semibold line">
                    Convenient Delivery Service
                  </p>

                  <p class=" my-2 mt-5 pr-5 mr-5 text-[#575757] tracking-wider leading-10 fs-5 mb-4">
                    For those who prefer the convenience of online shopping,
                    VapingCircle offers a reliable delivery service. Choose from
                    our wide selection of products, place your order online, and
                    have it delivered to your doorstep. We want to make the
                    transition to vaping as easy and accessible as possible, no
                    matter where you are. We promise to deliver in 2 Hours in
                    Derby, and Leicester, and Next-Day UK wide.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div class="mx-5 md:mx-5 mt-5  md:px-5 md:hidden block ">
            <p class="fs-4  mt-5 text-[#59A0B8] font-semibold line">
              Convenient Delivery Service
            </p>

            <p class=" mt-5 text-[#575757] tracking-wider leading-6 fs-5 mb-4">
              For those who prefer the convenience of online shopping,
              VapingCircle offers a reliable delivery service. Choose from our
              wide selection of products, place your order online, and have it
              delivered to your doorstep. We want to make the transition to
              vaping as easy and accessible as possible, no matter where you
              are. We promise to deliver in 2 Hours in Derby, and Leicester, and
              Next-Day UK wide.
            </p>
          </div>
          <div class="mx-5 md:mx-5 mt-5  md:px-5 md:hidden block ">
          <div class="grid grid-rows-2  grid-flow-col gap-3">
                  <div class="row-span-2 col-span-2 ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/Rectangle%201285.png?updatedAt=1706216935138"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                  <div class="col-span-2  ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/romain-b-PYOgYPnNYO0-unsplash%201.png?updatedAt=1706216933982"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                  <div class="col-span-2  ...">
                    <img
                      src="https://ik.imagekit.io/2nuimwatr/cdc-3_OGgbdPIdA-unsplash%201.png?updatedAt=1706216934569"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "18px",
                      }}
                    />
                  </div>
                </div>
          </div>

          <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
            <p class="fs-4 text-black font-semibold line">
              Empowering Your Quitting Journey
            </p>
            <p class="text-[#575757] tracking-wide leading-6 fs-5">
              At VapingCircle, we believe in providing the best products, and
              service to ensure you have access to the most up-to date vaping
              solutions.
            </p>
          </div>
          <div class="mx-5 md:mx-5 mt-5  md:px-5 flex justify-center items-center">
            <p class="fs-4 text-black text-center tracking-wide font-semibold line2">
              Participating Stores
            </p>
          </div>
          <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
            <p class="fs-4 text-[#59A0B8] font-semibold line">Fusion Vapes</p>
            <p class="fs-5 text-black font-semibold ">
              <Link
                target="_blank"
                class="hover:text-black"
                to="https://www.google.com/maps/place/Fusion+Vapes/@52.4103245,-2.6732576,410975m/data=!3m1!1e3!4m7!3m6!1s0x4877610000fa9725:0x6d0fa1c5baf1d364!8m2!3d52.6329276!4d-1.1277059!15sCgxGdXNpb24gVmFwZXOSAQ92YXBvcml6ZXJfc3RvcmXgAQA!16s%2Fg%2F11vrltvhk5?entry=tts"
              >
                Address: 12 Northampton Street, LE1 1PA, Leicester, UK
              </Link>
            </p>
            <p class="text-[#575757] tracking-wide leading-6 fs-5">
              Fusion Vapes is in the heart of Leicester, in the city centre.
              Walking distance from Leicester’s busy train station, as well as
              University of Leicester, and De Monfort University. Fusion Vapes
              offers the full range of vaping products including disposables,
              e-liquids, kits, and much more.
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
              Sparkuff Vapes is located on the busy Mansfield Road. Sparkuff
              Vapes offers the full range of vaping products including
              disposables, e-liquids, kits, and much more.
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
        </div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default AboutUs;
