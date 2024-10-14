import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Service = () => {
  return (
    <Layout>
      <PageBanner pageName={"Services"} />
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
                    Some of the
                  </span>
                  <h2>Irrigation systems &amp; types we can install</h2>
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
                          <h5 className="title">Drip and sprinkler systems</h5>
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
                          <h5 className="title">Centre pivot and lateral move systems</h5>
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
                          <h5 className="title">Manual and automated systems</h5>
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
                          <h5 className="title">Rain water harvesting, tailings and dust suppression</h5>
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
                  src="assets/images/features/features-4.jpg"
                  className="mt-50"
                  alt="features image"
                />
                <div className="shape shape-one">
                  <span />
                </div>
                <div className="circle-logo">
                  <div className="inner-circle">
                    <i className="flaticon-carnivorous-plant" />
                    <h5>NetAgro</h5>
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
                    <Link legacyBehavior href="/hydroseeding_rehabilation">
                      <a>Hydroseeding / rehabilitation</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/hydroseeding_rehabilation">
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
                    <Link legacyBehavior href="#">
                      <a>Equipments supply and import</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="#">
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
      {/*====== Start Features Section 2 ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-12">
              <div className="features-content-box p-r z-2 mb-20">
                {/*====== Section-title ======*/}
                <div className="section-title mb-50 wow fadeInDown">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Some of the
                  </span>
                  <h2>Irrigation systems &amp; types we can install</h2>
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
                          <h5 className="title">Sports field, golf course and horse arena’s</h5>
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
                          <h5 className="title">Domestic, commercial and dragline systems</h5>
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
                          <h6 className="title">Sludge and effluent irrigation</h6> <br />
                          <h6>
                          Pole mounted overhead irrigation
                          </h6>
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
                          <h6 className="title">Irrigation travellers and self-creeping water cannon</h6> <br />
                          <h6>
                          Misting irrigation for propagation
                          </h6>
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
                    <h5>NetAgro</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Service;
