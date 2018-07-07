import React from "react";

import "./styles.scss";
import MenuItem from "../menu-item";
import Basket from "../basket";
import { fmtCurrency } from "../../utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: {},
      order: {},
      basketDisplayed: false
    };

    this.itemAdd = this.itemAdd.bind(this);
    this.itemRemove = this.itemRemove.bind(this);
    this.toggleBasket = this.toggleBasket.bind(this);
  }

  componentDidMount() {
    fetch("/api/menu")
      .then(res => (res.ok ? res.json() : Promise.reject(res)))
      .then(menu => this.setState({ menu }));
  }

  itemAdd(id) {
    const quantity = this.state.order[id] || 0;
    const newQuantity = quantity + 1;

    this.setState({
      order: { ...this.state.order, [id]: newQuantity }
    });
  }

  itemRemove(id) {
    const quantity = this.state.order[id] || 0;
    const newQuantity = quantity - 1;

    if (newQuantity > 0) {
      this.setState({
        order: { ...this.state.order, [id]: newQuantity }
      });
    } else {
      delete this.state.order[id];
      this.setState({ order: this.state.order });
    }
  }

  toggleBasket() {
    this.setState({
      basketDisplayed: !this.state.basketDisplayed
    });
  }

  calcBasket(order, menu) {
    return Object.entries(order).reduce(
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
  }

  render() {
    const { order, menu } = this.state;
    const basket = this.calcBasket(order, menu);

    return (
      <React.Fragment>
        <button className="basket__openbtn" onClick={this.toggleBasket}>
          <svg className="basket__openbtn__icon">
            <use xlinkHref="#basket" />
          </svg>
          {fmtCurrency(basket.total)}
        </button>
        <ul className="menu">
          {Object.entries(this.state.menu).map(([id, item]) => {
            return (
              <MenuItem
                key={id}
                item={item}
                itemAdd={this.itemAdd}
                itemRemove={this.itemRemove}
                quantity={this.state.order[id] || 0}
              />
            );
          })}
        </ul>
        <Basket
          basket={basket}
          itemAdd={this.itemAdd}
          itemRemove={this.itemRemove}
          toggleDisplay={this.toggleBasket}
          displayed={this.state.basketDisplayed}
        />
      </React.Fragment>
    );
  }
}

export default App;
