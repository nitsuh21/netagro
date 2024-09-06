import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper ======*/}
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg-2.png" className="waves one" alt />
            <img src="assets/images/hero/bg.png" className="waves two" alt />
          </div>
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-1.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        We Provide Beautiful Gardening &amp; Landscaping
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-2.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-left">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Landscape
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        We Provide Beautiful Gardening &amp; Landscaping
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-3.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-right">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        We Provide Beautiful Gardening &amp; Landscaping
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/index">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  What We Do For Gardening
                </span>
                <h2>We Care Your Garden &amp; Landscaping</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                  Sed perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <Link legacyBehavior href="/about">
                  <a className="btn-link">
                    Learn More
                    <i className="far fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-6.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-landscape-1" />
                  </div>
                  <h5 className="title">Gardens</h5>
                  <p>Sed perspiciatis unde omnis volunteer accusantium</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-watering-can" />
                  </div>
                  <h5 className="title">Urbans</h5>
                  <p>Sed perspiciatis unde omnis volunteer accusantium</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-8.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-lawnmower" />
                  </div>
                  <h5 className="title">Maintenance</h5>
                  <p>Sed perspiciatis unde omnis volunteer accusantium</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/features-9.jpg"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-spider-plant" />
                  </div>
                  <h5 className="title">Event &amp; Programs</h5>
                  <p>Sed perspiciatis unde omnis volunteer accusantium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-bg-section">
        {/*====== About BG ======*/}
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-50">
                    <span className="sub-title">
                      <i className="flaticon-plant" />
                      About Gardening
                    </span>
                    <h2>We Care Your Garden &amp; Landscaping</h2>
                  </div>
                  <p className="mb-45">
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantiue doloremque laudantium totam rem aperiam, eaque
                    ipsa quae abilloy inventore veritatis et quasi architecto
                    beatae vitae dicta sunt
                  </p>
                  <div className="about-inner-content d-flex justify-content-between">
                    <div className="inner-content">
                      <ul className="check-style-one mb-45">
                        <li>
                          <i className="far fa-check" />
                          We’re Experience Gardening
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Awards Winning &amp; Expert Team Member
                        </li>
                      </ul>
                      <Link legacyBehavior href="/about">
                        <a className="main-btn primary-btn">Learn More Us</a>
                      </Link>
                    </div>
                    <div className="experience-box-two">
                      <h2 className="number">
                        <Counter end={25} />+
                      </h2>
                      <h6>Years Of Experience</h6>
                      <Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">
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
              {/*====== Section Title ======*/}
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
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
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
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".25s"
              >
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
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
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
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".35s"
              >
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
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
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
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".45s"
              >
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
      {/*====== Start Skills Section  ======*/}
      <section className="skills-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Skill Content Box ======*/}
              <div className="skill-content-box mb-35 mr-lg-50 wow fadeInLeft">
                {/*====== Section-title ======*/}
                <div className="section-title mb-25">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    We’re Skilled Full
                  </span>
                  <h2>Experience Gardening &amp; Landscape Center</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantiue doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abilloy inventore veritatis et quasi architecto
                  beatae vitae dicta sunt
                </p>
                {/*====== Skills List ======*/}
                <ul className="skills-list">
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Gardening</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="number">89%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Landscape</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "83%" }}
                        />
                      </div>
                      <span className="number">83%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Maintenance</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "93%" }}
                        />
                      </div>
                      <span className="number">93%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*====== Skills Image Box ======*/}
              <div className="skill-two_image-box mb-20 p-r z-1 wow fadeInRight">
                <img
                  src="assets/images/skill/skill-4.jpg"
                  className="skill-img-one"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/skill/skill-5.jpg"
                  className="skill-img-two"
                  alt="Skill Image"
                />
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
      {/*====== End Skills Section  ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-section">
        <div className="container">
          {/*====== CTA Wrapper ======*/}
          <div className="cta-wrapper pt-60 border-top-1">
            <div className="row align-items-center">
              <div className="col-lg-9">
                {/*====== CTA Content Box ======*/}
                <div className="cta-content-box d-flex align-items-center mb-40 wow fadeInLeft">
                  <img
                    src="assets/images/gallery/circle-logo.png"
                    className="circle-logo"
                    alt="Circle Logo"
                  />
                  <h2>Looking For a Experience Garden Specialist?</h2>
                </div>
              </div>
              <div className="col-lg-3">
                {/*====== CTA Button ======*/}
                <div className="cta-button float-lg-right mb-40 wow fadeInRight">
                  <Link legacyBehavior href="/team">
                    <a className="main-btn golden-btn">Find Specialist</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section">
        <div className="container-fluid">
          {/*====== Gallery Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderTwo}
            className="projects-slider-two wow fadeInDown"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-4.jpg" alt="Gallery Image" />
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
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-5.jpg" alt="Gallery Image" />
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
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-6.jpg" alt="Gallery Image" />
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
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-7.jpg" alt="Gallery Image" />
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
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-6.jpg" alt="Gallery Image" />
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
          </Slider>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
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
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".25s"
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
                data-wow-delay=".3s"
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
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section">
        <div className="container-fluid">
          {/*====== Testimonial Wrapper ======*/}
          <div className="testimonial-wrapper main-bg wow fadeInDown">
            <div className="shape shape-one">
              <span>
                <img src="assets/images/testimonial/img-1.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-two">
              <span>
                <img src="assets/images/testimonial/img-2.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-three">
              <span>
                <img src="assets/images/testimonial/img-3.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-four">
              <span>
                <img
                  src="assets/images/testimonial/tree.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="shape shape-five">
              <span>
                <img
                  src="assets/images/testimonial/tree2.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  {/*====== Testimonial Slider  ======*/}
                  <Slider
                    {...sliderProps.testimonialSliderTwo}
                    className="testimonial-slider-two"
                  >
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality Services</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Sed persiciatis unde omnis iste natus voluptatem
                        accusantium doloremquey laudantium totam rem aperiam
                        eaque psa quae abillo inventore veritatis quas
                        architecto beatae dicta explicabo
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality Services</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Sed persiciatis unde omnis iste natus voluptatem
                        accusantium doloremquey laudantium totam rem aperiam
                        eaque psa quae abillo inventore veritatis quas
                        architecto beatae dicta explicabo
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality Services</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Sed persiciatis unde omnis iste natus voluptatem
                        accusantium doloremquey laudantium totam rem aperiam
                        eaque psa quae abillo inventore veritatis quas
                        architecto beatae dicta explicabo
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Blog Section  ======*/}
      <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  News &amp; Blog
                </span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively and Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-4.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-4.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post-two mb-40 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>High Contrast Mod Forceedy Colors Mode Custom</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-5.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-5.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post-two mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Enough Requirements For Accessible Components</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-6.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-6.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index3;
