import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Index2 = () => {
  return (
    <Layout>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper One ======*/}
        <div className="hero-wrapper-two">
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroOne} className="hero-slider-one">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_one-slider-1.jpg)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".34"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
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
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={2563} />+
                          </h2>
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
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
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
                    "url(assets/images/hero/hero_one-slider-2.jpg)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
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
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={2563} />+
                          </h2>
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
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
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
                    "url(assets/images/hero/hero_one-slider-3.jpg)",
                }}
              />
              <div className="bgc-circle" data-animation="fadeInLeft" />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-8">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
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
                      <div
                        className="client-avatar-box"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        <div className="avatar-thumbs">
                          <ul>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-2.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-3.jpg"
                                alt="Avatar"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/gallery/avatar-4.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="rating-box">
                          <h2 className="number">
                            <Counter end={2563} />+
                          </h2>
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
                        <div className="text">
                          <span>Clients Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4">
                    {/*====== Hero Play ======*/}
                    <div className="hero-play float-lg-right">
                      <a
                        href="https://www.youtube.com/watch?v=1OgdblydUq0"
                        className="video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section  ======*/}
      <section className="features-section gray-bg pt-60 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              {/*====== Features Thumb Item  ======*/}
              <div
                className="features-thumb-item mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="features-inner-item">
                  <div className="thumb">
                    <img
                      src="assets/images/features/features-1.jpg"
                      alt="Features image"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-watering-plants" />
                    </div>
                    <h5 className="title">Garden Maintenance</h5>
                    <a href="#" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Features Thumb Item  ======*/}
              <div
                className="features-thumb-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="features-inner-item">
                  <div className="thumb">
                    <img
                      src="assets/images/features/features-2.jpg"
                      alt="Features image"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-shovels" />
                    </div>
                    <h5 className="title">Garden Overhauls</h5>
                    <a href="#" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              {/*====== Features Thumb Item  ======*/}
              <div
                className="features-thumb-item mb-40 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <div className="features-inner-item">
                  <div className="thumb">
                    <img
                      src="assets/images/features/features-3.jpg"
                      alt="Features image"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-gardening" />
                    </div>
                    <h5 className="title">Landscape Design</h5>
                    <a href="#" className="icon-btn">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section  ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/about/about-1.jpg"
                  className="about-img-one"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-2.jpg"
                  className="about-img-two"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/tree.png"
                  className="about-img-three"
                  alt="About Image"
                />
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={25} />+
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    About Gardening
                  </span>
                  <h2>We Care Your Garden &amp; Landscaping</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience Gardening
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}
      {/*====== Start Choose Section  ======*/}
      <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/choose-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Why Choose Us
                </span>
                <h2>We’re Awards Winning Gardening</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Choose Tab  ======*/}
                        <div className="choose-nav-tab">
                          <Nav as={"ul"} className="nav">
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab1"
                              >
                                We’re Since 1987!
                              </Nav.Link>
                            </li>
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab2"
                              >
                                Philosophy
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
                                Sed ut perspiciatis unde omnis natus error
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperia eaque quae abillo inventore
                                veritatis architecto beatae vitae dicta sunt
                                explicabo.
                              </p>
                              <div className="thumb-content">
                                <img
                                  src="assets/images/gallery/choose-2.jpg"
                                  alt="Image"
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted Gardening Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane className="tab-pane" eventKey="tab2">
                            <div className="choose-content-box">
                              <p>
                                Sed ut perspiciatis unde omnis natus error
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperia eaque quae abillo inventore
                                veritatis architecto beatae vitae dicta sunt
                                explicabo.
                              </p>
                              <div className="thumb-content">
                                <img
                                  src="assets/images/gallery/choose-3.jpg"
                                  alt="Image"
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted Gardening Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="assets/images/gallery/choose-1.jpg"
                        alt="Choose Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Choose Section  ======*/}
      {/*====== Start Working Process Section ======*/}
      <section className="working-process-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Working Process
                </span>
                <h2>How Does We Work In Gardening</h2>
              </div>
            </div>
          </div>
          <div className="working-process-wrapper wow fadeInUp">
            <div className="row no-lg-gutters">
              {/*====== Working Process Wrapper ======*/}
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 01</div>
                    <div className="icon">
                      <i className="flaticon-landscape" />
                    </div>
                    <div className="text">
                      <h4 className="title">Choose Landscape</h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 02</div>
                    <div className="icon">
                      <i className="flaticon-industry" />
                    </div>
                    <div className="text">
                      <h4 className="title">Design and Planting</h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 03</div>
                    <div className="icon">
                      <i className="flaticon-microscope" />
                    </div>
                    <div className="text">
                      <h4 className="title">Completion &amp; Testing</h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 04</div>
                    <div className="icon">
                      <i className="flaticon-bus-stop" />
                    </div>
                    <div className="text">
                      <h4 className="title">
                        Transportation &amp; Maintenance
                      </h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Working Process Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section-minus p-r z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section Title ======*/}
              <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Photo Gallery
                </span>
                <h2>Look Our Garden Insides</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Project Content Box ======*/}
              <div className="project-content-box mb-50 pl-lg-100 wow fadeInRight">
                <p className="mb-35">
                  Sed perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <Link legacyBehavior href="/project-grid">
                  <a className="main-btn golden-btn">View More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.projectsSliderOne}
          className="projects-slider-one wow fadeInDown"
        >
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-1.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-1.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Take Care Garden Trees</a>
                    </Link>
                  </h3>
                  <a href="#">Gardening &amp; Landscape</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Counter Section  ======*/}
      <section className="fact-bg-section p-r z-1 main-bg pb-160">
        <div className="circle-wrapper">
          <span />
          <span />
          <span />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={859} />+
                </h2>
                <p>Projects Complete</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={99} />%
                </h2>
                <p>Satisfactions Rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={683} />+
                </h2>
                <p>Expert Team Member</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 single-counter-column">
              {/*====== Counter Item  ======*/}
              <div
                className="single-counter-item mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <i className="fal fa-long-arrow-right" />
                </div>
                <h2 className="number">
                  <Counter end={860} />+
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Counter Section  ======*/}
      {/*====== Start Features Section  ======*/}
      <section className="features-section pt-70 p-r z-2">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6">
              {/*====== Features Image Box ======*/}
              <div className="features-one_image-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/features/features-4.jpg"
                  alt="Features Image"
                />
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== Features Content Box ======*/}
              <div className="features-content-box pl-lg-40 mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Modern Gardening
                  </span>
                  <h2>We Offers Landscape &amp; Tree Plantations</h2>
                </div>
                <p className="mb-30">
                  Quis autem vel eum iure reprehenderit qui in voluptate velit
                  esse quam nihil molestiae consequatur vel illum qui dolorem
                </p>
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    {/*====== Fancy Icon Box ======*/}
                    <div className="fancy-icon-box">
                      <div className="icon">
                        <i className="flaticon-pruning-shears" />
                      </div>
                      <div className="text">
                        <h5 className="title">
                          Modern Gardening &amp; Expert Team
                        </h5>
                        <p>Sed ut perspiciatis omnis volunteer accusan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {/*====== Fancy Icon Box ======*/}
                    <div className="fancy-icon-box">
                      <div className="icon">
                        <i className="flaticon-gardening-1" />
                      </div>
                      <div className="text">
                        <h5 className="title">
                          Tree Plantations &amp; Landscape
                        </h5>
                        <p>Sed ut perspiciatis omnis volunteer accusan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section  ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Testimonials
                </span>
                <h2>Global Clients Feedback</h2>
              </div>
            </div>
          </div>
          {/*====== Testimonial Slider  ======*/}
          <Slider
            {...sliderProps.testimonialSliderOne}
            className="testimonial-slider-one wow fadeInUp"
          >
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
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
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
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
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
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
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-2.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
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
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-3.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Brian L. Swinton</h6>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
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
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Timothy V. Kim</h6>
                    <p className="position">SR Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 pb-50 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Need a Expert
                  </span>
                  <h2>Looking For a Garden Specialist</h2>
                </div>
                <p className="mb-35">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium
                </p>
                <Link legacyBehavior href="/team">
                  <a className="main-btn golden-btn">Find Specialist</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
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
                className="single-blog-post mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-1.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                  <div className="author-meta">
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-1.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>Post By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Michael K. Garcia</a>
                        </Link>
                      </h6>
                    </div>
                    <Link legacyBehavior href="/blog-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/blog-details">
                    <a className="cat-link">Gardening</a>
                  </Link>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively an Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis isnate volunteer accusantium
                    dolore
                  </p>
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
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post mb-40 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-2.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                  <div className="author-meta">
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-2.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>Post By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Michael K. Garcia</a>
                        </Link>
                      </h6>
                    </div>
                    <Link legacyBehavior href="/blog-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/blog-details">
                    <a className="cat-link">Landscape</a>
                  </Link>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>High Contrast Mod Forced Colors Mode Custom</a>
                    </Link>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis isnate volunteer accusantium
                    dolore
                  </p>
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
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======*/}
              <div
                className="single-blog-post mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-3.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="entry-content">
                  <div className="author-meta">
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-3.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>Post By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Michael K. Garcia</a>
                        </Link>
                      </h6>
                    </div>
                    <Link legacyBehavior href="/blog-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <Link legacyBehavior href="/blog-details">
                    <a className="cat-link">Gardening</a>
                  </Link>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Enough Requirements For Accessible Components</a>
                    </Link>
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis isnate volunteer accusantium
                    dolore
                  </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index2;
