export const actions = {
  PRODUCTS_LOADING: "PRODUCTS_LOADING",
  PRODUCTS_LOADED: "PRODUCTS_LOADED"
};

//  Action creators
//------------------------------------------------------------------------------
const loadingAction = () => ({
  type: actions.PRODUCTS_LOADING
});

const loadedAction = results => ({
  type: actions.PRODUCTS_LOADED,
  payload: results
});

//  Dispatchers
//------------------------------------------------------------------------------
const fetchProducts = () => dispatch => {
  dispatch(loadingAction());

  return fetch("/api/products")
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .then(products => dispatch(loadedAction(products)))
    .catch(error => console.log(error));
};

export const loadProducts = () => dispatch => {
  dispatch(fetchProducts());
};
