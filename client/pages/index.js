import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Products from "./products";
import Checkout from "./checkout";
import { calcBasket } from "../utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: {},
      order: {}
    };

    this.getProductPage = this.getProductPage.bind(this);
    this.getCheckoutPage = this.getCheckoutPage.bind(this);
    this.itemAdd = this.itemAdd.bind(this);
    this.itemRemove = this.itemRemove.bind(this);
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

  getProductPage({location}) {
    const { order, menu } = this.state;
    const basket = calcBasket(order, menu);

    return (
      <Products
        location={location}
        menu={menu}
        basket={basket}
        order={order}
        itemAdd={this.itemAdd}
        itemRemove={this.itemRemove}
      />
    );
  }

  getCheckoutPage({ location }) {
    const { order, menu } = this.state;
    const basket = calcBasket(order, menu);

    return <Checkout location={location} basket={basket} />;
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <h1 class="title app__title">
            <Link to="/">Chateau<span aria-hidden="true">❦</span>Gateaux</Link>
          </h1>
          <div class="app__content">
            <Route exact path="/" render={this.getProductPage} />
            <Route path="/checkout" render={this.getCheckoutPage} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
