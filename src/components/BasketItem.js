import React from "react";

const BasketItem = ({ item, product }) => {
  return (
    <div>
      <li className="basket-item">
        {product.title} <span>x {item.amount}</span>
      </li>
    </div>
  );
};

export default BasketItem;
