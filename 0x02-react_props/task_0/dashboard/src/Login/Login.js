import "./Login.css";

import React from "react";

function Login() {
  return (
    <>
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
    </>
  );
}

export default Login;
