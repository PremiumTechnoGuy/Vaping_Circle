import React from "react";
import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";

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
          <p class="fs-4 text-[#59A0B8] font-semibold line d-flex gap-3">
            <Link target="_blank" to="/fusion_vape">
              Fusion Vapes{" "}
            </Link>
            <a
              href="https://www.instagram.com/fusion.vapes/"
              target="empty"
              style={{ alignSelf: "center" }}
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556695323207"
              target="empty"
              style={{ alignSelf: "center" }}
            >
              <BsFacebook />
            </a>
          </p>
          <Link
            target="_blank"
            className="d-flex gap-3"
            to="https://maps.app.goo.gl/hZK9FHzb11LpbKLAA"
          >
            <p class="fs-5 text-black font-semibold">
              Address: 12 Northampton Street, LE1 1PA, Leicester, UK
            </p>
            <span style={{ alignSelf: "center" }}>
              <BiMapPin />
            </span>
          </Link>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Fusion Vapes is in the heart of Leicester, in the city centre.
            Walking distance from Leicester’s busy train station, as well as
            University of Leicester, and De Monfort University. Fusion Vapes
            offers the full range of vaping products including disposables,
            e-liquids, kits, and{" "}
            <span style={{ color: "blue" }}>
              <Link target="_blank" class="hover:text-black" to="/fusion_vape">
                ...see more
              </Link>
            </span>
            .
          </p>
        </div>

        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-[#59A0B8] font-semibold line d-flex gap-3">
            <Link target="_blank" to="/cloud_partner">
              Cloud 194{" "}
            </Link>
            <a
              href="https://www.instagram.com/cloud194.derby"
              target="empty"
              style={{ alignSelf: "center" }}
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556456590125"
              target="empty"
              style={{ alignSelf: "center" }}
            >
              <BsFacebook />
            </a>
          </p>
          <Link
            target="_blank"
            className="d-flex gap-3"
            to="https://maps.app.goo.gl/Nkc2QwhAr6R7bGWb9"
          >
            <p class="fs-5 text-black font-semibold">
              Address: 194 Mansfield Rd., Little Chester, Derby DE1 3RB.
            </p>
            <span style={{ alignSelf: "center" }}>
              <BiMapPin />
            </span>
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
                ...see more
              </Link>
            </span>
            .
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-[#59A0B8] font-semibold line">
            Ultimate Vapes Derby{" "}
          </p>
          <Link
            target="_blank"
            className="d-flex gap-3"
            to="https://maps.app.goo.gl/D8WrpN8GYNNurdqu8"
          >
            <p class="fs-5 text-black font-semibold">
              Address: 118 Uttoxeter Old Rd, DE1 1GE, Derby, UK
            </p>
            <span style={{ alignSelf: "center" }}>
              <BiMapPin />
            </span>
          </Link>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            Ultimate Vapes Derby offers the full range of vaping products
            including disposables, e-liquids, kits, and much more.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-[#59A0B8] font-semibold line">iBlaze Vapour </p>
          <Link
            target="_blank"
            className="d-flex gap-3"
            to="https://maps.app.goo.gl/aD8KTfP6YwdWeL558"
          >
            <p class="fs-5 text-black font-semibold">
              Address: 77 Stenson Rd, DE23 1JF, Sunny Hill, Derby, UK
            </p>
            <span style={{ alignSelf: "center" }}>
              <BiMapPin />
            </span>
          </Link>
        </div>
        <br></br>

        <Footer categories={categories} />
      </div>
      <Outlet />
    </div>
  );
};

export default Our_Partner;
