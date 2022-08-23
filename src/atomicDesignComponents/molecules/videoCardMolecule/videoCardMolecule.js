import "./videoCardMolecule.scss";
import videoCardImg from "./../../../assets/images/Batman.jpg";
import DescriptionMolecule from "./../descriptionMolecule/descriptionMolecule";
import ImageTagAtom from "./../../atoms/imageTagAtom";
import CloseButtonAtom from "./../../atoms/closeButtonAtom/closeButtonAtom";
import { useState } from "react";

function VideoCardMolecule(props) {
  const favorites = props.favoritesCollection;

  const favoritesItem = favorites.map((movie) => {
    return (
      <div
        key={movie.id}
        className="col-md-4 col-md-4 col-sm-6 position-relative mb-4 videoCardWrapper"
      >
        <CloseButtonAtom
          customClass={"btn-delete-custom"}
          deleteVideoCardHandler={props.deleteVideoCardHandler}
          id={movie.id}
        />
        <ImageTagAtom
          src={movie.image.medium}
          className="videoPicture w-100"
          alt={movie.name}
        />
        <DescriptionMolecule name={movie.name} summary={movie.summary} />
      </div>
    );
  });

  return <>{favoritesItem}</>;
}

export default VideoCardMolecule;
