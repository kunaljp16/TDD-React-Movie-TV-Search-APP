import React from "react";
import ImageTagAtom from "./../atoms/imageTagAtom";
import TwitterIcon from "./../../assets/images/svg/TwitterWhite.svg";
import YouTubeIcon from "./../../assets/images/svg/YoutubeWhite.svg";

const SocialMediaMolecule = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 text-md-end text-sm-center">
        <span className="pe-3"> Follow us on </span>
        <span className="pe-3">
          <a href="#">
            <ImageTagAtom src={TwitterIcon} alt={"Twitter"} classNameName="" />
          </a>
        </span>
        <span>
          <a href="#">
            <ImageTagAtom src={YouTubeIcon} alt={"Youtube"} classNameName="" />
          </a>
        </span>
      </div>
    </>
  );
};

export default SocialMediaMolecule;
