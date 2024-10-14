import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import {client, urlFor} from "@/src/utils/configSanity"
import { useState, useEffect } from "react";


const About = () => {
  const [feedbacks, setFeedbacks] = useState([]);

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
    <Layout>
      <PageBanner pageName={"About"} />
      <section className="about-section pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  About NETAGRO
                </span>
                <h2>
                   Shaping the future of agriculture with smart irrigation solutions 
                    </h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-content-box mb-50 wow fadeInRight">
                <p className="mb-30">
                <strong> NETAGRO ENGINEERING</strong> Private Limited Company is a 
                multi-disciplinary firm, engaged in the provisions of professional 
                services in a wide range of fields including water resources, in 
                Modern pressurized irrigation and landscape sector, agriculture and 
                electromechanical works. The company is owned and leading by 
                highly trained expertise in the field of pressurized irrigation 
                system Israeli and Ethiopian professional.
                </p>
                <ul className="check-style-one mb-40">
                  <li>
                    <i className="far fa-check" />
                    Quality portfolio
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Leading by highly trained professionals
                  </li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/projects">
                    <a className="main-btn secondary-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-3.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInDown">
                <img src="assets/images/about/about-4.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-5.jpg" alt="About Image" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/*====== About Wrapper ======*/}
              <div className="about-wrapper-two gray-bg mt-minus-110 p-r wow fadeInDown">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Mission</h3>
                        <p>
                          Sed persiciatis unde omnis esnatu volunteer
                          accusantium doloreue laudan totam
                        </p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item item-active text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-vision" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Vision</h3>
                        <p>
                          Sed persiciatis unde omnis esnatu volunteer
                          accusantium doloreue laudan totam
                        </p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-management" />
                      </div>
                      <div className="text">
                        <h3 className="title">Plan &amp; Goals</h3>
                        <p>
                          Sed persiciatis unde omnis esnatu volunteer
                          accusantium doloreue laudan totam
                        </p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
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
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-100">
        <div className="features-wrapper">
          <div
            className="features-bg bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/features-bg-1.jpg)",
            }}
          />
          <div className="features-bgc-content-box main-bg text-white wow fadeInRight">
            <div className="features-content-box">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInUp">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  What Makes us different?
                </span>
              </div>
              <p className="mb-40">
                We are known for the delivering high quality services{" "}
              </p>
              <div className="single-features-item mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-pruning-shears" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Proffesional &amp; Expert Team</h5>
                  <p>
                  Established and managed by highly-trained professionals with long and extensive practical experience.
                  </p>
                </div>
              </div>
              <div className="single-features-item mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gardening-1" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Proven Portfolio &amp; Track Records</h5>
                  <p>
                  Acomplished lots of project on 
                  commercial farms which involves on Vegetable, Flower, Herb etc... 
                  Farming both open field and green house throughout Ethiopia and 
                  East Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
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
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
