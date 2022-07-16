import "./app.scss";
// import LogoAtom from "./atomicDesignComponents/atoms/logoAtom";
// import logo from "./../src/assets/images/svg/LogoWhite.svg";
import HeaderOrganism from "./atomicDesignComponents/organisms/headerOrganism";

function App() {
  return (
    <div className="container-fluid">
      <HeaderOrganism />
    </div>
  );
}

export default App;
