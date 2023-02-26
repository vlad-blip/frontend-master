import styles from "./NavLink.module.css";
import { NavLink as RouterLink, useLocation } from "react-router-dom";

const NavLink = ({ link, index }) => {
  const location = useLocation();
  const url = `/${link}`;
  const navClass =
    location.pathname == url
      ? `${styles.item_wrapper} ${styles.nav_active}`
      : `${styles.item_wrapper}`;

  return (
    <div className={navClass}>
      <RouterLink className={`${styles.nav_link} ${styles.nav_text}`} to={url}>
        <span className={`${styles.highlight} ${styles.nav_highlight}`}>
          0{index}
        </span>
        {link}
      </RouterLink>
    </div>
  );
};

export default NavLink;
