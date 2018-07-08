import React from "react";
import { Redirect } from "react-router";

import "./styles.scss";
import MenuItem from "../../components/menu-item";
import Basket from "../../components/basket";
import { fmtCurrency } from "../../utils";

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

    const { menu, order, basket, itemAdd, itemRemove } = this.props;

    return (
      <React.Fragment>
        <button
          className="basket__openbtn"
          onClick={this.toggleBasket}
          type="button"
        >
          <svg className="basket__openbtn__icon">
            <use xlinkHref="#basket" />
          </svg>
          {fmtCurrency(basket.total)}
        </button>
        <ul className="menu">
          {Object.entries(menu).map(([id, item]) => {
            return (
              <MenuItem
                key={id}
                item={item}
                quantity={order[id] || 0}
                itemAdd={itemAdd}
                itemRemove={itemRemove}
              />
            );
          })}
        </ul>
        <Basket
          basket={basket}
          displayed={this.state.basketDisplayed}
          itemAdd={itemAdd}
          itemRemove={itemRemove}
          toggleDisplay={this.toggleBasket}
          onCheckout={this.onCheckout}
        />
      </React.Fragment>
    );
  }
}

export default Products;
