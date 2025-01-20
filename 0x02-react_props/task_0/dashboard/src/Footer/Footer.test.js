import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.js";

describe("<Footer />"),
  () => {
    it("renders without crashing"),
      () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
      };

    it("renders the text `Copyright`"),
      () => {
        const wrapper = shallow(
          <footer className="App-footer">
            <p>Copyright</p>
          </footer>
        );
        expect(wrapper.text()).toBe("Copyright");
      };
  };
