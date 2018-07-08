import reducers from "../../reducers";

test("reducers", () => {
  let state = reducers(
    { products: { loading: true, items: {} }, orders: {}, order: {} },
    {
      type: "PRODUCTS_LOADED",
      payload: {
        "189sjqne9pjjcy22fb": {
          id: "189sjqne9pjjcy22fb",
          name: "Original NY Plain Cheesecake",
          price: 40.95,
          image: "/static/images/original_ny_plain_cheesecake.jpg"
        },
        "189sjqne9pjjcy22fc": {
          id: "189sjqne9pjjcy22fc",
          name: "White Chocolate Blueberry Cheesecake",
          price: 46.95,
          image: "/static/images/blueberry_swirl_copy.jpg"
        },
        "189sjqne9pjjcy22fd": {
          id: "189sjqne9pjjcy22fd",
          name: "Seasonal Little Fellas Sampler",
          price: 65.95,
          image: "/static/images/m56259_psd2.jpg"
        }
      }
    }
  );
  expect(state).toEqual({
    products: {
      loading: false,
      items: {
        "189sjqne9pjjcy22fb": {
          id: "189sjqne9pjjcy22fb",
          name: "Original NY Plain Cheesecake",
          price: 40.95,
          image: "/static/images/original_ny_plain_cheesecake.jpg"
        },
        "189sjqne9pjjcy22fc": {
          id: "189sjqne9pjjcy22fc",
          name: "White Chocolate Blueberry Cheesecake",
          price: 46.95,
          image: "/static/images/blueberry_swirl_copy.jpg"
        },
        "189sjqne9pjjcy22fd": {
          id: "189sjqne9pjjcy22fd",
          name: "Seasonal Little Fellas Sampler",
          price: 65.95,
          image: "/static/images/m56259_psd2.jpg"
        }
      }
    },
    orders: {},
    order: {}
  });
});
