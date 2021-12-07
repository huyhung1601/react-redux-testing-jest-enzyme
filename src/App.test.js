import App from "./App";
import { mount } from "enzyme";
import { findByTestAtrr, testStore } from "./../Utils";
import React from "react";
import { Provider } from "react-redux";
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(
    <Provider store={store} >
      <App />
    </Provider>
  )
    console.log(wrapper.debug())
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

});
