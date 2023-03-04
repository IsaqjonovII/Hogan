import React from "react";
import { Link } from "react-router-dom";
import { homePageBanner } from "../../assets";
import "./style.css";

function Home() {
  const homeDescription =
    "The new collection’s Hogan models are destined to become your go-to sneakers. Their multiple inspirations and aerodynamic lines define looks with a casual yet gritty essence. ";
  return (
    <div className="home__page__wrapper">
      <img className="home__banner__img" src={homePageBanner} alt="" />
      <div className="banner__text__wrapper flex">
        <div className="banner__text">
          <h2 className="banner__title">New Arrivals</h2>
          <p className="banner__description">{homeDescription}</p>
        </div>

        <Link to="/products" className="home__page__link">  
          <button className="products__page__link__btn">
            Discover the new collection
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
