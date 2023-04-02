import React from "react";
import { Link } from "react-router-dom";
import secMockup from "../images/sec-botm-mckp.png";

const Contact = () => {
  return (
    <>
      <section>
        <div className="w-100 pt-80 black-layer pb-70 opc65 position-relative">
          <div className="fixed-bg background-img"></div>
          <div className="container">
            <div className="page-title-wrap text-center w-100">
              <div className="page-title-inner d-inline-block">
                <h1 className="mb-0">Contact Us</h1>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/" title="Home" className="text-decoration-none">
                      Maktab - Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Contact Us</li>
                </ol>
              </div>
            </div>
            {/* <!-- Page Title Wrap --> */}
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-90 thm-layer opc6 position-relative">
          <div className="fixed-bg patern-bg back-blend-multiply thm-bg background-img"></div>
          <div className="container">
            <div className="cont-info-wrap res-row overlap-115 w-100">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="cont-info-box-wrap w-100">
                    <div className="cont-info-box text-center position-relative w-100 pat-bg white-layer opc8 back-blend-multiply bg-white background-img">
                      <span className="bg-color1">
                        <i className="flaticon-call"></i>
                      </span>
                      <h4 className="mb-0">Phone Number</h4>
                      <p className="mb-0">+01 (222) 123 4567</p>
                      <p className="mb-0">+01 (222) 135 4567</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-4">
                  <div class="cont-info-box-wrap w-100">
                    <div class="cont-info-box text-center position-relative w-100 pat-bg white-layer opc8 back-blend-multiply bg-white background-img">
                      <span className="bg-color1">
                        <i className="flaticon-mail"></i>
                      </span>
                      <h4 className="mb-0">Email Address</h4>
                      <p className="mb-0">
                        <Link
                          to="mailto:username@domainname.com"
                          title=""
                          className="text-decoration-none"
                        >
                          username@domainname.com
                        </Link>
                      </p>
                      <p className="mb-0">
                        <Link
                          to="mailto:officename@domainname.com"
                          title=""
                          className="text-decoration-none"
                        >
                          officename@domainname.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="cont-info-box-wrap w-100">
                    <div className="cont-info-box text-center position-relative w-100 pat-bg white-layer opc8 back-blend-multiply bg-white background-img">
                      <span className="bg-color1">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <h4 className="mb-0">Office Location</h4>
                      <p className="mb-0">
                        New Street Town No 20x lake New York City, NY-101 US
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Contact Info Wrap --> */}
          </div>
        </div>
      </section>

      <section>
        <div className="w-100 pb-250 position-relative">
          {/* <img
            className="sec-botm-rgt-mckp img-fluid position-absolute"
            src={secMockup}
            alt="Sec Bottom Mockup"
          /> */}
          <div id="contact-map" class="contact-map w-100"></div>
          <div className="container">
            <div className="contact-wrap mt-100 w-100">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="cont-info-desc w-100">
                    <h3 className="mb-0">
                      Don't be a stranger just say hello.
                    </h3>
                    <p className="mb-0">
                      We do fast phone repair. In most to repair your device in
                      just minutes, li we’ll normally get con nection inutes,
                      we’ll normally ge.
                    </p>
                    <h6 className="mb-0">Follow us on social media</h6>
                    <div className="social-links2 v2 text-center d-inline-flex">
                      <Link
                        className="facebook"
                        to="https://www.facebook.com/"
                        title="Facebook"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="twitter"
                        to="https://twitter.com/"
                        title="Twitter"
                        target="_blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="google"
                        to="https://www.google.com/"
                        title="Google Plus"
                        target="_blank"
                      >
                        <i class="fab fa-google-plus-g"></i>
                      </Link>
                      <Link
                        className="linkedin"
                        to="https://www.linkedin.com/"
                        title="Linkedin"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <form className="cont-form w-100">
                    <input type="text" placeholder="Complete Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="tel" placeholder="Phone No" />
                    <textarea placeholder="Message"></textarea>
                    <button class="thm-btn thm-bg" type="submit">
                      SEND MESSAGE<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
