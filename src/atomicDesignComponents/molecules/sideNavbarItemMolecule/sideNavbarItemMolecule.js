import NavbarListAtom from "../../atoms/navbarListAtom";
import CloseButton from "./../../atoms/closeButton/closeButton";
import "./sideNavbarItemMolecule.scss";

function SideNavbarItemMolecule(prop) {
  return (
    <>
      <aside className={"sideNavSection " + prop.toggleMenuStatusClass}>
        <CloseButton onClickHandler={prop.onClickHandler} customClass={'btn-close-custom'}/>
        <NavbarListAtom ulStyle="mt-5" />
      </aside>
    </>
  );
}

export default SideNavbarItemMolecule;
