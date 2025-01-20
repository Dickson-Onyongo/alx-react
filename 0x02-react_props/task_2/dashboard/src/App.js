import React from "react";
import Notification from "./Notifications.js";
import Login from "./Login/Login.js";
import Footer from "./Footer/Footer.js";
import Header from "./Header/Header.js";

function App() {
  return (
    <>
      <Notification />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
