import React from "react";

export default function CopyrightMolecule() {
  return (
    <>
      <section className="copyRightWrapper grayBg">
        <div className="copyRightOuterSec">
          <div className="copyRight container pt-3 pb-3">
            <div className="row">
              <div className="col-md-6 col-sm-12 text-md-start text-sm-center">
                <p className="m-0">
                  Copyright &copy; 2022 Amadeus Hotels. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-md-end text-sm-center">
                <p className="m-0">
                  Photos by <u>Felix Mooneeram</u> &amp; <u>Serge Kutuzov</u> on<u> Unsplash</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
