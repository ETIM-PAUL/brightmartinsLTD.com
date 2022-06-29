import {Link} from "react-router-dom";
import React, {useState} from "react";
import "../FrontPage/nav.css";
import "../css/animate.css";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import imgj from "../backgroundImages/logo.webp";

const NavigationHeader = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    let link = document.getElementById("menu-collapse");
    link.classList.toggle("menu-collapse-sticky");
  };

  window.addEventListener("scroll", function () {
    let link = document.getElementById("nav-mobile");
    let smallScreen = document.getElementById("nav-screen-mobile");
    link.classList.toggle("sticky", window.scrollY > 0);
    smallScreen.classList.toggle("nav-screen-mobile-sticky", window.scrollY > 0);
  });

  return (
    <>
      <header>
        <div className="carilon">
          <a href="/" class="brand">
            <img alt="" class="img-responsive center-block" src={imgj} width={200} />
          </a>
          <ul className="social-list">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>

        <div className="phone">+234 818 658 7786</div>

        <nav className="navbar-desctop visible-md visible-lg ainimated slideInDown affix-top">
          <div className="container">
            <a href="#top" className="brand js-target-scroll">
              <img
                alt=""
                height="40px"
                className="center-block"
                src="https://carrillionng.com.ng/wp-content/uploads/2018/08/carrillion.png"
              />
            </a>
            <div className="menu-main-container">
              <ul id="menu-main" className="navbar-desctop-menu ">
                <li
                  id="menu-item-3704"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-701 current_page_item menu-item-3704 active "
                >
                  <Link to="/" aria-current="page" className="active link">
                    Home
                  </Link>
                </li>
                <li
                  id="menu-item-1901"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1901"
                >
                  <Link to="/about-us" className="link">
                    About Us
                  </Link>
                </li>
                <li
                  id="menu-item-2115"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2115"
                >
                  <Link to="/projects" className="link">
                    Our Projects
                  </Link>
                </li>
                <li
                  id="menu-item-1929"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1929"
                >
                  <Link to="/contact" className="link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        </nav>

        <div id="menu-collapse">
          <ul className="menu-items">
            <li className="menu-item">
              <Link to="/" aria-current="page" className="active link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/about-us" className="link">
                About Us
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/projects" className="link">
                Our Projects
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleClick}>
          {clicked ? (
            <FaBars className="menu-icon cancel" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </div>

        <nav
          className="navbar-mobile animated slideInDown"
          id="nav-mobile"
          style={{display: "none"}}
        >
          <a href="#top" className="brand js-target-scroll">
            <span className="text-primary"></span>{" "}
          </a>
          <div
            className="navbar-collapse collapse"
            id="navbar-mobile"
            aria-expanded="false"
            style={{height: "0px"}}
          >
            <ul id="menu-main-1" className="navbar-nav-mobile ">
              <img
                alt="brand"
                height="40px"
                className="center-block"
                src={imgj}
                style={{marginLeft: "20px"}}
              />
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-701 current_page_item menu-item-3704 active">
                <Link to="/" aria-current="page" className="mobile-link">
                  Home
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1901">
                <Link to="/about-us" className="mobile-link">
                  About Us
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2115">
                <Link to="/projects" className="mobile-link">
                  Our Projects
                </Link>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1929">
                <Link to="contact" className="mobile-link">
                  Contact Us
                </Link>
              </li>
            </ul>{" "}
          </div>
        </nav>

        <nav
          className="small-screen animated slideInDown"
          id="nav-screen-mobile"
          style={{display: "none"}}
        >
          <div onClick={handleClick} className="screen-menu">
            {clicked ? (
              <FaBars className="menu-iconn cancel" />
            ) : (
              <FaBars className="menu-iconn" />
            )}
          </div>
        </nav>
      </header>
      <section className="project-banner" />
    </>
  );
};

export default NavigationHeader;
