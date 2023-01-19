import React from "react";
import s from "./Nav.module.scss";
import Logo from "../../assets/logo/Logo.svg";
import { navRoutes } from "../../constants/navRoutes";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="widthContainer">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className={`${s.navbar} headline`}>
        {Object.values(navRoutes).map((navItem) => (
          <li key={navItem.path}>
            <Link className="menu-link" to={navItem.path}>
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
