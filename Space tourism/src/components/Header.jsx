import styles from "./Header.module.css";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/shared/logo.svg";

const links = [
  { name: "Home", url: "/Home" },
  { name: "Destination", url: "/Destination/Moon" },
  { name: "Crew", url: "/Crew/Douglas Hurley" },
  { name: "Technology", url: "/Technology/Launch vehicle" },
];
const Header = () => {
  const [active, setActive] = useState(false);

  const navClassName = `${styles["nav-wrapper"]} ${
    active ? styles["nav-wrapper--opened"] : ""
  }`;

  return (
    <header className={styles.header}>
      <Link to="/Home" className={styles["logo-link"]}>
        <img src={Logo} alt="" className={styles.logo} />
      </Link>
      <div className={styles.line}></div>
      <nav className={styles.nav}>
        <a href="#" className={styles["burger-btn"]}>
          <div
            className={`${styles["burger-icon"]} ${
              active ? styles["burger-icon--close"] : ""
            }`}
            onClick={() => setActive((prev) => !prev)}
          ></div>
        </a>
        <div className={navClassName}>
          <ul className={styles["nav-list"]}>
            {links.map((link, index) => (
              <li key={index} className={styles["nav-item"]}>
                <NavLink link={link} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
