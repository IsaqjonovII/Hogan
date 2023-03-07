import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../../mocks/productsData";
import "./style.css";

const ProductInfo = () => {
  const [uniqueProduct, setUniqueProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    const filteredProduct = productsData.filter((pro) => pro.id === +id);
    setUniqueProduct(filteredProduct[0]);
  }, [id]);
  
  return <div className="unique__product__page">

    <div className="unique__pro__wrapper flex">
      <div className="unique__pro__img__wrapper">
        <img className="pro__img" src={uniqueProduct?.img_main} alt="" />
      </div>
      <div className="unique__pro__info__wrapper">
        
      </div>
    </div>

  </div>;
};

export default ProductInfo;
