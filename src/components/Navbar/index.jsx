import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { ImLocation, ImSearch } from "react-icons/im";
import "./style.css";
import { Hogan__Logo } from "../../assets";
import { NavList } from "../../mocks/navdata";

const Navbar = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="navbar__wrapper">
      <div className="navbar__top flex">
        <div className="menu__bar">
          <AiOutlineMenu onClick={() => setIsSidebarOpen(true)} />
        </div>

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
          {NavList.map(({ id, title, chilren }) => (
            <li
              key={id}
              className={
                isNavHovered ? "collection__item hoverable" : "collection__item"
              }
              onMouseOver={() => setIsNavHovered(true)}
              onMouseOut={() => setIsNavHovered(!isNavHovered)}
            >
              <p
                className="list__title"
                onMouseOver={() => setIsNavHovered(true)}
              >
                {title}
              </p>
              <div className="sneakers flex">
                {chilren.map(({ collection_title, collection__items }, inx) => (
                  <ul className="links__container" key={inx}>
                    <li>
                      <h3>{collection_title}</h3>
                    </li>
                    {collection__items?.map((list__item) => (
                      <li>{list__item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={isSidebarOpen ? "sidebar" : "closed__sidebar"}>
        <div className="close__icon__wrapper">
          <AiOutlineClose onClick={() => setIsSidebarOpen(false)} />{" "}
          <span onClick={() => setIsSidebarOpen(false)}>Close</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
