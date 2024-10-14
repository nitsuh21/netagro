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
      title: "What Is Gardening ?",
    },
    {
      title: "How Much Time to Do Better Gardening?",
    },
    {
      title: "Landscaping For Tree Plants ?",
    },
    {
      title: "How Much Cost Gardening ?",
    },
    {
      title: "Why We Build Gardening & Landscaping ?",
    },
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
      <PageBanner pageName={"Faqs"} />
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
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInRight">
                  {faqsData1.map((faq, i) => (
                    <GaddenAccordion
                      title={faq.title}
                      key={i}
                      event={`collapseB${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
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
                    <a className="main-btn golden-btn">Support &amp; Join</a>
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
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-section pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Pricing Plan
                </span>
                <h2>Smart Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-1.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Residential Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Install a Patio or Pathway
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Install Landscaping
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Waterproof a Deck Costs
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Remove a Tree Stump
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div
                className="single-pricing-item mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-2.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Commercial Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Install a Patio or Pathway
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Install Landscaping
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Waterproof a Deck Costs
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Remove a Tree Stump
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>39.47
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-3.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Industrial Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Install a Patio or Pathway
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Install Landscaping
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Waterproof a Deck Costs
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Remove a Tree Stump
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>92.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 15% Save For Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Faqs;
