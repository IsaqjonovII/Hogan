import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { productsData } from "../../mocks/productsData.js";
import ProductCard from "../../components/Card";
import "./style.css";

const Products = () => {
  return (
    <div className="products__page__wrapper">
      <h1 className="page__title">Men's Sneakers</h1>
      <div className="filter__wrapper flex">
        <div className="filter flex">
          <p className="filter__result">167 items found</p>
          <div className="flex">
            <p>filter by</p>
            <BsChevronDown />
          </div>
        </div>
        <p className="recommended__sort">
          Sort by <b>Recommended</b> <BsChevronDown />
        </p>
      </div>

      <div className="products__wrapper">
        {productsData.map(({ id, title, img_main, img_hover, price, color }) => (
          <ProductCard
            key={id}
            id={id}
            color={color}
            title={title}
            img_main={img_main}
            img_hover={img_hover}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
