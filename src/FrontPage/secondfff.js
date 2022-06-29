import React, {useState} from "react";
import "./light.css";
import "./slides.css";
import "../css/owl.carousel.css";
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import member1 from "../backgroundImages/img1.jpg";
import GetInTouch from "./inTouch";
import imgj from "../backgroundImages/logo.webp";
import construction from "../img/construction.jpeg";
import construct from "../img/construct.jpeg";
import archi from "../img/archi.jpeg";
import img4 from "../backgroundImages/img4.jpg";
import NavigationHeader from "./navigation";
import * as dat from "dat.gui";
import freight from "../img/freight.jpeg";

const ProjectImage = ({projectName, img}) => {
  return (
    <div className="owl-item" style={{width: "357px"}}>
      <div className="project ">
        <a className="link" href="/">
          <figure>
            <img src={img} alt="project-gallery" />

            <figcaption>
              <h3 className="project-title">{projectName}</h3>
              <h4 className="project-category">
                BrightMartinsLTD
                <br />
              </h4>
              <div className="project-zoom"></div>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};
const CompanyTeam = ({name, role}) => {
  return (
    <div className="member" data-aos="fade-up" data-aos-delay="100">
      <div className="member-img">
        <img src={member1} alt="member-face" width={300} />
      </div>
      <div className="social-media">
        <a>
          <FaTwitter />
        </a>
        <a>
          <FaFacebook />
        </a>
        <a>
          <FaLinkedin />
        </a>
      </div>
      <div className="member-info">
        <h5>{name}</h5>
        <span>{role}</span>
      </div>
    </div>
  );
};
const Content = () => {
  const images = [construct, construction, construct, archi];
  const [imageIndex, setImageIndex] = useState(0);
  const slideLength = images.length;
  let index = imageIndex;
  // setInterval(function () {
  //   nextImage(imageIndex);
  // }, 15000);

  const prevImage = () => {
    let css = document.querySelector(".animated-slides");
    css.classList.remove("matrix-slide");
    const setImage = () => {
      if (imageIndex >= 0) {
        if (imageIndex > 0) {
          setImageIndex((index -= 1));
        } else if (imageIndex === 0) {
          setImageIndex(images.length - 1);
        }
      }
    };
    setTimeout(function () {
      setImage();
    }, 2000);
  };
  const nextImage = (imageIndex) => {
    let css = document.querySelector(".animated-slides");
    let text = document.querySelector(".animate");
    let secText = document.querySelector(".contentText");
    setTimeout(function () {
      text.classList.remove("two");
      text.classList.toggle("animate-text");
      secText.classList.toggle("hid");
      secText.classList.remove("exit");
    }, 500);
    setTimeout(() => {
      css.classList.toggle("hinge");
    }, 1500);
    setTimeout(function setImage() {
      css.classList.toggle("hinge");
      text.classList.toggle("animate-text");
      text.classList.add("two");
      secText.classList.add("exit");
      secText.classList.toggle("hid");

      if (imageIndex >= 0) {
        if (imageIndex === 3) {
          setImageIndex(0);
        } else if (imageIndex !== slideLength.length - 1) {
          setImageIndex((index += 1));
        }
      }
    }, 3000);
  };

  return (
    <>
      <NavigationHeader index={imageIndex} />
      <div className="layout" style={{marginTop: "-20px"}}>
        <main className="main" style={{height: "102.3vh"}}>
          <div className="arrow-left split" onClick={() => prevImage()}></div>
          <div className="arrow-right split" onClick={() => nextImage()}></div>
          <div id="div">
            <img src={images[imageIndex]} alt="images" class="animated-slides" />
            {/* <div className="contentImg entrance">
              <p>Architecture & Construction.</p>
            </div> */}
            <div class="animate two contentImg">
              <span>a</span>
              <span>r</span>
              <span>c</span>
              <span>h</span>
              <span>i</span>
              <span>t</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>u</span>
              <span>r</span>
              <span>e</span>
              <span>&</span>
              <span>c</span>
              <span>o</span>
              <span>n</span>
              <span>s</span>
              <span>t</span>
              <span>r</span>
              <span>u</span>
              <span>c</span>
              <span>t</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
            </div>

            <div className="contentText exit">
              <p>
                If you dream of designing, planning, managing, building or maintaining the
                structures you want, work and play, then brightmatinsltd is for you.
              </p>
            </div>
          </div>
        </main>

        <div className="content">
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                  <section id="about" className="about section">
                    <div className="container">
                      <div className="section-header text-uppercase">
                        <h2 className="section-title">
                          About <span className="text">BrightMartinsLTD</span>
                        </h2>
                        <strong className="fade-title-left">About</strong>
                      </div>
                      <div className="section-content">
                        <div className="row-base row">
                          <div className="col-base col-sm-6 col-md-4">
                            <h3 className="col-about-title">
                              We are Builders, Managers, Transporters, Designers, etc
                              <span className="text-warning">.</span>
                            </h3>
                            <div className="col-about-info">
                              <p>
                                For each project we establish relationships with partners
                                who we know will help us create added value for your
                                project. As well as bringing together the public and real
                                estate investing, we make sector-overarching links to
                                gather knowledge and to learn from each other. The way we
                                undertake projects is based on permanently applying values
                                that reinforce each other: socio-cultural value,
                                experiental value, building-technical value and economical
                                value. We also have houses for sale and provide facilities
                                such as rent to own homes
                              </p>
                            </div>
                          </div>
                          <div className="col-base col-about-spec col-sm-6 col-md-4">
                            <h3 className="col-about-title">
                              OUR SPECIALIZATIONS <span className="text-primary"></span>
                            </h3>
                            <div className="service-item">
                              <img
                                alt=""
                                width="46"
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-architecture.png"
                              />
                              <h4 classname="services-items"> ARCHITECTURE </h4>
                            </div>
                            <div className="service-item">
                              <img
                                alt=""
                                width="46"
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-architecture.png"
                              />
                              <h4 classname="services-items">BUILDING CONSTRUCTION</h4>
                            </div>
                            <div className="service-item">
                              <img
                                alt=""
                                width="46"
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-interiors.png"
                              />
                              <h4 classname="services-items">INTERIORS</h4>
                            </div>
                            <div className="service-item">
                              <img
                                alt=""
                                width="46"
                                src="https://www.carrillionng.com.ng/wp-content/uploads/2011/05/icon-planing.png"
                              />
                              <h4 classname="services-items">Frieght Services</h4>
                            </div>
                          </div>
                          <div className="clearfix visible-sm"></div>
                          <div className="col-base col-about-img col-sm-6 col-md-4">
                            <img alt="" className="img-responsive" src={imgj} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* <div className="clearfix visible-xll"></div> */}

                  {/* <section className="section">
                    <div className="container">
                      <div>
                        <h6>.</h6>
                      </div>
                    </div>
                  </section> */}

                  <section
                    style={{backgroundColor: "#000"}}
                    id="team"
                    className="team section section-bg"
                  >
                    <div className="container">
                      <div className="section-title">
                        <h2 className="">
                          OUR <span className="text-primary">TEAM </span>
                        </h2>
                      </div>
                      <div className="members-container row">
                        <CompanyTeam name="Ekong Bright" role="C.E.O" />
                        <CompanyTeam name="Joseph Odulaye" role="Lead-Engineer" />
                        <CompanyTeam name="Runyi Uche" role="HR- Manager" />
                      </div>
                    </div>
                  </section>

                  <section className="">
                    <div className="container">
                      <h2 className="text-center">
                        OUR <span className="text-primary">PROJECTS </span>
                      </h2>
                    </div>
                    <div className="section-content">
                      <div
                        className="projects-carousel js-projects-carousel js-projects-gallery owl-carousel owl-theme"
                        style={{opacity: "1", display: "block"}}
                      >
                        <div className="owl-wrapper-outer">
                          <div
                            className="owl-wrapper"
                            style={{
                              width: "1000%",
                              left: "0px",
                              display: "block",
                              transition: "all 0ms ease 0s",
                              transhtmlForm: "translate3d(0px, 0px, 0px)",
                            }}
                          >
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

                          {/* <div className="owl-controls clickable">
                            <div className="owl-buttons">
                              <div className="owl-prev">prev</div>
                              <div className="owl-next">next</div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="experience section ">
                    <div className="container">
                      <div className="text-parallax" data-stellar-background-ratio="0.85">
                        <div className="text-parallax-content">05</div>
                      </div>
                      <h4
                        className="experience-info wow fadeInRight"
                        style={{visibility: "visible", animationName: "fadeInRight"}}
                      >
                        <span className="years">Years of success</span>
                        <br /> in the building industry and freight services{" "}
                      </h4>
                    </div>
                  </section>
                  <GetInTouch />
                </div>
              </div>
            </div>
          </div>

          <div className="page-lines">
            <div className="container">
              <div className="col-line col-xs-4">
                <div className="line"></div>
              </div>
              <div className="col-line col-xs-4">
                <div className="line"></div>
              </div>
              <div className="col-line col-xs-4">
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
