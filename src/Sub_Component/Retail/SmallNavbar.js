import React from "react";
import "./smallNavbar.css";
import { Outlet, Link } from "react-router-dom";

function SmallNavbar() {
  return (
    <div id="smallnav" class="absolute z-5  hidden md:block" style={{zIndex:'5'}}>
      <div
        className="menu-wrapper "
        class="pb-2 bg-white"
        role="navigation"
        style={{ borderBottom: "1px solid #00000014" }}
      >
        <ul className="nav gap-3 w-full" role="menubar">
          <li role="menuitem">
            <a
              href="#"
              class="hover:underline  hover:font-bold hover:decoration-blue-800 hover:underline-offset-[19px] hover:text-blue-900"
            >
              Vape Kits
            </a>
            <div
              className="mega-menu1  left-[0px]"
              id="submenu"
              aria-hidden="true"
              role="menu"
            >
              <div className="nav-column">
                <li role="menuitem">
                  <h3 class="font-bold hover:text-blue-900">Shop By Type</h3>
                  <div
                    className="mega-menu  left-[0px]"
                    aria-hidden="true"
                    role="menu"
                  >
                    <div className="nav-column ">
                      <h3 className="fw-bold"></h3>
                      <ul>
                        <li role="menuitem">
                          <a href="#">Starter Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Advanced Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Vape Pen Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Pod Kits</a>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-column">
                      <h3 className="fw-bold"></h3>
                      <ul>
                        <li role="menuitem">
                          <a href="#">Disposables Vapes</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">MLT Vape Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Bundle Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Shop All Vape Kits</a>
                        </li>
                      </ul>
                    </div>
                    <div className="nav-column">
                      <h3 className="fw-bold">User Level</h3>
                      <ul>
                        <li role="menuitem">
                          <a href="#">First Time Switcher</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Intermediate / Mid Range Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Advanced User Vapes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex col gap-2  float-right  p-3">
                      <img
                        style={{ height: 200 }}
                        src="https://ik.imagekit.io/p2slevyg1/5a53b0a2-5645-4c03-a2db-d07d6676e75d.jpg?updatedAt=1704138141315"
                        width="400px"
                      />
                    </div>
                  </div>
                </li>
              </div>

              <div className="nav-column">
                <li role="menuitem">
                  <h3 class="fw-bold hover:text-blue-900">Shop By Feature</h3>
                  <div
                    className="mega-menu  left-[0px]"
                    aria-hidden="true"
                    role="menu"
                  >
                    <div className="nav-column ">
                      <h3 className="fw-bold"></h3>
                      <ul>
                        <li role="menuitem">
                          <a href="#">Inhale- Activated Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Rechargable Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Closed Pod Kits</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Adjustable Airflow</a>
                        </li>
                      </ul>
                    </div>

                    <div className="flex col float-right  p-3">
                      <img
                        style={{ height: 200 }}
                        src="https://www.geekvape.com/upload/blog/blog-7.401.jpg"
                        width="600px"
                      />
                    </div>
                  </div>
                </li>
              </div>

              <div className="nav-column">
                <li role="menuitem">
                  <h3 class="fw-bold hover:text-blue-900">Featured Brands</h3>
                  <div
                    className="mega-menu  left-[0px]"
                    aria-hidden="true"
                    role="menu"
                  >
                    <div className="nav-column ">
                      <h3 className="fw-bold"></h3>
                      <ul>
                        <li role="menuitem">
                          <a href="#">Aspire</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Elf Bar</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Geek Vape</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Innokin</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">JUUL</a>
                        </li>
                      </ul>
                    </div>

                    <div className="nav-column mb-3">
                      <h3 className="fw-bold"></h3>
                      <ul>
                        <li role="menuitem">
                          <a href="#">OXVA</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">SMOKE</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Vaporesso</a>
                        </li>
                        <li role="menuitem">
                          <a href="#">Voopoo</a>
                        </li>
                      </ul>
                    </div>

                    <div className="flex col gap-2 float-right mb-2 p-3">
                      <img
                        width="300px"
                        style={{ height: 200 }}
                        src="https://ik.imagekit.io/p2slevyg1/images.jpg?updatedAt=1704137315344"
                      />
                      <img
                        style={{ height: 200 }}
                        src="https://ik.imagekit.io/p2slevyg1/geekvape-z200-kit_500x-PhotoRoom.jpg?updatedAt=1704137095886"
                        width="450px"
                      />
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </li>
          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              E-Liquids
            </a>
          </li>
          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              Disposables
            </a>
          </li>

          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              Refills & Pods
            </a>
          </li>
          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              Tanks
            </a>
          </li>

          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              Mods
            </a>
          </li>

          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              Coil
            </a>
          </li>

          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              Accessories
            </a>
          </li>

          <li role="menuitem">
            <a
              href="#"
              class="hover:underline hover:decoration-blue-800 hover:underline-offset-[19px]"
            >
              CBD
            </a>
          </li>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <Link to="/vapedeals">
              <button
                class="float-end mt-2 right-0 p-2 w-[8rem] text-[15px]  rounded-md hover:bg-[#0B428B]  text-white bg-[#59A0B8]"
                // style={{ height: 35, margin: "0 auto" }}
              >
                <p class="hover:scale-125">Vapes Deal</p>
              </button>
            </Link>
          </div>
          
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default SmallNavbar;
