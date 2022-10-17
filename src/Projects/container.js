import React from "react";
import Footer from "../Footer";
import GetInTouch from "../FrontPage/inTouch";
import ProjectImage from "./projectGallery";
import construction from "../img/construction.jpeg";
import freight from "../img/freight.jpeg";

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
            <h1>Projects</h1>
            <div className="project-title-info"></div>
          </header>
        </div>
      </main>

      <div className="layout">
        <div className="content">
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  {/* <!-- About  --> */}
                  <section className="projects">
                    <div className="js-projects-gallery">
                      <div className=" projects_block row">
                        <ProjectImage
                          projectName="Interior Design and Re-Modelling"
                          img="https://www.carrillionng.com.ng/wp-content/uploads/2019/04/featured-1.jpg"
                        />
                        <ProjectImage projectName="Freight Delivery" img={freight} />
                        <ProjectImage
                          projectName="Architecture and Construction"
                          img={construction}
                        />
                        <ProjectImage
                          projectName="Real Estate Management"
                          img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredagnes5.jpg"
                        />
                      </div>
                    </div>
                  </section>

                  {/* <!-- Contacts --> */}
                </div>
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
