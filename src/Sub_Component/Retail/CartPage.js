import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import Fixed_Component from "./Fixed_Component";

import { del, get, set, values } from "idb-keyval";

function CartProduct({ product, getSavedCartProducts }) {
  const [count, setCount] = React.useState(product.quantity);
  // const [newPrice, setNewPrice] = React.useState(0);

  function increment() {
    setCount((prev) => prev + 1);
    get(product.uId)
      .then((obj) => {
        const newObj = JSON.parse(JSON.stringify(obj));
        newObj.quantity = obj.quantity + 1;
        console.log(newObj);
        set(product.uId, newObj);
      })
      .then(() => {
        setTimeout(() => {
          getSavedCartProducts();
        }, 200);
      })
      .then(() => {
        checkOffer();
      });
  }

  function decrement() {
    let bool = false;
    setCount((prev) => {
      if (prev > 1) {
        bool = true;
        return prev - 1;
      } else return prev;
    });

    if (bool) {
      get(product.uId)
        .then((obj) => {
          const newObj = JSON.parse(JSON.stringify(obj));
          newObj.quantity = obj.quantity - 1;
          console.log(newObj);
          set(product.uId, newObj);
        })
        .then(() => {
          setTimeout(() => {
            getSavedCartProducts();
          }, 200);
        })
        .then(() => {
          checkOffer();
        });
    }
  }

  const checkOffer = () => {
    if (
      product.offer &&
      product.offer.isOffer &&
      count >= product.offer.offerQuantity
    ) {
      const offerQuantity = Math.floor(count / product.offer.offerQuantity);
      const offerPrice = product.offer.offerPrice;
      const discountedPrice = offerPrice * offerQuantity;

      const normalQuantity =
        count - offerQuantity * product.offer.offerQuantity;
      const normalPrice = product.price * normalQuantity;
      console.log("normal: ", normalPrice);
      console.log("special: ", discountedPrice);
      return discountedPrice + normalPrice;
    } else {
      return product.price * count;
    }
  };

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
              src={product.image || ""}
              alt={product.nm}
              style={{ maxWidth: "none" }}
              className="sm:p-1 xs:m-0 md:px-12 md:py-3 sm:w-[7rem] mt-2  md:w-[16rem] "
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
              <div className="px-2 py-3 mt-1 mb-3">
                <p className="text-[#000000] font-bold text-lg">{product.nm}</p>
                <ul className="text-xs">
                  {product.variants?.map((vr) => {
                    return (
                      <li>
                        <span className=" font-semibold">
                          {vr.variantType}:
                        </span>{" "}
                        <span className="text-[#59A0B8]">
                          {" "}
                          {vr.chosenOption.optionValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className=" justify-between items-center block md:hidden">
                  {" "}
                  <div>
                    <p className=" py-3 md:hidden block text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                      £{(product.price * count).toFixed(2)}
                    </p>
                  </div>{" "}
                  <div className="flex justify-between items-center">
                    <span className="flex px-1">
                      <p class="text-[#707070] text-sm pr-2">Quantity</p>
                      <p
                        class="px-3 py-1 mx-1 bg-white text-[#59A0B8]  font-semibold text-[15px] shadow-sm  cursor-pointer"
                        onClick={decrement}
                      >
                        -
                      </p>
                      <p class="px-3 py-1 mx-1 bg-white  text-[15px] shadow-sm ">
                        {count}
                      </p>
                      <p
                        class="px-3 py-1 mx-1 bg-white text-[#59A0B8]  font-semibold text-[15px] shadow-sm  cursor-pointer"
                        onClick={increment}
                      >
                        +
                      </p>
                      <RiDeleteBin5Line
                        onClick={(e) => {
                          e.preventDefault();
                          del(product.uId);
                          window.location.reload(false);
                        }}
                        className="text-[20px] mt-2 mx-3"
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex hidden md:block justify-between items-center">
                <span className="hidden md:block">
                  <span className="flex px-1">
                    <p class="text-md">Quantity</p>
                    &nbsp;
                    <p
                      class="px-3 py-1 mx-1 bg-white text-[#59A0B8]  font-semibold text-[20px] shadow-sm  cursor-pointer"
                      onClick={decrement}
                    >
                      -
                    </p>
                    <p class="px-3 py-1 mx-1 bg-white  text-[20px] shadow-sm ">
                      {count}
                    </p>
                    <p
                      class="px-3 py-1 mx-1 bg-white text-[#59A0B8]  font-semibold text-[20px] shadow-sm  cursor-pointer"
                      onClick={increment}
                    >
                      +
                    </p>
                    <RiDeleteBin5Line
                      onClick={(e) => {
                        e.preventDefault();
                        del(product.uId);
                        window.location.reload(false);
                      }}
                      className="text-[20px] mx-3 mt-2"
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                </span>
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
              £{(product.price * count).toFixed(2)}
            </div>
          </span>
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
}

function CartPage({ categories, filters }) {
  const [cartArr, setCartArr] = React.useState([]);

  function getSavedCartProducts() {
    values()
      .then((res) => {
        // setCartArr(res.map((cId) => products.find((p) => p._id === cId)));
        setCartArr(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    getSavedCartProducts();
  }, []);

  return (
    <div>
      <Fixed_Component categories={categories} filters={filters} />
      <div className="bg-[#f1fcff]  md:bg-[#F1FCFF] mt-[7rem] md:mt-[11rem] ">
        <h1 className="fs-2 py-5 font-bold text-center text-[#59A0B8] ">
          Your Cart
        </h1>
        <Container fluid>
          <Row>
            <Col xs={12} md={8}>
              <div className="bg-[#FFFFFF] rounded-lg m-2 md:mx-5 md:my-5">
                {cartArr?.map((crt, i) => (
                  <CartProduct
                    key={i}
                    product={crt}
                    getSavedCartProducts={getSavedCartProducts}
                  />
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
                    {cartArr
                      .map((c) => c.price * c.quantity)
                      .reduce((p, c) => p + c, 0)
                      .toFixed(2)}
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
                    {cartArr
                      .map((c) => c.price * c.quantity)
                      .reduce((p, c) => p + c, 0)
                      .toFixed(2)}
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
