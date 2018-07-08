import React from "react";

import "./styles.scss";

const ItemControls = ({ onClickAdd, onClickRemove, quantity = 0 }) => {
  const disabled = quantity < 1;

  return (
    <div className="item__controls">
      <button
        className="item__control item__control--minus"
        onClick={onClickRemove}
        disabled={disabled}
        type="button"
      >
        <svg className="item__control__icon">
          <use xlinkHref="#circle-minus" />
        </svg>
        <span className="visually-hidden">Remove item</span>
      </button>
      <button
        className="item__control item__control--plus"
        onClick={onClickAdd}
        type="button"
      >
        <svg className="item__control__icon">
          <use xlinkHref="#circle-plus" />
        </svg>
        <span className="visually-hidden">Add item</span>
      </button>
    </div>
  );
};

export default ItemControls;
