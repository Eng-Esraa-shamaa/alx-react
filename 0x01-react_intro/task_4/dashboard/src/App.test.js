import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("renders an <App /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
  it("renders an <App /> component checking for App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header")).toBeDefined();
  });
  it("renders an <App /> component checking for App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body")).toBeDefined();
  });
  it("renders an <App /> component checking for App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer")).toBeDefined();
  });
});