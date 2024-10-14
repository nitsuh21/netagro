import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Team = () => {
  return (
    <Layout>
      <PageBanner pageName={"Meet The Gardener"} />
      <section className="skills-section pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Skill Content Box ======*/}
              <div className="skill-content-box mb-35 wow fadeInLeft">
                {/*====== Section-title ======*/}
                <div className="section-title mb-25">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Pricing Plan
                  </span>
                  <h2>Smart Pricing Package</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantiue doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abilloy inventore veritatis et quasi architecto
                  beatae vitae dicta sunt
                </p>
                {/*====== Skills List ======*/}
                <ul className="skills-list">
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Gardening</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="number">89%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Landscape</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "83%" }}
                        />
                      </div>
                      <span className="number">83%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Maintenance</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "93%" }}
                        />
                      </div>
                      <span className="number">93%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Skills Image Box ======*/}
              <div className="skill-image-box mb-50 ml-lg-40 p-r z-1">
                <img
                  src="assets/images/skill/skill-1.jpg"
                  className="skill-img-one wow fadeInUp"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/skill/skill-2.jpg"
                  className="skill-img-two wow fadeInRight"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/skill/skill-3.jpg"
                  className="skill-img-three wow fadeInDown"
                  alt="Skill Image"
                />
                <div className="circle-logo wow fadeInLeft">
                  <div className="inner-circle">
                    <i className="flaticon-carnivorous-plant" />
                    <h5>Gadden</h5>
                  </div>
                </div>
                <div className="shape shape-one">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skills Section  ======*/}
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                {/*====== Section-title ======*/}
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Need a Expert
                  </span>
                  <h2>Looking For a Garden Specialist</h2>
                </div>
                <p className="mb-30">
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
              <div className="cta-image-box wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
      {/*====== Start Team Section  ======*/}
      <section className="team-section pt-125 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Member
                </span>
                <h2>Meet Our Expert Gardener</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin S. Hughes</a>
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Michael K. Greenwalds
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Joshua M. Miranda
                    </Link>
                  </h3>
                  <p>Junior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInLeft">
                <div className="member-img">
                  <img src="assets/images/team/team-4.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Michael D. Beauford
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-5.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Russell D. Hampton
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInRight">
                <div className="member-img">
                  <img src="assets/images/team/team-6.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Anthony H. Binette
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-7.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Edward V. Emmons
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-8.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Morris L. Simpson
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-50 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/team-9.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Robert R. Saunders
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Single Team Item ======*/}
              <div className="team-button text-center wow fadeInDown">
                <Link legacyBehavior href="/team">
                  <a className="main-btn secondary-btn">View All Gardener</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default Team;
