import React from "react";

import ItemControls from "./item-controls";
import { fmtCurrency } from "../utils";

const BasketItem = ({ item, itemAdd, itemRemove }) => {
  const { id, name, quantity, subtotal } = item;
  const onClickAdd = () => itemAdd(id);
  const onClickRemove = () => itemRemove(id);

  return (
    <li className="basket__item" key={`basket-${id}`}>
      <div className="basket__item__content">
        <span className="basket__item__label">
          {quantity} × {name}
        </span>
        <span className="basket__item__subtotal">{fmtCurrency(subtotal)}</span>
      </div>
      <ItemControls onClickAdd={onClickAdd} onClickRemove={onClickRemove} />
    </li>
  );
};

export default BasketItem;
