import logo from "./Holberton_Logo.jpg";
import "./App.css";
import getFullYear from "./utils"; //import default export.
import { getFooterCopy } from "./utils"; //import named export.
import "./Notifications";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Log in form*/}
        <form>
          <label forhtml="email">Email:</label>
          <input type="email" id="email" name="email"></input>

          <label forhtml="password">password:</label>
          <input type="password" id="password"></input>

          <button type="submit">Ok</button>
        </form>
      </div>

      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}
