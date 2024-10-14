function Arrow({ className, extraClass, onClick, icon }) {
  return (
    <div className={`${className}  ${extraClass}`} onClick={onClick}>
      <i className={icon}></i>
    </div>
  );
}

export const sliderProps = {
  projectsSliderFour: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialSliderOne: {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow icon={"far fa-arrow-left"} extraClass={"prev"} />,
    nextArrow: <Arrow icon={"far fa-arrow-right"} extraClass={"next"} />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  },
  testimonialSliderThree: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  testimonialSliderTwo: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  heroOne: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  heroSliderTwo: {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow icon={"far fa-arrow-left"} extraClass={"prev"} />,
    nextArrow: <Arrow icon={"far fa-arrow-right"} extraClass={"next"} />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  },
  projectsSliderOne: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  projectsSliderTwo: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  projectsSliderThree: {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
  partnerSliderOne: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  },
  recentProductSlider: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  },
};
