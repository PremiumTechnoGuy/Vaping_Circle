import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// import "./newletter.css";
function News_Letter() {
  return (
    // <Container className="mt-5">
    //    <img class="relative" src="https://ik.imagekit.io/p2slevyg1/vape-kits-all-you-need-to-know.jpg?updatedAt=1704271754026"/>
    //   <div class="absolute" style={{marginTop:-337}} >
    //     <Row>
    //       <Col className="mx-auto">
    //         <div class="flex flex-col justify-center items-center">
    //           <p className="text-5xl font-bold text-white">SUBSCRIBE</p>
    //           <p class="mt-2 text-xl font-bold text-white">TO OUR NEWSLETTER</p>
    //           <p class="text-white font-semibold">
    //             Get All The Latest Information On New Releases, Sales And
    //             Offers. Sign Up Today
    //           </p>
    //           <form className="mt-4">
    //             <input
    //               className="w-72 py-2 px-4 m-0 mr-3 mt-0 border-0 rounded"
    //               type="email"
    //               placeholder="Enter your email"
    //             />
    //             <button class="bg-cyan-500 text-white font-semibold py-2 px-4 rounded btn">
    //               Subscribe
    //             </button>
    //           </form>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </Container>

    <div>
      {/* <Container fluid > */}
      <Card className=" text-white mt-5">
        <Card.Img
          class="h-96  "
          src="https://ik.imagekit.io/p2slevyg1/vape-kits-all-you-need-to-know.jpg?updatedAt=1704271754026"
          alt="Card image"
        />
        <Card.ImgOverlay
          class=" flex flex-col justify-center items-center "
          style={{ marginTop: -276 }}
        >
          <Card.Title class="fs-2 font-bold">SUBSCRIBE</Card.Title>
          <p class="fs-3 font-bold"> TO OUR NEWSLETTER</p>
          <p
            class="font-bold text-4xl hidden md:block"
            style={{ marginLeft: 804, marginTop: -49 }}
          >
            SAVE 10%.
          </p>
          <Card.Text class="mt-2 px-4" style={{ marginTop: 0 }}>
            Get all the latest information on New Releases, Sales and Offers.
            Sign up today
          </Card.Text>
          <Card.Text>
            <InputGroup className="w-96 mt-3 ">
              <Form.Control
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ height: 35, fontSize: 12 }}
              />
              <InputGroup.Text
                id="basic-addon1"
                className="text-white"
                style={{ height: 35, fontSize: 12, backgroundColor: "#59A0B8" }}
              >
               <button>Subscribe</button> 
              </InputGroup.Text>
            </InputGroup>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      {/* </Container> */}
    </div>
  );
}
export default News_Letter;
