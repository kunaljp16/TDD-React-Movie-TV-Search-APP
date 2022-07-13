import Logo from "./../../assets/images/svg/LogoWhite.svg";

function LogoAtom() {
  return (
    <>
      <a className="navbar-brand" href="#">
        <img src={Logo} alt={"Logo"} />
      </a>
    </>
  );
}

export default LogoAtom;
