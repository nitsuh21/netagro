import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index = () => {
  return (
    <Layout header={1} footer={1}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-one gray-bg">
          <div className="shape shape-one animate-float-y">
            <span>
              <img src="assets/images/hero/shape-1.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-three animate-float-x">
            <span>
              <img src="assets/images/hero/shape-3.png" alt="shape" />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-lg-center">
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Content ===*/}
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Green Environments Make You Happy and provide Oxygen
                  </h1>
                  <p className="wow fadeInDown" data-wow-delay=".6s">
                    We Provide Beautiful Gardening &amp; Landscaping
                  </p>
                  <div
                    className="hero-button mb-30 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link legacyBehavior href="/about">
                      <a className="main-btn golden-btn mb-10">Explore More</a>
                    </Link>
                    <Link legacyBehavior href="/index">
                      <a className="main-btn filled-btn mb-10">How It Work</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Image Box ===*/}
                <div
                  className="hero-image-box d-xl-block d-none wow fadeInRight"
                  data-wow-delay=".75s"
                >
                  <img
                    src="assets/images/hero/hero-three_one.jpg"
                    alt="Hero Image"
                  />
                  <div className="shape hero-svg">
                    <svg
                      width={237}
                      height={569}
                      viewBox="0 0 237 569"
                      fill="none"
                    >
                      <path
                        d="M0.552583 568.307L1.99989 0.226473C1.99989 0.226473 237.025 -9.37181 236.276 284.731C235.527 578.834 0.552583 568.307 0.552583 568.307Z"
                        fill="#F1D2A9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section-two p-r z-1">
        {/*=== Features Wrapper ===*/}
        <div className="features-wrapper-two main-bg wow fadeInDown">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-two">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-three">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="features-area pb-30">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Garden Maintenance</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInDown">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Garden Overhauls</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                {/*=== Features Item ===*/}
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Landscape Design</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Counter Area ===*/}
          <div className="counter-area">
            <div className="row pt-70">
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={859} />
                    </h2>
                    <p>Projects Complete</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Satisfactions Rate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={683} />+
                    </h2>
                    <p>Expert Team Member</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={860} />+
                    </h2>
                    <p>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Experience Box ===*/}
        <div className="experience-box-two wow fadeInRight">
          <h2 className="number">
            <Counter end={25} />
          </h2>
          <h6>Years Of Experience</h6>
          <Link legacyBehavior href="/about">
            <a className="icon-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Category Section ======*/}
      <section className="category-section pt-100 pb-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Category Item ======*/}
              <div className="single-category-item mb-40 wow fadeInLeft">
                <div className="inner-category">
                  <div className="text">
                    <h3 className="title">Gardening</h3>
                  </div>
                  <div className="icon">
                    <i className="fal fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Category Item ======*/}
              <div className="single-category-item mb-40 wow fadeInUp">
                <div className="inner-category">
                  <div className="text">
                    <h3 className="title">Landscape</h3>
                  </div>
                  <div className="icon">
                    <i className="fal fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Category Item ======*/}
              <div className="single-category-item mb-40 wow fadeInDown">
                <div className="inner-category">
                  <div className="text">
                    <h3 className="title">Garden Overhauls</h3>
                  </div>
                  <div className="icon">
                    <i className="fal fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Category Item ======*/}
              <div className="single-category-item mb-40 wow fadeInRight">
                <div className="inner-category">
                  <div className="text">
                    <h3 className="title">Nature Green</h3>
                  </div>
                  <div className="icon">
                    <i className="fal fa-long-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section">
        <div className="container-fluid">
          {/*=== About Wrapper ===*/}
          <div className="about-wrapper gray-bg wow fadeInUp">
            <div className="container">
              <div className="row align-items-xl-center">
                <div className="col-xl-5 col-lg-12">
                  {/*=== About Image Box ===*/}
                  <div className="about-two_image-box wow fadeInLeft">
                    <img src="assets/images/about/about-6.png" alt />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-12">
                  {/*=== About Content Box ===*/}
                  <div className="about-three_content-box pl-lg-70 wow fadeInRight">
                    {/*=== Section Title ===*/}
                    <div className="section-title mb-25 wow fadeInUp">
                      <span className="sub-title">
                        <i className="flaticon-plant" />
                        About Gardening
                      </span>
                      <h2>Perfect Gardening The Result Of Nature</h2>
                    </div>
                    <p className="mb-40 wow fadeInDown">
                      Sed ut perspiciatis unde omnis iste natus voluptatem
                      accusantiue doloremque laudantium totam rem aperiam, eaque
                      ipsa quae abilloy inventore
                    </p>
                    <div className="row">
                      <div className="col-sm-6">
                        {/*=== Fancy About Item ===*/}
                        <div className="fancy-about-item mb-40 wow fadeInUp">
                          <div className="text">
                            <h5>
                              <i className="far fa-angle-double-right" />
                              Gardens
                            </h5>
                            <p>
                              Ut enim minima veniam nostrum exercitationem
                              corporis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/*=== Fancy About Item ===*/}
                        <div className="fancy-about-item mb-40 wow fadeInDown">
                          <div className="text">
                            <h5>
                              <i className="far fa-angle-double-right" />
                              Urbans
                            </h5>
                            <p>
                              Ut enim minima veniam nostrum exercitationem
                              corporis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/*=== Fancy About Item ===*/}
                        <div className="fancy-about-item mb-40 wow fadeInUp">
                          <div className="text">
                            <h5>
                              <i className="far fa-angle-double-right" />
                              Maintenance
                            </h5>
                            <p>
                              Ut enim minima veniam nostrum exercitationem
                              corporis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/*=== Fancy About Item ===*/}
                        <div className="fancy-about-item mb-40 wow fadeInUp">
                          <div className="text">
                            <h5>
                              <i className="far fa-angle-double-right" />
                              Event &amp; Programs
                            </h5>
                            <p>
                              Ut enim minima veniam nostrum exercitationem
                              corporis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="service-section pt-100 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-100 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  What We Do
                </span>
                <h2>We Care Your Garden &amp; Landscape</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-scissors" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Spring Cleaning</a>
                    </Link>
                  </h4>
                  <p>Sed ut perspiciatis omnisey natus voluptate accusa</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <i className="flaticon-watering" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Irrigation &amp; Drainage</a>
                    </Link>
                  </h4>
                  <p>Quis autem reprehe volutate esse quam molestiae</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-yard" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Snow &amp; Ice Removal</a>
                    </Link>
                  </h4>
                  <p>We denounce with righteous indignation and dislike</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <i className="flaticon-growing" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Lawn Fertilization</a>
                    </Link>
                  </h4>
                  <p>To take triviale exam which undertakes laborious</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Services Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section">
        <div className="container-fluid">
          {/*====== Project Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-1.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">01</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-2.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">02</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-3.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">03</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Cutting Hedge</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-4.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">04</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Plants Greenhouse</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Project Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-95 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Member
                </span>
                <h2>Meet Our Expert Gardener</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div
                className="single-team-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-10.jpg" alt="Team Image" />
                  <div className="social-box">
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
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin Hughes</a>
                    </Link>
                  </h4>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div
                className="single-team-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-11.jpg" alt="Team Image" />
                  <div className="social-box">
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
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Chester J. Thurman</a>
                    </Link>
                  </h4>
                  <p>Junior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div
                className="single-team-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-12.jpg" alt="Team Image" />
                  <div className="social-box">
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
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin Hughes</a>
                    </Link>
                  </h4>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*====== Experience Box ======*/}
              <div
                className="experience-box mt-25 mb-40 text-center wow fadeInUp"
                data-wow-delay=".35s"
              >
                <h2 className="fill-text">25+</h2>
                <h4>Experience Team Member</h4>
                <Link legacyBehavior href="/team">
                  <a className="btn-link">
                    View All Member <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-seciton pb-50">
        <div className="container">
          <div className="row align-items-xl-end">
            <div className="col-lg-6">
              {/*====== Features Image Box ======*/}
              <div className="features-image-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/features/features-10.png"
                  alt="Features Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Features Content Box ======*/}
              <div className="features-content-box mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Modern Gardening
                  </span>
                  <h2>We Offers Landscape &amp; Tree Plantations</h2>
                </div>
                <p className="mb-35">
                  Quis autem vel eum iure reprehenderit qui in voluptate velit
                  esse quam nihil molestiae consequatur vel illum qui dolorem
                </p>
                <ul className="features-list">
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Quality Gardening
                  </li>
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Dedicated Team Members
                  </li>
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Guarantee Service &amp; No Hidden Cost{" "}
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section">
        <div className="container-fluid">
          {/*=== Testimonial Wrapper ===*/}
          <div className="testimonial-quote-area p-r z-1 main-bg">
            <div className="shape shape-one">
              <span>
                <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
              </span>
            </div>
            {/*====== Quote Area ======*/}
            <div className="quote-wrapper wow fadeInDown">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                    {/*=== Client Quote Box ===*/}
                    <div className="client-quote-box">
                      <div className="icon">
                        <i className="fal fa-long-arrow-right" />
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <Counter end={372} />+
                        </h2>
                        <h4>
                          Global Clients Happy to Get Our gardening Services{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Area ======*/}
            <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-1 order-md-1 order-2">
                    {/*=== Testimonial Dots ===*/}
                    <div className="testimonial-dots mb-20" />
                  </div>
                  <div className="col-lg-11 order-md-2 order-1">
                    {/*=== Testimonial Slider ===*/}
                    <Slider
                      {...sliderProps.testimonialSliderThree}
                      className="testimonial-slider-three mb-20"
                    >
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Norman M. Devore</h6>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Douglas D. Hall</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Norman M. Devore</h6>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      {/*=== Testimonial Item ===*/}
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Douglas D. Hall</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*====== Section Title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  News &amp; Blog
                </span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/*====== Single Blog Post ======*/}
              <div className="single-blog-post-four mb-40 wow fadeInLeft">
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively an Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-15.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/*====== Single Blog Post ======*/}
              <div className="single-blog-post-four mb-40 wow fadeInRight">
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Build Up Progressively Enhanced Accessible</a>
                    </Link>
                  </h4>
                  <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-16.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
