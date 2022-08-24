import React from "react";
import { shallow, mount } from "enzyme";
import DescriptionMolecule from "./../../atomicDesignComponents/molecules/descriptionMolecule/descriptionMolecule";

describe("descriptionMolecule", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      name: "test",
      summary: "<p> some thing for test</p>",
    };
    wrapper = mount(
      <DescriptionMolecule name={props.name} summary={props.summary} />
    );
  });

  it("should render div with a class", () => {
    const div = wrapper.find("div").at(0);
    expect(div.prop("className")).toEqual("description");
  });

  it("should render h4", () => {
    const h4 = wrapper.find("h4");
    expect(h4).toHaveLength(1);
  });

  it("should render span with a class", () => {
    const span = wrapper.find("span");
    expect(span).toHaveLength(1);
    expect(span.prop("className")).toEqual("summary");
    expect(span.prop("dangerouslySetInnerHTML")).toBeDefined();
  });
});
