const orders = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_QUERY":
      return action.query;

    default:
      return state;
  }
};

export default orders;
