import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import "./styles.scss";
import Product from "../../components/product";
import Basket from "../../components/basket";
import BasketBtn from "../../components/basket/basket-btn";
import { calcBasket, fmtCurrency } from "../../utils";

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      checkedOut: false,
      basketDisplayed: false
    };

    this.onCheckout = this.onCheckout.bind(this);
    this.toggleBasket = this.toggleBasket.bind(this);
  }

  toggleBasket() {
    this.setState({
      basketDisplayed: !this.state.basketDisplayed
    });
  }

  onCheckout() {
    this.setState({ checkedOut: true });
  }

  render() {
    const { from } = this.props.location.state || "/";
    if (this.state.checkedOut) return <Redirect to={from || "/checkout"} />;

    const { products, order } = this.props;
    const basket = calcBasket(order.items, products.items);

    return (
      <React.Fragment>
        <BasketBtn
          total={fmtCurrency(basket.total)}
          toggleBasket={this.toggleBasket}
        />
        <ul className="products">
          {Object.entries(products.items).map(([id, item]) => {
            return <Product key={id} item={item} quantity={order.items[id] || 0} />;
          })}
        </ul>
        <Basket
          basket={basket}
          displayed={this.state.basketDisplayed}
          toggleDisplay={this.toggleBasket}
          onCheckout={this.onCheckout}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ order, products }) => ({
  order,
  products
});

export default connect(mapStateToProps)(Products);
