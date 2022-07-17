import React from "react";
import { shallow, mount } from "enzyme";
import HeaderOrganism from "../../atomicDesignComponents/organisms/headerOrganism";

describe("HeaderOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderOrganism />);
  });

  it("should render nav", () => {
    const nav = wrapper.find("nav");
    expect(nav.prop("className")).toEqual("navbar navbar-dark");
  });

  it("should render a", () => {
    const anchor = wrapper.find("a");
    expect(anchor.prop("className")).toEqual("navbar-brand");
  });

  it("should render LogoAtom", () => {
    const logoAtom = wrapper.find("LogoAtom");
    expect(logoAtom).toBeDefined();
  });

  it("should render div", () => {
    const div = wrapper.find(".navbar-brand");
    expect(div).toBeTruthy();
  });

  it("should render NavbarListAtom", () => {
    const navbarListAtom = wrapper.find("NavbarListAtom");
    expect(navbarListAtom).toBeDefined();
  });

  it("should render ToggleMenuButton", () => {
    const toggleMenuButton = wrapper.find("ToggleMenuButton");
    expect(toggleMenuButton).toBeDefined();
  });

  it("should render SideNavbarItemMolecule with no class", () => {
    const sidebarNav = wrapper.find("SideNavbarItemMolecule");
    expect(sidebarNav).toBeDefined();
    expect(sidebarNav.prop("toggleMenuStatusClass")).toEqual("");
  });
});
