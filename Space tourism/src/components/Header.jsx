import styles from "./Header.module.css";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

import Logo from "../assets/shared/logo.svg";

const links = ["Home", "Destination", "Crew", "Technology"];
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/Home" className={styles.logo_link}>
        <img src={Logo} alt="" className={styles.logo} />
      </Link>
      <div className={styles.line}></div>
      <nav className={styles.nav}>
        <a href="#" className={styles.burger_btn}>
          <div className={styles.burger_icon}></div>
        </a>
        <div className={styles.nav_wrapper}>
          <ul className={styles.nav_list}>
            {links.map((link, index) => (
              <li key={index} className={styles.nav_item}>
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
