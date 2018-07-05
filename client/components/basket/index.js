import React from "react";

import "./styles.scss";
import BasketItem from "./basket-item";
import { fmtCurrency } from "../../utils";

const Basket = ({
  order,
  menu,
  itemAdd,
  itemRemove,
  toggleDisplay,
  displayed
}) => {
  const basket = Object.entries(order).reduce(
    (acc, [menuId, quantity]) => {
      const { id, name, price } = menu[menuId];
      const subtotal = quantity * price;
      acc.subtotals.push({ id, name, quantity, subtotal });
      acc.total = acc.total + subtotal;

      return acc;
    },
    {
      subtotals: [],
      total: 0
    }
  );

  const showItems = subtotals => {
    return (
      <ul className="basket__items">
        {subtotals.map(item => (
          <BasketItem
            key={item.id}
            item={item}
            itemAdd={itemAdd}
            itemRemove={itemRemove}
          />
        ))}
      </ul>
    );
  };

  const showCTA = () => {
    return <p className="basket__cta">Got cake?</p>;
  };

  const cls = displayed ? "card basket" : "card basket basket--closed";

  return (
    <div className={cls}>
      <header className="basket__header">
        <h2 className="title basket__title">Your Basket</h2>
        <button className="basket__closebtn" onClick={toggleDisplay}>
          Close
        </button>
      </header>
      {basket.total ? showItems(basket.subtotals) : showCTA()}
      <footer className="basket__footer">
        <p className="basket__total">TOTAL: {fmtCurrency(basket.total)}</p>
        <button className="title basket__checkoutbtn">Checkout</button>
      </footer>
    </div>
  );
};

Basket.defaultProps = {
  order: {},
  menu: {}
};

export default Basket;
