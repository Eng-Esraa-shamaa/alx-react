import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that by passing dummy type and value props, it renders the correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    wrapper.update();
    const listItem = wrapper.find("li");

    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toEqual("test");
    expect(listItem.prop("data-notification-type")).toEqual("default");
  });


  
});

