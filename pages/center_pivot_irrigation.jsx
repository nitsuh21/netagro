import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Center Pivot Irrigation"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Center Pivot Irrigation</h2>
                <p>
                Center pivot systems are self-propelled irrigation systems.
                It applies water to a crop or pasture generally above the crop canopy. Centre Pivots are anchored at one end, and rotate around a fixed central point. The water supply and power source are located at this fixed point. 
                These machines can be permanently fixed to one site, or can be towable between a numbers of circles.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/features/Centre_pivot _lateral_move_systems.jpg"
                    alt="Service Image"
                  />
                </div>
                <p>
                A center pivot system can <strong>improve irrigation efficiency </strong> by using a single piece of farm machinery to perform several important farm practices.
                Along with the aforementioned advantages, the center pivot system has many other advantages as well, including:
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Uniformity of applied water<br />
                  </li> <br />
                  <li>
                    <i className="far fa-check" />
                    No human labor required
                  </li><br />
                  <li>
                    <i className="far fa-check" />
                    May operate at lower pressure, thus conserving energy
                  </li>
                  <br />
                  <li>
                    <i className="far fa-check" />
                    Efficient water use, which prevents water runoff
                  </li><br />
                  <li>
                    <i className="far fa-check" />
                    With a timer set, it may regulate water application and sprinkle it daily at a particular time in the day or in the evening.
                  </li><br />
                  <p>
                  A center pivot system is applicable to almost all crops including arable crops, vegetables, and fruit trees. It can easily manage water levels in the soil due to the semi-automatic operation of center pivots and its lateral moves. Water application efficiency ranges up to 80%, depending on management and designed installation in the field.
                  </p>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/landscaping">
                        <a>
                          Landscaping
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/drip_and_splinkler_irrigation">
                        <a>
                          Drip and Splinkler Irrigation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/family_drip_irrigation">
                        <a>
                          Family Drip Irrigation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/center_pivot_irrigation">
                        <a>
                          Center Pivot Irrigation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/Hidroseeding_rehabilation">
                        <a>
                          Hidroseeding / Rehabilation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/supply_and_import">
                        <a>
                         Equipment supply and import
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Speciall Ally!</h3>
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
                    Subscribe to our newsletter and get our newest updates
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
        </div>
      </section>
      {/*====== End Service Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default ServiceDetails;
