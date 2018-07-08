import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Products from "./products";
import Checkout from "./checkout";
import { loadProducts } from "../actions/products";

class App extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Link to="/">
            <h1 className="title app__title">
              Chateau<span aria-hidden="true">❦</span>Gateaux
            </h1>
          </Link>
          <div className="app__content">
            <Route exact path="/" component={Products} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProducts())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
