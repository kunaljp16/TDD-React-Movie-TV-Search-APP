import LogoAtom from "../../atoms/logoImageAtom";
import NavbarListAtom from "./../../atoms/navbarListAtom";
import Logo from "./../../../assets/images/svg/LogoWhite.svg";
import MenuWhite from "./../../../assets/images/svg/MenuWhite.svg";
import ImageTagAtom from "./../../atoms/imageTagAtom";
import "./headerOrganism.scss";

function HeaderOrganism() {
  return (
    <>
      <div className="header-organism container-fluid">
        <div className="container "></div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <LogoAtom src={Logo} alt={"company logo"} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <ImageTagAtom
                src={MenuWhite}
                alt={"toggle Menu"}
                className={""}
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <NavbarListAtom />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderOrganism;
