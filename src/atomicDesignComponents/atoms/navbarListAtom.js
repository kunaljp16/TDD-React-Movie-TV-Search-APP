function NavbarListAtom() {
  return (
    <>
      <ul className="navbar-nav text-uppercase">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Our Screens
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Schedule
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Movie Library
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Location &amp; Contact
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavbarListAtom;
