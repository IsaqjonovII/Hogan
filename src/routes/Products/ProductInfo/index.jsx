import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImLocation, ImHeart } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { productsData } from "../../../mocks/productsData";
import "./style.css";
import { addProduct } from "../../../reducer/productSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [uniqueProduct, setUniqueProduct] = useState();
  const [isHelpOpened, setIsHelpOpened] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const filteredProduct = productsData.filter((pro) => pro.id === +id);
    setUniqueProduct(filteredProduct[0]);
  }, [id]);

  const handleAddToCart = (productData) => {
    let productIndex = products.findIndex((p) => p.id === productData.id);
    if (productIndex < 0) {
      let newProduct = {
        ...productData,
        qty: 1,
      };
      dispatch(addProduct([...products, newProduct]));
    } else {
      let newOrder = products.map((orderedPro, inx) => {
        if (inx === productIndex) {
          return {
            ...orderedPro,
            qty: orderedPro.qty + 1,
          };
        } else {
          return orderedPro;
        }
      });
      dispatch(addProduct(newOrder));
    }
  };
  return (
    <div className="unique__product__page">
      <div className="unique__pro__wrapper flex">
        <div className="unique__pro__img__wrapper">
          <img className="pro__img" src={uniqueProduct?.img_main} alt="" />
        </div>
        <div className="unique__pro__info__wrapper">
          <h1>{uniqueProduct?.title}</h1>
          <div className="pro__color flex">
            <h2>Color:</h2>
            <h2>{uniqueProduct?.color}</h2>
          </div>
          <div className="pro__description">{uniqueProduct?.description}</div>
          <div className="pro__store__locations flex">
            <div className="store__location flex">
              <ImLocation />
              <span>Find in Boutique</span>
            </div>
            <div
              className="pro__wishlist flex"
              onClick={() => handleAddToCart(uniqueProduct)}
            >
              <ImHeart />
              <span>Add to Cart</span>
            </div>
          </div>
          <h3
            className="help__title"
            onClick={() => setIsHelpOpened(!isHelpOpened)}
          >
            Need help?
          </h3>
          <div
            className={
              isHelpOpened
                ? "contact__info contact__info--visible"
                : "contact__info"
            }
          >
            <div className="flex">
              <BsTelephone className="phone__icon" />
              <div>
                <h4>+39 0734 861429</h4>
                <p>Monday to Friday, 9:00-18:00 CET</p>
              </div>
            </div>
            <p>
              If you contact our operators by phone, email or web chat, you are
              confirming that you have read and understood the contents of this
              Privacy Notice, pursuant to Article 13 of EU Regulation 679/2016.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
