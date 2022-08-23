import React from "react";

const ContactUsOrganism = () => {
  return (
    <>
      <div className="col-lg-5 col-md-12 col-sm-12 contactUs">
        <form noValidate>
          <div className="row">
            <div className="col-md-6">
              <label className="form-label">
                Name<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
                v-model="state.name"
                aria-required="true"
              />
              <span className="error"></span>
            </div>
            <div className="col-md-6 mt-sm-4 mt-md-0 mt-xs-4">
              <label className="form-label">
                Last Name<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                v-model="state.lastName"
                aria-required="true"
              />
              <span className="error"></span>
            </div>
          </div>
          <div className="row mt-4 mt-xs-4">
            <div className="col-md-12">
              <label className="form-label">
                Email<sup>*</sup>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                v-model="state.email"
                aria-required="true"
              />
              <span className="error"></span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label className="form-label">Telephone</label>
              <input
                type="telephone"
                className="form-control"
                id="telephone"
                aria-describedby="telephone"
                v-model="state.telephone"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                v-model="state.message"
              ></textarea>
              <span className="error" v-if="v$.message.$error"></span>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 terms">
              <span className="d-block">
                <sup>*</sup> required fields
              </span>
              <div>
                <span className="d-block mt-3">
                  <input
                    className="me-3 form-check-input"
                    type="checkbox"
                    value=""
                    id="termsAndConditions"
                  />
                  <label>
                    I agree to the
                    <a href="#">
                      <u>Terms &amp; Conditions</u>
                    </a>
                  </label>
                </span>
              </div>
              <span className="d-block text-end mt-4">
                <button type="submit" className="btn btn-warning">
                  SUBMIT
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsOrganism;
