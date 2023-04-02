import React from "react";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <>
      <section>
        <div className="w-100 thm-layer opc7 position-relative">
          <div className="fixed-bg patern-bg back-blend-multiply thm-bg background-img"></div>
          <div className="container">
            <div className="plyr-cont-wrap w-100">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="plyr-wrp overlap155 w-100">
                    <h3 className="mb-0 text-center pat-bg thm-layer opc7 back-blend-multiply thm-bg background-img">
                      Listen to Quran Audio
                    </h3>
                    <div className="plyr-inner w-100">
                      <div className="plyr w-100">
                        <ul className="playlist mb-0 list-unstyled">
                          <li
                            data-cover="assets/images/audio-cover.jpg"
                            data-artist="(Abd-ur Rahman)"
                          >
                            <a
                              href="../../public/audio/surah-fateh.mp3"
                              title=""
                            >
                              Surah Fath
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-8">
                  <div className="cont-info w-100">
                    <ul className="cont-info-list d-flex flex-wrap mb-0 list-unstyled w-100">
                      <li>
                        <span className="thm-bg">
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        +96 125 554 24 5
                      </li>
                      <li>
                        <span className="thm-bg">
                          <i className="far fa-envelope"></i>
                        </span>
                        <Link to="" title="">
                          info@youremailid.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Player & Contact Wrap --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Player;
