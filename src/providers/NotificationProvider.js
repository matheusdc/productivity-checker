import React, { Component, createContext } from 'react';

export const PRODUCTIVIY_CHECKER_KEY = 'PRODUCTIVIY_CHECKER_CONFIG';

export const NotificationContext = createContext();

export default class NotificationProvider extends Component {
  state = {
    message: 'Are you productive right now?',
    intervalInMinutes: 60,
    active: false
  };

  componentDidMount() {
    this.loadFromLocalStorage(() => {
      this.setIntervalNotification();
    });
  }

  componentWillUnmount() {
    this.disableNotifications();
  }

  sendNotification = message => {
    this.requestNotificationPermission();

    return new Notification('Productivity Checker', {
      body: message
    });
  };

  disableNotifications = () => {
    clearInterval(this.notificationInterval);
    this.setState({ active: false }, this.persistToLocalStorage);
    this.sendNotification('Notifications disabled');
  };

  enableNotifications = () => {
    this.setState({ active: true }, this.persistToLocalStorage);
    this.setIntervalNotification();
    this.sendNotification('Notifications enabled');
  };

  setIntervalNotification = () => {
    const { intervalInMinutes, message } = this.state;
    const intervalInMili = intervalInMinutes * 60 * 1000;

    this.notificationInterval = setInterval(() => {
      this.sendNotification(message);
    }, intervalInMili);
  };

  requestNotificationPermission = callback => {
    const { permission } = Notification;
    if (permission === 'denied' || permission === 'default') {
      Notification.requestPermission(callback);
    }
  };

  persistToLocalStorage = () => {
    const config = JSON.stringify(this.state);
    localStorage.setItem(PRODUCTIVIY_CHECKER_KEY, config);
  };

  loadFromLocalStorage = callback => {
    const config = localStorage.getItem(PRODUCTIVIY_CHECKER_KEY);
    const state = JSON.parse(config);
    this.setState({ ...state }, callback);
  };

  areNotificationsActive = () => {
    return this.state.active;
  };

  getNotificationPreferences = () => {
    const { message, intervalInMinutes } = this.state;
    return { message, intervalInMinutes };
  };

  setNotificationPreferences = settings => {
    this.setState({ ...settings });
  };

  render() {
    const notification = {
      enableNotifications: this.enableNotifications,
      disableNotifications: this.disableNotifications,
      areNotificationsActive: this.areNotificationsActive,
      setNotificationPreferences: this.setNotificationPreferences,
      getNotificationPreferences: this.getNotificationPreferences
    };

    return (
      <NotificationContext.Provider value={notification}>
        {this.props.children}
      </NotificationContext.Provider>
    );
  }
}
