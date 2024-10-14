import Link from "next/link";
import { Fragment, useState } from "react";
const MobileMenu = ({ handleShow, logo, extraClass, barIcon }) => {
  const [toggle, setToggle] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

  return (
    <Fragment>
      <div
        className={`header-navigation d-xl-none d-block breakpoint-on ${extraClass}`}
      >
        <div
          className={`nav-overlay ${toggle ? "active" : ""}`}
          onClick={() => setToggle(false)}
        />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/index">
                <a className="brand-logo">
                  <img
                    src={logo ? logo : "assets/images/logo/logo-black.png"}
                    alt="Site Logo"
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/index">
                  <a className="brand-logo">
                    <img
                      src={"assets/images/logo/logo-black.png"}
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none ">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              {/*====== main Menu ======*/}
              <nav className="main-menu">
                <ul>
                  <li className="menu-item has-children">
                    <a href="#">
                      Home
                      <span
                        className="dd-trigger"
                        onClick={() => active("home")}
                      >
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu" style={activeSubMenu("home")}>
                      <li>
                        <Link legacyBehavior href="/">
                          Home 01
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="index-2">
                          Home 02
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="index-3">
                          Home 03
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link legacyBehavior href="about">
                      About
                    </Link>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">
                      Service
                      <span
                        className="dd-trigger"
                        onClick={() => active("Service")}
                      >
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu" style={activeSubMenu("Service")}>
                      <li>
                        <Link legacyBehavior href="service">
                          Our Service
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="service-details">
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">
                      Portfolio
                      <span
                        className="dd-trigger"
                        onClick={() => active("Portfolio")}
                      >
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu" style={activeSubMenu("Portfolio")}>
                      <li>
                        <Link legacyBehavior href="project-grid">
                          Project Grid
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="project-grid-2-column">
                          Project Grid Two
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="project-masonry">
                          Project Masonry
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="project-details">
                          Project Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">
                      Blog
                      <span
                        className="dd-trigger"
                        onClick={() => active("Blog")}
                      >
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu" style={activeSubMenu("Blog")}>
                      <li>
                        <Link legacyBehavior href="blog-standard">
                          Blog Standard
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="blog-details">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-children">
                    <a href="#">
                      Pages
                      <span
                        className="dd-trigger"
                        onClick={() => active("Pages")}
                      >
                        <i className="far fa-angle-down" />
                      </span>
                    </a>
                    <ul className="sub-menu" style={activeSubMenu("Pages")}>
                      <li>
                        <Link legacyBehavior href="team">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="shop">
                          Our Shop
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="product-details">
                          Product Details
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="testimonials">
                          Testimonial
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="pricing">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="faqs">
                          Faq
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">Get a Quote</a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">Get a Quote</a>
                </Link>
              </div>
              <div
                className="bar-button"
                data-toggle="modal"
                data-target="#sidebar-modal"
                onClick={handleShow}
              >
                <img
                  src={barIcon ? barIcon : "assets/images/bar.png"}
                  alt="Image"
                />
              </div>
              <div
                className="navbar-toggler"
                onClick={() => setToggle(!toggle)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileMenu;
