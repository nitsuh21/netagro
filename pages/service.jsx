import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Service = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service"} />
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-12">
              <div className="features-content-box p-r z-2 mb-20">
                {/*====== Section-title ======*/}
                <div className="section-title mb-50 wow fadeInDown">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    What We Do For Gardening
                  </span>
                  <h2>We Care Your Garden &amp; Landscaping</h2>
                </div>
                <div className="features-item-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                        <div className="shape icon-shape">
                          <i className="flaticon-landscape-1" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-landscape-1" />
                        </div>
                        <div className="text">
                          <h5 className="title">Gardens</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInDown">
                        <div className="shape icon-shape">
                          <i className="flaticon-spider-plant" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-spider-plant" />
                        </div>
                        <div className="text">
                          <h5 className="title">Event &amp; Programs</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                        <div className="shape icon-shape">
                          <i className="flaticon-lawnmower" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-lawnmower" />
                        </div>
                        <div className="text">
                          <h5 className="title">Maintenance</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInDown">
                        <div className="shape icon-shape">
                          <i className="flaticon-watering-can" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-watering-can" />
                        </div>
                        <div className="text">
                          <h5 className="title">Urbans</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-two_image-box p-r z-1 text-center pr-lg-60 mb-50 wow fadeInRight">
                <img
                  src="assets/images/features/features-5.jpg"
                  className="mt-50"
                  alt="features image"
                />
                <div className="shape shape-one">
                  <span />
                </div>
                <div className="circle-logo">
                  <div className="inner-circle">
                    <i className="flaticon-carnivorous-plant" />
                    <h5>Gadden</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-bgc-section p-r z-1 main-bg pt-95 pb-70">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Popular Services
                </span>
                <h2>We Care Your Garden &amp; Landscape</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div className="single-service-item mb-30 wow fadeInUp">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-agriculture" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Yard Cleaning</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-1.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div className="single-service-item mb-30 wow fadeInDown">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-field-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-field-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Garden Makeup</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-2.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div className="single-service-item mb-30 wow fadeInUp">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-farming" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-farming" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Landscaping</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-3.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div className="single-service-item mb-30 wow fadeInLeft">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-park" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-park" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Lawn Mowing</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-4.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div className="single-service-item mb-30 wow fadeInDown">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-rake" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-rake" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Decorative Plants</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-5.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div className="single-service-item mb-30 wow fadeInRight">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-growth-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-growth-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Yard Maintaince</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-6.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-section pt-95 pb-60">
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
              <div className="single-pricing-item mb-40 wow fadeInUp">
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
              <div className="single-pricing-item mb-40 wow fadeInDown">
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
              <div className="single-pricing-item mb-40 wow fadeInUp">
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
      <Partners />
    </Layout>
  );
};
export default Service;
