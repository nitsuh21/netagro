import PageBanner from "../../src/components/PageBanner";
import Partners from "../../src/components/Partners";
import Layout from "../../src/layouts/Layout";
import Link from "next/link";
import {client, urlFor} from "../../src/utils/configSanity"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const [news, setNews] = useState([]);
  const [recentNews, setRecentNews] = useState([])
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      // Fetch news from sanity studio by title
      const query = `*[_type == "news" && title == "${router.query.title}"]`;
      const news = await client.fetch(query);
      console.log('here are the news',news);
      setNews(news);
    }

    fetchNews();
  }, []);

  // useEffect(() => {
  //   const fetchRecentNews = async () => {
  //     const query = `*[_type == "news"] | order(date desc) [0...3]`;
  //     const recentNews = await client.fetch(query);
  //     setRecentNews(recentNews);
  //   }

  //   fetchRecentNews();
  // }, []);
  return (
    <Layout>
      <PageBanner pageName={`${news.title}`} />
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
                        src="../assets/images/blog/author-thumb-4.jpg"
                        alt="author"
                      />
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          <span>By</span> ${news.author}
                        </a>
                      </Link>
                    </span>
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>${news.date}</a>
                      </Link>
                    </span>
                  </div>
                  <div className="entry-content">
                    <h3 className="title">
                    {`${news.title}`}
                    </h3>
                    
                    {`${news.content}`}
                    
                    <blockquote className="wp-block-quote">
                      <img
                        src="../assets/images/blog/quote.png"
                        alt="quote image"
                      />
                      <h3>
                      Nurturing the earth with every drop, we cultivate not just crops, but a sustainable future for generations to come.                      </h3>
                      <span>NetAgro Team</span>
                    </blockquote>
                  </div>
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
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/landscaping">
                        <a>
                          Landscaping
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/drip_and_splinkler_irrigation">
                        <a>
                          Drip and Splinkler Irrigation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/family_drip_irrigation">
                        <a>
                          Family Drip Irrigation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/center_pivot_irrigation">
                        <a>
                          Center Pivot Irrigation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/Hidroseeding_rehabilation">
                        <a>
                          Hidroseeding / Rehabilation
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/supply_and_import">
                        <a>
                         Equipment supply and import
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget widget-recent-post mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="../assets/images/blog/post-thumb-1.jpg"
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
                        src="../assets/images/blog/post-thumb-2.jpg"
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
                        src="../assets/images/blog/post-thumb-3.jpg"
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
                      src="../assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Details section ======*/}
    </Layout>
  );
};
export default BlogDetails;
