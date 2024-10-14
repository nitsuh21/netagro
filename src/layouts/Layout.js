import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";
const Layout = ({ header, children, footer }) => {
  useEffect(() => {
    niceSelect();
  }, []);

  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>
      <Header header={3} />
      <VideoPopup />
      <ImageView />
      {children}
      <Footer footer={3} />
    </Fragment>
  );
};
export default Layout;
