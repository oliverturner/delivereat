const uniqid = require("uniqid");

const processRawData = (acc, [_, value]) => {
  const newId = uniqid();
  const item = { ...value, id: newId };
  return { ...acc, [newId]: item };
};

function storage(data) {
  const products = Object.entries(data.products).reduce(processRawData, {});
  const orders = {};

  // Products
  //---------------------------------------
  const getProducts = () => products;

  const createProduct = data => {
    const id = uniqid();
    const item = { ...data, id };
    products[id] = item;

    return item;
  };

  const readProduct = id => {
    return products[id];
  };

  const updateProduct = (id, data) => {
    const item = products[id];
    if (item) {
      const updatedItem = { ...item, ...data };
      products[id] = updatedItem;

      return updatedItem;
    }
  };

  const deleteProduct = id => {
    const item = products[id];
    if (item) {
      delete products[id];
      return item;
    }
  };

  // Orders
  //---------------------------------------
  const getOrders = () => orders;

  const createOrder = () => {
    const newId = uniqid();
    const item = { ...data, id: newId };
    orders = { ...orders, [newId]: item };

    return item;
  };

  const readOrder = id => orders[id];

  const updateOrder = (id, data) => {
    const item = orders[id];
    const updatedItem = { ...item, ...data };
    orders[id] = updatedItem;

    return updatedItem;
  };

  const deleteOrder = id => {
    delete orders[id];
  };

  return {
    getProducts,
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,

    getOrders,
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder
  };
}

module.exports = storage;
