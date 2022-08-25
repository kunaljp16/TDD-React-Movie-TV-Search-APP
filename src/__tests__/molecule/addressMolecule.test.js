import React from "react";
import { shallow } from "enzyme";
import AddressMolecule from "./../../atomicDesignComponents/molecules/addressMolecule";

describe("AddressMolecule", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddressMolecule />);
  });

  it("should render div with class", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toEqual(
      "col-lg-3 col-md-6 col-sm-12 text-md-start text-sm-center"
    );
  });

  it("should render first span", () => {
    const span = wrapper.find("span").at(0);
    expect(span.text()).toEqual("C. Salvador de Madariaga, 1");
  });

  it("should render second span", () => {
    const span = wrapper.find("span").at(1);
    expect(span.text()).toEqual("28027 Madrid");
  });

  it("should render third span", () => {
    const span = wrapper.find("span").at(2);
    expect(span.text()).toEqual("Spain");
  });
});
