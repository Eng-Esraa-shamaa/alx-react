import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("renders an <Notifications /> component", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });
  it("renders an <Notifications /> component checking for Notifications ul", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul")).toBeDefined();
  });
  it("renders an <Notifications /> component checking for close button", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications button")).toBeDefined();
  });
  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });
  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
});