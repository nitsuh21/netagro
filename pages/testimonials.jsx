import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Testimonials = () => {
  return (
    <Layout>
      <PageBanner pageName={"Testimonials"} />
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
            className="testimonial-slider-one"
          >
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item wow fadeInUp">
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
      {/*====== Start Gallery Section  ======*/}
      <section className="testimonial-section-two pt-100 pb-50 p-r z-1">
        <div
          className="testimonial-bg bg_cover wow fadeInLeft"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
          }}
        />
        <div className="container-fluid">
          <div className="row align-items-lg-center">
            <div className="col-xl-6 col-lg-12">
              <div
                className="testimonial-content-box mb-50 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="section-title">
                  <div className="section-title text-white mb-50">
                    <span className="sub-title">
                      <i className="flaticon-plant" />
                      Testimonials
                    </span>
                    <h2>What’s Our Clients Say About Our Services</h2>
                  </div>
                  <div className="client-avatar-box-two">
                    <h6>Meet Our Global Clients</h6>
                    <div className="avatar-thumbs">
                      <ul>
                        <li>
                          <img
                            src="assets/images/gallery/avatar-5.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/gallery/avatar-6.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/gallery/avatar-7.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/gallery/avatar-8.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/gallery/avatar-9.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/gallery/avatar-10.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <a href="#" className="icon-btn">
                            <i className="far fa-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className="ratings">
                      <li>
                        <span>Quality Services</span>
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
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="testimonial-wrapper-two mb-50 wow fadeInRight">
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
                      accusantium doloremquey laudantium totam rem aperiam eaque
                      psa quae abillo inventore veritatis quas architecto beatae
                      dicta explicabo
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
                      accusantium doloremquey laudantium totam rem aperiam eaque
                      psa quae abillo inventore veritatis quas architecto beatae
                      dicta explicabo
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
                      accusantium doloremquey laudantium totam rem aperiam eaque
                      psa quae abillo inventore veritatis quas architecto beatae
                      dicta explicabo
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
      </section>
      {/*====== End Gallery Section  ======*/}
      {/*====== Start Gallery Section  ======*/}
      <section className="gallery-section pt-95 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Photo Gallery
                </span>
                <h2>Look Inside Our Garden</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.projectsSliderThree}
            className="projects-slider-three wow fadeInUp"
          >
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30">
              <div className="project-img">
                <img src="assets/images/gallery/gl-8.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <a href="#">Water The Plants</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30">
              <div className="project-img">
                <img src="assets/images/gallery/gl-9.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <a href="#">Water The Plants</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-10.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <a href="#">Water The Plants</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30">
              <div className="project-img">
                <img
                  src="assets/images/gallery/gl-11.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Carings</a>
                        </Link>
                      </h3>
                      <a href="#">Water The Plants</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default Testimonials;
