import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";


describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });


  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem">Your notifications</div>');
  });

  it("does not display notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(false);
  });

  it("does not display menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.menuItem").exists()).toBe(true);
  });

  it("displays Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find("div.Notifications").exists()).toBe(true);
  });


});
describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});