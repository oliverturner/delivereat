import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import "./styles.scss";
import BasketItem from "../../components/basket/basket-item";
import { calcBasket } from "../../utils";
import { saveOrder } from "../../actions/order";

class Checkout extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.saveOrder(this.props.order.items);
  }

  render() {
    const { order, products } = this.props;

    const { from } = this.props.location.state || "/";
    if (Object.keys(order.items).length === 0) {
      return <Redirect to={from || "/"} />;
    }

    const basket = calcBasket(order.items, products.items);

    return (
      <form className="checkout" action="/api/orders" onSubmit={this.onSubmit}>
        <div className="card checkout__order">
          <ul className="basket__items">
            {basket.subtotals.map(item => (
              <BasketItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <button className="title basket__checkoutbtn" disabled={!basket.total}>
          Save
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ order, products }) => ({
  order,
  products
});

const mapDispatchToProps = {
  saveOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
