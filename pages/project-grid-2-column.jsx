import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import dynamic from "next/dynamic";

const Project2GridIsotope = dynamic(
  () => import("@/src/components/isotope/Project2GridIsotope"),
  {
    ssr: false,
  }
);
const ProjectGrid2Column = () => {
  return (
    <Layout>
      <PageBanner pageName={"Project Full Width"} />
      {/*====== Start Gallery section ======*/}
      <Project2GridIsotope />
      {/*====== End Gallery section ======*/}
      <Partners />
    </Layout>
  );
};
export default ProjectGrid2Column;
