import React from "react";
import { shallow } from "enzyme";
import SocialMediaMolecule from "./../../atomicDesignComponents/molecules/socialMediaMolecule";

describe("SocialMediaMolecule", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SocialMediaMolecule />);
  });

  it("should render div with a class", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toEqual(
      "col-lg-3 col-md-6 col-sm-12 text-md-end text-sm-center"
    );
  });

  it("should render span with text 'Follow us on'", () => {
    const span = wrapper.find("span").at(0);
    expect(span.text()).toEqual("Follow us on");
  });

  it("should render 2 <ImageTagAtom />", () => {
    const image = wrapper.find("ImageTagAtom");
    expect(image).toHaveLength(2);
  });

  it("should render  <ImageTagAtom /> with twitter icon", () => {
    const image = wrapper.find("ImageTagAtom").at(0);
    expect(image.prop("src")).toEqual("TwitterWhite.svg");
    expect(image.prop("alt")).toEqual("Twitter");
  });

  it("should render  <ImageTagAtom /> with youtube icon", () => {
    const image = wrapper.find("ImageTagAtom").at(1);
    expect(image.prop("src")).toEqual("YoutubeWhite.svg");
    expect(image.prop("alt")).toEqual("Youtube");
  });
});
