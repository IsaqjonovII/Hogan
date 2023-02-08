import { useState } from "react";
import { Hogan__Logo } from "../../assets";
import { ImLocation, ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);

  const changeNavState = () => setIsNavHovered(!isNavHovered);

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
          <li
            className={
              isNavHovered ? "collection__item hoverable" : "collection__item"
            }
            onMouseOver={changeNavState}
            onMouseOut={() => changeNavState(false)}
          >
            <p className="list__title">Sneakers</p>
            <div className="sneakers"></div>
          </li>
          <li className="collection__item">
            <p className="list__title">Woman</p>
            <div className="sneakers"></div>
          </li>
          <li className="collection__item">
            <p className="list__title">Man</p>
            <div className="sneakers"></div>
          </li>
          <li className="collection__item">
            <p className="list__title">Junior</p>
            <div className="sneakers"></div>
          </li>
          <li className="collection__item">
            <p className="list__title">Rebel Society</p>
            <div className="sneakers"></div>
          </li>
        </ul>
      </div>

      <div className="sidebar"></div>
    </div>
  );
};

export default Navbar;
