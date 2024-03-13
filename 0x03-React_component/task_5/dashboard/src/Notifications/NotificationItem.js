import React from "react";
import "./Notifications.css";
import PropTypes from 'prop-types';


{/*function NotificationItem({ type, html, value }) {
  return (
    value ? 
    <li
    data-notification-type={type}
    >{value}</li> 
    :
    <li
    data-notification-type={type}
    dangerouslySetInnerHTML={html}
    ></li> 
  );
}

NotificationItem.defaultProps = {
  type: 'default'
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default NotificationItem;*/}
{/*class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.value ? 
      <li
      data-notification-type={this.props.type}
      onClick={() => this.props.markAsRead(this.props.id)}
      >{this.props.value}</li> 
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      onClick={() => {console.log('empty func');}}
      ></li>
    );
  }
}*/}
const NotificationItem = React.memo(({ html, type, value, markAsRead, id }) => {
  return (
    value ? (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    ) : (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => {console.log('empty func');}}
      ></li>
    )
  );
});

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {console.log('empty func');},
	id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;