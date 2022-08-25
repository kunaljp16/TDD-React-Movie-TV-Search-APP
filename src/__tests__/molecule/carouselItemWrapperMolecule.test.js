import React from "react";
import { shallow } from "enzyme";
import CarouselItemWrapperMolecule from "./../../atomicDesignComponents/molecules/carouselItemWrapperMolecule";

describe("CarouselItemWrapperMolecule", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselItemWrapperMolecule />);
  });

  it("should render 2 CarouselItemMolecule with class", () => {
    const carouselItem = wrapper.find("CarouselItemMolecule");
    expect(carouselItem).toHaveLength(2);
  });
});
