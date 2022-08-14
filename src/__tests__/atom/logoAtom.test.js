import React from "react";
import { shallow } from "enzyme";
import LogoComponent from "../../atomicDesignComponents/atoms/logoAtom";


describe("LogoComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogoComponent />);
  });

  it("should render anchor tag", () => {
    const anchor = wrapper.find("a");
    expect(anchor).toHaveLength(1);
    expect(anchor.prop("className")).toEqual("navbar-brand");
  });

  it("should renders Image tag", () => {
    const imgTag = wrapper.find("img");
    expect(imgTag.prop("src")).not.toBeNull();
    expect(imgTag).toHaveLength(1);
    expect(imgTag.prop("alt")).not.toBeNull();
  });
});
