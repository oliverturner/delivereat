const uniqid = require("uniqid");

const processRawData = (acc, [_, value]) => {
  const newId = uniqid();
  const item = { ...value, id: newId };
  return { ...acc, [newId]: item };
};

function storage(data) {
  const products = Object.entries(data.products).reduce(processRawData, {});
  let orders = {};

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

  const createOrder = items => {
    const id = uniqid();
    const newOrder = { id, items };
    orders = {...orders, [id]: newOrder};

    return newOrder;
  };

  const readOrder = id => orders[id];

  const updateOrder = (id, items) => {
    const order = orders[id];
    const updatedOrder = { ...order, items };
    orders = {...orders, [id]: updatedOrder};

    return updatedOrder;
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
