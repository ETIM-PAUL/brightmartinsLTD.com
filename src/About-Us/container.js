import React from "react";
import GetInTouch from "../FrontPage/inTouch";
import map from "../backgroundImages/map.png";
import { services } from "../utils/data";

const About = () => {
  function showInfo() {
    let info = document.getElementById("object-info");
    info.classList.toggle("show-info");
  }
  return (
    <>
      <main className=" vc_custom_1535019192283 " data-stellar-background-ratio="0.6">
        <div className="container">
          <header className="main-header">
            <h1>About BrightMartinsLTD</h1>
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

                  <section className="about  section">
                    <div className="container">
                      <div className="entry">
                        <h3 className="entry-title">
                          We are Builders, Managers, Designers, etc
                          <span className="text-primary">.</span>
                        </h3>
                        <div className="entry-text">
                          For each project we establish relationships with partners who we
                          know will help us create added value for your project. As well
                          as bringing together the public and private sectors, we make
                          sector-overarching links to gather knowledge and to learn from
                          each other. The way we undertake projects is based on
                          permanently applying values that reinforce each other:
                          socio-cultural value, experiental value, building-technical
                          value and economical value. This way of working allows us to
                          raise your project to a higher level.{" "}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Services --> */}

                  <section className="services section ">
                    <div className="container">
                      <header className="section-header">
                        <h2 className="section-title">
                          <span className="text-primary">OUR</span> Services{" "}
                        </h2>
                      </header>
                      <div className="section-content">
                        <div className="row-services row-base row" style={{ display: "flex", flexWrap: "wrap" }}>
                          {services.map((item, index) => (

                            <div
                              key={index}
                              className="col-base col-service col-sm-6 col-md-4 wow fadeInUp"
                              data-wow-delay=""
                              style={{ visibility: "visible", animationName: "fadeInUp" }}
                            >
                              <div className="service-item" >
                                <img
                                  alt=""
                                  src={item.src}
                                />

                                <h4>{item.title} </h4>
                                <p>
                                  {item.content}
                                </p>
                              </div>
                            </div>
                          ))}

                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Objects --> */}

                  <section className="objects section  ">
                    <div className="container">
                      <header className="section-header">
                        <h2 className="section-title">
                          WE ARE <span className="text-primary">here</span>
                        </h2>
                      </header>
                      <div className="section-content">
                        <div className="objects">
                          <img alt="" className="img-responsive" src={map} />

                          {/* <!-- Objects --> */}
                          <div
                            className="object-label"
                            style={{ left: "47%", top: "59%" }}
                            onClick={() => showInfo()}
                          >
                            <div className="object-info" id="object-info">
                              <h3 className="object-title">Calabar-Lagos-Abuja</h3>
                              <div className="object-content">
                                +234 818 658 7786
                                <br />
                                info@brightmartinsLTD.com
                                <br />
                                Calabar, Abuja, Lagos - Nigeria{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Contacts --> */}

                  <GetInTouch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
