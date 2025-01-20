import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.js";

describe("<Header />"),
  () => {
    //checks the component renderss without crashing
    it("renders without crashing", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists()).to.equal(true);
    });
    //checks the img tag exists.
    it("it contains `<img>` tags", () => {
      const wrapper = shallow(
        <Header>
          <img src={logo} alt="Logo" />
        </Header>
      );
      expect(wrapper.contains(<img src={logo} alt="Logo" />)).to.equal(true);
    });

    //checks the h1 tag exists.
    it("it contains `<h1>` tags", () => {
      const wrapper = shallow(
        <Header>
          <h1>School dashboard</h1>
        </Header>
      );
      expect(wrapper.contains(<h1>School dashboard</h1>)).tobeequal(true);
    });
  };
