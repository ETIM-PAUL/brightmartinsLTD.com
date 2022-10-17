import React from "react";
import Footer from "../Footer";
import GetInTouch from "../FrontPage/inTouch";

const About = () => {
  return (
    <>
      <main
        className=" main-projects bg-projects vc_custom_1535019192283 "
        data-stellar-background-ratio="0.6"
        style={{ backgroundPosition: "50% 0px" }}
      >
        <div className="container">
          <header className="main-header">
            <h1>Contact Us</h1>
            <div className="project-title-info"></div>
          </header>
        </div>
      </main>

      <div className="layout">
        <div className="content">
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default About;
