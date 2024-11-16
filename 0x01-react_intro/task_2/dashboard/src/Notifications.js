import React from "react";
import "./Notifications.css";
import "./utils";
import "./close-icon.png";
import { buttonClick } from "./utils";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=close"
/>;
export default function notification() {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li>
            <strong>Urgent requirement</strong> - complete by EOD
          </li>
        </ul>

        <button
          onClick={buttonClick}
          style={{
            position: "absolute",
            top: "10px",
            right: 10,
          }}
          aria-label="Close"
        >
          <img src={"closeIcon"} alt="" />
        </button>
      </div>
    </>
  );
}
