import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        {/*=== Partners Slider ===*/}
        <Slider
          {...sliderProps.partnerSliderOne}
          className="partner-slider-one pt-80 pb-70 border-top-1 wow fadeInDown"
        >
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/partner-1.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/partner-2.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/partner-3.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/partner-4.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/partner-5.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img
                  src="assets/images/partners/partner-4.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Partners;
