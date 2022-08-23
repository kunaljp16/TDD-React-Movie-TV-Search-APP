import React from "react";
import { mount, shallow } from "enzyme";
import SearchMolecule from "../../atomicDesignComponents/molecules/searchMolecule/searchMolecule";

describe("SearchMolecule", () => {
  it("should render Search input", () => {
    const mockFn = jest.fn();
    let wrapper = shallow(<SearchMolecule onChange={mockFn} />);

    const input = wrapper.find('#searchInput');

    expect(input).toHaveLength(1);
    expect(input.prop("className")).toEqual("form-control mr-sm-2 search");
    expect(input.prop("placeholder")).toEqual("Search title and add to grid");
    expect(input.prop("aria-label")).toEqual("Search title and add to grid");
    expect(input.prop("autoComplete")).toEqual("off");
  });
});
