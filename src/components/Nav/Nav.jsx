import React from "react";
import s from "./Nav.module.scss";
import Logo from "../../assets/svg/Logo.svg";

export const Nav = () => {
  return (
    <header className="widthContainer">
      <nav>
        <img src={Logo} alt="logo" />
        <ul className={`${s.navbar} headline`}>
          <li>
            <a className="menu-link" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className="menu-link" href="weddings.html">
              About
            </a>
          </li>
          <li>
            <a className="menu-link" href="diamonds.html">
              Menu
            </a>
          </li>
          <li>
            <a className="menu-link" href="about.html">
              Reservations
            </a>
          </li>
          <li>
            <a className="menu-link" href="about.html">
              Order Online
            </a>
          </li>
          <li>
            <a className="menu-link" href="about.html">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
