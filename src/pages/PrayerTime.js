import React from "react";
import { Link } from "react-router-dom";

const PrayerTime = () => {
  return (
    <>
      <section>
        <div className="w-100 position-relative">
          <div className="time-course-wrap w-100">
            <div className="row mrg">
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="time-wrap d-flex flex-wrap align-items-center justify-content-end thm-layer opc95 position-relative w-100">
                  <div className="fixed-bg background-time"></div>
                  <div className="time-inner w-100">
                    <div className="sec-title w-100">
                      <div className="sec-title-inner d-inline-block">
                        <h2 className="mb-0">Go to Allah Before its to Late</h2>
                        <p className="mb-0">
                          Islamic:, 9 Shawwal 1441 AH - Monday, June 1, 2020
                        </p>
                      </div>
                    </div>
                    {/* <!-- Sec Title --> */}
                    <div className="time-list-wrap d-flex flex-wrap w-100">
                      <ul className="time-list mb-0 list-unstyled">
                        <li>
                          <div className="time-box d-flex flex-wrap align-items-center justify-content-between">
                            <span>
                              <i className="flaticon-rub-el-hizb"></i>Fajar
                            </span>
                            <span>04:06 am</span>
                          </div>
                        </li>
                        <li>
                          <div className="time-box d-flex flex-wrap align-items-center justify-content-between">
                            <span>
                              <i className="flaticon-rub-el-hizb"></i>Sunrise
                            </span>
                            <span>05:30 am</span>
                          </div>
                        </li>
                        <li>
                          <div className="time-box d-flex flex-wrap align-items-center justify-content-between">
                            <span>
                              <i className="flaticon-rub-el-hizb"></i>Dhuhr
                            </span>
                            <span>12:23 pm</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="time-list mb-0 list-unstyled">
                        <li>
                          <div className="time-box d-flex flex-wrap align-items-center justify-content-between">
                            <span>
                              <i className="flaticon-rub-el-hizb"></i>Asr
                            </span>
                            <span>03:43 pm</span>
                          </div>
                        </li>
                        <li>
                          <div className="time-box d-flex flex-wrap align-items-center justify-content-between">
                            <span>
                              <i className="flaticon-rub-el-hizb"></i>Maghrib
                            </span>
                            <span>07:10 pm</span>
                          </div>
                        </li>
                        <li>
                          <div className="time-box d-flex flex-wrap align-items-center justify-content-between">
                            <span>
                              <i className="flaticon-rub-el-hizb"></i>Isha'a
                            </span>
                            <span>08:35 pm</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- Time Wrap --> */}
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="course-wrap d-flex flex-wrap align-items-center black-layer opc7 position-relative w-100">
                  <div className="fixed-bg background-course"></div>
                  <div className="course-inner w-100">
                    <div className="sec-title w-100">
                      <div className="sec-title-inner d-inline-block">
                        <h2 className="mb-0">Islamic School Courses</h2>
                        <p className="mb-0">
                          Adipiscing elit duis volutpat ligula nulla dapibus.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Sec Title --> */}
                    <div className="course-list-wrap w-100">
                      <h3 className="mb-0 thm-clr">Weekly Programs</h3>
                      <ul className="course-list mb-0 list-unstyled w-100">
                        <li>
                          <div className="course-box d-flex flex-wrap w-100">
                            <i className="flaticon-rub-el-hizb thm-clr"></i>
                            <div className="course-inner">
                              <h4 className="mb-0">
                                <Link
                                  to="/online-courses-detail"
                                  title=""
                                  className="text-decoration-none"
                                >
                                  Tafseel ul Quran
                                </Link>
                              </h4>
                              <p className="mb-0">
                                Every Tuesday & Wednesday 8:00 am to 12:00 pm
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="course-box d-flex flex-wrap w-100">
                            <i className="flaticon-rub-el-hizb thm-clr"></i>
                            <div className="course-inner">
                              <h4 className="mb-0">
                                <Link
                                  to="/online-courses-detail"
                                  title=""
                                  className="text-decoration-none"
                                >
                                  Children's Islamic classNamees
                                </Link>
                              </h4>
                              <p className="mb-0">
                                Daily from 8:00 am to 1:00 pm
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="course-box d-flex flex-wrap w-100">
                            <i className="flaticon-rub-el-hizb thm-clr"></i>
                            <div className="course-inner">
                              <h4 className="mb-0">
                                <Link
                                  to="/online-courses-detail"
                                  title=""
                                  className="text-decoration-none"
                                >
                                  Quran Recitation className
                                </Link>
                              </h4>
                              <p className="mb-0">
                                Every Monday & Thursday 9:00 am to 11:30 pm
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- Courses Wrap --> */}
              </div>
            </div>
          </div>
          {/* <!-- Time & Course Wrap --> */}
        </div>
      </section>
      <section>
        <div className="w-100 pt-110 black-layer pb-70 opc7 position-relative">
          <div className="fixed-bg background-paralax"></div>
          <div className="container">
            <div className="sec-title v2 text-center w-100">
              <div className="sec-title-inner d-inline-block">
                <i className="flaticon-rub-el-hizb thm-clr"></i>
                <h1 className="mb-0">The Pillars of Islam</h1>
                <p className="mb-0">
                  Duis aute irure dolor in reprehenit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            {/* <!-- Sec Title --> */}
            <div className="pillars-wrap w-100">
              <ul className="pillars-list text-center d-flex flex-wrap justify-content-center align-items-center mb-0 list-unstyled">
                <li>
                  <div className="pillar-box position-relative w-100">
                    <span className="d-inline-block thm-clr position-relative">
                      <span className="pat-bg gray-layer opc85 position-absolute back-blend-multiply gray-bg background-img"></span>
                      <i className="flaticon-quran-1"></i>
                    </span>
                    <h3 className="mb-0">কালেমা</h3>
                    <i className="d-block thm-clr">Shahadah</i>
                  </div>
                </li>
                <li>
                  <div className="pillar-box position-relative w-100">
                    <span className="d-inline-block thm-clr position-relative">
                      <span className="pat-bg gray-layer opc85 position-absolute back-blend-multiply gray-bg background-img"></span>
                      <i className="flaticon-mosque-1"></i>
                    </span>
                    <h3 className="mb-0">নামাজ</h3>
                    <i className="d-block thm-clr">Prayer</i>
                  </div>
                </li>
                <li>
                  <div className="pillar-box position-relative w-100">
                    <span className="d-inline-block thm-clr position-relative">
                      <span className="pat-bg gray-layer opc85 position-absolute back-blend-multiply gray-bg background-img"></span>
                      <i className="flaticon-star"></i>
                    </span>
                    <h3 className="mb-0">রোজা</h3>
                    <i className="d-block thm-clr">Fasting</i>
                  </div>
                </li>
                <li>
                  <div className="pillar-box position-relative w-100">
                    <span className="d-inline-block thm-clr position-relative">
                      <span className="pat-bg gray-layer opc85 position-absolute back-blend-multiply gray-bg background-img"></span>
                      <i className="flaticon-gift-box"></i>
                    </span>
                    <h3 className="mb-0">যাকাত</h3>
                    <i className="d-block thm-clr">Almsgiving</i>
                  </div>
                </li>
                <li>
                  <div className="pillar-box position-relative w-100">
                    <span className="d-inline-block thm-clr position-relative">
                      <span className="pat-bg gray-layer opc85 position-absolute back-blend-multiply gray-bg background-img"></span>
                      <i className="flaticon-kaaba"></i>
                    </span>
                    <h3 className="mb-0">হজ্জ্ব</h3>
                    <i className="d-block thm-clr">Pilgrimage</i>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- Pillars Wrap --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrayerTime;
