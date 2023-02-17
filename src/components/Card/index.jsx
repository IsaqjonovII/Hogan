import React, { useState } from "react";
import "./style.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const ProductCard = ({ id, title, img_main, img_hover, price }) => {
  const [isheartHovered, setIsHeartHovered] = useState(false);
  const [isImgHovered, setIsImgHovered] = useState(false);

  const likeOnHover = (index) => {
    if (isheartHovered === index) {
      setIsHeartHovered(null);
    }
    setIsHeartHovered(index);
  };

  const changeImg = (index) => {
    if (isImgHovered === index) {
      setIsImgHovered(null);
    }
    setIsImgHovered(index);
  };

  return (
    <div
      className="product__card"
      onMouseOver={() => changeImg(id)}
      onMouseOut={() => setIsImgHovered(false)}
    >
      <div className="card__top__wrapper flex">
        <p className="prod-badge">New Collections</p>
        {isheartHovered === id ? (
          <BsHeartFill onMouseOut={() => setIsHeartHovered(false)} />
        ) : (
          <BsHeart onMouseOver={() => likeOnHover(id)} />
        )}
      </div>

      <React.Fragment>
        {isImgHovered ? (
          <img className="product__img" src={img_hover} alt="" />
        ) : (
          <img className="product__img" src={img_main} alt="" />
        )}
      </React.Fragment>

      <div className="prod__info__wrapper">
        <p className="prod__title">{title}</p>
        <p className="prod__price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
