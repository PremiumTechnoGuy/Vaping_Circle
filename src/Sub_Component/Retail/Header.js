import React from "react";
import "./Header.css";
import { FaWhatsapp } from "react-icons/fa";

function Header({ phoneNumber }) {
  const redirectToWhatsApp = () => {
    const whatsappURL = `https://web.whatsapp.com/${phoneNumber}`;
    window.location.href = whatsappURL;
  };

  return (
    <div
      className="container-fluid p-2 text-white bg-[#59A0B8]"
    // style={{ marginTop:-270 }}
    >
      <div className="row ">
        <div className="  col  lg:grid-cols-5  sm:grid-cols-12">
          <p class="flex justify-center md:justify-start items-center gap-4">
            <img
              src="https://ik.imagekit.io/p2slevyg1/email.png?updatedAt=1704041914556"
              height="20px"
              width="20px"
              alt=""
            />
            <span>
              <a href="mailto:info@vapingcircle.com" style={{ marginLeft: -8 }}>
                info@vapingcircle.com
              </a>
            </span>

            {/* <img
              src="https://ik.imagekit.io/p2slevyg1/phone.png?updatedAt=1704043116503"
              height="20px"
              width="20px"
              alt=""
            />
            <span class="" style={{ marginLeft: -8 }}>
              +44 7448 538313
            </span> */}

            <FaWhatsapp
              class="text-white text-2xl cursor-pointer"
              onClick={() => window.location.href = 'https://wa.me/+447939278187'}
            />
            <span onClick={() => window.location.href = 'https://wa.me/+447939278187'} style={{ marginLeft: -8 }}>
              +447939278187
            </span>
          </p>
        </div>
        <div className="md:block hidden col  lg:grid-cols-6">
          <div class="main2">
            <marquee
              class="marq"
              direction="down"
              behavior="scroll"
              scrollamount="2"
              loop=""
            >
              <p class="geek1">
                Receive your orders within three hours in Derby and Liecester
              </p>
              <br />
              <p class="geek2">Next-Day delivery available across the UK!</p>
            </marquee>
          </div>
          {/* <div id="scroll-container">
            <div id="scroll-text">
              {" "}
              <p class="my-2">
                {" "}
                Receive your orders within three hours in Derby and Liecester
              </p>{" "}
              <p class="my-2"></p>
              <p class="my-2"> Next-Day delivery available across the UK!</p>
              <p class="my-2"></p>
              <br />
              <br />
            </div>
          </div> */}
        </div>

        <div class=" hidden lg:text-sm  md:text-xs col  lg:grid-cols-4">
          <ul class="d-flex justify-end items-center gap-3 ">
            <li>About Us</li>
            <li>Customer Service</li>
            <li>Contact Us</li>
            <li>Reward Program</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
