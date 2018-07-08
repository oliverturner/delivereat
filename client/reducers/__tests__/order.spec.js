import order from "../order";
import { addAction, removeAction } from "../../actions/order";

const initialData = () => ({
  items: {
    a: 1,
    b: 2,
    c: 3
  }
});

describe("order", () => {
  it("can add items", () => {
    const state = initialData();
    const newState = order(state, addAction("b"));
    expect(newState.items).toEqual({
      a: 1,
      b: 3,
      c: 3
    });
  });

  it("can remove items", () => {
    const state = initialData();
    const newState = order(state, removeAction("b"));
    expect(newState.items).toEqual({
      a: 1,
      b: 1,
      c: 3
    });
  });

  it("can delete unused items", () => {
    const state = initialData();
    const newState = order(state, removeAction("a"));
    expect(newState.items).toEqual({
      b: 2,
      c: 3
    });
  });
});
