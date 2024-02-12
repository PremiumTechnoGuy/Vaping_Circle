import "./flavor.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import axios from "axios";
import { apiUrl } from "../../data/env.js";

function Flavor({ data }) {
  const [open, setOpen] = useState(false);
  const [flavours, setFlavours] = useState([]);
  const [index, setIndex] = useState(0);
  const showDrawer = (iter) => {
    setOpen(true);
    setIndex(iter);
  };

  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/flavour`)
      .then((res) => setFlavours(res.data.data.slice(0, 4)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h1 class="fs-1 font-bold my-5  mt-20 text-center">Flavour</h1>
        <Container fluid class="flex justify-center items-center ">
          {" "}
          <Row xs={2} md={4} class="gap-3 ">
            {flavours?.map((flavour, iter) => (
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
                        onClick={() => showDrawer(iter)}
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
      </div>

      <Drawer
        title="Choose Your Flavour"
        class="p-0 font-semibold"
        onClose={onClose}
        open={open}
        style={{ padding: "0" }}
      >
        <div class="p-0">
          {" "}
          <ul class="p-0 ">
            {flavours[index]?.subFlavours?.map(fl => {
              return <div key={fl._id} class="mb-1 cursor-pointer">
                <li class="flex border-b justify-between items-center px-5 py-3">
                  <span class="fs-6 tracking-wide">{fl.name}</span>
                  <span class="bg-[#59A0B8] rounded-full px-2 py-1 text-white fs-6">
                    {fl.productCountSubFlavour}
                  </span>
                </li>
              </div>
            })}


          </ul>
        </div>
      </Drawer>

      <div>
        <Link to="/flavour_page">
          <button
            class="button-view my-5 hover:bg-[#0B428B]"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px auto",
            }}
          >
            View All
            <IoIosArrowRoundForward class="ml-3 text-3xl" />
          </button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Flavor;
