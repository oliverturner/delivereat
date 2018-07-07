const uniqid = require("uniqid");

const processRawData = (acc, [_, value]) => {
  const newId = uniqid();
  const item = { ...value, id: newId };
  return { ...acc, [newId]: item };
};

function storage({ rawMenu }) {
  const menu = Object.entries(rawMenu).reduce(processRawData, {});
  const orders = {};

  // Menu
  //---------------------------------------
  const getMenu = () => menu;

  const createMenuItem = data => {
    const id = uniqid();
    const item = { ...data, id };
    menu[id] = item;

    return item;
  };

  const readMenuItem = id => {
    return menu[id];
  };

  const updateMenuItem = (id, data) => {
    const item = menu[id];
    if (item) {
      const updatedItem = { ...item, ...data };
      menu[id] = updatedItem;

      return updatedItem;
    }
  };

  const deleteMenuItem = id => {
    const item = menu[id];
    if (item) {
      delete menu[id];
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
    getMenu,
    createMenuItem,
    readMenuItem,
    updateMenuItem,
    deleteMenuItem,

    getOrders,
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder
  };
}

module.exports = storage;
