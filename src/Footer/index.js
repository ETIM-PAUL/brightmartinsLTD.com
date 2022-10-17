import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row-column">
          <div className="coloumn">
            <h3 className="company-name">
              {" "}
              brightmartins
              <span style={{ color: "gold" }}>LTD</span>
            </h3>
            <h4 className="change">
              You Visualize, We Build. You Ask, We Bring it to your Doorstep! General
              Contractor and Freight Agency.{" "}
            </h4>
          </div>
          <div className="coloumn">
            <h3 className="sub-heading">
              Contact
              <div className="underline1">
                <span></span>
              </div>
            </h3>
            <p>Calabar, Lagos, Abuja</p>
            <p>Nigeria</p>
            <p className="email-id">info@brightmartinsLTD.com</p>
            <p>+234 818 658 7786</p>
          </div>
          <div className="coloumn">
            <h3 className="sub-heading">
              Links
              <div className="underline2">
                <span></span>
              </div>
            </h3>
            <ul>
              <Link to="/">
                <li className="links">Home</li>
              </Link>
              <Link to="/about-us">
                <li className="links">About Us</li>
              </Link>
              <Link to="/projects">
                <li className="links">Our Projects</li>
              </Link>
              <Link to="/contact">
                <li className="links">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="cololumn">
            <h3 className="sub-heading" style={{ marginTop: "28.3px" }}>
              Newsletter
              <div className="underline">
                <span></span>
              </div>
            </h3>
            want to know about our next project? submit your mailing address.
            <form className="newsletter">
              <i>
                <FaEnvelope style={{ zIndex: "3", opacity: "0.5" }} />
              </i>
              <input
                type="email"
                placeholder="Enter email address"
                required
                id="email-input"
              ></input>
              <button type="submit" style={{ marginLeft: "20px" }}>
                <span>
                  <FaArrowAltCircleRight
                    style={{ color: "black", fontSize: "15px", display: "flex" }}
                  />
                </span>
              </button>
            </form>
            <div className="social-icons">
              <i>
                <FaFacebook style={{ color: "black" }} />
              </i>
              <i>
                <FaTwitter style={{ color: "black" }} />
              </i>
              <i>
                <FaInstagram style={{ color: "black" }} />
              </i>
              <i>
                <FaWhatsapp style={{ color: "black" }} />
              </i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">BrightMartinsLTD &copy; 2022 - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
