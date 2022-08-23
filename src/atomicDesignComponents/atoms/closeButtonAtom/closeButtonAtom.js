import "./closeButtonAtom.scss";

function CloseButtonAtom(props) {
  const id = props.id;
  return (
    <>
      <button
        className={"btn-close btn-close-white " + props.customClass}
        aria-label="Close"
        onClick={() => props.deleteVideoCardHandler(id)}
      ></button>
    </>
  );
}

export default CloseButtonAtom;
