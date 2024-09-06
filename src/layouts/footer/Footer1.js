import Link from "next/link";
const Footer1 = () => {
  return (
    <footer className="footer-area gray-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/index">
                      <a>
                        <img
                          src="assets/images/logo/logo-black.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                    Quis autem eum reprehenderit volutate velit quam molestiae
                    conseuatur{" "}
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-box"
                  >
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                      <button className="submit-btn">
                        <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>558 Main Street, 2nd Block Melbourne, Australia</li>
                    <li>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <a href="tel:+000(123)45688">+000 (123) 456 88</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Quick Link</h4>
                <div className="widget-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="#">About Company</a>
                    </li>
                    <li>
                      <a href="#">Popular Services</a>
                    </li>
                    <li>
                      <a href="#">Need a Career ?</a>
                    </li>
                    <li>
                      <a href="#">Meet Our Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-gallery-widget float-lg-right mb-40 wow fadeInDown">
                <h4 className="widget-title">Gallery</h4>
                <div className="widget-content">
                  <ul className="gallery-list">
                    <li>
                      <a
                        href="assets/images/gallery/thumb-widget-1.jpg"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/gallery/thumb-widget-1.jpg"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/images/gallery/thumb-widget-1.jpg"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/gallery/thumb-widget-1.jpg"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/images/gallery/thumb-widget-1.jpg"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/gallery/thumb-widget-1.jpg"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/images/gallery/thumb-widget-4.jpg"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/gallery/thumb-widget-4.jpg"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/images/gallery/thumb-widget-5.jpg"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/gallery/thumb-widget-5.jpg"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="assets/images/gallery/thumb-widget-6.jpg"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/gallery/thumb-widget-6.jpg"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>Copy© 2023 Gadden. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              <div className="copyright-nav float-lg-right">
                <ul>
                  <li>
                    <a href="#">Setting &amp; Privacy</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Food Menu</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
