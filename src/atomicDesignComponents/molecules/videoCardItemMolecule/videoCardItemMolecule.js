import "./videoCardItemMolecule.scss";

import DescriptionMolecule from "./../descriptionMolecule/descriptionMolecule";
import ImageTagAtom from "./../../atoms/imageTagAtom";
import CloseButtonAtom from "./../../atoms/closeButtonAtom/closeButtonAtom";

function VideoCardItemMolecule(props) {
    const { deleteVideoCardHandler, movie} = props;
    const { id, name, summary, image} = movie;
    const { medium} = image;
  return (
    <>
      <div
        key={props.movie.id}
        className="col-md-4 col-md-4 col-sm-6 position-relative mb-4 videoCardItemWrapper"
      >
        <CloseButtonAtom
          customClass={"btn-delete-custom"}
          deleteVideoCardHandler={deleteVideoCardHandler}
          id={id}
        />
        <ImageTagAtom
          src={medium}
          className="videoPicture w-100"
          alt={name}
        />
        <DescriptionMolecule
          name={name}
          summary={summary}
        />
      </div>
    </>
  );
}

export default VideoCardItemMolecule;
