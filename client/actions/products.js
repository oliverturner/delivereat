export const actions = {
  PRODUCTS_LOADING: "PRODUCTS_LOADING",
  PRODUCTS_LOADED: "PRODUCTS_LOADED"
};

const onProductsLoading = results => ({
  type: actions.PRODUCTS_LOADING
});

const onProductsLoaded = results => ({
  type: actions.PRODUCTS_LOADED,
  payload: results
});

const fetchProducts = () => dispatch => {
  dispatch(onProductsLoading())

  return fetch("/api/products")
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .then(products => dispatch(onProductsLoaded(products)))
    .catch(error => console.log(error));
};

export const loadProducts = () => dispatch => {
  dispatch(fetchProducts());
};
