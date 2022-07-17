import "./closeButton.scss";

function CloseButton(prop) {
  return (
    <>
      <button
        className="btn-close btn-close-white btn-close-custom"
        aria-label="Close"
        onClick={prop.onClickHandler}
      ></button>
    </>
  );
}

export default CloseButton;
