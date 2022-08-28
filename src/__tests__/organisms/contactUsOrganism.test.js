import React from "react";
import { mount, shallow } from "enzyme";
import { Formik } from "formik";
import ContactUsOrganism from "./../../atomicDesignComponents/organisms/ContactUsOrganism/contactUsOrganism";
import { act } from "react-dom/test-utils";

describe("ContactUsOrganism", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ContactUsOrganism />);
  });

  it("should update first Name field on change", () => {
    const fName = wrapper.find("input[name='firstName']");
    act(() => {
      fName.simulate("change", {
        target: {
          name: "firstName",
          value: "test",
        },
      });
    });

    expect(fName.html()).toMatch("test");
  });

  it("should update last Name field on change", () => {
    const lName = wrapper.find("input[name='lastName']");
    act(() => {
      lName.simulate("change", {
        target: {
          name: "lastName",
          value: "last",
        },
      });
    });

    expect(lName.html()).toMatch("last");
  });

  it("should update email field on change", () => {
    const email = wrapper.find("input[name='email']");
    act(() => {
      email.simulate("change", {
        target: {
          name: "email",
          value: "test@email.com",
        },
      });
    });

    expect(email.html()).toMatch("test@email.com");
  });

  it("should update telephone field on change", () => {
    const telephone = wrapper.find("input[name='telephone']");
    act(() => {
      telephone.simulate("change", {
        target: {
          name: "telephone",
          value: "98665465454",
        },
      });
    });

    expect(telephone.html()).toMatch("98665465454");
  });

  xit("should update message field on change", () => {
    const message = wrapper.find("textarea");
    act(() => {
      message.simulate("change", {
        target: {
          name: "message",
          value: "Some test message",
        },
      });
    });

    expect(message.html()).toMatch("Some test message");
  });

  it("should update terms & conditions checkbox on click", () => {
    const checkbox = wrapper.find("input[name='terms']");
    act(() => {
      checkbox.simulate("click", {
        target: {
          checked: true,
        },
      });
    });

    expect(checkbox.html()).toBeTruthy();
  });
});
