import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Fixed_Component from "./Fixed_Component";

function ProfilePage() {
  return (
    <div class="mt-36 md:mt-52 ">
      <Fixed_Component />
      <Container className="flex lg:justify-center mx-auto ml-72">
        <Row>
          <Col xs={12}>
            <p className="font-bold my-3 text-xl">My Profile</p>
            <Box
              className="mt- ml-2"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="First Name"
                  defaultValue="Abdullah"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Last Name"
                  defaultValue="Aslam"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Email"
                  defaultValue="profileinfo@gmail.com"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Phone Number"
                  defaultValue="234398242029"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Address"
                  defaultValue="118 Rd.Derby ED1 1FE"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Country"
                  defaultValue="United Kingdom"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Date"
                  defaultValue="21/02/2023"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <Button className="mt-6 border-0 rounded-full bg-[#59A0B8] hover:bg-[#0b428b]  text-white px-14 py-2 font-semibold text-sm">
                Save
              </Button>

              {/* Password Part */}
              <div>
                <p className="font-bold text-xl mt-4">Password</p>
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

export default ProfilePage;
