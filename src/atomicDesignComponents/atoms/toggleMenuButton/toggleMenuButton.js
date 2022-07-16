import "./toggleMenuButton.scss";

function ToggleMenuButton(prop) {
  return (
    <>
      <button className="border-0 navbar-toggler" onClick={prop.onClickHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
}

export default ToggleMenuButton;
