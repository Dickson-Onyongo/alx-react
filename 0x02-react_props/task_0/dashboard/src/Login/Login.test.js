import React from "react";
import { shallow } from "enzyme";
import Login from "./Login.js";

describe("<Login />"),
  () => {
    it("renders without crashing.", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).tobe(true);
    });
    //checks if input tag renders 2 times
    it("renders two `<input>` tags "),
      () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(input)).toHaveLength(2);
      };
    //checks if component renders 2 label tags
    it("renders two `<label>` tags "),
      () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(label)).toHaveLength(2);
      };
  };
