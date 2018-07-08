import basket from "../basket";
import { addAction, removeAction } from "../../actions/basket";

const initialData = () => ({
  a: 1,
  b: 2,
  c: 3
})

describe("basket", () => {
  it("can add items", () => {
    const state = initialData()
    const newState = basket(state, addAction("b"))
    expect(newState).toEqual({
      a: 1,
      b: 3,
      c: 3
    })
  });

  it("can remove items", () => {
    const state = initialData()
    const newState = basket(state, removeAction("b"))
    expect(newState).toEqual({
      a: 1,
      b: 1,
      c: 3
    })
  });

  it("can delete unused items", () => {
    const state = initialData()
    const newState = basket(state, removeAction("a"))
    expect(newState).toEqual({
      b: 2,
      c: 3
    })
  })
});
