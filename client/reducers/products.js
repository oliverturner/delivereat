import { actions } from "../actions/products";

const initialState = {
  loading: false,
  items: {}
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCTS_LOADING:
      return { ...state, loading: true };

    case actions.PRODUCTS_LOADED:
      return { ...state, loading: false, items: action.payload };

    default:
      return state;
  }
};

export default products;
