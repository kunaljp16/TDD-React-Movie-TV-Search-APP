import React from "react";
import { shallow } from "enzyme";
import CopyrightMolecule from "./../../atomicDesignComponents/molecules/copyrightMolecule/copyrightMolecule";

describe("CopyrightMolecule", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CopyrightMolecule />);
  });

  it("should render section", () => {
    const section = wrapper.find("section");
    expect(section).toHaveLength(1);
    expect(section.prop("className")).toEqual("copyRightWrapper grayBg");
  });

  it("should render first div with class", () => {
    const div = wrapper.find("div").at(0);
    expect(div.prop("className")).toEqual("copyRightOuterSec");
  });

  it("should render second div with class", () => {
    const div = wrapper.find("div").at(1);
    expect(div.prop("className")).toEqual("copyRight container pt-3 pb-3");
  });

  it("should render third div with class", () => {
    const div = wrapper.find("div").at(2);
    expect(div.prop("className")).toEqual(
      "row"
    );
  });

  it("should render forth div with class", () => {
    const div = wrapper.find("div").at(3);
    expect(div.prop("className")).toEqual(
      "col-md-6 col-sm-12 text-md-start text-sm-center"
    );
  });

  it("should render first p with content", () => {
    const p = wrapper.find("p").at(0);
    expect(p.prop("className")).toEqual("m-0");
    expect(p.text()).toEqual(
      "Copyright © 2022 Random Hotels. All rights reserved."
    );
  });

  it("should render second p with content", () => {
    const p = wrapper.find("p").at(1);
    expect(p.text()).toEqual(
      "Photos by Felix Mooneeram & Serge Kutuzov on Unsplash"
    );
  });
});
