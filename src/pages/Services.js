import React from "react";
import secTopMockUp from "../images/sec-top-mckp.png";
import bismillahOne from "../images/bism-img1.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section>
        <div className="w-100 pt-220 pb-80 position-relative">
          <img
            className="img-fluid sec-top-mckp position-absolute"
            src={secTopMockUp}
            alt="Sec Top Mockup"
          />
          <div className="container">
            <div className="about-wrap text-center position-relative w-100">
              <div className="about-inner d-inline-block">
                <img
                  className="img-fluid"
                  src={bismillahOne}
                  alt="Bismillah Image"
                />
                <h2 className="mb-0">Welcome To The Islam Home</h2>
                <p className="mb-0">
                  The is not just a mosque for prayers rather it is a community
                  center for all. The Center is committed to preserving an
                  Islamic identity, building and supporting a viable Muslim
                  community, promoting a comprehensive Islamic way of life based
                  on the Holy Quran and the Sunnah of Prophet Muhammad.
                </p>
                <Link
                  className="thm-btn thm-bg text-decoration-none"
                  to="/about"
                  title=""
                >
                  Learn More<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>
              </div>
            </div>
            {/* <!-- About Wrap --> */}
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pb-80 position-relative">
          <div className="container">
            <div className="sec-title text-center w-100">
              <div className="sec-title-inner d-inline-block">
                <i className="thm-clr flaticon-rub-el-hizb"></i>
                <h2 className="mb-0">Services We Offer</h2>
                <p className="mb-0">
                  Adipiscing elit duis volutpat ligula nulla dapibus.
                </p>
              </div>
            </div>
            {/* <!-- Sec Title --> */}
            <div className="serv-wrap wide-sec">
              <div className="row mrg10 serv-caro">
                <div className="col-md-4 col-sm-6 col-lg-3">
                  <div className="serv-box text-center pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100 background-img">
                    <i className="flaticon-mat thm-clr"></i>
                    <h3 className="mb-0">Help Poor's</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, coteudtu adipisicing elit, sed
                      do eiusmod tem por incididunt ut labore et.
                    </p>
                    <Link to="/services-details" title="">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3">
                  <div className="serv-box text-center pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100 background-img">
                    <i className="flaticon-minaret thm-clr"></i>
                    <h3 className="mb-0">Mosque Development</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, coteudtu adipisicing elit, sed
                      do eiusmod tem por incididunt ut labore et.
                    </p>
                    <Link to="/services-details" title="">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3">
                  <div className="serv-box text-center pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100 background-img">
                    <i className="flaticon-grave thm-clr"></i>
                    <h3 className="mb-0">Funeral Service</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, coteudtu adipisicing elit, sed
                      do eiusmod tem por incididunt ut labore et.
                    </p>
                    <Link to="/services-details" title="">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3">
                  <div className="serv-box text-center pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100 background-img">
                    <i className="flaticon-quran thm-clr"></i>
                    <h3 className="mb-0">Quran Learning</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, coteudtu adipisicing elit, sed
                      do eiusmod tem por incididunt ut labore et.
                    </p>
                    <Link href="/services-details" title="">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3">
                  <div className="serv-box text-center pat-bg gray-layer opc85 position-relative back-blend-multiply gray-bg w-100 background-img">
                    <i className="flaticon-arabic thm-clr"></i>
                    <h3 className="mb-0">Community Service</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, coteudtu adipisicing elit, sed
                      do eiusmod tem por incididunt ut labore et.
                    </p>
                    <Link to="/services-details" title="">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Services Wrap --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
