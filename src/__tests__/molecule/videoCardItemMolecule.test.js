import React from "react";
import { shallow } from "enzyme";
import VideoCardItemMolecule from "./../../atomicDesignComponents/molecules/videoCardItemMolecule/videoCardItemMolecule";
describe("it should render VideoCardItemMolecule", () => {
  let wrapper;

  beforeEach(() => {
    const favorites = {
      id: 1,
      name: "Under the Dome",
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      },
      summary:
        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    };
    const mock = jest.fn();
    wrapper = shallow(
      <VideoCardItemMolecule movie={favorites} deleteVideoCardHandler={mock} />
    );
  });

  it("should render div with class", () => {
    const div = wrapper.find("div").at(0);
    expect(div.prop("className")).toEqual(
      "col-md-4 col-md-4 col-sm-6 position-relative mb-4 videoCardItemWrapper"
    );
  });

  it("should render CloseButtonAtom", () => {
    const closeButtonAtom = wrapper.find("CloseButtonAtom");
    expect(closeButtonAtom).toHaveLength(1);
  });

  it("should render ImageTagAtom", () => {
    const imageTagAtom = wrapper.find("ImageTagAtom");
    expect(imageTagAtom).toHaveLength(1);
  });

  it("should render DescriptionMolecule", () => {
    const descriptionMolecule = wrapper.find("DescriptionMolecule");
    expect(descriptionMolecule).toHaveLength(1);
  });
});
