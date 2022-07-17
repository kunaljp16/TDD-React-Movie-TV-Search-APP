import React from "react";
import { shallow, mount } from "enzyme";
import CloseButton from "../../atomicDesignComponents/atoms/closeButton/closeButton";

describe("CloseButton", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CloseButton />);
  });

  it("should render button", () => {
    const btn = wrapper.find("button");
    expect(btn.prop("className")).toEqual("btn-close btn-close-white btn-close-custom");
  });

  it("should fire click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <button
        className="btn-close btn-close-white"
        aria-label="Close"
        onClick={mockCallBack}
      ></button>
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
