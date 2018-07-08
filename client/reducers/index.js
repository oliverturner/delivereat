import { combineReducers } from "redux";

import products from "./products";
import orders from "./orders";
import order from "./order";

export default combineReducers({
  products,
  orders,
  order
});
