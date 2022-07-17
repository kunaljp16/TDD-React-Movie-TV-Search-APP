import AnchorListData from "./../../data/navbar-data";

function NavbarListAtom(prop) {

  const linkListItems = AnchorListData.map((list) => (
    <li key={list.name} className={'nav-item  ' + prop.liStyle}>
      <a className="nav-link" href={list.url}>
        {list.name}
      </a>
    </li>
  ));

  return (
    <>
      <ul className={'navbar-nav text-uppercase ' + prop.ulStyle}>{linkListItems}</ul>
    </>
  );
}

export default NavbarListAtom;
