function ImageTagAtom(props) {
  return (
    <>
      <img src={props.src} className={props.className} alt={props.alt} />
    </>
  );
}

export default ImageTagAtom;
