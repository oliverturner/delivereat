import React from "react";

const BasketBtn = ({ total, toggleBasket }) => {
  return (
    <button className="basket__openbtn" onClick={toggleBasket} type="button">
      <svg className="basket__openbtn__icon">
        <use xlinkHref="#basket" />
      </svg>
      {total}
    </button>
  );
};

export default BasketBtn;
