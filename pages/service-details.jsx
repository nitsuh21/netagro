import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service Details"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Yard Cleaning</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolo
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-1.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>How to Benefit</h3>
                <p>
                  Unde omnis iste natus error voluptatem accusantium doloremque
                  laudantium totam rem aperiam eaque quae abillo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemenim spsam voluptatem quia voluptas sit
                  aspernatur aut odit fugit, sed quia consequunture
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience Gardening
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Sidewalk Clearing
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Snow Hauling &amp; Stacking
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/single-service-2.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/single-service-3.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                <h3>Working Process</h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue
                  and equal blame belongs
                </p>
                <div className="process-wrapper p-r z-1 wow fadeInUp">
                  <div className="shape line-shape">
                    <span>
                      <img
                        src="assets/images/shape/process-line.png"
                        alt="line"
                      />
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-landscape" />
                        </div>
                        <div className="text">
                          <h6>Design Garden</h6>
                          <p>Sed perspiciatis ostenatus voluptatem accusa</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-industry" />
                        </div>
                        <div className="text">
                          <h6>Test Planting</h6>
                          <p>Sed perspiciatis ostenatus voluptatem accusa</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-bus-stop" />
                        </div>
                        <div className="text">
                          <h6>Got Final Result</h6>
                          <p>Sed perspiciatis ostenatus voluptatem accusa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-4.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>Tips &amp; Tricks</h3>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p>
                  Exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Yard Cleaning
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Garden Makeup
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Landscaping
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Lawn Mowing
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Decorative Plants
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Yard Maintenance
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Gardener!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
                <div className="sidebar-widget widget-newsletter gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="sidebar-content">
                    <p>
                      Sed ut perspiciatis unde omnis ist natus error sit
                      voluptatem accusantium{" "}
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn primary-btn">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
                <div className="row">
                  <div className="col-md-6">
                    <div className="navigation-item prev-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/prev.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="#">Garden Makeup</a>
                        </h3>
                        <a href="#" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/next.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="#">Lawn Mowing</a>
                        </h3>
                        <a href="#" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default ServiceDetails;
