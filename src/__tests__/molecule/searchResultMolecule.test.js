import React from "react";
import { mount, shallow } from "enzyme";
import SearchResultMolecule from "../../atomicDesignComponents/molecules/searchResultMolecule/searchResultMolecule";

describe("SearchResultMolecule", () => {
  it("should render with list item", () => {
    const filteredMovies = [
      "Homeland",
      "American Horror Story",
      "Sleeps Hallow",
      "How to get Away with Murder",
      "Parenthood",
    ];
    const movieIdHandler = jest.fn();
    let wrapper = shallow(
      <SearchResultMolecule
        filteredData={filteredMovies}
        movieIdHandler={movieIdHandler}
      />
    );
    const li = wrapper.find("li");
    expect(li).toHaveLength(5);
  });

  it("should render with ni list Items", () => {
    const filteredMovies = [];
    const movieIdHandler = jest.fn();
    let wrapper = shallow(
      <SearchResultMolecule
        filteredData={filteredMovies}
        movieIdHandler={movieIdHandler}
      />
    );
    const li = wrapper.find("li");
    expect(li).toHaveLength(0);
  });
});
