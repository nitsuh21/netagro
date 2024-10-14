import Link from "next/link";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item has-children">
        <Link legacyBehavior href="/">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="about">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
        <Link legacyBehavior href="services">
          Services
          </Link>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="projects">
          Projects
          </Link>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="news">
          News?
          </Link>
        </li>
        <li className="menu-item has-children">
          <Link legacyBehavior href="faq">
          faq
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
