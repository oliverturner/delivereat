import { actions } from "../actions/order";

const itemAdd = (state, id) => {
  const quantity = state[id] || 0;
  const newQuantity = quantity + 1;

  return { ...state, [id]: newQuantity };
};

const itemRemove = (state, id) => {
  const quantity = state[id] || 0;
  const newQuantity = quantity - 1;

  if (newQuantity > 0) {
    return { ...state, [id]: newQuantity };
  } 
  
  const { [id]: idToOmit, ...newState } = state;
  return newState;
};

const basket = (state = {}, action) => {
  switch (action.type) {
    case actions.ITEM_ADD:
      state = itemAdd(state, action.payload);
      return state;

    case actions.ITEM_REMOVE:
      state = itemRemove(state, action.payload);
      return state;

    default:
      return state;
  }
};

export default basket;
