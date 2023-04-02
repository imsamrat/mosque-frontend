import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import retinaLogo from "../images/retina-logo2.png";
import secMockup from "../images/sec-botm-mckp.png";

const Footer = () => {
  return (
    <>
      <div>
        <div className="w-100 pb-250 position-relative">
          <img
            className="sec-botm-rgt-mckp img-fluid position-absolute"
            src={secMockup}
            alt="Sec Bottom Mockup"
          />
        </div>
      </div>
      <footer>
        <div className="w-100 pt-100 dark-layer pb-50 opc85 position-relative">
          <div className="fixed-bg patern-bg back-blend-multiply dark-bg background-img"></div>
          <div className="container">
            <div className="footer-data w-100">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-3">
                  <div className="widget w-100">
                    <div className="logo">
                      <h1 className="mb-0">
                        <Link to="/" title="Home">
                          <img
                            className="img-fluid"
                            src={logo}
                            alt="Logo"
                            srcset={retinaLogo}
                          />
                        </Link>
                      </h1>
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, coteudtu sicing elit, sed do
                      eiusmod tempor inc dntut labore et adipi.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-9">
                  <div className="row justify-content-between">
                    <div className="col-md-6 col-sm-6 col-lg-6">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <div className="widget w-100">
                            <h4 className="widget-title">Information</h4>
                            <ul className="mb-0 list-unstyled w-100">
                              <li>
                                <a href="online-courses.html" title="">
                                  Online Courses
                                </a>
                              </li>
                              <li>
                                <a href="audio-listening.html" title="">
                                  Audio Listening
                                </a>
                              </li>
                              <li>
                                <a href="blog.html" title="">
                                  Our Blog
                                </a>
                              </li>
                              <li>
                                <a href="events.html" title="">
                                  Our Events
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <div className="widget w-100">
                            <h4 className="widget-title">Contact Info</h4>
                            <ul className="cont-info-list2 mb-0 list-unstyled w-100">
                              <li>
                                <i className="thm-clr">P:</i>341 22 245 225
                              </li>
                              <li>
                                <i className="thm-clr">E:</i>
                                <Link to="mailto:username@domain.com" title="">
                                  username@domain.com
                                </Link>
                              </li>
                              <li>
                                425 1st Street, San Francisco, California, USA
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-6 col-lg-5">
                      <h4 className="widget-title">Let Us Help You</h4>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <div className="widget w-100">
                            <ul className="mb-0 list-unstyled w-100">
                              <li>
                                <a href="about.html" title="">
                                  About Maktab
                                </a>
                              </li>
                              <li>
                                <a href="urgent-donation.html" title="">
                                  Urgent Donation
                                </a>
                              </li>
                              <li>
                                <a href="services.html" title="">
                                  Our Services
                                </a>
                              </li>
                              <li>
                                <a href="sermons.html" title="">
                                  Our Sermons
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                          <div className="widget w-100">
                            <ul className="mb-0 list-unstyled w-100">
                              <li>
                                <a href="products.html" title="">
                                  Our Products
                                </a>
                              </li>
                              <li>
                                <a href="scholar-style1.html" title="">
                                  Our Scholars
                                </a>
                              </li>
                              <li>
                                <a href="contact.html" title="">
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a href="gallery.html" title="">
                                  Maktab Gallery
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Footer Data --> */}
          </div>
        </div>
      </footer>
      <div className="bottom-bar dark-bg2 text-center w-100">
        <p className="mb-0">
          <Link to="/" title="Home">
            Maktab
          </Link>{" "}
          - &copy; {new Date().getFullYear()};{" "}
          <Link to="/" title="Nauthemes" target="_blank">
            Powered by Samrat
          </Link>
        </p>
      </div>
      {/* <!-- Bottom Bar --> */}
    </>
  );
};

export default Footer;
