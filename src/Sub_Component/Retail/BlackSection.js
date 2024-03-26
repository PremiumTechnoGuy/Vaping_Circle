import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function BlackSection() {
  return (
    <div class="mt-12">
      <Container fluid className="bg-black md:block hidden p-2 text-white">
        <Row className="justify-content-md-center">
          <Col xs lg="3"></Col>
          <Col md="4 auto" className="">
            <p>Receive your orders within three hours in Derby</p>
          </Col>
          <Col xs lg="4" className="">
            <p style={{ marginLeft: 144 }}>
              Next-Day delivery available across the UK!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlackSection;
