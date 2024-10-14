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
                    Sed ut perspiciatis unde omni natus voluptatem accusantium
                    doloremque laudantium aperia maquep quae abillo inventore
                    veritatis architecto
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
                          <i className="fab fa-pinterest-p" />
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
                    <p>558 Main Street, 2nd Block Melbourne, Australia</p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-envelope-open" />
                      Email Us
                    </h6>
                    <p>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </p>
                  </div>
                  <div className="contact-info-item-two">
                    <h6 className="title">
                      <i className="far fa-phone-plus" />
                      Hotline
                    </h6>
                    <p>
                      <a href="tel:+000(123)45688">+000 (123) 456 88</a>
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
          <div className="sidebar-gallery pt-80">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/sgl-1.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/sgl-1.jpg"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/sgl-2.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/sgl-2.jpg"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/sgl-3.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/sgl-3.jpg"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/sgl-4.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/sgl-4.jpg"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/sgl-5.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/sgl-6.jpg"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-4">
                <div className="single-gallery-item">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/sgl-6.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/sgl-6.jpg"
                        className="img-popup icon-btn"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
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
