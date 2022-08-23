import React from "react";
import AddressMolecule from "../../molecules/addressMolecule";
import SocialMediaMolecule from "../../molecules/socialMediaMolecule";
import CopyrightMolecule from "./../../molecules/copyrightMolecule/copyrightMolecule";
import './footerOrganism.scss'
const FooterOrganism = () => {
  return (
    <>
      <footer className="footerWrapper grayBg">
        <div className="footerOuterSec">
          <section className="footer container pt-4 pb-4 col-sm-6 text-sm-center">
            <div className="row justify-content-between">
              <AddressMolecule />
              <SocialMediaMolecule />
            </div>
          </section>
        </div>
        <CopyrightMolecule />
      </footer>
    </>
  );
};

export default FooterOrganism;
