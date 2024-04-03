import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });

  it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find("p").text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(false)}`);
  });

  it("Tests that there is no link rendered when user is logged out within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };
});
