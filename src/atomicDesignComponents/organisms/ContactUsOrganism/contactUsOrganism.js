import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./contactUsOrganism.scss";

const ContactUsOrganism = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        message: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        terms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="col-lg-5 col-md-12 col-sm-12 contactUs">
        <Form noValidate id="contactUsForm">
          <div className="row">
            <div className="col-md-6">
              <label className="form-label">
                Name<sup>*</sup>
              </label>
              <Field data-testid="firstName" name="firstName" type="text" className="form-control" />
              <ErrorMessage component="span" name="firstName" />
            </div>
            <div className="col-md-6 mt-sm-4 mt-md-0 mt-xs-4">
              <label className="form-label">
                Last Name<sup>*</sup>
              </label>
              <Field data-testid="lastName" name="lastName" type="text" className="form-control" />
              <ErrorMessage component="span" name="lastName" />
            </div>
          </div>
          <div className="row mt-4 mt-xs-4">
            <div className="col-md-12">
              <label className="form-label">
                Email<sup>*</sup>
              </label>
              <Field data-testid="email" name="email" type="email" className="form-control" />
              <ErrorMessage component="span" name="email" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label className="form-label">Telephone</label>
              <Field
                name="telephone"
                type="telephone"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 terms">
              <span className="d-block">
                <sup>*</sup> required fields
              </span>
              <div className="d-block mt-3">
                <Field
                  name="terms"
                  type="checkbox"
                  className="me-3 form-check-input"
                />
                <label>I agree to the Terms &amp; Conditions</label>
                <ErrorMessage component="div" name="terms" />
              </div>
              <span className="d-block text-end mt-4">
                <button data-testid="submit" type="submit" className="btn btn-warning">
                  SUBMIT
                </button>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactUsOrganism;
