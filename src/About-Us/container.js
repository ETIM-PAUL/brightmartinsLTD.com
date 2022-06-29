import React from "react";
import GetInTouch from "../FrontPage/inTouch";
import map from "../backgroundImages/map.png";

const About = () => {
  function showInfo() {
    let info = document.getElementById("object-info");
    console.log("id");
    info.classList.toggle("show-info");
  }
  return (
    <>
      <main class=" vc_custom_1535019192283 " data-stellar-background-ratio="0.6">
        <div class="container">
          <header class="main-header">
            <h1>About BrightMartinsLTD</h1>
            <div class="project-title-info"></div>
          </header>
        </div>

        {/* <!-- Lines --> */}

        <div class="page-lines">
          <div class="container">
            <div class="col-line col-xs-4">
              <div class="line"></div>
            </div>
            <div class="col-line col-xs-4">
              <div class="line"></div>
            </div>
            <div class="col-line col-xs-4">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </main>
      <div class="layout">
        <div class="content">
          <div class="vc_row wpb_row vc_row-fluid">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  {/* <!-- About  --> */}

                  <section class="about  section">
                    <div class="container">
                      <div class="entry">
                        <h3 class="entry-title">
                          We are Builders, Managers, Designers, etc
                          <span class="text-primary">.</span>
                        </h3>
                        <div class="entry-text">
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

                  <section class="services section ">
                    <div class="container">
                      <header class="section-header">
                        <h2 class="section-title">
                          <span class="text-primary">OUR</span> Services{" "}
                        </h2>
                      </header>
                      <div class="section-content">
                        <div class="row-services row-base row">
                          <div
                            class="col-base col-service col-sm-6 col-md-4 wow fadeInUp"
                            data-wow-delay=""
                            style={{visibility: "visible", animationName: "fadeInUp"}}
                          >
                            <div class="service-item">
                              <img
                                alt=""
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-architecture.png"
                              />

                              <h4>ARCHITECTURAL AND INTERIOR DESIGN </h4>
                              <p>
                                Our design team constitute of well trained and skilful
                                professionals who create master pieces of design, not
                                neglecting the functionality, effective space flow and
                                aesthetic integrity. We pay attention to every straights
                                and curves, ensuring that our buildings always last into
                                time and seasons and still maintaining its functional
                                effectiveness, Aesthetics. Comfort and Luxury are the
                                major factors we consider in our interior spaces. With the
                                efficient blend of top notch quality finishes from any
                                where in the world, we give life to every of our interior
                                spaces.
                              </p>
                            </div>
                          </div>

                          <div
                            class="col-base col-service col-sm-6 col-md-4 wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.3s",
                              animationame: "fadeInUp",
                            }}
                          >
                            <div class="service-item">
                              <img
                                alt=""
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-interiors.png"
                              />

                              <h4>CONSTRUCTION AND ESTATE MANAGEMENT</h4>
                              <p>
                                We are equipped with the manpower and machinery to
                                carryout any level of construction. Our construction
                                materials are carefully selected to ensure structural
                                integrity. We dont just minimize our serives in the
                                building industry to only construction of buildings, we
                                also offer services when it comes to managing buildings,
                                estates, etc. We are wide network of attorneys, surveyors,
                                realtors, agents, we make sure, your property is well
                                managed, reducing the stress of managing a vast number of
                                buildings.
                              </p>
                            </div>
                          </div>

                          <div
                            class="col-base col-service col-sm-6 col-md-4 wow fadeInUp"
                            data-wow-delay="0.6s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.6s",
                              animationName: "fadeInUp",
                            }}
                          >
                            <div class="service-item">
                              <img
                                alt=""
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-planing.png"
                              />

                              <h4>FREIGHT</h4>
                              <p>
                                We have the resources to ship your product, be it
                                internationally or locally from one location to another.
                                We can transport products using the means of air, water
                                and land. We make sure your products are moved from point
                                A to point B, without interfernce with local or
                                international laws. With brightmartinsltd, your products
                                are sure to be delivered to a warehouse, a docking yard,
                                your office, your house, to any storage facitlity of your
                                choice.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <!-- Objects --> */}

                  <section class="objects section  ">
                    <div class="container">
                      <header class="section-header">
                        <h2 class="section-title">
                          WE ARE <span class="text-primary">here</span>
                        </h2>
                      </header>
                      <div class="section-content">
                        <div class="objects">
                          <img alt="" class="img-responsive" src={map} />

                          {/* <!-- Objects --> */}
                          <div
                            className="object-label"
                            style={{left: "47%", top: "59%"}}
                            onClick={() => showInfo()}
                          >
                            <div class="object-info" id="object-info">
                              <h3 class="object-title">Calabar-Lagos-Abuja</h3>
                              <div class="object-content">
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

          {/* <!-- Lines --> */}

          <div class="page-lines">
            <div class="container">
              <div class="col-line col-xs-4">
                <div class="line"></div>
              </div>
              <div class="col-line col-xs-4">
                <div class="line"></div>
              </div>
              <div class="col-line col-xs-4">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
