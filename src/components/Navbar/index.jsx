import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { ImLocation, ImSearch } from "react-icons/im";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsQuestionCircle, BsChevronRight } from "react-icons/bs";
import "./style.css";
import { Hogan__Logo } from "../../assets";
import { NavList } from "../../mocks/navdata";
import { useSelector } from "react-redux";

const Navbar = ({ changeLoginState, isSidebarOpened, changeSidebarState }) => {
  const token = useSelector((state) => state.accessToken);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isNavHovered, setIsNavHovered] = useState(false);
  const handleSidebar = () => changeSidebarState(true);

  if (token) {
    navigate("/profile");
  }

  if (pathname !== "/register")
    return (
      <div className="navbar__wrapper">
        <div className="navbar__top flex">
          <div className="menu__bar">
            <AiOutlineMenu onClick={handleSidebar} />
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
            <FaUser className="icon" onClick={() => changeLoginState(true)} />
            <ImSearch className="icon" />
          </div>
        </div>

        <div className="navbar__main flex">
          <ul className="navmain__collection flex">
            {NavList.map(({ id, title, chilren }) => (
              <li
                key={id}
                className={
                  isNavHovered
                    ? "collection__item hoverable"
                    : "collection__item"
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
                  {chilren.map(
                    ({ collection_title, collection__items }, inx) => (
                      <ul className="links__container" key={inx}>
                        <li>
                          <h3>{collection_title}</h3>
                        </li>
                        {collection__items?.map((list__item, inx) => (
                          <li key={inx}>{list__item}</li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={isSidebarOpened ? "sidebar" : "closed__sidebar"}>
          <div className="close__icon__wrapper">
            <AiOutlineClose onClick={() => changeSidebarState(false)} />{" "}
            <span onClick={() => changeSidebarState(false)}>Close</span>
          </div>

          <div className="sidebar__links__wrapper">
            {NavList.map(({ id, title }) => (
              <div className="sidebar__link__wrapper flex" key={id}>
                <p className="sidebar__link">{title}</p>
                <BsChevronRight className="sidebar__link__icon" />
              </div>
            ))}
          </div>

          <div className="sidebar__bottom">
            <div className="bottom__section">
              <FaUser className="icon" />
              <span className="section__title">My Account</span>
            </div>
            <div className="bottom__section">
              <FaEnvelope className="icon" />
              <span className="section__title">Customer Service</span>
            </div>
            <div className="bottom__section">
              <ImLocation className="icon" />
              <span className="section__title">Store Locator</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
