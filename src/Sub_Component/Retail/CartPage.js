import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "./Fixed_Component";

import { keys, values } from "idb-keyval";

function CartProduct({ product }) {
  const [count, setCount] = React.useState(product.quantity);
  return (
    <div>
      <Row>
        <Col
          className="flex justify-start items-start"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <span>
            <img
              src={product.image.replace("/product", "/tr:w-160,h-153/product")}
              alt={product.nm}
              style={{ maxWidth: "none" }}
              className="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem]  md:w-[16rem] "
            />
          </span>
          <span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="px-2 py-3 mb-5">
                <p className="text-[#000000] font-bold text-sm">{product.nm}</p>
                <div className="flex justify-between items-center block md:hidden">
                  {" "}
                  <span>
                    <p className=" py-3 md:hidden block text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                      £{product.price * count}
                    </p>
                  </span>{" "}
                  <div className="flex justify-between items-center">
                    <span className="">Quantity : {count}</span>
                    <span className="">
                      <RiDeleteBin5Line
                        onClick={(e) => {
                          e.preventDefault();
                          // setCart((productArr) =>
                          //   crtArr.filter(
                          //     (cId) => cId !== crt._id
                          //   )
                          // );
                        }}
                        className="text-xl mx-3"
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex hidden md:block justify-between items-center">
                <span className="hidden md:block">Quantity : {count}</span>
                {/* <span className="hidden md:block">
                  {" "}
                  <RiDeleteBin5Line
                    onClick={(e) => {
                      e.preventDefault();
                      // setCart((crtArr) =>
                      //   crtArr.filter((cId) => cId !== crt._id)
                      // );
                    }}
                    className="text-xl mx-3"
                    style={{ cursor: "pointer" }}
                  />
                </span> */}
              </div>
            </div>
          </span>
          <span>
            <div className="py-3 hidden md:block text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
              £{product.price * count}
            </div>
          </span>
        </Col>
      </Row>
    </div>
  );
}

function CartPage({ categories, filters }) {
  const [cartArr, setCartArr] = React.useState([]);

  React.useEffect(() => {
    values()
      .then((res) => {
        // setCartArr(res.map((cId) => products.find((p) => p._id === cId)));
        setCartArr(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Fixed_Component categories={categories} filters={filters} />
      <div className="bg-[#FFFFFF] md:bg-[#F1FCFF] mt-[7rem] md:mt-[11rem] ">
        <h1 className="fs-2 py-5 font-bold text-center">Your Cart</h1>
        <Container fluid>
          <Row>
            <Col xs={12} md={8}>
              <div className="bg-[#FFFFFF] rounded-lg m-2 md:mx-5 md:my-5">
                {cartArr?.map((crt, i) => (
                  <CartProduct key={i} product={crt} />
                ))}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div class="bg-[#FFFFFF] rounded-lg mx-5 my-5">
                <h2 class="text-xl py-3 font-bold text-center">Summary</h2>
                <div class="px-4 flex justify-between">
                  <p>Subtotal</p>
                  <p>
                    £
                    {cartArr.map((c) => c.basePrice).reduce((p, c) => p + c, 0)}
                  </p>{" "}
                </div>
                <div class="px-4 flex justify-between">
                  <p>Shipping</p>
                  <p>-</p>{" "}
                </div>
                <div class="px-4 flex justify-between">
                  <p>Tax</p>
                  <p>-</p>{" "}
                </div>
                <hr class="mx-4" />
                <div class="px-4 flex justify-between p-2">
                  <h3 class="text-xl font-bold">Estimated Total</h3>
                  <h3 class="text-xl font-bold">
                    £
                    {cartArr.map((c) => c.basePrice).reduce((p, c) => p + c, 0)}
                  </h3>
                </div>

                <div class="flex flex-col justify-center items-center pb-5">
                  <Link to="/checkout">
                    <button
                      class="bg-[#59A0B8] text-white mt-5 px-5  py-2 rounded-[24px]"
                      id="btn"
                    >
                      Go to Checkout
                    </button>
                  </Link>
                  <Link to="/">
                    <p class="text-[#59A0B8] p-2 underline underline-offset-2">
                      Continue Shopping
                    </p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer categories={categories} />

        <Outlet />
      </div>
    </div>
  );
}

export default CartPage;
