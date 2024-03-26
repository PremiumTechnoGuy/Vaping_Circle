import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductServices() {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ display: "flex", justify: "center", align: "center" }}
      >
        <Row xs={1} md={3}>
          <Col className="p-5 flex justify-start items-center">
            <img
              src="https://ik.imagekit.io/p2slevyg1/delivered.png?updatedAt=1704718932359"
              className=" m-0 md:mx-auto w-24  h-24 p-2 rounded-full bg-[#F5F5F5]"
              alt=""
            />
            <span class=" px-4 py-4 ">
              <p className="font-bold ">Free Delivery</p>
              <p class="text-[11px]">On Order over £20</p>
            </span>
          </Col>
          <Col className="p-5 flex justify-start items-center">
            <img
              src="https://ik.imagekit.io/p2slevyg1/Group%20207.png?updatedAt=1704719455228"
              className="m-0 md:mx-auto  w-24 h-24  p-1 rounded-full bg-[#F5F5F5]"
              alt=""
            />
            <span class="py-4 px-4">
              <p class="text-[11px]">As a member, you earn</p>
              <p className="font-bold ">7% Cash Back</p>
            </span>
          </Col>
          <Col className="p-5 flex justify-start items-center">
            <img
              src="https://ik.imagekit.io/2nuimwatr/WhatsApp_Image_2024-01-08_at_5.30.34_PM-removebg-preview.png?updatedAt=1705676439122"
              alt=""
              className="m-0 md:mx-auto w-20 h-20 p-2 rounded-full bg-[#F5F5F5]"
            />
            <span class="py-4 px-4">
              <p className="font-bold px-1">Get it Tomorrow*</p>
              <p className="text-[11px] px-1">Order in under 2 hours.</p>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductServices;
