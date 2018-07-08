import React from "react";
import { connect } from "react-redux";

import { calcBasket } from "../../utils";

class Checkout extends React.Component {
  render() {
    const { order, products } = this.props;
    const basket = calcBasket(order, products.items);

    return <p>checkout</p>;
  }
}

const mapStateToProps = ({ order, products }) => ({
  order,
  products
});

export default connect(mapStateToProps)(Checkout);
