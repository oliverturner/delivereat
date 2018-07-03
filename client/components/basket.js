import React from "react";

import ItemControls from "./item-controls"

const Basket = ({ order, menu }) => {
  const basket = Object.entries(order).reduce(
    (acc, [menuId, quantity]) => {
      const { name, price } = menu[menuId];
      const subtotal = quantity * price;
      acc.subtotals.push({ name, quantity, subtotal });
      acc.total = acc.total + subtotal;

      return acc;
    },
    {
      subtotals: [],
      total: 0
    }
  );

  return (
    <div className="card basket">
      <h2 className="title basket__title">Your Basket</h2>
      <ul className="basket__items">
        {basket.subtotals.map(({ name, quantity, subtotal }) => (
          <li className="basket__item">
            <div className="basket__item__content">
              <span className="basket__item__label">
                {quantity} × {name}
              </span>
              <span className="basket__item__subtotal">
                £{subtotal.toFixed(2)}
              </span>
            </div>
            <ItemControls />
          </li>
        ))}
      </ul>
      <p className="basket__total">£{basket.total.toFixed(2)}</p>
    </div>
  );
};

Basket.defaultProps = {
  order: {},
  menu: {}
};

export default Basket;
