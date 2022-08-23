import React from "react";

const CarouselItemMolecule = (props) => {
  return (
    //  src={props.imageSrc}
    <>
      <div className="carousel-item ">
        <img
          src={props.data.img}
          alt={props.data.alt}
          className="d-block w-100"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>{props.data.title}</h5>
          <p>{props.data.description} </p>
        </div>
      </div>
    </>
  );
};

export default CarouselItemMolecule;
