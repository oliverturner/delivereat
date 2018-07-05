import React from "react";

import "./styles.scss";
import ItemControls from "../item-controls";
import { fmtCurrency } from "../../utils";

const MenuItem = ({ item, quantity, itemAdd, itemRemove }) => {
  const { id, image, name, price } = item;
  const onClickAdd = () => itemAdd(id);
  const onClickRemove = () => itemRemove(id);

  return (
    <li className="card item">
      <img className="item__image" src={image} />
      <footer className="item__footer">
        <p className="item__label">{name}</p>
        <p className="item__price">{fmtCurrency(price)}</p>
        <ItemControls
          quantity={quantity}
          onClickAdd={onClickAdd}
          onClickRemove={onClickRemove}
        />
      </footer>
    </li>
  );
};

export default MenuItem;
