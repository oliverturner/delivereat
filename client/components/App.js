import React from "react";

import MenuItem from "./menu-item";
import Basket from "./basket";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: {},
      order: {}
    };

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

  render() {
    return (
      <React.Fragment>
        <h1 className="title app__title">Mondo Gateaux</h1>
        <div className="app__content">
          <ul className="menu">
            {Object.entries(this.state.menu).map(([id, item]) => (
              <MenuItem
                key={id}
                item={item}
                itemAdd={this.itemAdd}
                itemRemove={this.itemRemove}
              />
            ))}
          </ul>
          <Basket order={this.state.order} menu={this.state.menu} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
