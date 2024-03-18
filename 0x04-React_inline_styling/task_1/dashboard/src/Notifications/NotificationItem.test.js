import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";
import { StyleSheetTestUtils } from "aphrodite";
// Mock document.querySelector
jest.spyOn(global.document, 'querySelector').mockImplementation(() => {
  return {
    appendChild: jest.fn(),
  };
});

jest.mock('aphrodite', () => {
  const styleSheet = {
    css: jest.fn(),
    StyleSheet: { create: jest.fn() },
  };
  return {
    ...jest.requireActual('aphrodite'),
    StyleSheet: styleSheet,
    css: styleSheet.css,
  };
});



beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});

