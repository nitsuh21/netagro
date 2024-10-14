import { useEffect } from "react";
import { stickyNav } from "../../utils";
import Default from "./Default";
import Header1 from "./Header1";
import Header3 from "./Header3";
const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Default />;
    case 3:
      return <Header3 />;

    default:
      return <Default />;
  }
};
export default Header;
