import "./Footer.css";
import getFullYear from "../utils"; //import default export.
import { getFooterCopy } from "../utils"; //import named export.
import "../Notifications";

import React from "react";

function Footer() {
  return (
    <>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default Footer;
