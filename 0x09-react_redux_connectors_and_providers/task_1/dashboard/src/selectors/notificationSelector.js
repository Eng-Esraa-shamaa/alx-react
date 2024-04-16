export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.get('notifications');


export const getUnreadNotifications = state => {
    const notifications = state.get('notifications');
    if (!notifications) return Map(); // Return an empty Map if notifications are not available
    return notifications.filter(notification => !notification.get('isRead'));
  }; 
