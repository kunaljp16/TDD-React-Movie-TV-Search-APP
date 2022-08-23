import React from "react";
import ContactUsOrganism from "../organisms/contactUsOrganism";
import LocationOrganism from "../organisms/locationOrganism/locationOrganism";

const ContactUsWrapperTemplate = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <h2>How to reach us</h2>
              <p>Lorem ipsum dolor sit amet, consetetur.</p>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <ContactUsOrganism />
            <LocationOrganism />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsWrapperTemplate;
