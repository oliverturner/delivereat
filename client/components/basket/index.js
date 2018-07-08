import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
import BasketItem from "./basket-item";
import { fmtCurrency } from "../../utils";

class Basket extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onCheckout();
  }

  showItems(subtotals) {
    return (
      <ul className="basket__items">
        {subtotals.map(item => <BasketItem key={item.id} item={item} />)}
      </ul>
    );
  }

  showCTA() {
    return <p className="basket__cta">Got cake?</p>;
  }

  render() {
    const { basket, displayed, toggleDisplay } = this.props;
    const cls = displayed ? "card basket" : "card basket basket--closed";

    return (
      <form className={cls} onSubmit={this.onSubmit} action="/checkout">
        <header className="basket__header">
          <h2 className="title basket__title">Your Basket</h2>
          <button
            className="basket__closebtn"
            onClick={toggleDisplay}
            type="button"
          >
            Close
          </button>
        </header>
        <div className="basket__content">
          {basket.total ? this.showItems(basket.subtotals) : this.showCTA()}
        </div>
        <footer className="basket__footer">
          <p className="basket__total">TOTAL: {fmtCurrency(basket.total)}</p>
          <button
            className="title basket__checkoutbtn"
            disabled={!basket.total}
          >
            Checkout
          </button>
        </footer>
      </form>
    );
  }
}

Basket.defaultProps = {
  order: {},
  products: {},
  basket: {}
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Basket);
