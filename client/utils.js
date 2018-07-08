export const fmtCurrency = (price = 0) => {
  return price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
};

export const calcBasket = (order, products) => {
  return Object.entries(order).reduce(
    (acc, [productId, quantity]) => {
      const { id, name, price } = products[productId];
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
