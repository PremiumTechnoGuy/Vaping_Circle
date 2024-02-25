import React from 'react'
import "./flavor.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import FooterW from '../FooterW';

function FlavourPage() {
  return (
    <div>
      <div class="mt-64">
        {" "}
        <h1 class="fs-2 font-bold mb-5 text-center">Flavour</h1>
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

                    src="https://ik.imagekit.io/p2slevyg1/Group%20105.png?updatedAt=1704383103637"
                    alt=""
                    width="300px"
                    height="300px"
                  />
                  <div className="text6">
                    <table className="table ">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All </p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div id="content" class="m-2">
                <div className="item e6">
                  <img
                    src="https://ik.imagekit.io/p2slevyg1/2.png?updatedAt=1704382979128"
                    alt=""
                    width="319px"
                    height="414px"
                  // style={{height:355}}
                  />
                  <div className="text6">
                    <table className="table">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545]  text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All </p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div id="content" class="m-2">
                <div className="item e6">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Chocolate%20&%20Sweets.png?updatedAt=1704227027079"
                    alt=""
                    width="300px"
                    height="300px"
                  />
                  <div className="text6">
                    <table className="table">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All</p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div id="content" class="m-2 block md:hidden">
                <div className="item e6">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Chocolate%20&%20Sweets.png?updatedAt=1704227027079"
                    alt=""
                  />
                  <div className="text6">
                    <table className="table">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All  </p>
                      </tbody>
                    </table>
                  </div>
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

                    src="https://ik.imagekit.io/p2slevyg1/Group%20105.png?updatedAt=1704383103637"
                    alt=""
                    width="300px"
                    height="300px"
                  />
                  <div className="text6">
                    <table className="table ">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All </p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div id="content" class="m-2">
                <div className="item e6">
                  <img
                    src="https://ik.imagekit.io/p2slevyg1/2.png?updatedAt=1704382979128"
                    alt=""
                    width="319px"
                    height="414px"
                  // style={{height:355}}
                  />
                  <div className="text6">
                    <table className="table">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All </p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div id="content" class="m-2">
                <div className="item e6">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Chocolate%20&%20Sweets.png?updatedAt=1704227027079"
                    alt=""
                    width="300px"
                    height="300px"
                  />
                  <div className="text6">
                    <table className="table">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All</p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div id="content" class="m-2 block md:hidden">
                <div className="item e6">
                  <img
                    src="https://ik.imagekit.io/2nuimwatr/Chocolate%20&%20Sweets.png?updatedAt=1704227027079"
                    alt=""
                  />
                  <div className="text6">
                    <table className="table">
                      <tbody>
                        <tr className="p-2 ">
                          <td class="ps-5">Bubblegum</td>
                          <td>
                            <span class="bg-[#464545] text-white rounded-full p-1">183</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Caramel</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">135</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Custard</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">161</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Ice Cream</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">961</span>
                          </td>
                        </tr>
                        <tr className="p-2 ">
                          <td class="ps-5">Jam</td>
                          <td>
                            {" "}
                            <span class="bg-[#464545] text-white rounded-full p-1">855</span>
                          </td>
                        </tr>
                        <p id="p" class="text-center ps-5 pt-3">Show All  </p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>



        </Container>
        <Footer categories={categories} W />
      </div>
      <Outlet />
    </div>
  )
}

export default FlavourPage
