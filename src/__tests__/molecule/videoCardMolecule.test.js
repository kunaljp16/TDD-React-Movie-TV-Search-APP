import React from "react";
import { shallow } from "enzyme";
import VideoCardMolecule from "./../../atomicDesignComponents/molecules/videoCardMolecule/videoCardMolecule";
import favorites from "./../../stub/videoCardMolecule.stub";

describe("VideoCardMolecule", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VideoCardMolecule favoritesCollection={favorites} />);
  });

  it("should render VideoCardItemMolecule", () => {
    expect(wrapper.find("VideoCardItemMolecule")).toHaveLength(3);
  });
});
