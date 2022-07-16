import React from "react";
import { shallow, mount } from "enzyme";
import ToggleMenuButton from "./../../atomicDesignComponents/atoms/toggleMenuButton/toggleMenuButton";

describe("HeaderOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ToggleMenuButton />);
  });

  it("should render button", () => {
    // const clickMock = jest.fn();
    // const wrapper = shallow(
    //   <button className="toggle-menu-btn" onClick={clickMock}>
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    // );
    const btn = wrapper.find("button");
    expect(btn.prop("className")).toEqual("border-0 navbar-toggler");
  
  });

  it("should render span", () => {
    const span = wrapper.find("span");
    expect(span.prop("className")).toEqual("navbar-toggler-icon");
  });
});
