import Link from "next/link";
import { Fragment } from "react";
const SingleTeam = () => {
  return (
    <Fragment>
      <div>
        {/*====== Start Team Details Section ======*/}
        <section className="team-details-section pt-100 pb-100">
          <div className="container">
            {/*====== Team Details Wrapper ======*/}
            <div className="team-details-wrapper">
              <div className="row align-items-xl-center">
                <div className="col-lg-6">
                  <div className="member-img mb-50 mr-lg-40 wow fadeInLeft">
                    <img
                      src="assets/images/team/single-team.jpg"
                      alt="Team Image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="member-info mb-30 wow fadeInRight">
                    <h3 className="title">Michael S. Cotto</h3>
                    <p className="position">Senior Gardener</p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo enim
                      ipsam voluptatem quia{" "}
                    </p>
                    <div className="member-meta">
                      <ul className="check-style-one mb-20">
                        <li>
                          <i className="far fa-check" />
                          Gardening
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Landscaping
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Maintenance
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Trimmer
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Transportation
                        </li>
                      </ul>
                      <div className="member-contact-info mb-20">
                        <div className="icon">
                          <i className="far fa-phone-rotary" />
                        </div>
                        <p>
                          <a href="mailto:support@gmail.com">
                            support@gmail.com
                          </a>
                        </p>
                        <p>
                          <a href="tel:+000(123)45688">+000 (123) 456 88</a>
                        </p>
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
            </div>
            {/*====== Skill Wrapper ======*/}
            <div className="skill-wrapper main-bg text-white wow fadeInUp">
              <div className="shape shape-one">
                <span>
                  <img src="assets/images/team/leaf.png" alt="shape Image" />
                </span>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/*====== Single Skill Bar ======*/}
                  <div className="section-title mb-45">
                    <h2 className="title">Popular Skills</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/*====== Single Skill Bar ======*/}
                  <div className="single-skill-bar-two mb-45">
                    <h6 className="title">
                      Gardening<span className="number">83%</span>
                    </h6>
                    <div className="progress-bar">
                      <div
                        className="progress wow slideInLeft"
                        style={{ width: "83%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/*====== Single Skill Bar ======*/}
                  <div className="single-skill-bar-two mb-45">
                    <h6 className="title">
                      Designing<span className="number">94%</span>
                    </h6>
                    <div className="progress-bar">
                      <div
                        className="progress wow slideInLeft"
                        style={{ width: "94%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/*====== Single Skill Bar ======*/}
                  <div className="single-skill-bar-two mb-45">
                    <h6 className="title">
                      Landscaping<span className="number">75%</span>
                    </h6>
                    <div className="progress-bar">
                      <div
                        className="progress wow slideInLeft"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/*====== Single Skill Bar ======*/}
                  <div className="single-skill-bar-two mb-45">
                    <h6 className="title">
                      Maintenance<span className="number">78%</span>
                    </h6>
                    <div className="progress-bar">
                      <div
                        className="progress wow slideInLeft"
                        style={{ width: "78%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Team Details Section ======*/}
        {/*====== Start Gallery Section ======*/}
        <section className="gallery-section pb-100">
          <div className="container-fluid">
            {/*====== Gallery Slider ======*/}
            <div className="projects-slider-two wow fadeInDown">
              {/*====== Gallery Item ======*/}
              <div className="single-project-item-two">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/gl-4.jpg"
                    alt="Gallery Image"
                  />
                  <div className="project-overlay">
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                    <div className="hover-content text-white text-center">
                      <h3 className="title">
                        <Link legacyBehavior href="/product-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <p>Water The Plants</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Gallery Item ======*/}
              <div className="single-project-item-two">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/gl-5.jpg"
                    alt="Gallery Image"
                  />
                  <div className="project-overlay">
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                    <div className="hover-content text-white text-center">
                      <h3 className="title">
                        <Link legacyBehavior href="/product-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <p>Water The Plants</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Gallery Item ======*/}
              <div className="single-project-item-two">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/gl-6.jpg"
                    alt="Gallery Image"
                  />
                  <div className="project-overlay">
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                    <div className="hover-content text-white text-center">
                      <h3 className="title">
                        <Link legacyBehavior href="/product-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <p>Water The Plants</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Gallery Item ======*/}
              <div className="single-project-item-two">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/gl-7.jpg"
                    alt="Gallery Image"
                  />
                  <div className="project-overlay">
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                    <div className="hover-content text-white text-center">
                      <h3 className="title">
                        <Link legacyBehavior href="/product-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <p>Water The Plants</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Gallery Item ======*/}
              <div className="single-project-item-two">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/gl-6.jpg"
                    alt="Gallery Image"
                  />
                  <div className="project-overlay">
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                    <div className="hover-content text-white text-center">
                      <h3 className="title">
                        <Link legacyBehavior href="/product-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <p>Water The Plants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Gallery Section ======*/}
      </div>
    </Fragment>
  );
};
export default SingleTeam;
