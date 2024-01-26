import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import SmallNavbar from './SmallNavbar';
// import BlackSection from './BlackSection';
import { useState,useEffect } from 'react';


function Fixed_Component() {
    const [navColor, setnavColor] = useState("transparent");
    const [topNav, setTopNav] = useState(0);
    const [lgShow, setLgShow] = useState(false);
  
    // const navigate = useNavigate();
  
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("#ffffff");
      // window.scrollY > 10 ? setnavSize("4rem") : setnavSize("3rem");
      window.scrollY > 10 ? setTopNav(0) : setTopNav(0);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
  return (
    <div class="">
      <div
          className="fixed w-100 top-0 mx-0 "
          style={{
            backgroundColor: navColor,
            // height: navSize,
            zIndex: "1000",
          }}
        >
          <Header />
          <Navigation />
          <SmallNavbar />
          {/* <BlackSection /> */}
          
        </div>
    </div>
  )
}

export default Fixed_Component
