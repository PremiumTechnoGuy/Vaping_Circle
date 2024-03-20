import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main_Component/Home";
import FlavourPage from "./Sub_Component/Retail/Flavour/FlavourPage";
import CategoryPage from "./Sub_Component/Retail/Category/CategoryPage";
// import Footer from "./Sub_Component/Retail/Footer";
// import Fixed_Component from "./Sub_Component/Retail/Fixed_Component";
import ProfilePage from "./Sub_Component/Retail/ProfilePage";
import Register from "./Sub_Component/Retail/Register";
import Login from "./Sub_Component/Retail/Login";
import CartPage from "./Sub_Component/Retail/CartPage";
import Checkout from "./Sub_Component/Retail/Checkout";
import ProductPage from "./Sub_Component/Retail/Product/ProductPage";
import ProductDetails from "./Sub_Component/Retail/Product/ProductDetails";
import FilterProductPage from "./Sub_Component/Retail/Filter/FilterProductPage";
// import FlavourPageW from "./Sub_Component/WholeSale/FlavourW/FlavourPageW";
import ScrollToTop from "./ScrollToTop";
import VapesDeal from "./Sub_Component/Retail/VapesDeal";
import Setting from "./Sub_Component/Retail/Setting";
import MyOrder from "./Sub_Component/Retail/MyOrder";
import AboutUs from "./Sub_Component/Retail/StaticPages/AboutUs";
import Term_Conditions from "./Sub_Component/Retail/StaticPages/Term_Conditions";
import Return_Policy from "./Sub_Component/Retail/StaticPages/Return_Policy";
import Privacy_Policy from "./Sub_Component/Retail/StaticPages/Privacy_Policy";
import Compliance from "./Sub_Component/Retail/StaticPages/Compliance";
import Fusion_Vape from "./Sub_Component/Retail/StaticPages/FusionVape";
import Cloud_Partner from "./Sub_Component/Retail/StaticPages/CloudPartner";
import Our_Partner from "./Sub_Component/Retail/StaticPages/OurPartner";
import axios from "axios";
import { apiUrl } from "./data/env";
import FlavourProductPage from "./Sub_Component/Retail/Flavour/FlavourProductPage";
import DealProductPage from "./Sub_Component/Retail/Deal/DealProductPage";

import Success from "./Sub_Component/Retail/Success";
import Failure from "./Sub_Component/Retail/Failure";

import { AuthProvider } from "./utils/auth";
import { RequireAuth } from "./utils/RequireAuth";

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState("");

  const [currentProductId, setCurrentProductId] = React.useState("");

  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/category?sort=priority`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/api/v1/filter?sort=priority`)
      .then((res) => setFilters(res.data.data))
      .catch((err) => console.error(err));

    axios
      .get(`${apiUrl}/api/v1/product`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Fixed_Component /> */}
        <AuthProvider>
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setCurrentCategory={setCurrentCategory}
                    categories={categories}
                    setCategories={setCategories}
                    filters={filters}
                    products={products}
                  />
                }
              />
              <Route path="/success" element={<Success />} />
              <Route path="/failure" element={<Failure />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profilePage"
                element={
                  <RequireAuth>
                    <ProfilePage categories={categories} filters={filters} />
                  </RequireAuth>
                }
              />
              <Route
                path="/setting"
                element={
                  <RequireAuth>
                    <Setting categories={categories} filters={filters} />
                  </RequireAuth>
                }
              />
              <Route
                path="/myOrder"
                element={
                  <RequireAuth>
                    <MyOrder categories={categories} filters={filters} />
                  </RequireAuth>
                }
              />
              <Route
                path="/vapedeals"
                element={
                  <VapesDeal categories={categories} filters={filters} />
                }
              />
              <Route
                path="/DealProductPage/:offerName/:offerId"
                element={
                  <DealProductPage
                    products={products}
                    categories={categories}
                    filters={filters}
                  />
                }
              />
              <Route
                path="/flavour_page"
                element={
                  <FlavourPage categories={categories} filters={filters} />
                }
              />
              <Route
                path="/category_page"
                element={
                  <CategoryPage
                    setCurrentCategory={setCurrentCategory}
                    categories={categories}
                    filters={filters}
                  />
                }
              />
              <Route
                path="/productPage/:categoryId/:currentCategoryName"
                element={
                  <ProductPage
                    products={products}
                    // currentCategory={currentCategory}
                    categories={categories}
                    filters={filters}
                    // setCurrentProductId={setCurrentProductId}
                  />
                }
              />
              <Route
                path="/filterProductPage/:categoryId/:filId/:filNameEnc/:chosenOptionEnc"
                element={
                  <FilterProductPage
                    products={products}
                    categories={categories}
                    filters={filters}
                  />
                }
              />
              <Route
                path="/flavourProductPage/:flavourId/:subFlavour/:flavourName"
                element={
                  <FlavourProductPage
                    products={products}
                    categories={categories}
                    filters={filters}
                  />
                }
              />
              <Route
                path="/productDetails/:currentProdId"
                element={
                  <ProductDetails
                    currentProductId={currentProductId}
                    products={products}
                    categories={categories}
                    filters={filters}
                    setCart={setCart}
                  />
                }
              />
              <Route
                path="/cartView"
                element={
                  <CartPage
                    categories={categories}
                    filters={filters}
                    cart={cart}
                    products={products}
                    setCart={setCart}
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <RequireAuth>
                    <Checkout categories={categories} filters={filters} />
                  </RequireAuth>
                }
              />
              <Route
                path="/aboutus"
                element={<AboutUs categories={categories} filters={filters} />}
              />
              <Route
                path="/term_conditions"
                element={
                  <Term_Conditions categories={categories} filters={filters} />
                }
              />
              <Route
                path="/privacy_policy"
                element={
                  <Privacy_Policy categories={categories} filters={filters} />
                }
              />
              <Route
                path="/compliance"
                element={
                  <Compliance categories={categories} filters={filters} />
                }
              />
              <Route
                path="/return_policy"
                element={
                  <Return_Policy categories={categories} filters={filters} />
                }
              />
              <Route
                path="/fusion_vape"
                element={
                  <Fusion_Vape categories={categories} filters={filters} />
                }
              />
              <Route
                path="/cloud_partner"
                element={
                  <Cloud_Partner categories={categories} filters={filters} />
                }
              />
              <Route
                path="/our_partner"
                element={
                  <Our_Partner categories={categories} filters={filters} />
                }
              />
            </Routes>
          </ScrollToTop>
        </AuthProvider>
      </BrowserRouter>
      {/* <Footer categories={categories} /> */}
    </>
  );
};

export default App;
