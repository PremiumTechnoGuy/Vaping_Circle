// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "./guide.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function Guides() {
//   return (
//     <div style={{ marginTop: 60 }} class="bg-[#F5F5F5]">
//       <h1 class="fs-1 font-bold px-4 pt-4">Vaping Guides</h1>
//       <Container
//         fluid
//         className="flex items-center justify-center "
//         style={{ marginTop: 0 }}
//       >
//         <Row className=" md:grid-cols-4 p-4 md:p-5">
//           <Col>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM%20(2).jpeg?updatedAt=1704457507396"
//               />
//               <Card.Body>
//                 <Card.Title class="font-bold" style={{ fontSize: 12 }}>
//                   INSTAFLOW 4500 DISPOSABLE VAPE
//                 </Card.Title>
//                 <Card.Text></Card.Text>
//                 <p
//                   class="underline underline-offset-[5px] font-bold btn"
//                   style={{ fontSize: 12 }}
//                 >
//                   Read more
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM%20(1).jpeg?updatedAt=1704458009122"
//               />
//               <Card.Body>
//                 <Card.Title class="font-bold" style={{ fontSize: 12 }}>
//                   Choosing the Right E-Liquid
//                 </Card.Title>
//                 <Card.Text></Card.Text>
//                 <p
//                   class="underline underline-offset-[5px] font-bold btn"
//                   style={{ fontSize: 12 }}
//                 >
//                   Read more
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM%20(3).jpeg?updatedAt=1704458061701"
//               />
//               <Card.Body>
//                 <Card.Title class="font-bold" style={{ fontSize: 12 }}>
//                   How to Clean and Maintain Your Vape Device for Optimal
//                   Performance
//                 </Card.Title>
//                 {/* <Card.Text>

//          </Card.Text> */}
//                 <p
//                   class="underline underline-offset-[5px] font-bold btn"
//                   style={{ fontSize: 12 }}
//                 >
//                   Read more
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM.jpeg?updatedAt=1704458158398"
//               />
//               <Card.Body>
//                 <Card.Title class="font-bold" style={{ fontSize: 12 }}>
//                   Vape Safety Tips: Protecting Yourself and Your Device
//                 </Card.Title>
//                 {/* <Card.Text>

//          </Card.Text> */}
//                 <p
//                   class="underline underline-offset-[5px] font-bold btn"
//                   style={{ fontSize: 12 }}
//                 >
//                   Read more
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// export default Guides;

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Guides() {
  return (
    <div class="bg-[#F5F5F5] py-3 mt-5 mb-5">
      <h1 class="fs-1 font-bold px-4 py-4">Vaping Guides</h1>{" "}
      <Container fluid>
        {" "}
        <Row xs={2} md={4} className="g-2 p-2 md:p-4 lg:p-5 xl:p-5 2xl:p-5">
          <Col>
            <Card>
              <Card.Img
                class="h-[10rem] object-cover "
                variant="top"
                src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM%20(2).jpeg?updatedAt=1704457507396"
              />
              <Card.Body>
                <Card.Title class="text-[13px] font-semibold text-wrap">
                  INSTAFLOW 4500 DISPOSABLE VAPE
                </Card.Title>
                <Card.Text>
                  <button class="pt-[42px] md:pt-[24px] 2xl:pt-[43px] xl:pt-[43px] text-[12px] underline font-semibold underline-offset-4">
                    Read Guide
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                class="h-[10rem] object-cover"
                variant="top"
                src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM%20(1).jpeg?updatedAt=1704458009122"
              />
              <Card.Body>
                <Card.Title class="text-[13px] font-semibold text-wrap">
                  Choosing the Right E-Liquid
                </Card.Title>
                <Card.Text>
                  <button class="pt-[42px] text-[12px] underline font-semibold underline-offset-4">
                    Read Guide
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                class="h-[10rem] object-cover"
                variant="top"
                src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM%20(3).jpeg?updatedAt=1704458061701"
              />
              <Card.Body>
                <Card.Title class="text-[13px] font-semibold text-wrap">
                  How to Clean and Maintain Your Vape Device Optimal Performance
                </Card.Title>
                <Card.Text>
                  <button class="text-[12px] xl:pt-[25px] 2xl:pt-[25px] underline font-semibold underline-offset-4">
                    Read Guide
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                class="h-[10rem] object-cover"
                variant="top"
                src="https://ik.imagekit.io/p2slevyg1/WhatsApp%20Image%202024-01-04%20at%2012.48.46%20PM.jpeg?updatedAt=1704458158398"
              />
              <Card.Body>
                <Card.Title class="text-[13px] font-semibold text-wrap">
                  Vape Safety Tips: Protecting Yourself and Your Device
                </Card.Title>
                <Card.Text>
                  <button class="pt-[19px] xl:pt-[25px] 2xl:pt-[43px] text-[12px] underline font-semibold underline-offset-4">
                    Read Guide
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Guides;
