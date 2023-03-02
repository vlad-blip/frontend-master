import styles from "./NavLink.module.css";
import { NavLink as RouterLink, useLocation } from "react-router-dom";

const NavLink = ({ link, index }) => {
  const location = useLocation();
  const slices = location.pathname.split("/");

  const navClass =
    slices[1] === link.name || (link.name === "Home" && slices[1] === "")
      ? `${styles["item-wrapper"]} ${styles["nav-active"]}`
      : `${styles["item-wrapper"]}`;

  return (
    <div className={navClass}>
      <RouterLink
        className={`${styles["nav-link"]} ${styles["nav-text"]}`}
        to={link.url}
      >
        <span className={`${styles.highlight} ${styles["nav-highlight"]}`}>
          0{index}
        </span>
        {link.name}
      </RouterLink>
    </div>
  );
};

export default NavLink;
