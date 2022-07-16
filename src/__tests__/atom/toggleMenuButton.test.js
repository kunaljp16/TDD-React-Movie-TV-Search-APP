import React from "react";
import { shallow, mount } from "enzyme";
import ToggleMenuButton from "../../atomicDesignComponents/atoms/toggleMenuButton/toggleMenuButton";

describe("HeaderOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ToggleMenuButton />);
  });

  it("should render button", () => {
    const btn = wrapper.find("button");
    expect(btn.prop("className")).toEqual("border-0 navbar-toggler");

    const mockCallBack = jest.fn();
    const button = shallow(
      <button className="border-0 navbar-toggler" onClick={mockCallBack}>
        <span className="navbar-toggler-icon"></span>
      </button>
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should render span", () => {
    const span = wrapper.find("span");
    expect(span.prop("className")).toEqual("navbar-toggler-icon");
  });
});
