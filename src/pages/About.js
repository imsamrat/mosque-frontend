import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../images/resources/about-img.jpg";
import Services from "./Services";

const About = () => {
  return (
    <>
      <section>
        <div className="w-100 pt-80 black-layer pb-70 opc65 position-relative">
          <div className="fixed-bg page-title-bg"></div>
          <div className="container">
            <div className="page-title-wrap text-center w-100">
              <div className="page-title-inner d-inline-block">
                <h1 className="mb-0">About Us</h1>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index.html" title="Home">
                      Maktab - Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">About Us</li>
                </ol>
              </div>
            </div>
            {/* <!-- Page Title Wrap --> */}
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-120 pb-100 position-relative">
          <div className="container">
            <div className="about-wrap4 w-100">
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-7 order-lg-1">
                  <div className="about-video position-relative w-100">
                    <img
                      className="img-fluid w-100"
                      src={AboutImg}
                      alt="About_image"
                    />
                    <Link
                      className="position-absolute spinner bg-color1 text-decoration-none"
                      to="https://www.youtube.com/embed/WxuHBTES2-s"
                      data-fancybox
                      title=""
                    >
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-5">
                  <div className="about-inner4 w-100">
                    <span className="d-block thm-clr">
                      Ethical & Moral Beliefs That Guides
                    </span>
                    <h2 className="mb-0">Know The Real History Of Islam</h2>
                    <p className="mb-0">
                      The is not just a mosque for prayers rather it is a
                      community center for all. The Center is committed to
                      preserving an Islamic identity, building and supporting a
                      viable.
                    </p>
                    <p className="mb-0">
                      Muslim community, promoting a comprehensive Islamic way of
                      life based on the Holy Quran and the Sunnah of Prophet
                      Muhammad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- About Wrap 4 --> */}
          </div>
        </div>
      </section>
      <Services />
    </>
  );
};

export default About;
