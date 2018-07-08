import { actions } from "../actions/products";

const initialState = {
  loading: false,
  items: {}
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCTS_LOADING:
      state = { ...state, loading: true };
      return state;

    case actions.PRODUCTS_LOADED:
      state = { ...state, loading: false, items: action.payload };
      return state;

    default:
      return state;
  }
};

export default products;
