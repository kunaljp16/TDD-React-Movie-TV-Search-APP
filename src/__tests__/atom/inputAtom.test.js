import React from "react";
import { shallow } from "enzyme";
import InputAtom from "../../atomicDesignComponents/atoms/inputAtom/inputAtom";

describe("InputAtomComponent", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      customClass: "mr-sm-2 search",
      inputType: "search",
      inputPlaceholder: "Search title and add to grid",
      areaLabel: "Search title and add to grid",
      autoCompleteState: "off",
    };
    wrapper = shallow(
      <InputAtom
        areaLabel={props.areaLabel}
        inputType={props.inputType}
        customClass={props.customClass}
        inputPlaceholder={props.inputPlaceholder}
        autoCompleteState={props.autoCompleteState}
      />
    );
  });

  it("should render Input", () => {
    console.log(wrapper.debug());
    const input = wrapper.find("input");
    expect(input).toHaveLength(1);
    expect(input.prop("type")).toEqual("search");
    expect(input.prop("className")).toEqual("form-control mr-sm-2 search");
    expect(input.prop("placeholder")).toEqual("Search title and add to grid");
    expect(input.prop("autoComplete")).toEqual("off");
    expect(input.prop("aria-label")).toEqual("Search title and add to grid");
  });
});
