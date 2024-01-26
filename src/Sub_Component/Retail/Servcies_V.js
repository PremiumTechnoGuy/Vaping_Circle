import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Servcies_V() {
  return (
    <div>
      <Container
        fluid
        className="flex items-center justify-center bg-[#F5F5F5] mt-10"
      >
        <Row xs={2} md={4}>
          <Col className="p-5" style={{ color: "#0B428B" }}>
            <img
              src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202024-01-03%20at%207.21.44%20PM.jpeg?updatedAt=1706279916945"
              className="mx-auto hover:translate-x-6 transition delay-150 duration-300 ease-in-out "
              alt=""
            />
            <p className="font-bold  text-center">Free Delivery</p>
            <p className=" text-center">On Order over $20</p>
          </Col>
          <Col className="p-5" style={{ color: "#0B428B" }}>
            <img
              // class="hover:-translate-y-1 transition ease-in-out delay-150"
              src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202024-01-03%20at%207.21.45%20PM%20(1).jpeg?updatedAt=1706279917070"
              className="mx-auto hover:-translate-y-6 transition delay-150 duration-300 ease-in-out "
              alt=""
            />

            <p class="text-center font-bold  mt-2">Lowest Price guaranteed</p>
            <p className=" text-center">Always</p>
          </Col>
          <Col className="p-5" style={{ color: "#0B428B" }}>
            <img
              src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202024-01-03%20at%207.21.45%20PM.jpeg?updatedAt=1706279917090"
              className="mx-auto hover:translate-x-6 transition delay-150 duration-300 ease-in-out "
              alt=""
            />
            <p className="font-bold mt-2 text-center">Delivery & Dispatch</p>
            <p className=" text-center">7 Days a week</p>
          </Col>
          <Col className="p-5" style={{ color: "#0B428B" }}>
            <img
              // class="hover:-translate-y-1 transition ease-in-out delay-150"
              src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202024-01-03%20at%207.21.44%20PM%20(1).jpeg?updatedAt=1706279916938"
              className="mx-auto hover:-translate-y-6 transition delay-150 duration-300 ease-in-out "
              alt=""
            />
            <p className="font-bold mt-2 text-center">Excellent</p>
            <p className=" text-center">Trustipilot</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Servcies_V;
