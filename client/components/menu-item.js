import React from "react";

const MenuItem = ({ item, itemAdd, itemRemove }) => {
  const { id, image, name, price } = item;
  const onClickAdd = () => itemAdd(id);
  const onClickRemove = () => itemRemove(id);

  return (
    <li className="card item">
      <img className="item__image" src={image} />
      <footer className="item__footer">
        <p className="item__label">{name}</p>
        <p className="item__price">£{price}</p>
        <button
          className="item__control item__control--minus"
          onClick={onClickRemove}
        >
          <img src="/static/icons/minus-circle.svg" alt="remove from basket" />
        </button>
        <button
          className="item__control item__control--plus"
          onClick={onClickAdd}
        >
          <img src="/static/icons/plus-circle.svg" alt="add to basket" />
        </button>
      </footer>
    </li>
  );
};

export default MenuItem;
