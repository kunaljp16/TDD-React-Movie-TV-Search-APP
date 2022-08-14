import React from "react";
import { shallow } from "enzyme";
import ImageAtom from "../../atomicDesignComponents/atoms/imageAtom";

describe("ImageAtom", () => {
  let wrapper;
  beforeEach(() => {
    let props = {
      src: "./../../assets/images/Batman.jpg",
      alt: "SpiderMan",
      className: "d-block w-100",
    };
    wrapper = shallow(
      <ImageAtom
        src={props.src}
        alt={props.alt}
        className={props.className}
      />
    );
    console.log(wrapper.debug());
  });

  it("should render image tag", () => {
    const img = wrapper.find("img");

    expect(img).toHaveLength(1);
    expect(img.prop("alt")).not.toBeNull();
    expect(img.prop("className")).not.toBeNull();
    expect(img.prop("src")).not.toBeNull();
  });

});
