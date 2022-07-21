import "./inputAtom.scss";

function InputAtom(prop) {
  return (
    <>
      <input
        className={"form-control " + prop.customClass}
        type={prop.inputType}
        placeholder={prop.inputPlaceholder}
        aria-label={prop.areaLabel}
        autoComplete={prop.autoCompleteState}
      />
    </>
  );
}

export default InputAtom;
