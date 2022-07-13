import "./app.scss";
import LogoAtom from "./atomicDesignComponents/atoms/logoAtom";
import logo from "./../src/assets/images/svg/LogoWhite.svg";

function App() {
  return (
    <div className="container">
      <LogoAtom src={logo} alt={"company logo"} />
    </div>
  );
}

export default App;
