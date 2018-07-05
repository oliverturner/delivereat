import React from "react";

import "./styles.scss";

const ItemControls = ({ onClickAdd, onClickRemove, quantity }) => {
  const disabled = typeof quantity !== "undefined" && quantity < 1;

  return (
    <div className="item__controls">
      <button
        className="item__control item__control--minus"
        onClick={onClickRemove}
        disabled={disabled}
      >
        <svg className="item__control__icon">
          <use xlinkHref="#circle-minus" />
        </svg>
      </button>
      <button
        className="item__control item__control--plus"
        onClick={onClickAdd}
      >
        <svg className="item__control__icon">
          <use xlinkHref="#circle-plus" />
        </svg>
      </button>
    </div>
  );
};

export default ItemControls;
