import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../css/nav.css";
import "../css/animate.css";
import "react-icons";
import { FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import imgj from "../backgroundImages/logo.webp";
import { links } from "../utils/operations";

const NavigationHeader = (index) => {
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

  window.addEventListener("click", function () {
    let link = document.getElementById("nav-mobile");
    let smallScreen = document.getElementById("nav-screen-mobile");
    link.classList.toggle("sticky", window.scrollY > 0);
    smallScreen.classList.toggle("nav-screen-mobile-sticky", window.scrollY > 0);
  });

  return (
    <>
      <header>
        <div className="carilon">
          <Link to="/" className="brand">
            <img
              alt="Brand"
              className="img-responsiv center-block"
              src={imgj}
              height={200}
              width={130}
            />
          </Link>
          <div className="slide-number">
            <span className="current-number text-primary">
              <span className="count">0{index.index + 1}</span>
            </span>
            <sup>
              <span className="delimiter">/</span> <span className="total-count">04</span>
            </sup>
          </div>
        </div>

        <div className="phone">+234 818 658 7786</div>

        <div className="social"></div>
        <div className="social-content">
          <div className="social-info">
            <div className="social-title">Brightmartinsltd</div>
            <div className="line"></div>
          </div>
          <ul className="social-list">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>

        <div id="menu-collapse">
          <ul className="menu-items">
            {links.map((item, index) => (
              <li
                style={{ backgroundColor: "gold" }}
                key={index}
              >
                <NavLink to={`/${item.link}`} aria-current="page" className={({ isActive }) => isActive ? "menu-item activated-link link" : "menu-item link"}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={handleClick}>
          {clicked ? (
            <FaBars className="menu-icon cancel" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </div>

      </header>
    </>
  );
};

export default NavigationHeader;
