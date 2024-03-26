import React from "react";
import "../styles.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import LandingSection from "../Sub_Component/Retail/LandingSection";
import Categories from "../Sub_Component/Retail/Categories";
import Servcies_V from "../Sub_Component/Retail/Servcies_V";
import Flavor from "../Sub_Component/Retail/Flavor";
import News_Letter from "../Sub_Component/Retail/News_Letter";
import Guides from "../Sub_Component/Retail/Guides";
import Super from "../Sub_Component/Retail/Super";
import About from "../Sub_Component/Retail/About";
import Footer from "../Sub_Component/Retail/Footer";
import JustArrived from "../Sub_Component/Retail/JustArrived";
import { data } from "./../data/data.js";
import Term_Conditions from "../Sub_Component/Retail/StaticPages/Term_Conditions.js";
import Fixed_Component from "../Sub_Component/Retail/Fixed_Component.js";
import axios from "axios";
import { apiUrl } from "../data/env.js";
import { useAuth } from "../utils/auth.js";
import WhatsAppButton from "../Sub_Component/Retail/Whatsapp.js";

function Home({
  setCurrentCategory,
  categories,
  setCategories,
  filters,
  products,
}) {
  const auth = useAuth();

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token && !auth?.loggedIn) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div class="absolute">
      <div>
        {/* <Term_Conditions/> */}
        <Fixed_Component categories={categories} filters={filters} />
        <LandingSection />
        <Categories
          categories={categories}
          setCurrentCategory={setCurrentCategory}
        />
        <Servcies_V />
        <Super products={products} />
        <Flavor />
        <JustArrived categories={categories} products={products} />
        <News_Letter />
        <About />
        <Guides />
        <Footer categories={categories} />
        <WhatsAppButton />
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
