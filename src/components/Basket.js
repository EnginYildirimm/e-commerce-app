import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, total, products, resetBasket }) => {
  return (
    <div>
      <div className="basket-container ">
        <h3>Sepetiniz</h3>
        <ul>
          {" "}
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">Toplam : ${total}</div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Sepeti Temizle
        </button>
      </div>
    </div>
  );
};

export default Basket;
