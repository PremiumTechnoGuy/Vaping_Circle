import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function CategoryPageWhole() {
  return (
    <div class="mt-64">
      <h1 class="fs-2 font-bold mb-5 text-center">Categories</h1>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row xs={2} md={3}>
          <Col>
            <div id="content" class="m-2">
              <div className="item e6">
                <img
                  class="relative transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/pexels-zain-ali-17962166.png?updatedAt=1704225483978"
                  alt=""
                  width="330px"
                  height="270px"
                />
                <button
                  class="p-3 w-44 absolute bg-white font-bold shadow-md fs-6 rounded-md text-[#59A0B8]"
                  style={{ marginTop: -118, marginLeft: 68 }}
                >
                  E-LIQUIDS
                </button>
              </div>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2">
              <div className="item e6">
                <img
                  class="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/pexels-zain-ali-17962166.png?updatedAt=1704225483978"
                  alt=""
                  width="330px"
                  height="270px"
                />
                <button
                  class="p-3 w-44 absolute bg-white font-bold shadow-md fs-6 rounded-md text-[#59A0B8]"
                  style={{ marginTop: -118, marginLeft: 68 }}
                >
                  DISPOSABLE
                </button>
              </div>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2">
              <div className="item e6">
                <img
                  class="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/pexels-zain-ali-17962166.png?updatedAt=1704225483978"
                  alt=""
                  width="330px"
                  height="270px"
                />
                <button
                  class="p-3 w-44 absolute bg-white font-bold shadow-md fs-6 rounded-md text-[#59A0B8]"
                  style={{ marginTop: -118, marginLeft: 68 }}
                >
                  VAPE KITS
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        // style={{ display: "flex", justify: "center", align: "center" }}
      >
        <Row xs={2} md={3}>
          <Col>
            <div id="content" class="m-2">
              <div className="item e6">
                <img
                  class="relative transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/pexels-zain-ali-17962166.png?updatedAt=1704225483978"
                  alt=""
                  width="330px"
                  height="270px"
                />
                <button
                  class="p-3 w-44 absolute shadow-md bg-white font-bold shadow-md fs-6 rounded-md text-[#59A0B8]"
                  style={{ marginTop: -118, marginLeft: 68 }}
                >
                  REFILL & PODS
                </button>
              </div>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2">
              <div className="item e6">
                <img
                  class="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/pexels-zain-ali-17962166.png?updatedAt=1704225483978"
                  alt=""
                  width="330px"
                  height="270px"
                />
                <button
                  class="p-3 w-44 absolute bg-white font-bold shadow-md fs-6 rounded-md text-[#59A0B8]"
                  style={{ marginTop: -118, marginLeft: 68 }}
                >
                  MODS
                </button>
              </div>
            </div>
          </Col>

          <Col>
            <div id="content" class="m-2">
              <div className="item e6">
                <img
                  class="transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                  src="https://ik.imagekit.io/p2slevyg1/pexels-zain-ali-17962166.png?updatedAt=1704225483978"
                  alt=""
                  width="330px"
                  height="270px"
                />
                <button
                  class="p-3 w-44 absolute bg-white font-bold shadow-md  rounded-md text-[#59A0B8]"
                  style={{ marginTop: -118, marginLeft: 68 }}
                >
                  COIL
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryPageWhole;
