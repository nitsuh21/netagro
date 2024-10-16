import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Drip and Splinkler Irrigation"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Drip Irrigation</h2>
                <p>
                Our drip irrigation system solutions are reliable, cost-effective design and user –friendly systems. 
                We study design, supply and install for various types of crops, terrains, 
                climatic and weather conditions and support growers throughout all stages of the agricultural processes
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/drip_and_splinkler.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>Reasons that make drip irrigation advantages</h3>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Reduced Water Usage <br />
                  </li>
                  <p>
                    By directly targeting the root zone, water isn’t wasted on areas that won’t benefit the plant.
                    </p> <br />
                  <li>
                    <i className="far fa-check" />
                    Healthier Foliage 
                  </li>
                  <p>
                  Overhead watering means the leaves of the plant stay wet long after irrigating.
                   Wet leaves causes discoloring and spotting. With drip irrigation, the plants leaves remain dry.
                  </p> <br />
                  <li>
                    <i className="far fa-check" />
                    Prevents Fungus
                  </li>
                  <p>
                  Wet leaves can cause fungus such as powdery mildew to spread. Drip irrigation keeps foliage dry and prevents fungus.
                  </p>
                  <br />
                  <li>
                    <i className="far fa-check" />
                    Prevents Soil Erosion 
                  </li>
                  <p>
                  Drip irrigation is a gentle, steady drip and reduces the amount of runoff, therefor reducing soil erosion.
                  </p><br />
                  <li>
                    <i className="far fa-check" />
                    Reduces Weeds
                  </li>
                  <p>
                  Since areas in between the plants won’t be receiving water, weeds are less likely to grow.
                  </p><br />
                  <li>
                    <i className="far fa-check" />
                    Nutrient Runoff Minimized 
                  </li>
                  <p>
                  When there’s a large volume of water running off the soils surface it depletes nutrients in that soil. 
                   drip irrigation reduces runoff it reduces the loss of nutrients.
                  </p>
                </ul>
              </div>
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Splinkler Irrigation</h2>
                <p>
                The sprinkler irrigation system is a method in which water is sprayed into 
                the air and allowed to fall on the ground surface like rainfall and through small orifices or nozzles, 
                the spray is expanded by the flow of water under pressure.
                </p>
                <p>
                By pumping, water is distributed through a system of pipes and then sprayed into the air through sprinklers.
                 So, it breaks up into small water drops that fall to the ground, and to enable a uniform application of water,
                 the pump supply system, sprinklers, and operating conditions must be designed.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/features/splinkler.jpg"
                    alt="Service Image"
                  />
                </div>
                <p>The sprinkler irrigation system is suited for the most row, field, and tree crops and it is also 
                    adaptable to any farmable slope. And also have a very important advantage;-</p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    To all types of soil, it is suitable. <br />
                  </li> <br />
                  <li>
                    <i className="far fa-check" />
                    For irrigating crops where the plant population per unit area is very high, this system is suitable.
                  </li> <br />
                  <li>
                    <i className="far fa-check" />
                    For oilseeds and other cereal and vegetable crops it is most suitable.
                  </li>
                  <br />
                  <li>
                    <i className="far fa-check" />
                    It is easy to set up and affordable.
                  </li><br />
                  <li>
                    <i className="far fa-check" />
                    Water measurement is easier in this system.
                  </li><br />
                  <li>
                    <i className="far fa-check" />
                    Easy automation and mechanization.
                  </li><br />
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
