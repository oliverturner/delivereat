import React from "react";

const ItemControls = ({onClickAdd, onClickRemove}) => {
  return (
    <div className="item__controls">
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
    </div>
  );
};

export default ItemControls;
