import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { useState, useEffect } from "react";
import {client, urlFor} from "@/src/utils/configSanity"
import { PortableText } from '@portabletext/react';
import Link from "next/link";
const BlogStandard = () => {
    const [news, setNews] = useState([]);
    const [recentNews, setRecentNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const query = `*[_type == "news"] | order(date desc) `
            const fetch_news = await client.fetch(query)
            console.log('here is the news',fetch_news)
            setNews(fetch_news)
        }
        fetchNews().catch(console.error);
    })

    useEffect(() => {
      const fetchRecentNews = async () => {
        const query = `*[_type == "news"] | order(date desc) [0...3]`;
        const recentNews = await client.fetch(query);
        setRecentNews(recentNews);
        console.log(recentNews)
      }

      fetchRecentNews().catch(console.error);
    }, [news])


    const truncateText = (blocks, wordLimit) => {
        const plainText = blocks.map(block => block.children.map(child => child.text).join(' ')).join(' ');
        const words = plainText.split(' ');
        return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
    };

  return (
    <Layout>
      <PageBanner pageName={"News and Events"} />
      <section className="blog-standard-section pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-standard-wrapper">
              {news.map((newsItem, index) => (
                    <div className="single-blog-post-three mb-30 wow fadeInUp">
                    <div className="post-thumbnail">
                        <img
                        src={urlFor(newsItem.coverImage).url()}
                        alt="post thumb"
                        height={300}
                        />
                    </div>
                    <div className="entry-content">
                        <div className="post-meta">
                        <span className="date">
                            <Link legacyBehavior href={`/news/${newsItem.title}`}>
                            <a>{newsItem.date}</a>
                            </Link>
                        </span>
                        </div>
                        <h3 className="title">
                        <Link legacyBehavior href={`/news/${newsItem.title}`}>
                            <a>
                           {newsItem.title}
                            </a>
                        </Link>
                        
                        </h3>
                        <div className="author">
                        <img
                            src="assets/images/logo/netagro-logo.jpg"
                            alt="Author Image"
                        />
                        <h6>
                            <span>By</span>
                            <Link legacyBehavior href={`news/${newsItem.title}`}>
                            <a>{newsItem.author}</a>
                            </Link>
                        </h6>
                        </div>
                        <div>
                        <p>{newsItem.slug}</p>
                        </div>
                    </div>
                    </div>
                ))}

                <ul className="gadden-pagination mb-40 wow fadeInUp">
                  <li>
                    <a href="#">
                      <i className="far fa-angle-double-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li>
                    <a href="#">04</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget-area">
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
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Ally!</h3>
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
                <div className="sidebar-widget widget-newsletter gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="sidebar-content">
                    <p>
                    Subscribe to our newsletter and get our newest updates
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn primary-btn">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget widget-recent-post mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    {recentNews.map((newsItem, index) => (
                    <li className="post-thumbnail-content">
                      <img
                        src={urlFor(newsItem.coverImage).url()}
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">{newsItem.date}</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href={`news/${newsItem.title}`}>
                            <a>{newsItem.title}</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    ))}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default BlogStandard;
