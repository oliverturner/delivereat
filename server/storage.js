function storage(data) {
  const menu = data.menu;
  const orders = {};

  const getMenu = () => menu;
  const addMenuItem = () => {};
  const removeMenuItem = () => {};

  const getOrders = () => orders;
  const addOrder = () => {};
  const removeOrder = () => {};

  return {
    getMenu,
    addMenuItem,
    removeMenuItem,
    getOrders
  };
}

module.exports = storage;
