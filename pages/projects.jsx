import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";

const ProjectGridIsotope = dynamic(
  () => import("@/src/components/isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);
const ProjectGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Projects"} />
      {/*====== Start Gallery section ======*/}
      <ProjectGridIsotope />
      {/*====== End Gallery section ======*/}
      
    </Layout>
  );
};
export default ProjectGrid;
