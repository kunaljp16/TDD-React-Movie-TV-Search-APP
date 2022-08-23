import React from "react";
import { shallow } from "enzyme";
import ContactUsWrapperTemplate from "./../../atomicDesignComponents/templates/contactUsWrapperTemplate";

describe("FavoriteCollection", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactUsWrapperTemplate />);
  });

  it("should render section and div with classes", () => {
    const section = wrapper.find("section");
    expect(section).toHaveLength(1);
    expect(section.prop("className")).toEqual("container-fluid");

    const div = wrapper.find("div");
    expect(div).toHaveLength(4);

    const divOne = wrapper.find("div").at(0);
    expect(divOne.prop("className")).toEqual("container");

    const divTwo = wrapper.find("div").at(1);
    expect(divTwo.prop("className")).toEqual("row mt-5");

    const divThree = wrapper.find("div").at(2);
    expect(divThree.prop("className")).toEqual("col-md-12 col-sm-12 col-lg-12");

    const divFour = wrapper.find("div").at(3);
    expect(divFour.prop("className")).toEqual("row mt-4 mb-5");
  });

  it("should render h2", () => {
    const h2Tag = wrapper.find("h2");
    expect(h2Tag).toHaveLength(1);
    expect(h2Tag.text()).toEqual("How to reach us");
  });

  it("should render p", () => {
    const pTag = wrapper.find("p");
    expect(pTag).toHaveLength(1);
    expect(pTag.text()).toEqual("Lorem ipsum dolor sit amet, consetetur.");
  });

  it("should render ContactUsOrganism", () => {
    const contactUsOrganism = wrapper.find("ContactUsOrganism");
    expect(contactUsOrganism).toHaveLength(1);
  });

  it("should render LocationOrganism", () => {
    const locationOrganism = wrapper.find("LocationOrganism");
    expect(locationOrganism).toHaveLength(1);
  });
});
