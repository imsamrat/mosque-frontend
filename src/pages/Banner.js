import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section>
        <div className="w-100 position-relative">
          <div className="feat-wrap v1 text-center position-relative w-100">
            <div className="feat-caro">
              <div className="feat-item">
                <div className="feat-img position-absolute slide-one"></div>
                <div className="feat-cap-wrap position-absolute d-inline-block">
                  <div className="feat-cap d-inline-block">
                    <i className="d-inline-block flaticon-rub-el-hizb thm-clr"></i>
                    <h2 className="mb-0">Nothing Is Impossible With Allah</h2>
                    <p className="mb-0">
                      Consectetur adipiscing elit duis volutpat ligula nulla
                      dapibus.
                    </p>
                    <Link className="thm-btn thm-bg text-decoration-none" href="/about" title="">
                      Take A Tour<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-img position-absolute slide-two"></div>
                <div className="feat-cap-wrap position-absolute d-inline-block">
                  <div className="feat-cap d-inline-block">
                    <i className="d-inline-block flaticon-rub-el-hizb thm-clr"></i>
                    <h2 className="mb-0">
                      Allah Help Those Who Help Themselves
                    </h2>
                    <p className="mb-0">
                      Consectetur adipiscing elit duis volutpat ligula nulla
                      dapibus.
                    </p>
                    <Link className="thm-btn thm-bg text-decoration-none" to="/about" title="">
                      Take A Tour<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-img position-absolute slide-three"></div>
                <div className="feat-cap-wrap position-absolute d-inline-block">
                  <div className="feat-cap d-inline-block">
                    <i className="d-inline-block flaticon-rub-el-hizb thm-clr"></i>
                    <h2 className="mb-0">
                      Islam is an Abrahamic Monotheistic Religion
                    </h2>
                    <p className="mb-0">
                      Consectetur adipiscing elit duis volutpat ligula nulla
                      dapibus.
                    </p>
                    <Link className="thm-btn thm-bg text-decoration-none" to="/about" title="">
                      Take A Tour<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Featured Area Wrap --> */}
        </div>
      </section>
    </>
  );
};

export default Banner;
