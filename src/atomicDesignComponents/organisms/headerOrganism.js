import LogoAtom from "../atoms/logoAtom";
import NavbarListAtom from "../atoms/navbarListAtom";
import Logo from "./../../assets/images/svg/LogoWhite.svg";
import ToggleMenuButton from "../atoms/toggleMenuButton/toggleMenuButton";
import SideNavbarItemMolecule from "../molecules/sideNavbarItemMolecule/sideNavbarItemMolecule";
import React, { useState } from "react";
import "./headerOrganism.scss";

function HeaderOrganism() {
  let [isMenuToggleOn, setIsMenuToggleOn] = useState(true);

  const toggleMenuForSideNavbar = () => {
    isMenuToggleOn = !isMenuToggleOn;
    alert(isMenuToggleOn);
    return setIsMenuToggleOn(isMenuToggleOn);
  };

  return (
    <>
      <div className="header-organism container-fluid">
        <div className="container ">
          <nav className="navbar navbar-dark">
            <a className="navbar-brand" href="#">
              <LogoAtom src={Logo} alt={"company logo"} />
            </a>
            <div className="collapse navbar-collapse">
              <NavbarListAtom />
            </div>
            <ToggleMenuButton  onClickHandler={toggleMenuForSideNavbar}/>
          </nav>
          <SideNavbarItemMolecule
            toggleStatusClass={isMenuToggleOn ? "open" : "close"}
            onClickHandler={toggleMenuForSideNavbar}
          />
        </div>
      </div>
    </>
  );
}

export default HeaderOrganism;
