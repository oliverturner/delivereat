export const actions = {
  ITEM_ADD: "ITEM_ADD",
  ITEM_REMOVE: "ITEM_REMOVE",
  ORDER_SAVING: "ORDER_SAVING",
  ORDER_SAVED: "ORDER_SAVED"
};

const saveToLocalStorage = data => {
  const oldOrders = JSON.parse(localStorage.getItem("orders")) || {};
  const newOrders = { ...oldOrders, [data.id]: data };
  localStorage.setItem("orders", JSON.stringify(newOrders));
};

//  Action creators
//------------------------------------------------------------------------------
export const addAction = id => ({
  type: actions.ITEM_ADD,
  payload: id
});

export const removeAction = id => ({
  type: actions.ITEM_REMOVE,
  payload: id
});

const savingAction = () => ({
  type: actions.ORDER_SAVING
});

const savedAction = data => ({
  type: actions.ORDER_SAVED,
  payload: data
});

// Dispatchers
//------------------------------------------------------------------------------
export const itemAdd = id => dispatch => {
  dispatch(addAction(id));
};

export const itemRemove = id => dispatch => {
  dispatch(removeAction(id));
};

const postOrder = order => dispatch => {
  dispatch(savingAction());

  return fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .then(data => {
      saveToLocalStorage(data);
      dispatch(savedAction(data));
    })
    .catch(error => console.log(error));
};

export const saveOrder = order => dispatch => {
  dispatch(postOrder(order));
};
