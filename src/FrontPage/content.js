import React from "react";
import "./light.css";
import "../css/owl.carousel.css";
import {FaFacebook, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import member1 from "../backgroundImages/img1.jpg";
import GetInTouch from "./inTouch";

const ProjectImage = ({projectName, img}) => {
  return (
    <div className="owl-item" style={{width: "357px"}}>
      <div className="project ">
        <a
          className="link"
          href="https://www.carrillionng.com.ng/projects/the-amusa-4/"
          title=" The Amusa 4"
        >
          <figure>
            <img src={img} />

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
const CompanyTeam = ({projectName}) => {
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
          <FaYoutube />
        </a>
        <a>
          <FaLinkedin />
        </a>
      </div>
      <div className="member-info">
        <h5>Bright Martins Ekong</h5>
        <span>Chief Executive Officer</span>
      </div>
    </div>
  );
};
const Content = () => {
  // function reveal() {
  //   var reveals = document.getElementById("animate-submit");

  //   var windowHeight = window.innerHeight;
  //   var elementTop = reveals.getBoundingClientRect().top;
  //   var elementVisible = 150;

  //   if (elementTop < windowHeight - elementVisible) {
  //     reveals.classList.add("active");
  //   } else {
  //     reveals.classList.remove("active");
  //   }
  // }

  // window.addEventListener("scroll", reveal);

  return (
    <>
      <div className="layout" style={{marginTop: "-20px"}}>
        <main className="main" style={{height: "100vh"}}>
          <div className="arrow-left"></div>
          <div className="arrow-right"></div>
          <div class="rev_slider_wrapper">
            <div id="rev_slider" class="rev_slider fullscreenbanner">
              {/* <!-- Main image--> */}

              <div
                class="forcefullwidth_wrapper_tp_banner"
                id="rev_slider_1_1_forcefullwidth"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                <div
                  id="rev_slider_1_1_wrapper"
                  class="rev_slider_wrapper fullscreen-container"
                  data-source="gallery"
                  style={{
                    background: "transparent",
                    padding: "0px",
                    height: "944px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    position: "absolute",
                    maxHeight: "none",
                    overflow: "visible",
                    width: "1523px",
                    left: "0px",
                  }}
                >
                  {/* <!-- START REVOLUTION SLIDER 5.4.8 fullscreen mode --> */}
                  <div
                    id="rev_slider_1_1"
                    class="rev_slider fullscreenbanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus"
                    style={{
                      maxHeight: "none",
                      marginTop: "0px",
                      marginBottom: "0px",
                      height: "100%",
                    }}
                    data-version="5.4.8"
                    data-slideactive="rs-10"
                  >
                    <ul
                      class="tp-revslider-mainul"
                      style={{
                        visibility: "visible",
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        maxHeight: "none",
                      }}
                    >
                      {/* <!-- SLIDE  --> */}
                      <li
                        data-index="rs-10"
                        data-transition="slotzoom-horizontal"
                        data-slotamount="7"
                        data-hideafterloop="0"
                        data-hideslideonmobile="off"
                        data-easein="default"
                        data-easeout="default"
                        data-masterspeed="1000"
                        data-delay="9000"
                        data-rotate="0"
                        data-saveperformance="off"
                        class="rev-slidebg tp-revslider-slidesli active-revslide"
                        data-title="Slide"
                        data-param1=""
                        data-param2=""
                        data-param3=""
                        data-param4=""
                        data-param5=""
                        data-param6=""
                        data-param7=""
                        data-param8=""
                        data-param9=""
                        data-param10=""
                        data-description=""
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          zIndex: "20",
                          visibility: "inherit",
                          opacity: "1",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                        }}
                      >
                        {/* <!-- MAIN IMAGE --> */}
                        <div
                          class="slotholder"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            zIndex: "0",
                            width: "100%",
                            height: "100%",
                            visibility: "inherit",
                            opacity: "1",
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          {/* <!--Runtime Modification - Img tag is Still Available for SEO Goals in Source -  */}
                          <img
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/agnes6_1.jpg"
                            alt="Agnes 6_Luxury Lekki Property"
                            title="Agnes 6_Luxury Lekki Property_5"
                            width="700"
                            height="668"
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            class="rev-slidebg defaultimg"
                            data-no-retina=""
                          />
                          {/* --> */}
                          <div
                            class="tp-bgimg defaultimg "
                            data-bgcolor="undefined"
                            style={{
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `url("https://www.carrillionng.com.ng/wp-content/uploads/2021/11/agnes6_1.jpg")`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              width: "100%",
                              height: "100%",
                              opacity: "1",
                              visibility: "inherit",
                              zIndex: "20",
                            }}
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/agnes6_1.jpg"
                          ></div>
                        </div>
                        {/* <!-- LAYERS --> */}

                        {/* <!-- LAYER NR. 1 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "visible",
                            left: "650px",
                            top: "399px",
                            zIndex: "5",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption tp-resizeme splitted"
                                id="slide-10-layer-1"
                                data-x="['right','right','right','right']"
                                data-hoffset="['-18','-18','0','15']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-35','-35','-25','-35']"
                                data-fontsize="['50','45','30','30']"
                                data-lineheight="['80','75','65','55']"
                                data-width="['1100','700','450','450']"
                                data-height="none"
                                data-whitespace="['nowrap','normal','normal','normal']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":500,"split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];opacity:0;","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  textTransform: "uppercase",
                                  zIndex: "5",
                                  maxWidth: "700px",
                                  whiteSpace: "normal",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Oswald, sans-serif",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  textAlign: "left",
                                  lineHeight: "75px",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "16px",
                                  fontSize: "45px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  opacity: 1,
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                }}
                              >
                                <div
                                  class="tp-splitted tp-linesplit"
                                  style={{
                                    display: "block",
                                    textAlign: "right",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                    }}
                                    class="tp-splitted tp-wordsplit"
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      A
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      g
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      n
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      e
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      s
                                    </div>
                                  </div>{" "}
                                  <div
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                    }}
                                    class="tp-splitted tp-wordsplit"
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      V
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      I
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 2 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "visible",
                            left: "746px",
                            top: "547px",
                            zIndex: "6",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-10-layer-2"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['75','105','105','105']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power1.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power1.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "6",
                                  maxWidth: "none",
                                  whiteSpace: "nowrap",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Montserratlight",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  textAlign: "left",
                                  lineHeight: "26px",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "0px",
                                  fontSize: "16px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  opacity: 1,
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                }}
                              >
                                In the heart of Lagos, spread across a vast expanse in
                                Lekki Phase 1.
                                <br /> Agnes VI is where opulence thrives{" "}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 3 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "visible",
                            left: "1140px",
                            top: "662px",
                            zIndex: "7",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-10-layer-3"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['195','215','215','215']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "7",
                                  maxWidth: "none",
                                  whiteSpace: "nowrap",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  textAlign: "left",
                                  lineHeight: "26px",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "0px",
                                  fontSize: "16px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  opacity: 1,
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                }}
                              >
                                <a
                                  href="https://www.carrillionng.com.ng/projects/agnes-vi/"
                                  class="btn"
                                  style={{
                                    transition: "none 0s ease 0s",
                                    textAlign: "inherit",
                                    lineHeight: "20px",
                                    borderWidth: "0px",
                                    margin: "0px 0px 0px 8px",
                                    padding: "15px 30px 14px",
                                    letterSpacing: "2px",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                  }}
                                >
                                  Look more{" "}
                                  <i
                                    class="icon-next"
                                    style={{
                                      transition: "none 0s ease 0s",
                                      textAlign: "inherit",
                                      lineHeight: "20px",
                                      borderWidth: "0px",
                                      margin: "0px 0px 0px 8px",
                                      padding: "0px",
                                      letterSpacing: "2px",
                                      fontWeight: "400",
                                      fontSize: "14px",
                                    }}
                                  ></i>
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- SLIDE  --> */}
                      <li
                        data-index="rs-26"
                        data-transition="slotzoom-horizontal"
                        data-slotamount="7"
                        data-hideafterloop="0"
                        data-hideslideonmobile="off"
                        data-easein="default"
                        data-easeout="default"
                        data-masterspeed="1000"
                        data-delay="9000"
                        data-rotate="0"
                        data-saveperformance="off"
                        class="rev-slidebg tp-revslider-slidesli"
                        data-title="Slide"
                        data-param1=""
                        data-param2=""
                        data-param3=""
                        data-param4=""
                        data-param5=""
                        data-param6=""
                        data-param7=""
                        data-param8=""
                        data-param9=""
                        data-param10=""
                        data-description=""
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          zIndex: "18",
                          visibility: "hidden",
                          opacity: "0",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                        }}
                      >
                        {/* <!-- MAIN IMAGE --> */}
                        <div
                          class="slotholder"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            zIndex: "0",
                            width: "100%",
                            height: "100%",
                            visibility: "inherit",
                            opacity: "1",
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          {/* <!--Runtime Modification - Img tag is Still Available for SEO Goals in Source -  */}
                          <img
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2019/04/amusa8_3_overlay.jpg"
                            alt="Amusa 8_Luxury Lekki Property"
                            title="Amusa 8_Luxury Lekki Property"
                            width="700"
                            height="668"
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            class="rev-slidebg defaultimg"
                            data-no-retina=""
                          />
                          {/* --> */}
                          <div
                            class="tp-bgimg defaultimg "
                            data-bgcolor="undefined"
                            style={{
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `url("https://www.carrillionng.com.ng/wp-content/uploads/2019/04/amusa8_3_overlay.jpg")`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              width: "100%",
                              height: "100%",
                              opacity: "0",
                              visibility: "inherit",
                              zIndex: "20",
                            }}
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2019/04/amusa8_3_overlay.jpg"
                          ></div>
                        </div>
                        {/* <!-- LAYERS --> */}

                        {/* <!-- LAYER NR. 4 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                            left: "650px",
                            top: "399px",
                            zIndex: "5",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption tp-resizeme splitted"
                                id="slide-26-layer-1"
                                data-x="['right','right','right','right']"
                                data-hoffset="['-18','-18','0','15']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-35','-35','-25','-35']"
                                data-fontsize="['50','45','30','30']"
                                data-lineheight="['80','75','65','55']"
                                data-width="['1100','700','450','450']"
                                data-height="none"
                                data-whitespace="['nowrap','normal','normal','normal']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":500,"split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];opacity:0;","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "5",
                                  minWidth: "700px",
                                  maxWidth: "700px",
                                  whiteSpace: "normal",
                                  fontSize: "45px",
                                  lineHeight: "75px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Oswald, sans-serif",
                                  textTransform: "uppercase",
                                  letterSpacing: "16px",
                                  textAlign: "left",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  minHeight: "0px",
                                  maxHeight: "none",
                                  opacity: "0.0001",
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 77, 0, 1)",
                                }}
                              >
                                <div
                                  class="tp-splitted tp-linesplit"
                                  style={{
                                    display: "block",
                                    textAlign: "right",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                    }}
                                    class="tp-splitted tp-wordsplit"
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      A
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      m
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      u
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      s
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      a
                                    </div>
                                  </div>{" "}
                                  <div
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                    }}
                                    class="tp-splitted tp-wordsplit"
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      8
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      -
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      1
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      0
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 5 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                            left: "831px",
                            top: "547px",
                            zIndex: "6",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-26-layer-2"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['75','105','105','105']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power1.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power1.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "6",
                                  whiteSpace: "nowrap",
                                  fontSize: "18px",
                                  lineHeight: "30px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Montserratlight, sans-serif",
                                  textAlign: "left",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "0px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  maxWidth: "none",
                                  opacity: "0.0001",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                  transformOrigin: "50% 50% 0px",
                                }}
                              >
                                The Amusa 8-10 is located in an exclusive community
                                <br /> on Ladipo Latinwo Crescent, in the heart of Lekki
                                Phase 1.
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 6 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                            left: "1140px",
                            top: "662px",
                            zIndex: "7",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-26-layer-3"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['195','215','215','215']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "7",
                                  maxWidth: "none",
                                  whiteSpace: "nowrap",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  textAlign: "left",
                                  lineHeight: "26px",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "0px",
                                  fontSize: "16px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  opacity: 1,
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                }}
                              >
                                <a
                                  href="https://www.carrillionng.com.ng/projects/amusa-8/"
                                  class="btn"
                                  style={{
                                    transition: "none 0s ease 0s",
                                    textAlign: "inherit",
                                    lineHeight: "20px",
                                    borderWidth: "0px",
                                    margin: "0px 0px 0px 8px",
                                    padding: "15px 30px 14px",
                                    letterSpacing: "2px",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                  }}
                                >
                                  Look more{" "}
                                  <i
                                    class="icon-next"
                                    style={{
                                      transition: "none 0s ease 0s",
                                      textAlign: "inherit",
                                      lineHeight: "20px",
                                      borderWidth: "0px",
                                      margin: "0px 0px 0px 8px",
                                      padding: "0px",
                                      letterSpacing: "2px",
                                      fontWeight: "400",
                                      fontSize: "14px",
                                    }}
                                  ></i>
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- SLIDE  --> */}
                      <li
                        data-index="rs-27"
                        data-transition="slotzoom-horizontal"
                        data-slotamount="7"
                        data-hideafterloop="0"
                        data-hideslideonmobile="off"
                        data-easein="default"
                        data-easeout="default"
                        data-masterspeed="1000"
                        data-delay="9000"
                        data-rotate="0"
                        data-saveperformance="off"
                        class="rev-slidebg tp-revslider-slidesli"
                        data-title="Slide"
                        data-param1=""
                        data-param2=""
                        data-param3=""
                        data-param4=""
                        data-param5=""
                        data-param6=""
                        data-param7=""
                        data-param8=""
                        data-param9=""
                        data-param10=""
                        data-description=""
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                          zIndex: "18",
                          visibility: "hidden",
                          opacity: "0",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                        }}
                      >
                        {/* <!-- MAIN IMAGE --> */}
                        <div
                          class="slotholder"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            zIndex: "0",
                            width: "100%",
                            height: "100%",
                            visibility: "inherit",
                            opacity: "1",
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          <img
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/vi.jpg"
                            alt="Agnes 5_Luxury Lekki Property"
                            title="Agnes 5_Luxury Lekki Property"
                            width="700"
                            height="668"
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            class="rev-slidebg defaultimg"
                            data-no-retina=""
                          />
                          {/* --> */}
                          <div
                            class="tp-bgimg defaultimg "
                            data-bgcolor="undefined"
                            style={{
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `url("https://www.carrillionng.com.ng/wp-content/uploads/2021/11/vi.jpg")`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              width: "100%",
                              height: "100%",
                              opacity: "0",
                              visibility: "inherit",
                              zIndex: "20",
                            }}
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/vi.jpg"
                          ></div>
                        </div>
                        {/* <!-- LAYERS --> */}

                        {/* <!-- LAYER NR. 7 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                            left: "650px",
                            top: "399px",
                            zIndex: "5",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption tp-resizeme splitted"
                                id="slide-27-layer-1"
                                data-x="['right','right','right','right']"
                                data-hoffset="['-18','-18','0','15']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-35','-35','-25','-35']"
                                data-fontsize="['50','45','30','30']"
                                data-lineheight="['80','75','65','55']"
                                data-width="['1100','700','450','450']"
                                data-height="none"
                                data-whitespace="['nowrap','normal','normal','normal']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":500,"split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];opacity:0;","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "5",
                                  minWidth: "700px",
                                  maxWidth: "700px",
                                  whiteSpace: "normal",
                                  fontSize: "45px",
                                  lineHeight: "75px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Oswald, sans-serif",
                                  textTransform: "uppercase",
                                  letterSpacing: "16px",
                                  textAlign: "left",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  minHeight: "0px",
                                  maxHeight: "none",
                                  opacity: "0.0001",
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 77, 0, 1)",
                                }}
                              >
                                <div
                                  class="tp-splitted tp-linesplit"
                                  style={{
                                    display: "block",
                                    textAlign: "right",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                    }}
                                    class="tp-splitted tp-wordsplit"
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      A
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      g
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      n
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      e
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      s
                                    </div>
                                  </div>{" "}
                                  <div
                                    style={{
                                      position: "relative",
                                      display: "inline-block",
                                    }}
                                    class="tp-splitted tp-wordsplit"
                                  >
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      I
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        display: "inline-block",
                                        visibility: "inherit",
                                        opacity: "1",
                                        transform:
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                        transformOrigin: "50% 50% 0px",
                                      }}
                                      class="tp-splitted tp-charsplit"
                                    >
                                      V
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 8 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                            left: "831px",
                            top: "547px",
                            zIndex: "6",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-27-layer-2"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['75','105','105','105']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power1.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power1.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "6",
                                  whiteSpace: "nowrap",
                                  fontSize: "18px",
                                  lineHeight: "30px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Montserratlight, sans-serif",
                                  textAlign: "left",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "0px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  maxWidth: "none",
                                  opacity: "0.0001",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                                  transformOrigin: "50% 50% 0px",
                                }}
                              >
                                Agnes IV duplex is where opulence thrives, it is truly one
                                of a <br />
                                kind because its set on a 500 square meter{" "}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 9 --> */}
                        <div
                          class="tp-parallax-wrap"
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                            left: "1140px",
                            top: "662px",
                            zIndex: "7",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{
                                position: "absolute",
                                display: "block",
                                overflow: "hidden",
                                transform: "matrix(1, 0, 0, 1, 0, 0)",
                              }}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-27-layer-3"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['195','215','215','215']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "7",
                                  maxWidth: "none",
                                  whiteSpace: "nowrap",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  visibility: "inherit",
                                  transition: "none 0s ease 0s",
                                  textAlign: "left",
                                  lineHeight: "26px",
                                  borderWidth: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  letterSpacing: "0px",
                                  fontSize: "16px",
                                  minHeight: "0px",
                                  minWidth: "0px",
                                  maxHeight: "none",
                                  opacity: 1,
                                  transformOrigin: "50% 50% 0px",
                                  transform:
                                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 89.25, 0, 1)",
                                }}
                              >
                                <a
                                  href="https://www.carrillionng.com.ng/projects/agnes-iv/"
                                  class="btn"
                                  style={{
                                    transition: "none 0s ease 0s",
                                    textAlign: "inherit",
                                    lineHeight: "20px",
                                    borderWidth: "0px",
                                    margin: "0px 0px 0px 8px",
                                    padding: "15px 30px 14px",
                                    letterSpacing: "2px",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                  }}
                                >
                                  Look more{" "}
                                  <i
                                    class="icon-next"
                                    style={{
                                      transition: "none 0s ease 0s",
                                      textAlign: "inherit",
                                      lineHeight: "20px",
                                      borderWidth: "0px",
                                      margin: "0px 0px 0px 8px",
                                      padding: "0px",
                                      letterSpacing: "2px",
                                      fontWeight: "400",
                                      fontSize: "14px",
                                    }}
                                  ></i>
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- SLIDE  --> */}
                      <li
                        data-index="rs-29"
                        data-transition="slotzoom-horizontal"
                        data-slotamount="7"
                        data-hideafterloop="0"
                        data-hideslideonmobile="off"
                        data-easein="default"
                        data-easeout="default"
                        data-masterspeed="1000"
                        data-delay="9000"
                        data-rotate="0"
                        data-saveperformance="off"
                        class="rev-slidebg tp-revslider-slidesli"
                        data-title="Slide"
                        data-param1=""
                        data-param2=""
                        data-param3=""
                        data-param4=""
                        data-param5=""
                        data-param6=""
                        data-param7=""
                        data-param8=""
                        data-param9=""
                        data-param10=""
                        data-description=""
                        style={{width: "100%", height: "100%", overflow: "hidden"}}
                      >
                        {/* <!-- MAIN IMAGE --> */}
                        <div
                          class="slotholder"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            zIndex: "0",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <img
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/vi.jpg"
                            alt="Agnes 5_Luxury Lekki Property"
                            title="Agnes 5_Luxury Lekki Property"
                            width="700"
                            height="668"
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            class="rev-slidebg defaultimg"
                            data-no-retina=""
                          />
                          <div
                            class="tp-bgimg defaultimg "
                            data-bgcolor="undefined"
                            style={{
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `-moz-initialurl("https://www.carrillionng.com.ng/wp-content/uploads/2021/11/vi.jpg")`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              width: "100%",
                              height: "100%",
                              opacity: "0",
                            }}
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/vi.jpg"
                          ></div>
                        </div>
                        {/* <!-- LAYERS --> */}

                        {/* <!-- LAYER NR. 10 --> */}
                        <div
                          class="tp-parallax-wrap "
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{position: "absolute", display: "block"}}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-29-layer-1"
                                data-x="['right','right','right','right']"
                                data-hoffset="['-18','-18','0','15']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-35','-35','-25','-35']"
                                data-fontsize="['50','45','30','30']"
                                data-lineheight="['80','75','65','55']"
                                data-width="['1100','700','450','450']"
                                data-height="none"
                                data-whitespace="['nowrap','normal','normal','normal']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":500,"split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];opacity:0;","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "5",
                                  minWidth: "1100px",
                                  maxWidth: "1100px",
                                  whiteSpace: "nowrap",
                                  fontSize: "50px",
                                  lineHeight: "80px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Oswald, sans-serif",
                                  textTransform: "uppercase",
                                  letterSpacing: "16px",
                                  textAlign: "right",
                                  visibility: "hidden",
                                }}
                              >
                                Agnes V
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 11 --> */}
                        <div
                          class="tp-parallax-wrap "
                          style={{
                            zIndex: "5",
                            minWidth: "1100px",
                            maxWidth: "1100px",
                            whiteSpace: "nowrap",
                            fontSize: "50px",
                            lineHeight: "80px",
                            fontWeight: "400",
                            color: "rgb(255, 255, 255)",
                            fontFamily: "Oswald, sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "16px",
                            textAlign: "right",
                            visibility: "hidden",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{position: "absolute", display: "block"}}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-29-layer-2"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['75','105','105','105']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power1.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power1.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "6",
                                  whiteSpace: "nowrap",
                                  fontSize: "18px",
                                  lineHeight: "30px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Montserratlight, sans-serif",
                                  textAlign: "right",
                                  visibility: "hidden",
                                }}
                              >
                                Agnes V has given us an opportunity to create an oasis of
                                calm, beauty <br />
                                and serenity that will make you forget that you are in the
                                middle <br />
                                of one of the busiest cities in Africa in Victoria Island,
                                Lagos.
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 12 --> */}
                        <div
                          class="tp-parallax-wrap "
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{position: "absolute", display: "block"}}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-29-layer-3"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['195','215','215','215']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "7",
                                  maxWidth: "none",
                                  whiteSpace: "nowrap",
                                  visibility: "hidden",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                }}
                              >
                                <a
                                  href="https://www.carrillionng.com.ng/projects/agnes-v/"
                                  class="btn"
                                >
                                  Look more <i class="icon-next"></i>
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- SLIDE  --> */}
                      <li
                        data-index="rs-28"
                        data-transition="slotzoom-horizontal"
                        data-slotamount="7"
                        data-hideafterloop="0"
                        data-hideslideonmobile="off"
                        data-easein="default"
                        data-easeout="default"
                        data-masterspeed="1000"
                        data-delay="9000"
                        data-rotate="0"
                        data-saveperformance="off"
                        class="rev-slidebg tp-revslider-slidesli"
                        data-title="Slide"
                        data-param1=""
                        data-param2=""
                        data-param3=""
                        data-param4=""
                        data-param5=""
                        data-param6=""
                        data-param7=""
                        data-param8=""
                        data-param9=""
                        data-param10=""
                        data-description=""
                        style={{width: "100%", height: "100%", overflow: "hidden"}}
                      >
                        {/* <!-- MAIN IMAGE --> */}
                        <div
                          class="slotholder"
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            zIndex: "0",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          {/* <!--Runtime Modification - Img tag is Still Available for SEO Goals in Source -  */}
                          <img
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2016/09/Home-1.jpg"
                            alt=""
                            title="Home-1"
                            width="1920"
                            height="900"
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            class="rev-slidebg defaultimg"
                            data-no-retina=""
                          />
                          {/* --> */}
                          <div
                            class="tp-bgimg defaultimg "
                            data-bgcolor="undefined"
                            style={{
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `-moz-initialurl("https://www.carrillionng.com.ng/wp-content/uploads/2016/09/Home-1.jpg")`,
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              width: "100%",
                              height: "100%",
                              opacity: "0",
                            }}
                            src="https://www.carrillionng.com.ng/wp-content/uploads/2016/09/Home-1.jpg"
                          ></div>
                        </div>
                        {/* <!-- LAYERS --> */}

                        {/* <!-- LAYER NR. 13 --> */}
                        <div
                          class="tp-parallax-wrap "
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{position: "absolute", display: "block"}}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-28-layer-1"
                                data-x="['right','right','right','right']"
                                data-hoffset="['-18','-18','0','15']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['-35','-35','-25','-35']"
                                data-fontsize="['50','45','30','30']"
                                data-lineheight="['80','75','65','55']"
                                data-width="['1100','700','450','450']"
                                data-height="none"
                                data-whitespace="['nowrap','normal','normal','normal']"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":500,"split":"chars","splitdelay":0.05000000000000000277555756156289135105907917022705078125,"speed":2000,"split_direction":"forward","frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[100%];opacity:0;","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "5",
                                  minWidth: "1100px",
                                  maxWidth: "1100px",
                                  whiteSpace: "nowrap",
                                  fontSize: "50px",
                                  lineHeight: "80px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Oswald, sans-serif",
                                  textTransform: "uppercase",
                                  letterSpacing: "16px",
                                  textAlign: "right",
                                  visibility: "hidden",
                                }}
                              >
                                Canada Waters
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 14 --> */}
                        <div
                          class="tp-parallax-wrap "
                          style={{
                            zIndex: "5",
                            minWidth: "1100px",
                            maxWidth: "1100px",
                            whiteSpace: "nowrap",
                            fontSize: "50px",
                            lineHeight: "80px",
                            fontWeight: "400",
                            color: "rgb(255, 255, 255)",
                            fontFamily: "Oswald, sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "16px",
                            textAlign: "right",
                            visibility: "hidden",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{position: "absolute", display: "block"}}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-28-layer-2"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['75','105','105','105']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power1.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power1.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "6",
                                  whiteSpace: "nowrap",
                                  fontSize: "18px",
                                  lineHeight: "30px",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                  fontFamily: "Montserratlight, sans-serif",
                                  textAlign: "right",
                                  visibility: "hidden",
                                }}
                              >
                                The Canada Waters is an apartment building located
                                strategically in Victoria Island, Lagos.
                                <br />
                                This building highlights the importance of quality and
                                natural living within a well-defined <br />
                                perimeter with its Robust structure giving a friendly and
                                commercialized environment.
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <!-- LAYER NR. 15 --> */}
                        <div
                          class="tp-parallax-wrap "
                          style={{
                            position: "absolute",
                            display: "block",
                            visibility: "hidden",
                          }}
                        >
                          <div
                            class="tp-loop-wrap"
                            style={{position: "absolute", display: "block"}}
                          >
                            <div
                              class="tp-mask-wrap"
                              style={{position: "absolute", display: "block"}}
                            >
                              <div
                                class="tp-caption   tp-resizeme"
                                id="slide-28-layer-3"
                                data-x="['right','right','right','right']"
                                data-hoffset="['0','0','18','32']"
                                data-y="['middle','middle','middle','middle']"
                                data-voffset="['195','215','215','215']"
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-type="text"
                                data-responsive_offset="on"
                                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                data-textalign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                style={{
                                  zIndex: "7",
                                  maxWidth: "none",
                                  whiteSpace: "nowrap",
                                  visibility: "hidden",
                                  fontWeight: "400",
                                  color: "rgb(255, 255, 255)",
                                }}
                              >
                                <a
                                  href="https://carrillionng.com.ng/projects/canada-waters/"
                                  class="btn"
                                >
                                  Look more <i class="icon-next"></i>
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div
                      class="tp-bannertimer tp-bottom"
                      style={{
                        visibility: "hidden",
                        width: "22.8444%",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    ></div>{" "}
                    <div class="tp-loader spinner0" style={{display: "none"}}>
                      <div class="dot1"></div>
                      <div class="dot2"></div>
                      <div class="bounce1"></div>
                      <div class="bounce2"></div>
                      <div class="bounce3"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="tp-fullwidth-forcer"
                  style={{width: "100%", height: "944px"}}
                ></div>
              </div>

              {/* < />!-- END REVOLUTION SLIDER --> */}
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
                              We are Builders<span className="text-warning">.</span>
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
                              <h4 classname="services-items">PLANNING</h4>
                            </div>
                          </div>
                          <div className="clearfix visible-sm"></div>
                          <div className="col-base col-about-img col-sm-6 col-md-4">
                            <img
                              alt=""
                              className="img-responsive"
                              src="https://www.carrillionng.com.ng/wp-content/uploads/2018/08/about.jpg"
                            />
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
                        <CompanyTeam />
                        <CompanyTeam />
                        <CompanyTeam />
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
                              width: "7140px",
                              left: "0px",
                              display: "block",
                              transition: "all 0ms ease 0s",
                              transhtmlForm: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            <ProjectImage
                              projectName="Amusa 4"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2019/04/featured-1.jpg"
                            />
                            <ProjectImage
                              projectName="Agnes III"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredagnes3.jpg"
                            />
                            <ProjectImage
                              projectName="Agnes IV"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredagnes4.jpg"
                            />
                            <ProjectImage
                              projectName="Agnes V"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredagnes5.jpg"
                            />
                            <ProjectImage
                              projectName="Agnes VI"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredagnes6.jpg"
                            />
                            <ProjectImage
                              projectName="Amusa 5"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredamusa5.jpg"
                            />
                            <ProjectImage
                              projectName="Amusa 6"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredamusa6.jpg"
                            />
                            <ProjectImage
                              projectName="Amusa 8"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredamusa810.jpg"
                            />
                            <ProjectImage
                              projectName="The Colonel Mall"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2021/11/featuredcolonel.jpg"
                            />
                            <ProjectImage
                              projectName="Amusa 2"
                              img="https://www.carrillionng.com.ng/wp-content/uploads/2019/04/featured.jpg"
                            />
                          </div>

                          <div className="owl-controls clickable">
                            <div className="owl-buttons">
                              <div className="owl-prev">prev</div>
                              <div className="owl-next">next</div>
                            </div>
                          </div>
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
                        <br /> in the building industry{" "}
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
