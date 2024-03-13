import React from "react";
import "./Notifications.css";
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
    let listItem;
  
    if (value) {
      listItem = <li data-notification-type={type}>{value}</li>;
    } else {
      listItem = (
        <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}> </li> 
      );
    }
  
    return listItem;
  }
  
  NotificationItem.defaultProps = {
    
    type: "default",
  }
  NotificationItem.propTypes = {
    __html: PropTypes.shape({
      html: PropTypes.string,}),
    value: PropTypes.string,
    type: PropTypes.string,
  }


  export default NotificationItem;