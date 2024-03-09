import React from "react";
import "./Notifications.css";
import closeicon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';

export default function Notifications({displayDrawer}) {
  return (
    <>
    <div className="menuItem">
    Your notifications
    </div>
    {displayDrawer &&
    (<div className="Notifications">
      
      <button aria-label="close" 
      style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
      onClick={console.log("Close button has been clicked")}>
        <img src={closeicon} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />

      </ul>
    </div>)}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};
NotificationItem.defaultProps = {
  displayDrawer: false
};