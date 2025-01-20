import logo from "../Holberton_Logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>School dashboard</h1>
      </header>
      <div />
      );
    </div>
  );
}
export default Header;
