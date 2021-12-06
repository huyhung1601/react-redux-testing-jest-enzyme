import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestAtrr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it('Should render without err', ()=>{
        const component = findByTestAtrr(wrapper,'HeadlineComponent');
        expect(component.length).toBe(1)
    });

    it('SHould render a H1',()=>{
        const h1 = findByTestAtrr(wrapper,'header')
        expect(h1.length).toBe(1)

    })
  });

  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', ()=>{
        const component = findByTestAtrr(wrapper);
        expect(component.length).toBe(0)

    })
  });
});
