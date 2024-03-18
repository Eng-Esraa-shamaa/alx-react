
import React from "react";
import closeicon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Notifications:{
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    zIndex: "1",
    right: "0",
    top: "33px",
    width: "30vw",
    },
  
    'li[data-notification-type="default"]': {
      color: "blue",
    },
  
    "li[data-urgent]": {
      color: "red",
    },
  
    '[data-notification-type="urgent"]': {
      color: "red",
    },
    menuItem :{
      textAlign: "right"
    },
    button: {
        color: '#3a3a3a',
        fontWeight: 'bold',
        background: 'none',
        border: 'none',
        fontSize: '15px',
        position: 'absolute',
        right: '3px',
        top: '3px',
        cursor: 'pointer',
        outline: 'none',
    }
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevListLength: 0 // Track the previous length of listNotifications
    };
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  // Implement shouldComponentUpdate to optimize rendering
  shouldComponentUpdate(nextProps, nextState) {
    // Only update if the length of listNotifications increases
    return nextProps.listNotifications.length > this.state.prevListLength;
  }

  // Update prevListLength after rendering
  componentDidUpdate(prevProps) {
    if (prevProps.listNotifications !== this.props.listNotifications) {
      this.setState({ prevListLength: prevProps.listNotifications.length });
    }
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {this.props.displayDrawer ? 
            <div className={css(styles.Notifications)}>
              <button className={css(styles.button)}              aria-label="Close"
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
              >
                <img src={closeicon} alt="close icon" width="15px" />
              </button>
              {
                this.props.listNotifications.length !== 0 ?
                  <p>Here is the list of notifications</p>
                : null
              }
              <ul>
                {
                  this.props.listNotifications.length === 0 ?
                    <NotificationItem type="default" value="No new notification for now"  />
                  : null
                }
                {
                  this.props.listNotifications.map((val, idx) => (
                    <NotificationItem
                      type={val.type}
                      value={val.value}
                      html={val.html}
                      key={val.id}
                      markAsRead={this.markAsRead}
                      id={val.id}
                    />
                  ))
                }
              </ul>
            </div>
          :
            null
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
