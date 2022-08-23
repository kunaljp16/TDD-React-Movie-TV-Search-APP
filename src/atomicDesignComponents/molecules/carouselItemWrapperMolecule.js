import React from "react";
import CarouselItemMolecule from "./../molecules/carouselItemMolecule";
import carouselItemData from "./../../data/carousel-data";

const CarouselItemWrapperMolecule = () => {
  const carouselItem = carouselItemData.map((item, index) => (
    <CarouselItemMolecule key={index} data={item} />
  ));
  return <>{carouselItem}</>;
};

export default CarouselItemWrapperMolecule;
