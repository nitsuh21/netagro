import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
const Header1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <header className="header-area header-one transparent-header">
        <div className="container-fluid">
          {/*====== Header Top Bar ======*/}
          <div className="header-top-bar text-white main-bg d-none d-xl-block">
            <div className="row">
              <div className="col-lg-6">
                {/*====== Top Left ======*/}
                <div className="top-left">
                  <span>
                    Welcome to Gadden a modern Gardening &amp; Landscape Contact
                    Us
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Top Right ======*/}
                <div className="top-right float-lg-right">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== Header Navigation ======*/}
        <div className="header-navigation d-xl-block d-none">
          <div className="nav-overlay" />
          <div className="container-fluid">
            <div className="primary-menu">
              {/*====== Site Branding ======*/}
              <div className="site-branding">
                <Link legacyBehavior href="/index">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*====== Nav Menu ======*/}
              <div className="nav-menu">
                {/*====== Site Branding ======*/}
                <div className="mobile-logo mb-30 d-block d-xl-none">
                  <Link legacyBehavior href="/index">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-black.png"
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
                      <button
                        className="search-btn"
                        onClick={() => setSearchModal(true)}
                      >
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/*====== main Menu ======*/}
                <Menu />
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*====== Nav Right Item ======*/}
              <div className="nav-right-item">
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
                  <img src="assets/images/bar.png" alt="Image" />
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu handleShow={handleShow} />
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </Fragment>
  );
};
export default Header1;
