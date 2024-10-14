import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {client, urlFor} from "@/src/utils/configSanity"

const ProjectGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState([])
  const [projectTypes, setProjectTypes] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(()=>{
    const fetchProjects = async () => {
      const query = `*[_type == "project"]`
      try {
        const result = await client.fetch(query);
        console.log('first projects:', result);
        setProjects(result);
        setFilteredProjects(result);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    // Extract unique project types
    console.log('projects:', projects);
    const types = [...new Set(projects.map(project => project.projectType))];
    console.log('types:', types);
    setProjectTypes(types);
  }, [projects]);

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    if(key === "*"){
      console.log("on filter click project", projects);
      setFilteredProjects(filteredProjects);
    }else{
      const filtered = projects.filter(project => project.projectType === key)
      setFilteredProjects(filtered);
    }
  }


  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className="gallery-section pt-95 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            {/*====== Section Title ======*/}
            <div className="section-title mb-40">
              <span className="sub-title">
                <i className="flaticon-plant" />
                Projects Gallery
              </span>
              <h2>Here are some of the projects delivered amazingly</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/*====== Filter Button ======*/}
            <ul className="project-filter mb-50">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Show All
              </li>
              {projectTypes.map((type) => (
              <li
                key={type}
                onClick={handleFilterKeyChange(type)}
                className={activeBtn(type)}
              >
                {type}
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className="row gallery-active">
        {filteredProjects
          //.filter(project => filterKey === '*' || project.projectType === filterKey)
          .map((project, index) => (
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
    </section>
  );
};
export default ProjectGridIsotope;
