import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fixed_Component from "./Fixed_Component";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFormatListNumbered } from "react-icons/md";
import { MdOutlinePinDrop } from "react-icons/md";

// import { RiDeleteBin5Line } from "react-icons/ri";

function MyOrder({ categories, filters }) {
  return (
    <div class="mt-36 md:mt-52 ">
      <Fixed_Component categories={categories} filters={filters} />
      <h1 class="fs-2 font-bold py-5 text-center">My Orders</h1>
      <Container>
        <hr class="mx-4 mb-2" />
        <div className="md:d-flex">
          <h2 class="fs-6 mb-2 font-bold py-2 pl-5 text-left d-flex gap-2">
            <span>
              <MdFormatListNumbered />
            </span>
            <span>Order No: 65e76c4773e4b98a8042d065</span>
          </h2>
          <h2 class="fs-6 mb-2 font-bold py-2 pl-5 text-left d-flex gap-2">
            <span>
              <TbTruckDelivery />
            </span>{" "}
            <span>Status: 'Pending'</span>
          </h2>
          <h2 class="fs-6 mb-2 font-bold py-2 pl-5 text-left d-flex gap-2">
            <span>
              <MdOutlinePinDrop />
            </span>{" "}
            <span>Date: 28 Jan (Express Delivery - Same Day)</span>
          </h2>
        </div>
        <Row class="shadow-md mb-3">
          <Col
            class="flex justify-start items-start"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {" "}
            <span>
              <img
                src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                alt=""
                style={{ maxWidth: "none" }}
                class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
              />{" "}
            </span>
            <span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div class="px-2 py-3 mb-5">
                  <p class="text-[#000000] font-bold text-sm">
                    ELFA Pod Kit By Elf Bar
                  </p>
                  <p class="text-[#000000] font-bold text-sm pb-2">
                    Aurora Purple
                  </p>

                  <p class="pb-2"> Varaint: 89</p>
                  <p class=""> Category: Eliquids</p>
                  <div class="flex justify-between items-center block md:hidden">
                    {" "}
                    <span>
                      <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                        £7.95
                      </p>
                    </span>{" "}
                    <div
                      class="flex  justify-between items-center"
                      style={{ display: "flex" }}
                    >
                      <span class="">Quantity : 1</span>
                      <span class="">
                        {" "}
                        {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="flex hidden md:block px-2 justify-between items-center"
                  style={{ display: "flex", marginTop: -54 }}
                >
                  <span class="hidden md:block">Quantity : 1</span>
                  <span class="hidden md:block">
                    {" "}
                    {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                  </span>
                </div>
              </div>
            </span>
            <span>
              <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                £7.95
              </div>
            </span>
          </Col>
          <Col
            class="flex justify-start items-start "
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {" "}
            <span>
              <img
                src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                alt=""
                style={{ maxWidth: "none" }}
                class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
              />{" "}
            </span>
            <span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div class="px-2 py-3 mb-5">
                  <p class="text-[#000000] font-bold text-sm">
                    ELFA Pod Kit By Elf Bar
                  </p>
                  <p class="text-[#000000] font-bold text-sm pb-2">
                    Aurora Purple
                  </p>

                  <p class="pb-2"> Varaint: 89</p>
                  <p class=""> Category: Eliquids</p>
                  <div class="flex justify-between items-center block md:hidden">
                    {" "}
                    <span>
                      <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                        £7.95
                      </p>
                    </span>{" "}
                    <div
                      class="flex  justify-between items-center"
                      style={{ display: "flex" }}
                    >
                      <span class="">Quantity : 1</span>
                      <span class="">
                        {" "}
                        {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="flex hidden md:block px-2 justify-between items-center"
                  style={{ display: "flex", marginTop: -54 }}
                >
                  <span class="hidden md:block">Quantity : 1</span>
                  <span class="hidden md:block">
                    {" "}
                    {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                  </span>
                </div>
              </div>
            </span>
            <span>
              <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                £7.95
              </div>
            </span>
          </Col>
          <Col
            class="flex justify-start items-start "
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {" "}
            <span>
              <img
                src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                alt=""
                style={{ maxWidth: "none" }}
                class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
              />{" "}
            </span>
            <span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div class="px-2 py-3 mb-5">
                  <p class="text-[#000000] font-bold text-sm">
                    ELFA Pod Kit By Elf Bar
                  </p>
                  <p class="text-[#000000] font-bold text-sm pb-2">
                    Aurora Purple
                  </p>

                  <p class="pb-2"> Varaint: 89</p>
                  <p class=""> Category: Eliquids</p>
                  <div class="flex justify-between items-center block md:hidden">
                    {" "}
                    <span>
                      <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                        £7.95
                      </p>
                    </span>{" "}
                    <div
                      class="flex  justify-between items-center"
                      style={{ display: "flex" }}
                    >
                      <span class="">Quantity : 1</span>
                      <span class="">
                        {" "}
                        {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="flex hidden md:block px-2 justify-between items-center"
                  style={{ display: "flex", marginTop: -54 }}
                >
                  <span class="hidden md:block">Quantity : 1</span>
                  <span class="hidden md:block">
                    {" "}
                    {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                  </span>
                </div>
              </div>
            </span>
            <span>
              <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                £7.95
              </div>
            </span>
          </Col>
        </Row>
        <hr class="mx-4 mb-4" />
        <Row class="shadow-md mb-3">
          <Col
            class="flex justify-start items-start "
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {" "}
            <span>
              <img
                src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                alt=""
                style={{ maxWidth: "none" }}
                class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
              />{" "}
            </span>
            <span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div class="px-2 py-3 mb-5">
                  <p class="text-[#000000] font-bold text-sm">
                    ELFA Pod Kit By Elf Bar
                  </p>
                  <p class="text-[#000000] font-bold text-sm pb-2">
                    Aurora Purple
                  </p>

                  <p class="pb-2"> Varaint: 89</p>
                  <p class=""> Category: Eliquids</p>
                  <div class="flex justify-between items-center block md:hidden">
                    {" "}
                    <span>
                      <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                        £7.95
                      </p>
                    </span>{" "}
                    <div
                      class="flex  justify-between items-center"
                      style={{ display: "flex" }}
                    >
                      <span class="">Quantity : 1</span>
                      <span class="">
                        {" "}
                        {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="flex hidden md:block px-2 justify-between items-center"
                  style={{ display: "flex", marginTop: -54 }}
                >
                  <span class="hidden md:block">Quantity : 1</span>
                  <span class="hidden md:block">
                    {" "}
                    {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                  </span>
                </div>
              </div>
            </span>
            <span>
              <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                £7.95
              </div>
            </span>
          </Col>
        </Row>
        <Row class="shadow-md mb-3">
          <Col
            class="flex justify-start items-start "
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {" "}
            <span>
              <img
                src="https://ik.imagekit.io/2nuimwatr/ELFA-Pod-Kit-by-Elf-Bar-Navy-Blue.png?updatedAt=1704572972475"
                alt=""
                style={{ maxWidth: "none" }}
                class="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
              />{" "}
            </span>
            <span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div class="px-2 py-3 mb-5">
                  <p class="text-[#000000] font-bold text-sm">
                    ELFA Pod Kit By Elf Bar
                  </p>
                  <p class="text-[#000000] font-bold text-sm pb-2">
                    Aurora Purple
                  </p>

                  <p class="pb-2"> Varaint: 89</p>
                  <p class=""> Category: Eliquids</p>
                  <div class="flex justify-between items-center block md:hidden">
                    {" "}
                    <span>
                      <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                        £7.95
                      </p>
                    </span>{" "}
                    <div
                      class="flex  justify-between items-center"
                      style={{ display: "flex" }}
                    >
                      <span class="">Quantity : 1</span>
                      <span class="">
                        {" "}
                        {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="flex hidden md:block px-2 justify-between items-center"
                  style={{ display: "flex", marginTop: -54 }}
                >
                  <span class="hidden md:block">Quantity : 1</span>
                  <span class="hidden md:block">
                    {" "}
                    {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                  </span>
                </div>
              </div>
            </span>
            <span>
              <div class=" py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                £7.95
              </div>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyOrder;
