import "../flavor.css";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { data } from "./../../../data/Fdata.js";
import Fixed_Component from "../Fixed_Component.js";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import axios from "axios";
import { apiUrl } from "../../../data/env.js";

function FlavourPage() {
  const [open, setOpen] = useState(false);
  const [flavours, setFlavours] = useState([]);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/flavour`)
      .then((res) => setFlavours(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div class="mt-36 md:mt-64 mb-5">
        <Fixed_Component />{" "}
        <h1 class="fs-1 font-bold mb-5 text-center">Flavour</h1>
        <Container fluid class="flex justify-center items-center mb-5">
          {" "}
          <Row xs={2} md={3} class="gap-3 ">
            {flavours?.map((flavour) => (
              <Col
                id="content"
                key={flavour.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="item e6 relative flex justify-center items-center ">
                  <img
                    src={flavour.image}
                    alt=""
                    class="w-[21rem] h-[16rem] md:h-[19rem] object-cover"
                    style={{ borderRadius: "24px 24px 24px 24px" }}
                  />
                  <p class="absolute bottom-0 rounded-b-[24px] text-center w-full bg-[#ffffff40] py-3 md:px-[42px] text-[16px] md:text-[22px] tracking-wider font-semibold text-white">
                    {flavour.name}
                  </p>
                  <div className="text6 ">
                    <ul
                      class="flex flex-col"
                      style={{
                        boxShadow: "inset 0px -8px 20px 8px #dee2e67a",
                        borderRadius: "0px 0px 24px 24px",
                      }}
                    >
                      {flavour.subFlavours.map((subFlavour) => (
                        <>
                          <li
                            key={subFlavour.id}
                            class=" flex justify-around s items-center text-left border-b py-1"
                          >
                            <span>{subFlavour.name}</span>
                            <span class="bg-[#59a0b8] py-1 px-2 rounded-full text-white">
                              {subFlavour.productCountSubFlavour}
                            </span>
                          </li>{" "}
                        </>
                      ))}
                      <button
                        class="flex items-baseline py-2 justify-center"
                        onClick={showDrawer}
                      >
                        Show All &#62;&#62;
                      </button>{" "}
                    </ul>{" "}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Drawer
          title="Choose Your Flavour"
          class="p-0 font-semibold"
          onClose={onClose}
          open={open}
          style={{ padding: "0" }}
        >
          <ul class="p-0 ">
            <div class="mb-1 cursor-pointer">
              {flavours.map((flavour) => {
                <li key={flavour._id} className="flex border-t border-b justify-between items-center px-5 py-3 cursor-pointer">
                  <span className="fs-6 tracking-wide">{flavour.name}</span>
                  <span className="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                    {flavour.productCount}
                  </span>
                </li>
              })}
            </div>
          </ul>
        </Drawer>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default FlavourPage;