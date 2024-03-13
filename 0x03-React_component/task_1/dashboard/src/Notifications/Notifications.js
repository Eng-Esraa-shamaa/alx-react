import React from "react";
import "./Notifications.css";
import closeicon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";



{/*export default function Notifications({displayDrawer, listNotifications}) {
  console.log("Number of notifications:", listNotifications.length);
  return (
    <React.Fragment>
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
      {listNotifications.length === 0 ? 
        <NotificationItem value="No new notification for now" />
         : listNotifications.map((id, type, value, html) => {
        <NotificationItem key={id} type={type} value={value} html={html} />
        })} 

      
      </ul>
    
    </div>
    )}
    </>
    </React.Fragment>
  );
}*/}
export default function Notifications({ displayDrawer, listNotifications }) {
  console.log('Rendering Notifications. displayDrawer:', displayDrawer);
  console.log('listNotifications:', listNotifications);
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="'flex-area'">
          <div className="menuItem">
            Your notifications
          </div>
          <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(({ id, type, value, html }) => (
                  <>
                    <NotificationItem key={id} type={type} value={value} html={html} />
                  </>
                ))
              ) : (
                <div className="">
                  <NotificationItem value="No new notification for now" />
                  <button
                    style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                    aria-label="Close"
                    onClick={console.log("Close button has been clicked")}
                  >
                    <img src={closeicon} alt="closeIcon" width="10px" />
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          Your notifications
        </div>
      )}
    </React.Fragment>
  );
}



Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};
NotificationItem.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
