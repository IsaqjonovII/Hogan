import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__top">
        <div className="location__container"></div>
        <div className="nav__logo__wrapper">
          <img className="nav__logo" src="" alt="" />
        </div>

        <div className="user__actions"></div>
      </div>

      <div className="navbar__main"></div>
    </div>
  );
};

export default Navbar;
