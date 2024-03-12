/**
 * @jest-environment jsdom
 */

import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { shallow, mount } from "enzyme";
import CourseList from "../CourseList/CourseList";
import { listNotifications } from "../Notifications/Notifications";
import { listCourses } from "../CourseList/CourseList";





describe("App tests", () => {

  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });


  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });


  it("when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const events = {};
    const logout = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    window.alert = jest.fn();

    shallow(<App logOut={logout} />);

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

});
