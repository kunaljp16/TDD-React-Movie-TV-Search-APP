import React from "react";
import { shallow, mount } from "enzyme";
import HeaderOrganism from "../../atomicDesignComponents/organisms/headerOrganism/headerOrganism";

describe("HeaderOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderOrganism />);
  });

  it("should render nav", () => {
    const nav = wrapper.find("nav");
    expect(nav.prop("className")).toEqual("navbar navbar-expand-lg");
  });

  it("should render LogoAtom", () => {
    const logoAtom = wrapper.find("LogoAtom");
    expect(logoAtom).toBeDefined();
  });

  it("should render NavbarListAtom", () => {
    const navbarListAtom = wrapper.find("NavbarListAtom");
    expect(navbarListAtom).toBeDefined();
  });

  it("should render ToggleMenuButton", () => {
    const toggleMenuButton = wrapper.find("ToggleMenuButton");
    expect(toggleMenuButton).toBeDefined();
  });
});
