import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
const Header3 = () => {
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
      <header className="header-area header-three">
        {/*======= Header Navigation ======*/}
        <div className="header-navigation main-bg navigation-white d-xl-block d-none">
          <div className="nav-overlay" />
          <div className="container-fluid">
            {/*======= Primary Menu ======*/}
            <div className="primary-menu">
              {/*======= Site Branding ======*/}
              <div className="site-branding">
                <Link legacyBehavior href="/index">
                  <a className="brand-logo">
                    <img
                      src="../../assets/images/logo/netagro-logo2.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*======= Nav Menu ======*/}
              <div className="nav-menu">
                {/* Mobile Logo */}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link legacyBehavior href="/index">
                    <a className="brand-logo">
                      <img
                        src="../../assets/images/logo/netagro-log2.png"
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
                {/*=== Main menu ===*/}
                <Menu />
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*======= Nav Right Item ======*/}
              <div className="nav-right-item d-flex align-items-center">
                <div
                  className="search-btn"
                  data-toggle="modal"
                  data-target="#search-modal"
                  onClick={() => setSearchModal(true)}
                >
                  <i className="far fa-search" />
                </div>
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get Quote</a>
                  </Link>
                </div>
                <div
                  className="bar-button"
                  data-toggle="modal"
                  data-target="#sidebar-modal"
                  onClick={handleShow}
                >
                  <img src="../../assets/images/bar2.png" alt="Image" />
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
        <MobileMenu
          handleShow={handleShow}
          logo="../../assets/images/logo/netagro-logo2.png"
          extraClass={"main-bg navigation-white"}
          barIcon="../../assets/images/bar2.png"
        />
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </Fragment>
  );
};
export default Header3;
