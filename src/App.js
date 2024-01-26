import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main_Component/Home";
import FlavourPage from "./Sub_Component/Retail/Flavour/FlavourPage";
import CategoryPage from "./Sub_Component/Retail/Category/CategoryPage";
import Footer from "./Sub_Component/Retail/Footer";
import Fixed_Component from "./Sub_Component/Retail/Fixed_Component";
import ProfilePage from "./Sub_Component/Retail/ProfilePage";
import Register from "./Sub_Component/Retail/Register";
import Login from "./Sub_Component/Retail/Login";
import CartPage from "./Sub_Component/Retail/CartPage";
import Checkout from "./Sub_Component/Retail/Checkout";
import ProductPage from "./Sub_Component/Retail/Product/ProductPage";
import ProductDetails from "./Sub_Component/Retail/Product/ProductDetails";
// import FlavourPageW from "./Sub_Component/WholeSale/FlavourW/FlavourPageW";
import ScrollToTop from "./ScrollToTop";
import VapesDeal from "./Sub_Component/Retail/VapesDeal";
import Setting from "./Sub_Component/Retail/Setting";
import MyOrder from "./Sub_Component/Retail/MyOrder";
import AboutUs from "./Sub_Component/Retail/StaticPages/AboutUs";
import Term_Conditions from "./Sub_Component/Retail/StaticPages/Term_Conditions";
import Return_Policy from "./Sub_Component/Retail/StaticPages/Return_Policy";
import Age_varification from "./Sub_Component/Retail/StaticPages/Age_varification";
import Privacy_Policy from "./Sub_Component/Retail/StaticPages/Privacy_Policy";
import Compliance from "./Sub_Component/Retail/StaticPages/Compliance";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Fixed_Component /> */}
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/myOrder" element={<MyOrder />} />
            <Route path="/vapedeals" element={<VapesDeal />} />
            <Route path="/flavour_page" element={<FlavourPage />} />
            <Route path="/category_page" element={<CategoryPage />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/cartView" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/term_conditions" element={<Term_Conditions />} />
            <Route path="/age_varification" element={<Age_varification />} />
            <Route path="/privacy_policy" element={<Privacy_Policy />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/return_policy" element={<Return_Policy />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
};

export default App;
