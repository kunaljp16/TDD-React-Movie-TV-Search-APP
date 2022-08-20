import React from "react";
import { shallow } from "enzyme";
import BannerOrganism from "./../../atomicDesignComponents/organisms/bannerOrganism/bannerOrganism";

describe("BannerOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BannerOrganism />);
  });

  it("should render section", () => {
    const section = wrapper.find("section");
    expect(section).toHaveLength(1);
    expect(section.prop("className")).toEqual("banner");
  });

  it("should render first div with class", () => {
    const div = wrapper.find("div").at(0);
    expect(div.prop("id")).toEqual("carouselExampleCaptions");
    expect(div.prop("className")).toEqual("carousel slide");
    expect(div.prop("data-bs-ride")).toEqual("carousel");
  });

  it("should render second div with class", () => {
    const div = wrapper.find("div").at(1);
    expect(div.prop("className")).toEqual("carousel-indicators");
  });

  it("should render first slide button", () => {
    const button = wrapper.find("button").at(0);
    expect(button.prop("type")).toEqual("button");
    expect(button.prop("data-bs-target")).toEqual("#carouselExampleCaptions");
    expect(button.prop("data-bs-slide-to")).toEqual("0");
    expect(button.prop("className")).toEqual("active");
    expect(button.prop("aria-current")).toEqual("true");
    expect(button.prop("aria-label")).toEqual("Slide 1");
  });

  it("should render second slide button", () => {
    const button = wrapper.find("button").at(1);
    expect(button.prop("type")).toEqual("button");
    expect(button.prop("data-bs-target")).toEqual("#carouselExampleCaptions");
    expect(button.prop("data-bs-slide-to")).toEqual("1");
    expect(button.prop("aria-label")).toEqual("Slide 2");
  });

  it("should render div with class 'carousel-inner'", () => {
    const div = wrapper.find("div").at(2);
    expect(div.prop("className")).toEqual("carousel-inner");
  });

  it("should render div with class 'carousel-item'", () => {
    const div = wrapper.find("div").at(3);
    expect(div.prop("className")).toEqual("carousel-item active");
  });

  it("should render Two ImageTagAtoms", () => {
    const ImageTagAtom = wrapper.find("ImageTagAtom");
    expect(ImageTagAtom).toHaveLength(2);
  });
});
