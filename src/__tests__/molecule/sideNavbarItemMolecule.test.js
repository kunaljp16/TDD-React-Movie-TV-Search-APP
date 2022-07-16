import React from "react";
import { shallow, mount } from "enzyme";
import SideNavbarItemMolecule from "../../atomicDesignComponents/molecules/sideNavbarItemMolecule/sideNavbarItemMolecule";

describe("SideNavbarItemMolecule", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideNavbarItemMolecule />);
    console.log(wrapper.debug());
  });

  it("should render aside element", () => {
    const ulTag = wrapper.find("aside");
    expect(ulTag.prop("className")).toEqual("sideNavSection undefined");
    expect(ulTag).toHaveLength(1);
  });

  it("should render CloseButton with a click handler", () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <SideNavbarItemMolecule onClickHandler={mockCallBack} />
    );
    wrapper.find('CloseButton').simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});
