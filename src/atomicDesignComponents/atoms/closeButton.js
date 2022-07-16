function CloseButton(prop) {
 
  return (
    <>
      <button
        className="btn-close btn-close-white"
        aria-label="Close"
        onClick={prop.onClickHandler}
      ></button>
    </>
  );
}

export default CloseButton;
