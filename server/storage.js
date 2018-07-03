function storage(data) {
  const menu = data.menu;

  const getMenu = () => menu;

  return {
    getMenu
  };
}

module.exports = storage;
