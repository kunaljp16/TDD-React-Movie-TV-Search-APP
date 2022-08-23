import React from "react";
import { shallow } from "enzyme";
import LocationOrganism from "./../../atomicDesignComponents/organisms/locationOrganism/locationOrganism";

describe("LocationOrganism", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LocationOrganism />);
  });

  it("should render first div with class", () => {
    const divOne = wrapper.find("div").at(0);
    expect(divOne.prop("className")).toEqual(
      "col-lg-7 col-md-12 col-sm-12 mt-sm-5 mt-md-5 mt-lg-0 mt-xs-4"
    );
  });

  it("should render second div with class", () => {
    const divOne = wrapper.find("div").at(1);
    expect(divOne.prop("className")).toEqual("mapOuter");
  });

  it("should render iframe", () => {
    const iframe = wrapper.find("iframe");
    expect(iframe.prop("src")).toEqual(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5625.527093985788!2d2.1815370262757456!3d41.418167967045385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a32a58db649f%3A0x4bcf0b8c57163870!2sNavas%2C%20Barcelona!5e1!3m2!1ses!2ses!4v1660515003865!5m2!1ses!2ses"
    );
  });
});
