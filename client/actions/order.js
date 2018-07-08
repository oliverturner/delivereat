export const actions = {
  ITEM_ADD: "ITEM_ADD",
  ITEM_REMOVE: "ITEM_REMOVE"
};

export const addAction = (id) => ({
  type: actions.ITEM_ADD,
  payload: id
})

export const removeAction = (id) => ({
  type: actions.ITEM_REMOVE,
  payload: id
})

export const itemAdd = id => dispatch => {
  dispatch(addAction(id));
};

export const itemRemove = id => dispatch => {
  dispatch(removeAction(id));
};