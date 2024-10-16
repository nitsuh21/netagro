import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { client } from "@/src/utils/configSanity";
import { urlFor } from "@/src/utils/configSanity";
import Link from "next/link";

const ProjectGridIsotope = dynamic(
  () => import("@/src/components/isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);
const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const query = `*[_type == "project"]`;
      const fetchedProjects = await client.fetch(query);
      setProjects(fetchedProjects);

      // Extract unique project types
      const types = [...new Set(fetchedProjects.map(project => project.projectType))];
      setProjectTypes(types);
    };

    fetchProjects().catch(console.error);
  }, []);

  return (
    <Layout>
      <PageBanner pageName={"Projects"} />
      {/*====== Start Gallery section ======*/}
      {/* <ProjectGridIsotope /> */}
      
      {/*====== End Gallery section ======*/}
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <br />
                <h2>Here are some of the projects delivered amazingly</h2>
                <br />
              </div>
            </div>
          </div>
          {projectTypes.map((type, index) => (
            <div className="single" key={index}>
              <div className="row">
                <div className="col-lg-12">
                  <h3 className={`c-pointer`}>{type}</h3> <hr />
                </div>
              </div>
              <div className="row gallery-active">
                {projects
                  .filter(project => project.projectType === type)
                  .map((project, idx) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 item cat-1 cat-4">
                    {/*====== Gallery Item ======*/}
                    <div className="single-project-item-three mb-30 wow fadeInDown">
                      <div className="project-img">
                      {project.images && project.images.length > 0 && (
                              <img src={urlFor(project.images[0]).url()} alt={project.title}
                              width={200} height={300}
                              />
                            )}
                        <div className="hover-overlay">
                          <Link legacyBehavior href="">
                            <a className="icon-btn">
                              <i className="fas fa-arrow-right" />
                            </a>
                          </Link>
                          <div className="hover-content text-white">
                            <div className="text">
                              <h3 className="title">
                                <Link legacyBehavior href="">
                                  <a>{project.projectName}</a>
                                </Link>
                              </h3>
                              <Link legacyBehavior href="">
                                <a>{project.projectType}</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default ProjectGrid;
