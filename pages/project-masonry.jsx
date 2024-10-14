import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
const ProjectMasonry = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Masonry"} />
      {/*====== Start Masonry Gallery section ======*/}
      <section className="Masonry-gallery-section pt-95 pb-70">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-center mb-65">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Photo Gallery
                </span>
                <h2>Inside Our Photo Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 order-lg-1">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInUp">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-1.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-2">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInDown">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-2.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-3 order-sm-8">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInUp">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-3.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-lg-4">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInLeft">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-4.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-lg-5">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInRight">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-5.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 order-lg-6 order-sm-6 wow fadeInDown">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-6.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-lg-7 order-sm-5">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInUp">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-7.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 order-lg-8 order-sm-7">
              {/*====== Gallery Item ======*/}
              <div className="masonry-project-item mb-30 wow fadeInDown">
                <div className="project-img">
                  <img
                    src="assets/images/gallery/masonry-8.jpg"
                    alt="Gallery Image"
                  />
                  <div className="hover-overlay">
                    <div className="hover-content">
                      <a href="#" className="icon-btn">
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Masonry Gallery section ======*/}
      <Partners />
    </Layout>
  );
};
export default ProjectMasonry;
