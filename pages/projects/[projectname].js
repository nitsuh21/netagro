import PageBanner from "../../src/components/PageBanner";
import Partners from "../../src/components/Partners";
import Layout from "../../src/layouts/Layout";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../src/utils/configSanity";
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    console.log("projectName in useEffect", router.query.projectName);
    const fetchProject = async () => {
      const query = `*[_type == "project" && projectName == $projectName]`;
      const project = await client.fetch(query, {projectName: router.query.projectName});
      console.log('here is the project', project);
      setProject(project);
      setLoading(false);
    }

    if(router.isReady){
      fetchProject().catch(console.error);
    }

  },[router.isReady, router.query.projectName]);

  if(loading) return <div>Loading...</div>

  return (
    <Layout>
      <PageBanner pageName={ project[0].projectName} />
      {/*====== Start Project-Details section ======*/}
      <section className="project-details-section pt-95">
        <div className="container">
          <div className="project-details-wrapper pb-60">
            <div className="row">
              <div className="col-lg-8">
                <div className="project-info mb-30 wow fadeInLeft">
                  <h3 className="title">{project[0].projectName}</h3>
                  {project[0].description.map((block, index) => {
                      if (block._type === 'block') {
                        return block.children.map((child, childIndex) => (
                          <p key={child._key}>{child.text}</p>
                        ));
                      } else if (block._type === 'image') {
                        const imageUrl = urlFor(block.asset._ref).url();
                        return (
                          <div key={block._key} className="image-block">
                            <Image src={imageUrl} alt="Project Image" width={593} height={308} />
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              </div>
              <div className="col-lg-4">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Ally!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="../../assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
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
