export const fmtCurrency = price => {
  return price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
};

export const calcBasket = (order, menu) => {
  return Object.entries(order).reduce(
    (acc, [menuId, quantity]) => {
      const { id, name, price } = menu[menuId];
      const subtotal = quantity * price;
      acc.subtotals.push({ id, name, quantity, subtotal });
      acc.total = acc.total + subtotal;

      return acc;
    },
    {
      subtotals: [],
      total: 0
    }
  );
};
