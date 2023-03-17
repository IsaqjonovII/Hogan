import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reducer/productSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./style.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  console.log(products);
  const handlePlus = (id) => {
    const productInx = products.find((product) => product.id === id);

    const addQty = products.map((pro, inx) => {
      if (productInx === inx) {
        return {
          ...pro,
          qty: pro.qty + 1,
        };
      } else {
        return pro;
      }
    });

    dispatch(addProduct(addQty));

    
  };

  const handleMinus = (id) => {
    console.log(id);
  };

  return (
    <div className="cart__page">
      <div className="cart__actions flex">
        <h1 className="product__counter">
          Shopping bag({products.length ?? "0"})
        </h1>

        <button className="payment__btn">proceed to checkout</button>
      </div>

      <table className="cart__table">
        <thead className="table__header">
          <tr>
            <th className="table__title">Product Description</th>
            <th className="table__title">Price</th>
            <th className="table__title">Quantity</th>
            <th className="table__title">Subtotal</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {products.map(
            ({ img_main, id, color, decsription, qty, price, title }) => (
              <tr className="table__row" key={id}>
                <td className="table__description td flex">
                  <div className="pro__img__wrapper">
                    <img
                      className="pro__img"
                      src={img_main}
                      alt={decsription}
                    />
                  </div>
                  <div className="pro__details">
                    <h1 className="pro__title">{title}</h1>
                    <p className="pro__detail">
                      Size: <b>8</b>
                    </p>
                    <p className="pro__detail">
                      Color: <b>{color}</b>
                    </p>

                    <button className="remove__btn">Remove</button>
                  </div>
                </td>
                <td>${price}</td>
                <td>
                  <button className="add__qty" onClick={() => handlePlus(id)}>
                    <AiOutlinePlus />
                  </button>
                  <span className="qty">{qty}</span>
                  <button
                    className="minus__qty"
                    onClick={() => handleMinus(id)}
                  >
                    <AiOutlineMinus />
                  </button>
                </td>
                <td>${price * qty}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
