import React from "react";
import web from "../images/logo-3.png";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <>
      <div className="container-fluid nav_bg " style={{ background: "white" }}>
        <div className="row upper">
          <div className="col-10 mx-auto">
            <nav className="navbar upper navbar-default navbar-fixed-top">
              <div className="container">
                <ul className="navbar-nav d-flex flex-row">
                  <li>
                    <h5>
                      {" "}
                      <i class="fa-brands fa-whatsapp pt-2"></i>
                    </h5>
                  </li>
                  <li className="nav-item p-2">
                    <div>Call on: +91-9899565492</div>
                  </li>
                  <li>
                    <h5>
                      {" "}
                      <i class="fa-solid fa-clock pt-2"></i>
                    </h5>
                  </li>
                  <li className="nav-item p-2">
                    <div>Open Hours: Mon - Sat 10.00 am - 7.00 pm</div>
                  </li>
                </ul>

                <div className="ms-auto p-2">
                  Narayanjee Educational Service Trust
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <nav
              className="navbar  navbar-expand-lg "
              style={{ background: "white" }}
            >
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={web} className="img-fluid" alt="" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        className="nav-link"
                        id="nav-dropdown"
                        to="/"
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Navbar.Collapse>
                        <Nav>
                          <NavDropdown id="nav-dropdown" title="ABOUT">
                            <NavDropdown.Item href="/mvv">
                              MISSION/VISSION/VALUES
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/srinarayanjee">
                              SRI NARAYAN JEE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/managingtrustee">
                              SHRI AMAR KUMAR SINHA
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/jointmanagingtrustee">
                              SHRI VIKAS KUMAR SINHA
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                    </li>
                    <li className="nav-item">
                      <Navbar.Collapse>
                        <Nav>
                          <NavDropdown id="nav-dropdown" title="OUR SERVICES">
                            <Navbar.Collapse>
                              <Nav>
                                <NavDropdown
                                  id="nav-dropdown"
                                  title="ENVIORNMENT CARE"
                                >
                                  <NavDropdown.Item href="/agroecological">
                                    AGRO-ECOLOGICAL SERVICES
                                  </NavDropdown.Item>
                                
                                </NavDropdown>
                              </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse>
                              <Nav>
                                <NavDropdown
                                  id="nav-dropdown"
                                  title="TRIBAL WELFARE"
                                >
                                  <NavDropdown.Item href="/promotionofsports">
                                    PROMOTION OF SPORTS
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/promotingeducation">
                                   PROMOTING EDUCATION
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/tribalentrepreneurship">
                                    TRIBAL ENTREPRENEURSHIP
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/adivasinaturalproductbrand">
                                    ADIVASI NATURAL PRODUCT BRAND
                                  </NavDropdown.Item>
                                </NavDropdown>
                              </Nav>
                            </Navbar.Collapse>
                            <NavDropdown.Item href="/educational" 
                                  id="nav-dropdown">
                              EDUCATIONAL SERVICES
                            </NavDropdown.Item>
                            <Navbar.Collapse>
                              <Nav>
                                <NavDropdown
                                  id="nav-dropdown"
                                  title="AGRICULTURE"
                                >
                                  <NavDropdown.Item href="/naturalfarming">
                                    NATURAL FARMING
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/agritech">
                                    AGRITECH
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/fpo">
                                   FPO
                                  </NavDropdown.Item>
                                 
                                </NavDropdown>
                              </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse>
                              <Nav>
                                <NavDropdown
                                  id="nav-dropdown"
                                  title="SERVE INDIA"
                                >
                                  <NavDropdown.Item href="/technologiespromotion">
                                    TECHNOLOGY PROMOTION
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/defencepromotion">
                                    DEFENCE PROMOTION
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="/sportspromotion">
                                   SPORTS PROMOTION
                                  </NavDropdown.Item>
                                 
                                </NavDropdown>
                              </Nav>
                            </Navbar.Collapse>
                            <NavDropdown.Item href="/ideabank"
                                  id="nav-dropdown">
                                    IDEA BANK
                                  </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        className="nav-link"
                        to="/team"
                      >
                        OUR TEAM
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeclassname="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        CONTACT US
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
