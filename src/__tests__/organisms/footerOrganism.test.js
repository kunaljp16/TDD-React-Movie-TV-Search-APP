import React from "react";
import { shallow, mount } from "enzyme";
import FooterOrganism from "./../../atomicDesignComponents/organisms/footerOrganism/footerOrganism";

describe("HeaderOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FooterOrganism />);
  });

  it("should render footer", () => {
    const footer = wrapper.find("footer");
    expect(footer).toHaveLength(1);
    expect(footer.prop("className")).toEqual("footerWrapper grayBg");
  });

  it("should render div with class", () => {
    const diveOne = wrapper.find("div").at(0);
    expect(diveOne.prop("className")).toEqual("footerOuterSec");
  });

  it("should render section", () => {
    const section = wrapper.find("section");
    expect(section.prop("className")).toEqual(
      "footer container pt-4 pb-4 col-sm-6 text-sm-center"
    );
  });

  it("should render second div with class", () => {
    const diveTwo = wrapper.find("div").at(1);
    expect(diveTwo.prop("className")).toEqual("row justify-content-between");
  });

  it("should render AddressMolecule", () => {
    const AddressMolecule = wrapper.find("AddressMolecule");
    expect(AddressMolecule).toHaveLength(1);
  });

  it("should render SocialMediaMolecule", () => {
    const SocialMediaMolecule = wrapper.find("SocialMediaMolecule");
    expect(SocialMediaMolecule).toHaveLength(1);
  });

  it("should render CopyrightMolecule", () => {
    const CopyrightMolecule = wrapper.find("CopyrightMolecule");
    expect(CopyrightMolecule).toHaveLength(1);
  });
});
