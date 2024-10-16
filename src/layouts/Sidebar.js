import Link from "next/link";
import { Modal } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Modal
      className="modal fade sidebar-panel-wrapper"
      show={show}
      onHide={handleClose}
    >
      <div className="modal-content">
        <button className="close" data-dismiss="modal" onClick={handleClose}>
          <i className="far fa-times" />
        </button>
        <div className="sidebar-wrapper">
          <div className="sidebar-information-area">
            <div className="row no-gutters">
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <Link legacyBehavior href="/index">
                    <a className="footer-logo">
                      <img
                        src="assets/images/logo/logo-white.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                  <p>
                  Shaping the future of agriculture with smart irrigation solutions
                  </p>
                  <div className="social-item">
                    <h6>Follow Us</h6>
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
                          <i className="fab fa-tiktok" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <h4 className="title">Get In Touch</h4>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-map-marker-alt" />
                      Location
                    </h6>
                    <p>Ethiopia: Addis Ababa, Bole Sub city, Near Adey
                      Ababa Stadium</p>
                      <p>Israel: Meshek 83 Kfar Yehoshua
                      3658200</p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-envelope-open" />
                      Email Us
                    </h6>
                    <p>
                      <a href="mailto:info@netagroengineering.com">info@netagroengineering.com</a>
                    </p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-phone-plus" />
                      Hotline
                    </h6>
                    <p>
                      <a href="tel:+251118627424">Tel : +251118627424</a>
                      <a href="tel:+251118627424">Mobile : +251118627424</a>
                      <a href="tel:+251118627424">Mobile : +251118627424</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar-widget">
                <div className="sidebar-info-widget">
                  <h4 className="title">Newsletter</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        required
                      />
                      <button className="main-btn secondary-btn">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Sidebar;
