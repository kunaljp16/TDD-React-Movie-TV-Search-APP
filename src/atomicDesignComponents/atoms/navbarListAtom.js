import AnchorListData from "../../data/navbar-data";

function NavbarListAtom() {

  const linkListItems = AnchorListData.map((list) => (
    <li key={list.name} className={'nav-item'}>
      <a className="nav-link" href={list.url}>
        {list.name}
      </a>
    </li>
  ));

  return (
    <>
      <ul className={'navbar-nav text-uppercase'}>{linkListItems}</ul>
    </>
  );
}

export default NavbarListAtom;
