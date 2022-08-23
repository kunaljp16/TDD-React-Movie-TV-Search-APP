import "./descriptionMolecule.scss";

function DescriptionMolecule(props) {
  return (
    <>
      <div className="description">
        <h4 className="mt-2">{props.name}</h4>
        <span className="summary" dangerouslySetInnerHTML={{__html: props.summary}}></span>
      </div>
    </>
  );
}

export default DescriptionMolecule;
