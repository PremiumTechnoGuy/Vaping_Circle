import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Fixed_Component from "../Fixed_Component";

const Age_varification = () => {
  return (
    <div>
      <div class="mt-[7rem] md:mt-[13rem] ">
        <Fixed_Component />{" "}
        <h1 class="fs-1 font-bold flex justify-center items-center text-white text-center gradident_bg h-[10rem] md:h-[15rem]">
        Age Verification
        </h1>
        <div class="mx-5 md:mx-5 mt-5 md:pt-5 md:px-5 ">
          <p class="fs-4 text-black font-semibold line">
            Why do Vaping Circle need to verify your age?
          </p>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            It is illegal to sell electronic cigarettes and any vapour product
            that contain or can be used to deliver nicotine to all individuals
            under the age of 18. Therefore anyone placing an order with Vaping
            Circle must be over the age of 18. By making a purchase with Vaping
            Circle, you are agreeing to allow us to confirm your age with
            1account age verification. The verification process will take place
            once an order has been successfully placed. A shadow payment will be
            taken from the card to ensure funds are available once you're
            verified. If you are unable to verify your age, the funds will be
            returned back.
          </p>
        </div>
        <div class="mx-5 md:mx-5 mt-5  md:px-5 ">
          <p class="fs-4 text-black font-semibold line">
            How do we verify your age?
          </p>
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            When creating an account or placing an order with Vaping Circle we
            will request your full name, billing address and date of birth. This
            must be entered as it would appear on your drivers license,
            electoral roll or used for a UK credit card. This information must
            be entered correctly as we will use it to verify your age before
            delivering any goods.
          </p>
          <br />
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            To securely verify your age Vaping Circle use 1Account services to
            verify your age. Where you have asked us to provide an age
            restricted product or service, you consent to allow us to share your
            information with, and collect information from, One Account Mobile
            Limited (1account) and third-party providers of identity data to
            1account. This consent is necessary for 1account to verify that you
            meet the minimum age and identity verification requirements as
            determined by relevant UK age restriction legislation.
          </p>
          <br />
          <p class="text-[#575757] tracking-wide leading-6 fs-5">
            You consent to allow 1account to retain relevant data for the
            purpose of future verification. All data processed by 1account is
            subject to appropriate security measures. Data retained by 1account
            is subject to periodic review to ensure it is not held for longer
            than necessary. You can find information about 1account and how they
            manage your personal data by visiting their website: 1account.net.
            If you are placing your first order with Vaping Circle, or if using
            an alternative email address to what is registered to your account,
            1Account Age Verification will display a pop-up modal at the Order
            confirmation stage. This will automatically check your age against
            the information provided to us at checkout. If 1Account are able to
            successfully verify your age, no further action is required. If
            these checks do fail you will be given the option to re-verify via
            the following methods:
          </p>
          <br />
          <ul style={{ listStyle: "disc" }}>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Mobile Phone Number
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Credit Card
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Electoral Roll
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Drivers License
            </li>
            <li class="text-[#575757] tracking-wide leading-6 fs-5 py-1 ml-5">
              Citizens Card
            </li>
          </ul>
          <p class="text-[#575757] tracking-wide leading-6 fs-5 pt-2 pb-5">
            Alternatively a photo of your passport or drivers license can be
            emailed to{" "}
            <Link
              to="support@vapingcircle.co.uk."
              class="text-[#59a0b8] hover:text-[#59a0b8]"
            >
              support@vapingcircle.co.uk.
            </Link>{" "}
            Once you have been successfully verified you will not be required to
            take this action again on future orders. For further information
            please review our
            <Link
              to="#"
              class="text-[#59a0b8] hover:text-[#59a0b8]"
            >
              {" "}
              privacy policy.
            </Link>
          </p>
        </div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
};

export default Age_varification;
