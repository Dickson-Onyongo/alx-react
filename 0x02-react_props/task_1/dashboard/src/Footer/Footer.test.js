import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.js";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test "),
  () => {
    it("renders without crashing"),
      () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
      };

    it("renders the text `Copyright`"),
      () => {
        const wrapper = shallow(
          <footer className="App-footer">
            <p>Copyright</p>
          </footer>
        );
        expect(wrapper.text()).toEqual(
          `Copyright ${getFullYear()} - ${getFooterCopy()}`
        );
      };
  };
