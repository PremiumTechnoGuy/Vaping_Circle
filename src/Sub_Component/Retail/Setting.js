import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Fixed_Component from "./Fixed_Component";

function Setting() {
  return (
    <div class="mt-36 md:mt-52 ">
      <Fixed_Component />
      <Container className="flex lg:justify-center mx-auto ml-72">
        <Row>
          <Col xs={12}>
            <p className="font-bold my-3 text-xl">Settings</p>
            <Box
              className="mt- ml-2"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* Password Part */}
              <div>
                {/* <p className="font-bold text-xl mt-4">Password</p> */}
                <div className="mt-8">
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Current Password"
                    defaultValue="........."
                    style={{ width: "381px", height: "10px" }}
                  />
                </div>

                <div className="mt-12">
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="New Password"
                    defaultValue="     "
                    style={{ width: "381px", height: "10px" }}
                  />
                </div>
              </div>
              <Button className="mt-16 border-0 mb-5 rounded-full bg-[#59A0B8]  hover:bg-[#0b428b] text-white px-14 py-2 font-semibold text-sm">
                Save
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Setting;
