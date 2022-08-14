import React from "react";
import { shallow } from "enzyme";
import MovieLibrary from "./../../atomicDesignComponents/template/movieLibrary/movieLibrary";

describe("FavoriteCollection", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieLibrary />);
  });

  it("should render section", () => {
    const sec = wrapper.find("section");
    expect(sec.prop("className")).toEqual("container-fluid");
  });

  it("should render h2", () => {
    const h2Tag = wrapper.find("h2");
    expect(h2Tag).toHaveLength(1);
    expect(h2Tag.text()).toEqual("MOVIE LIBRARY");
    expect(h2Tag.text()).toEqual("MOVIE LIBRARY");
  });

  it("should render p", () => {
    const pTag = wrapper.find("p");
    expect(pTag).toHaveLength(1);
    expect(pTag.text()).toEqual(
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    );
  });
});
