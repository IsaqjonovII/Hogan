import React from "react";
import { Hogan__Logo } from "../../assets";
import { ImLocation, ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__top flex">
        <div className="location__container flex">
          <ImLocation className="icon" />
          <BsQuestionCircle className="icon" />
          <p>Rest of the World</p>
        </div>
        <div className="nav__logo__wrapper flex">
          <Link to="/">
            <img className="nav__logo" src={Hogan__Logo} alt="" />
          </Link>
        </div>

        <div className="user__actions">
          <FaUser className="icon" />
          <ImSearch className="icon" />
        </div>
      </div>

      <div className="navbar__main flex">
        <ul className="navmain__collection flex">
          <li className="collection__item">Sneakers</li>
          <li className="collection__item">Woman</li>
          <li className="collection__item">Man</li>
          <li className="collection__item">Junior</li>
          <li className="collection__item">Rebel Society</li>
        </ul>
      </div>

      <div className="sidebar">
        
      </div>
    </div>
  );
};

export default Navbar;
