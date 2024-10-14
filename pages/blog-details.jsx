import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} />
      {/*====== Start Blog Details section ======*/}
      <section className="blog-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              {/*=== Blog Details Wrapper ===*/}
              <div className="blog-details-wrapper">
                {/*=== Blog Post ===*/}
                <div className="blog-post wow fadeInUp">
                  <div className="post-meta">
                    <span className="author">
                      <img
                        src="assets/images/blog/author-thumb-4.jpg"
                        alt="author"
                      />
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <span>By</span> Michael
                        </a>
                      </Link>
                    </span>
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        25 December 2022
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        5 Comments
                      </Link>
                    </span>
                  </div>
                  <div className="entry-content">
                    <h3 className="title">
                      Three Insights I Gained While Researching See Vue
                      Accessibility Testing Decorations
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae abillo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed quia consequuntur magni dolores eos qui
                      ratione voluptatem sequi nesciunt. Neque porro quisquam
                      est qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat
                      voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem{" "}
                    </p>
                    <div className="block-image">
                      <img
                        src="assets/images/blog/blog-single-1.jpg"
                        alt="Post Image"
                      />
                    </div>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt
                    </p>
                    <blockquote className="wp-block-quote">
                      <img
                        src="assets/images/blog/quote.png"
                        alt="quote image"
                      />
                      <h3>
                        Handling Mounting And Unmounting Given Navigation Routes
                        In React Native
                      </h3>
                      <span>Johnny M. Martin</span>
                    </blockquote>
                  </div>
                  <div className="entry-footer wow fadeInUp">
                    <div className="tag-links">
                      <h6>Popular Tags</h6>
                      <a href="#">Gardening</a>
                      <a href="#">Landscape</a>
                      <a href="#">Plants</a>
                    </div>
                    <div className="social-share">
                      <h6>Share:</h6>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*===  Post Author Box  ===*/}
                <div className="post-author-box d-flex pb-60 mb-60 wow fadeInUp">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/author-2.jpg"
                      alt="post author"
                    />
                  </div>
                  <div className="author-content">
                    <h5>Bruno R. Bouchard</h5>
                    <span className="position">Author</span>
                    <p>
                      Donec duis enim ipsum odio at cursus. Fames semper enim
                      integer epsum ultricies faucibus augue enim semper
                    </p>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*===  Post Navigation  ===*/}
                <div className="post-navigation-item pb-15 mb-55 wow fadeInUp">
                  <div className="prev-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img
                        src="assets/images/blog/prev-post.jpg"
                        alt="Post Thumb"
                      />
                    </div>
                    <div className="content">
                      <span className="post-date">
                        <a href="#">25 Dec 2022</a>
                      </span>
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          Build Progre Enhany Acces Filterable
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="next-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img
                        src="assets/images/blog/next-post.jpg"
                        alt="Post Thumb"
                      />
                    </div>
                    <div className="content">
                      <span className="post-date">
                        <a href="#">25 Dec 2022</a>
                      </span>
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          JavaScript Requirem For Acces ponen
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                {/*===  Comments Area  ===*/}
                <div className="comments-area mb-80 wow fadeInUp">
                  <h3 className="comments-title mb-40">Popular Comments</h3>
                  <ul className="comments-list">
                    <li className="comment mb-40">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-1.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Jonathan M. Dickinson
                            <span className="date">September 25, 2022</span>
                          </span>
                          <p>
                            Nov ut perspiciatis unde omnis iste natus sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam quae abillo inventore veritatis
                          </p>
                          <a href="#" className="btn-link">
                            Reply
                            <i className="far fa-angle-double-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-40">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-2.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Michael C. Paille
                            <span className="date">September 25, 2022</span>
                          </span>
                          <p>
                            Nov ut perspiciatis unde omnis iste natus sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam quae abillo inventore veritatis
                          </p>
                          <a href="#" className="btn-link">
                            Reply
                            <i className="far fa-angle-double-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-40">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-3.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Michael C. Paille
                            <span className="date">September 25, 2022</span>
                          </span>
                          <p>
                            Nov ut perspiciatis unde omnis iste natus sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam quae abillo inventore veritatis
                          </p>
                          <a href="#" className="btn-link">
                            Reply
                            <i className="far fa-angle-double-right" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*===  Comments Form  ===*/}
                <div className="comments-respond mb-35 wow fadeInUp">
                  <h3 className="comments-heading">Leave a Comments</h3>
                  <p>Send us your valuable feedback about our services</p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Name *"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email *"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            cols={30}
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn primary-btn">
                            Send comments
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              {/*=== Sidebar widget Area ===*/}
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget widget-search gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*=== Author Widget ===*/}
                <div className="sidebar-widget widget-post-author mb-40 wow fadeInUp">
                  <div className="author-img">
                    <img
                      src="assets/images/blog/author-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-content text-center">
                    <div className="author-title-box">
                      <h4>Jason C. Cavazos</h4>
                      <span className="posiiton">CEO &amp; Founder</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam
                    </p>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Yard Cleaning
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Garden Makeup
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Landscaping
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lawn Mowing
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Decorative Plants
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Yard Maintenance
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget widget-recent-post mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">25 Dec 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Build Progre Enhany Acces Filterable
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">25 Dec 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            JavaScript Requirem For Acces ponen
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">25 Dec 2022</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Build Progre Enhany Acces Filterable
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Banner Widget ===*/}
                <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Gardener!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
                {/*=== Tag Widget ===*/}
                <div className="sidebar-widget widget-tag-cloud mb-40 wow fadeInUp">
                  <h4 className="widget-title">Tags</h4>
                  <a href="#">Gardening</a>
                  <a href="#">Landscaping</a>
                  <a href="#">Plants</a>
                  <a href="#">Trimming</a>
                  <a href="#">Yard</a>
                  <a href="#">Yard Maintenance</a>
                  <a href="#">Tree</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default BlogDetails;
