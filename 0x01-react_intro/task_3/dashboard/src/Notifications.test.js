import { shallow } from "enzyme";
import notification from "./Notifications";

describe("<notification/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<notification />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three li items", () => {
    const wrapper = shallow(<notification />);
    expect(wrapper.find(li)).to.have.lengthOf(3);
  });

  it("renders text `Here is the list of notifications`", () => {
    const wrapper = shallow(<notification />);
    expect(wrapper.find("Here is the list of notifications")).toBe(1);
  });
});
