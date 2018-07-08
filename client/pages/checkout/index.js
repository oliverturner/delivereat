import React from "react";
import { connect } from "react-redux";

import BasketItem from "../../components/basket/basket-item";
import { calcBasket } from "../../utils";

class Checkout extends React.Component {
  render() {
    const { order, products } = this.props;
    const basket = calcBasket(order, products.items);

    return (
      <ul className="basket__items">
        {basket.subtotals.map(item => <BasketItem key={item.id} item={item} />)}
      </ul>
    );
  }
}

const mapStateToProps = ({ order, products }) => ({
  order,
  products
});

export default connect(mapStateToProps)(Checkout);
