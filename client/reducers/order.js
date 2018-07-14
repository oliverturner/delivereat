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
      return { ...state, items: itemAdd(state.items, action.payload) };

    case actions.ITEM_REMOVE:
      return { ...state, items: itemRemove(state.items, action.payload) };

    case actions.ORDER_SAVING:
      return { ...state, loading: true };

    case actions.ORDER_SAVED:
      return { ...state, loading: false, items: {} };

    default:
      return state;
  }
};

export default basket;
