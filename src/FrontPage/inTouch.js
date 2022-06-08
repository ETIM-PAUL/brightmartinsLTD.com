import React from "react";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {useState} from "react";
import {toast} from "react-toastify";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState();
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState();

  function showValues() {
    emailjs.init("1nRvslQBF3lSWX4f1");
    function handleSubmit() {
      let form = document.getElementById("emailForm");
      emailjs.sendForm("service_imn36zb", "template_u3o37iq", form).then(
        function () {
          console.log("SUCCESS!");
          toast("Email successfully sent!");
        },
        function (error) {
          console.log("FAILED...", error);
          toast.error("Email not sent!");
        }
      );
      setCompany("");
      setEmail();
      setMessage();
      setPhone("");
      setName("");
    }

    handleSubmit();
  }

  return (
    <section className="contacts section ">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get <span className="years">in touch </span>
          </h2>
          <strong className="fade-title-right">contacts</strong>
        </div>
        <div className="section-content">
          <div className="row-base row">
            <div className="col-address col-base col-md-4">
              +234 818 532 0000
              <br />
              +234 807 682 7683
              <br />
              info@brightmartinsltd.com.ng
            </div>
            <div className="col-base  col-md-8">
              <form id="emailForm">
                <div className="row-field row">
                  <div className="col-field col-sm-6 col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control error wobble-error"
                        name="email"
                        required
                        placeholder="Email address *"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-field col-sm-6 col-md-4">
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        placeholder=" Company"
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-field col-sm-12 col-md-4">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder=" Message*"
                        className="message"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <div className="form-submit text-right" id="animate-submit">
                <button
                  type="submit"
                  className="btn btn-shadow-2 wow swing"
                  style={{visibility: "visible"}}
                  onClick={() => showValues()}
                >
                  Send{" "}
                  <i className="icon-next">
                    <FaArrowAltCircleRight style={{paddingTop: "3px"}} />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
