import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Index from "./FrontPage";
import AboutUs from "./About-Us";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Projects from "./Projects";
import Contact from "./Contact-Us";
import { active, inactive, inactiveAni, links } from "./utils/operations";
import imgj from "./backgroundImages/logo.webp";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

<div className="App">
  <TawkMessengerReact propertyId="property_id" widgetId="default" />
</div>;
function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    let link = document.getElementById("menu-collapse");
    link.classList.toggle("menu-collapse-sticky");
  };

  return (
    <>
      <ToastContainer position="top-center" autoclose={3000} draggable />
      <Router>
        <nav className="navbar-desctop visible-md visible-lg ainimated slideInDown affix-top">
          <div className="container">
            <a href="#top" className="brand js-target-scroll">
              <img alt="brand" height="40px" className="center-block" src={imgj} />
            </a>
            <div className="menu-main-container">
              <ul id="menu-main" className="navbar-desctop-menu ">
                {links.map((item, index) => (
                  <li
                    key={index}
                  // className="hover-link"
                  >
                    <NavLink to={`/${item.link}`} aria-current="page" className={({ isActive }) => isActive ? active : inactive}>
                      {item.title}
                    </NavLink>
                  </li>

                ))}
              </ul>
            </div>{" "}
          </div>
        </nav>


        <nav
          className="navbar-mobile animated slideInDown"
          id="nav-mobile"
          style={{ display: "none" }}
        >
          <a href="#top" className="brand js-target-scroll">
            <span className="text-primary"></span>{" "}
          </a>
          <div
            className="navbar-collapse collapse"
            id="navbar-mobile"
            aria-expanded="false"
            style={{ height: "0px" }}
          >
            <ul id="menu-main-1" className="navbar-nav-mobile ">
              <img
                alt="brand"
                height="40px"
                className="center-block"
                src={imgj}
                style={{ marginLeft: "20px" }}
              />
              {links.map((item, index) => (
                <li
                  key={index}
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1901"
                >
                  <NavLink to={`/${item.link}`} aria-current="page" className={({ isActive }) => isActive ? active : inactiveAni}>
                    {item.title}
                  </NavLink>
                </li>

              ))}
            </ul>{" "}
          </div>
        </nav>

        <nav
          className="small-screen animated slideInDown"
          id="nav-screen-mobile"
          style={{ display: "none" }}
        >
          <div onClick={handleClick} className="screen-menu">
            {clicked ? (
              <FaBars className="menu-iconn cancel" />
            ) : (
              <FaBars className="menu-iconn" />
            )}
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
