import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import retinaLogo from "../images/retina-logo.png";
import logoThree from "../images/logo3.png";
import retinaLogoThree from "../images/retina-logo3.png";

const Header = () => {
  return (
    <>
      {/* <div id="preloader">
        <div classNameName="preloader-inner">
          <i classNameName="preloader-icon thm-clr flaticon-kaaba"></i>
        </div>
      </div> */}
      {/* Page Loader */}

      <header className="stick style1 w-100">
        <div className="topbar bg-color1 d-flex flex-wrap justify-content-center w-100">
          <ul className="topbar-info-list mb-0 list-unstyled d-inline-flex">
            <li>
              <i className="thm-clr flaticon-sun"></i>Sunrise At:{" "}
              <span className="thm-clr">5:05am</span>
            </li>
            <li>
              <i className="thm-clr flaticon-moon"></i>Sunset At:{" "}
              <span className="thm-clr">7:14pm</span>
            </li>
          </ul>
          <div className="social-links d-inline-flex">
            <Link to="https://twitter.com/" title="Twtiiter" target="_blank">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="https://www.facebook.com/"
              title="Facebook"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://www.youtube.com/" title="Youtube" target="_blank">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/"
              title="Linkedin"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link
              to="https://www.instagram.com/"
              title="Instagram"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <div className="logo-menu-wrap d-flex flex-wrap justify-content-between w-100">
          <div className="logo position-relative thm-layer opc7 back-blend-multiply thm-bg background-img">
            <h1 className="mb-0">
              <Link to="/" title="Home" className="text-decoration-none">
                <img
                  className="img-fluid"
                  src={logo}
                  alt="Logo"
                  srcset={retinaLogo}
                />
              </Link>
            </h1>
          </div>
          {/* */}
          <nav className="d-flex flex-wrap align-items-center justify-content-center">
            <div className="header-left">
              <ul className="mb-0 list-unstyled d-inline-flex">
                <li className="menu-item-has-children">
                  <Link to="/" title="" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog" title="" className="text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/pages" title="" className="text-decoration-none">
                    Pages
                  </Link>
                  {/* <ul class="mb-0 list-unstyled">
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Scholars
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="scholar-style1.html" title="">
                            Scholar Style 1
                          </a>
                        </li>
                        <li>
                          <a href="scholar-style2.html" title="">
                            Scholar Style 2
                          </a>
                        </li>
                        <li>
                          <a href="scholar-detail.html" title="">
                            Scholar Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Urgent Donation
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="urgent-donation.html" title="">
                            Urgent Donation
                          </a>
                        </li>
                        <li>
                          <a href="donation-detail.html" title="">
                            Donation Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Online Courses
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="online-courses.html" title="">
                            Online Courses
                          </a>
                        </li>
                        <li>
                          <a href="online-courses-detail.html" title="">
                            Online Courses Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Services
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="services.html" title="">
                            Services Style 1
                          </a>
                        </li>
                        <li>
                          <a href="services2.html" title="">
                            Services Style 2
                          </a>
                        </li>
                        <li>
                          <a href="services-detail.html" title="">
                            Services Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Gallery
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="gallery.html" title="">
                            Gallery Style 1
                          </a>
                        </li>
                        <li>
                          <a href="gallery2.html" title="">
                            Gallery Style 2
                          </a>
                        </li>
                        <li>
                          <a href="gallery3.html" title="">
                            Gallery Style 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Events
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="events.html" title="">
                            Events
                          </a>
                        </li>
                        <li>
                          <a href="event-detail.html" title="">
                            Event Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="javascript:void(0);" title="">
                        Our Sermons
                      </a>
                      <ul class="mb-0 list-unstyled">
                        <li>
                          <a href="sermons.html" title="">
                            Sermons
                          </a>
                        </li>
                        <li>
                          <a href="sermons-detail.html" title="">
                            Sermons Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="audio-listening.html" title="">
                        Audio Listening
                      </a>
                    </li>
                  </ul> */}
                </li>
                <li className="menu-item-has-children">
                  <Link
                    to="/products"
                    title=""
                    className="text-decoration-none"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" title="" className="text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" title="" className="text-decoration-none">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <Link
                className="thm-btn thm-bg text-decoration-none"
                to="/donation"
                title=""
              >
                Make Donation<span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </nav>
        </div>
        {/* Logo Menu Wrap */}
      </header>
      {/* Header */}
      <div class="sticky-menu">
        <div class="container">
          <div class="sticky-menu-inner d-flex flex-wrap align-items-center justify-content-between w-100">
            <div class="logo">
              <h1 class="mb-0">
                <Link to="/" title="Home" className="text-decoration-none">
                  <img
                    class="img-fluid"
                    src={logoThree}
                    alt="Logo"
                    srcset={retinaLogoThree}
                  />
                </Link>
              </h1>
            </div>
            {/* <!-- Logo --> */}
            <nav class="d-flex flex-wrap align-items-center justify-content-between">
              <div class="header-left">
                <ul class="mb-0 list-unstyled d-inline-flex">
                  <li class="menu-item-has-children">
                    <Link to="/" title="">
                      Home
                    </Link>
                  </li>
                  <li class="menu-item-has-children">
                    <Link to="/blog" title="" className="text-decoration-none">
                      Blog
                    </Link>
                  </li>
                  <li class="menu-item-has-children">
                    <Link to="/pages" title="" className="text-decoration-none">
                      Pages
                    </Link>
                  </li>

                  <li class="menu-item-has-children">
                    <Link
                      to="/products"
                      title=""
                      className="text-decoration-none"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" title="" className="text-decoration-none">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" title="">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Sticky Menu --> */}

      <div class="rspn-hdr">
        <div class="rspn-mdbr">
          <div class="rspn-scil">
            <Link to="https://twitter.com/" title="Twtiiter" target="_blank">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link
              to="https://www.facebook.com/"
              title="Facebook"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://www.youtube.com/" title="Youtube" target="_blank">
              <i class="fab fa-youtube"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/"
              title="Linkedin"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <form class="rspn-srch">
            <input type="text" placeholder="Enter Your Keyword" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div class="lg-mn">
          <div class="logo">
            <Link to="/" title="Home">
              <img src={logoThree} alt="Logo" />
            </Link>
          </div>
          <div class="rspn-cnt">
            <span>
              <i class="thm-clr far fa-envelope"></i>
              <Link to="" title="">
                info@youremailid.com
              </Link>
            </span>
            <span>
              <i class="thm-clr fas fa-phone-alt"></i>+96 125 554 24 5
            </span>
          </div>
          <span class="rspn-mnu-btn">
            <i class="fa fa-list-ul"></i>
          </span>
        </div>
        <div class="rsnp-mnu">
          <span class="rspn-mnu-cls">
            <i class="fa fa-times"></i>
          </span>
          <ul class="mb-0 list-unstyled w-100">
            <li class="menu-item-has-children">
              <Link to="/home" title="">
                Home
              </Link>
            </li>
            <li class="menu-item-has-children">
              <Link to="/blog" title="">
                Blog
              </Link>
            </li>
            <li class="menu-item-has-children">
              <Link to="/pages" title="">
                Pages
              </Link>
            </li>
            <li class="menu-item-has-children">
              <Link to="/products" title="">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" title="">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" title="">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Responsive Menu --> */}
      </div>
      {/* <!-- Responsive Header --> */}
    </>
  );
};

export default Header;
