function ImageAtom(prop) {
  return (
    <>
      <img src={prop.imageSrc} className={prop.customClass} alt={prop.altText} />
    </>
  );
}

export default ImageAtom;
