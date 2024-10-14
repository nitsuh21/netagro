import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import {client, urlFor} from "@/src/utils/configSanity"
import { useState, useEffect } from "react";

const Index = () => {
  const [projects, setProjects] = useState([])
  const [feedbacks , setFeedbacks] = useState([])
  const [news, setNews] = useState([])

  useEffect(()=>{
    const fetchProjects = async () => {
      const query = `*[_type == "project"]`
      try {
        const result = await client.fetch(query);
        console.log("projects", projects)
        setProjects(result);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects()
  }, [])

  useEffect(()=>{
    const fetchNews = async () => {
      const query = `*[_type == "news"]`
      try {
        const result = await client.fetch(query);
        console.log("news", news)
        setNews(result);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews()
  },[])

  useEffect(()=>{
    const fetchFeedbacks = async () => {
      const query = `*[_type == "feedback"]`
      try {
        const result = await client.fetch(query);
        console.log("feedbacks", feedbacks)
        setFeedbacks(result);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    }

    fetchFeedbacks()
    })

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
                    "url(assets/images/bg/abebas1.png)",
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
                       Landscaping
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        We Provide Beautiful Gardening &amp; Landscaping
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                       <div className="hero-button mb-30">
                              <Link href="/services" className="main-btn golden-btn mb-10">
                                Explore More
                              </Link>

                              <Link href="/projects" legacyBehavior>
                                <a className="main-btn filled-btn filled-white mb-10">
                                  Projects
                                </a>
                              </Link>
                      </div>
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
                    "url(assets/images/service/drip_and_splinkler.jpg)",
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
                        Drip, Sprinkler, Center Pivot irrigation system
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                       Irrigation system
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Reliable, Cost-effective design and user–friendly systems
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
                            Projects
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
                    "url(assets/images/service/rainwater_harvesting.jpg)",
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
                        Erosion Control
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Hydroseeding and Rehabilitation
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Erosion control methods on construction sites or as an alternative to the traditional process of seed broadcasting
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
                            Projects
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
                  What We Do For Irrigation
                </span>
                <h2>Irrigation systems and types we can install </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                NETAGRO is equipped with experienced engineers capable of doing the study,
                design and implementation of modern irrigation projects for its customers with the best advises on 
                the best and modern irrigation practices that are currently being applied in the world of modern irrigation
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
                    src="assets/images/features/drip_and_splinkler.jpg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-landscape-1" />
                  </div>
                  <h5 className="title">Drip &amp; sprinkler systems</h5>
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
                    src="assets/images/features/Centre_pivot _lateral_move_systems.jpg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-watering-can" />
                  </div>
                  <h5 className="title">Centre pivot &amp; lateral move systems</h5>
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
                    src="assets/images/features/automatic_irrigation.jpeg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-lawnmower" />
                  </div>
                  <h5 className="title">Manual &amp; automated systems</h5>
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
                    src="assets/images/features/rainwater_harvesting.jpg"
                    alt="Image"
                    height={200}
                    width={300}
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-spider-plant" />
                  </div>
                  <h5 className="title">Rain water harvesting, tailings &amp; dust suppression</h5>
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
          style={{ backgroundImage: "url(assets/images/bg/abebas1.png)" }}
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
                      About NETAGRO
                    </span>
                    <h2>We Care Your Garden &amp; Landscaping</h2>
                  </div>
                  <p className="mb-45">
                  We bring knowledge and experience to your project. We have the creativity to offer “Out of the box” 
                  ideas and designs. We are familiar with the correct materials and plants to use for your project. 
                  We have the experience to do the specialized installations our competitors aren’t capable of producing!
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
                        <Counter end={7} />+
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
                <h2>We Care For Your Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
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
                    <Link legacyBehavior href="/landscaping">
                      <a>Landscaping</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/landscaping">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-3.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
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
                    <Link legacyBehavior href="/drip_and_splinkler_irrigation">
                      <a>Drip and Sprinkler Irrigation System</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/drip_and_splinkler_irrigation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/drip_and_splinkler.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
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
                    <Link legacyBehavior href="/family_drip_irrigation">
                      <a>Family drip Irrigation System (FDS)</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/family_drip_irrigation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/fds.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
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
                    <Link legacyBehavior href="/center_pivot_irrigation">
                      <a>Center pivot irrigation system</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/center_pivot_irrigation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/Centre_pivot _lateral_move_systems.jpg"
                    alt="Service Image"
                    height={250}
                    width={300}
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
                    <Link legacyBehavior href="/hydroseeding_rehabilitation">
                      <a>Hydroseeding / rehabilitation</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/hydroseeding_rehabilitation">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/rehabillitation.jpeg"
                    alt="Service Image"
                    height={250}
                    width={300}
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
                      <a>Equipments supply and import</a>
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
                    src="assets/images/service/products.png"
                    alt="Service Image"
                    height={250}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
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
                  <h2>Looking For Some of Our Projects?</h2>
                </div>
              </div>
              <div className="col-lg-3">
                {/*====== CTA Button ======*/}
                <div className="cta-button float-lg-right mb-40 wow fadeInRight">
                  <Link legacyBehavior href="/projects">
                    <a className="main-btn golden-btn">Explore More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="team-section pt-55 pb-30">
        <div className="container">
          <div className="row">
            {projects.slice(0,2).map((project, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 item cat-1 cat-4">
                {/*====== Gallery Item ======*/}
                <div className="single-project-item-three mb-30 wow fadeInDown">
                  <div className="project-img">
                    {project.images && project.images.length > 0 && (
                      <img src={urlFor(project.images[0]).url()} alt={project.title} 
                       height={300} 
                      />
                    )}
                    <div className="hover-overlay">
                      <Link legacyBehavior href="">
                        <a className="icon-btn">
                          <i className="fas fa-arrow-right" />
                        </a>
                      </Link>
                      <div className="hover-content text-white">
                        <h4 className="title">{project.projectName}</h4>
                        <p>{project.projectType}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
            
            <div className="col-lg-3 col-sm-6">
              {/*====== Experience Box ======*/}
              <div
                className="experience-box mt-25 mb-40 text-center wow fadeInUp"
                data-wow-delay=".35s"
              >
                <h2 className="fill-text">15+</h2>
                <h4>Successful projects</h4>
                <Link legacyBehavior href="/projects">
                  <a className="btn-link">
                    View All projects <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
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
            {feedbacks.map((feedback, index) => (
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
                    <h6>{feedback.title}</h6>
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
                  {feedback.message}
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    
                    <img
                      src={
                        feedback.gender === "Male" ?
                        "assets/images/testimonial/male-avator.png" 
                        : feedback.gender === "Female" 
                        ? "assets/images/testimonial/female-avator.png"
                        : "assets/images/testimonial/thumb-2.jpg"
                      }
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">{feedback.author}</h6>
                    <p className="position">{feedback.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
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
              {news.slice(0,3).map((news, index) => (
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div
                    className="single-blog-post-two mb-40 wow wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="entry-content">
                      <div className="post-meta">
                        <span className="date">
                          <Link legacyBehavior href={`/news/${news.title}`}>
                            <a>{news.date}</a>
                          </Link>
                        </span>
                      </div>
                      <h4 className="entry-title">
                        <Link legacyBehavior href={`/news/${news.title}`}>
                          <a>{news.title}</a>
                        </Link>
                      </h4>
                      <div className="author">
                        <img
                          src="assets/images/blog/author-thumb-4.jpg"
                          alt="Author Image"
                        />
                        <h6>
                          <span>By</span>
                          <Link legacyBehavior href={`/news/${news.title}`}>
                            <a>{news.author}</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="post-thumbnail">
                      <img
                        src={urlFor(news.coverImage).url()} 
                        alt={news.title}
                        height={260}
                      />
                    </div>
                  </div>
                </div>
              ))}
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
export default Index;
