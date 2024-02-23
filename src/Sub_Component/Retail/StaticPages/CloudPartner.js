import React from "react";
import Footer from "../Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "../Fixed_Component";

const Cloud_Partner = () => {
    return (
        <div>
            <div class="mt-[7rem] md:mt-[13rem] ">
                <Fixed_Component />{" "}
                <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
                    Our Partner <br />Cloud 194 - Derby Store
                </h1>
                <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
                    <p class="text-[#575757] tracking-wide leading-6 fs-5">
                        Indulge in the world of electronic cigarettes and an extensive array of vape liquids at our Derby outlet, Cloud 194.
                        Discover a haven for both novice vapers and seasoned enthusiasts. Our committed team is dedicated to
                        providing top-notch customer service, ensuring that all your inquiries and concerns are met with expertise and care.</p>
                </div>
                <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
                    <p class="fs-4 text-black font-semibold line">
                        Cloud 194
                    </p>
                    <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
                        Step into our Derby store and immerse yourself in a relaxed environment where
                        you can explore the diverse range of products,
                        including premium vape juices,
                        electronic cigarette starter kits, tanks, mods, and an assortment of accessories.
                    </p>

                </div>
                <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
                    <p class="fs-4 text-black font-semibold line">
                        Store Locator:
                    </p>
                    <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">

                        Visit our Store Locator to find the <span style={{ color: 'blue', fontWeight: 'bold' }}><a href="https://maps.app.goo.gl/6KM53H3q3c9oaELcA" target="empty">Cloud 194</a></span>  outlet closest to you for more details.

                    </p>
                </div>
                <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
                    <p class="fs-4 text-black font-semibold line">
                        Store Address:
                    </p>
                    <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
                    194 Mansfield Rd., Little Chester,<br></br> Derby DE1 3RB.
                    </p>
                </div>
                <div class="mx-5 md:mx-5 mt-5  md:px-5  ">
                    <p class="fs-4 text-black font-semibold line">
                        Store Contact:
                    </p>
                    <p class="text-[#575757] tracking-wide leading-6 mb-2 fs-5">
                        Phone: 07540135753
                    </p>
                    <p class="fs-4 text-black font-semibold line">
                        Opening Times:
                    </p>


                    <ul style={{ listStyle: "disc", fontSize: '1.5rem' }}>
                        <li class="py- ml-5">Monday: 10:00 am - 7:00 pm</li>
                        <li class="py-1 ml-5">Tuesday: 10:00 am - 7:00 pm</li>
                        <li class="py-1 ml-5">Wednesday: 10:00 am - 7:00 pm</li>
                        <li class="py-1 ml-5">Thursday: 10:00 am - 7:00 pm</li>
                        <li class="py-1 ml-5">Friday: 10:00 am - 7:00 pm</li>
                        <li class="py-1 ml-5">Saturday: 10:00 am - 7:00 pm</li>
                        <li class="py-1 ml-5">Sundays: 11:00 am - 7:00 pm</li>

                    </ul>



                </div><br></br>

                <Footer />
            </div>
            <Outlet />
        </div>

    );
};

export default Cloud_Partner;
