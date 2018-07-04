export const fmtCurrency = price => {
  return price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
};
