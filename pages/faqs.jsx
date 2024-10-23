import GaddenAccordion from "@/src/components/GaddenAccordion";
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const Faqs = () => {
  const faqsData1 = [
    {
      title: "What are NETAGRO engineering services?",
      content: "NETAGRO is equipped with experienced professionals capable of doing the study, design and implementation of modern irrigation projects for its customers with the best advises on the best and modern irrigation practices that are currently being applied in the world of modern irrigation."
    },
    {
      title: "How can NETAGRO services help agricultural and landscaping investments?",
      content: "NETAGRO services are designed in such a way that guaranteeing reliability, the best chance of high yield, cost and resource management, and fast return on your investment."
    },
    {
      title: "Do you provide technical services and agronomy services to any project?",
      content: "Yes. We provide services to mega project covering thousands of hectares, to single hectare fields. No matter what size of the project, we find the best and the most cost-efficient technical solution for you."
    },
    {
      title: "How can NETAGRO service help grow my yield?How Much Cost Gardening ?",
      content: "NETAGRO services we offer ranges from full irrigation management to technical & agronomy consulting services, result-based business models and long-term contracts to ensure stable success."
    }
  ];
  const faqsData2 = [
    {
      title: "How About Our Team Member ?",
    },
    {
      title: "What Rule Are Follow To Build a Garden ?",
    },
    {
      title: "Residential Gardening ?",
    },
    {
      title: "Commercial Gardening ?",
    },
    {
      title: "We Provide Trasnportation ?",
    },
    {
      title: "What Is Gardening ?",
    },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"FAQs"} />
      <section className="faq-section pt-95">
        <div className="container">
          <Accordion
            defaultActiveKey="collapse0"
            className="accordion"
            id="accordionOne"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInLeft">
                  {faqsData1.map((faq, i) => (
                    <GaddenAccordion
                      title={faq.title}
                      key={i}
                      event={`collapse${i}`}
                      content={faq.content}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </div>
              </div>
              <div className="sidebar-widget-area">
              <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Ally!</h3>
                    <p>You’re in the right place!</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
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
          </Accordion>
        </div>
      </section>
      {/*====== Start Info Section ======*/}
      <section className="info-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              {/*====== Single Info Item ======*/}
              <div className="single-info-item style-one mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Get Consultations</span>
                  <h4 className="title">
                    Need Any Consultations to Build Gardening ?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Single Info Item ======*/}
              <div className="single-info-item style-two mb-40 wow fadeInDown">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Get Consultations</span>
                  <h4 className="title">
                    Get Every Single Update Or 24/7 Support
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn golden-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Single Info Item ======*/}
              <div className="single-info-item style-three mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-2.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Need A Career ?</span>
                  <h4 className="title">
                    Need Any Jobs Or Work With a Team Member?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Faqs;
