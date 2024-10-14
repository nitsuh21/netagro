import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
const ProjectDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Details"} />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <div className="row">
              <div className="col-lg-7">
                <div className="project-info mb-30 wow fadeInLeft">
                  <h3 className="title">Yard Cleaning</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolorese ratione
                    voluptatem sequi nesciunte Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore{" "}
                  </p>
                  <ul className="check-style-one mb-60">
                    <li>
                      <i className="far fa-check" />
                      We’re Experience Gardening
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Awards Winning &amp; Professional Team Member
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Tree Plantations &amp; Landscaping
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="project-info-widget mb-30 ml-lg-70 wow fadeInRight">
                  <div className="info-content">
                    <h6>Tree Plantations &amp; Landscaping</h6>
                    <ul>
                      <li>
                        <span className="title">Garden Owner</span>
                        <span className="text">Sam V. Winslow</span>
                      </li>
                      <li>
                        <span className="title">Location</span>
                        <span className="text">5 main Street, USA</span>
                      </li>
                      <li>
                        <span className="title">Category</span>
                        <span className="text">Gardening</span>
                      </li>
                      <li>
                        <span className="title">Date</span>
                        <span className="text">25 Dec 2022</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/project-single-1.jpg"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="block-image wow fadeInUp">
                  <img
                    src="assets/images/gallery/project-single-2.jpg"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
            <h3>Project Summery</h3>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/project-single-3.jpg"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInUp">
                  <img
                    src="assets/images/gallery/project-single-4.jpg"
                    alt="Project Image"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/gallery/project-single-5.jpg"
                    alt="Project Image"
                  />
                </div>
              </div>
            </div>
            <h3>Final Results</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus
            </p>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
            <div className="row">
              <div className="col-md-6">
                <div className="navigation-item prev-post mb-40">
                  <div className="thumb">
                    <img
                      src="assets/images/service/prev.jpg"
                      alt="thumb image"
                    />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="#">Garden Makeup</a>
                    </h3>
                    <a href="#" className="btn-link">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="navigation-item next-post mb-40">
                  <div className="thumb">
                    <img
                      src="assets/images/service/next.jpg"
                      alt="thumb image"
                    />
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="#">Lawn Mowing</a>
                    </h3>
                    <a href="#" className="btn-link">
                      Read More
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Project-Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default ProjectDetails;
