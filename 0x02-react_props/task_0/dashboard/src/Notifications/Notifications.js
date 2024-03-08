import React from "react";
import "../Notifications/Notifications.css";
import closeicon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
  return (
    <div className="Notifications">
      
      <button aria-label="close" 
      style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
      onClick={console.log("Close button has been clicked")}>
        <img src={closeicon} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
