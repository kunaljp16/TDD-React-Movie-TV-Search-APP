import NavbarListAtom from "../../atoms/navbarListAtom";
import CloseButton from "../../atoms/closeButton";
import "./sideNavbarItemMolecule.scss";



function SideNavbarItemMolecule(prop) {
  // let [toggleStatus, setToggleStatus] = useState(false);
 

  // const toggleMenuForSideNav = () => {
  //   toggleStatus = !toggleStatus;
  //   return setToggleStatus(toggleStatus);
  // };

  return (
    <>
      <aside className="sideNavSection open">
        <CloseButton/>
        <NavbarListAtom />
      </aside>
    </>
  );
}

export default SideNavbarItemMolecule;
