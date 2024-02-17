import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div style={{ marginTop: 200 }}>
      <h1 class="fs-2 font-bold mb-3  mt-3 text-center">About Us</h1>
      <Container fluid>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            {" "}
            <p class="text-[#0B428B] font-semibold text-2xl md:text-3xl md:ml-[3rem]">
              Vaping Circle
            </p>{" "}
            <p
              class="text-[#575757] ps-5 py-3 hidden leading-8 tracking-wider  md:block "
              style={{ fontSize: 16 }}
            >
              Our Main Goal Is To Help Smokers Make The Switch To Vaping. Our
              Specialist Online Vape Shop Offers The Largest Selection Of
              Electronic Cigarettes, Hardware And E-Liquids In The UK. With Our
              Price Match Promise And Expert Advice, We Help Vapers In The UK
              And Worldwide. Find The Right Product At The Right Price, All In
              One Store. Our Catalogue Includes More Than 7,000 Products From
              Over 150 Leading Brands. The Range Includes E-Cigarettes From
              Popular Manufacturers SMOK, Geekvape, JUUL, And Elf Bar, As Well
              As Heated Tobacco Options With IQOS. Our E-Liquid Collection Is
              Unrivalled, With Over 3000 Flavours From The Best E-Cigarette
              Brands Including Dinner Lady, ELFLIQ And Bar Juice 5000.
            </p>{" "}
            <p class="text-[#575757] text-[15px] py-2 leading-6 tracking-wider block md:hidden ">
              Our main goal is to help smokers make the switch to vaping. our
              specialist online vape shop offers the largestselection of
              electronic cigarettes, hardware and e-liquids in the uk. with our
              price match promise and expert advice, We help vapers in the uk
              and worldwide. find the right product at the right price.
            </p>{" "}
          </Col>
          <Col>
            <img
              src="https://ik.imagekit.io/2nuimwatr/pexels-kikx-bulacan-16997537.png?updatedAt=1706280740015"
              alt=""
              class=" h-[19rem] md:h-[35rem] lg:h-[26rem] py-2 float-end right-0  transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
