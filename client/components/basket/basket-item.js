import React from "react";

import ItemControls from "../item-controls";
import { fmtCurrency } from "../../utils";

const BasketItem = ({ item }) => {
  const { id, name, quantity, subtotal } = item;

  return (
    <li className="basket__item" key={`basket-${id}`}>
      <div className="basket__item__content">
        <span className="basket__item__label">
          {quantity} × {name}
        </span>
        <span className="basket__item__subtotal">{fmtCurrency(subtotal)}</span>
      </div>
      <ItemControls id={id} quantity={quantity} />
    </li>
  );
};

export default BasketItem;
