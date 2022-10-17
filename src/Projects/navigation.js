import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../css/nav.css";
import "../css/animate.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/operations";
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
          <a href="/" className="brand">
            <img alt="" className="img-responsive center-block" src={imgj} width={200} />
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
      <section className="project-banner" />
    </>
  );
};

export default NavigationHeader;
