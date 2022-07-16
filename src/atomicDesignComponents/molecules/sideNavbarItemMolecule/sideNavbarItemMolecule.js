import NavbarListAtom from "../../atoms/navbarListAtom";
import CloseButton from "../../atoms/closeButton";
import "./sideNavbarItemMolecule.scss";

function SideNavbarItemMolecule(prop) {

  return (
    <>
      <aside className={"sideNavSection " + prop.toggleStatusClass}>
        <CloseButton onClickHandler={prop.onClickHandler} />
        <NavbarListAtom />
      </aside>
    </>
  );
}

export default SideNavbarItemMolecule;
