import React from "react";
import { shallow } from "enzyme";
import NavbarListAtom from "../../atomicDesignComponents/atoms/navbarListAtom";

describe("navbarListAtom", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavbarListAtom />);
  });

  it("should render one ul element", () => {
    const ul = wrapper.find("ul");
    expect(ul).toHaveLength(1);
  });

  it("should render five child li items", () => {
    expect(wrapper.find("ul").children()).toHaveLength(5);
  });

  it("should render five anchors tags", () => {
    expect(wrapper.find("a")).toHaveLength(5);
  });

  // expect(wrapper.text()).to.equal('This is really important');

  it("should render anchor tag with 'Home' string", () => {
    const anchor = wrapper.find("a");
    const firstAnchor = anchor.at(anchor.length - 5);
    expect(firstAnchor.text()).toEqual("Home");
  });

  it("should render anchor tag with 'Our Screens' string", () => {
    const anchor = wrapper.find("a");
    const firstAnchor = anchor.at(anchor.length - 4);
    expect(firstAnchor.text()).toEqual("Our Screens");
  });

  it("should render anchor tag with 'Schedule' string", () => {
    const anchor = wrapper.find("a");
    const firstAnchor = anchor.at(anchor.length - 3);
    expect(firstAnchor.text()).toEqual("Schedule");
  });

  it("should render anchor tag with 'Movie Library' string", () => {
    const anchor = wrapper.find("a");
    const firstAnchor = anchor.at(anchor.length - 2);
    expect(firstAnchor.text()).toEqual("Movie Library");
  });

  it("should render anchor tag with 'Location & Contact' string", () => {
    const anchor = wrapper.find("a");
    const firstAnchor = anchor.at(anchor.length - 1);
    expect(firstAnchor.text()).toEqual("Location & Contact");
  });
});
