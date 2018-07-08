import { actions } from "../actions/order";

const initialState = {
  loading: false,
  items: {}
};

const itemAdd = (items, id) => {
  const quantity = items[id] || 0;
  const newQuantity = quantity + 1;

  return { ...items, [id]: newQuantity };
};

const itemRemove = (items, id) => {
  const quantity = items[id] || 0;
  const newQuantity = quantity - 1;

  if (newQuantity > 0) {
    return { ...items, [id]: newQuantity };
  }

  const { [id]: idToOmit, ...newItems } = items;
  return newItems;
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case actions.ITEM_ADD:
      state = { ...state, items: itemAdd(state.items, action.payload) };
      return state;

    case actions.ITEM_REMOVE:
      state = { ...state, items: itemRemove(state.items, action.payload) };
      return state;

    case actions.ORDER_SAVING:
      state = { ...state, loading: true };
      return state;

    case actions.ORDER_SAVED:
      state = { loading: false, items: {} };
      return state;

    default:
      return state;
  }
};

export default basket;
