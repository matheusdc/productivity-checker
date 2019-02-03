import React, { Component } from 'react';

import About from './sections/About';
import Banner from './sections/Banner';
import Configuration from './sections/Configuration';
import Testimonial from './sections/Testimonial';

import './App.scss';

class App extends Component {
  state = {
    message: 'Are you productive right now?',
    timeInMinutes: 60,
    active: false
  };

  notifyUser = message => {
    return new Notification('Productivity Checker', {
      body: message
    });
  };

  setupNotificationAlerts = () => {
    const { timeInMinutes } = this.state;
    this.disableNotificationAlerts();
    this.setNofiticationAlert(timeInMinutes);
    this.setState({ active: true });
  };

  requestNotificationPermission = () => {
    return Notification.requestPermission();
  };

  setNofiticationAlert = () => {
    const { timeInMinutes, message } = this.state;
    const timeInMili = timeInMinutes * 60 * 1000;

    this.notifyUser('Preferences saved!');

    this.setState({ active: true });

    this.productivityAlertInterval = setInterval(() => {
      this.notifyUser(message);
    }, timeInMili);
  };

  disableNotificationAlerts = () => {
    clearInterval(this.productivityAlertInterval);
    this.setState({ active: false });
    this.notifyUser('Preferences saved!');
  };

  isAlertActive = () => {
    return this.state.active;
  };

  componentWillUnmount() {
    this.disableNotificationAlerts();
  }

  handleTimeUpdate = ({ target }) => {
    const { value } = target;
    this.setState({ timeInMinutes: value });
  };

  handleMessageUpdate = ({ target }) => {
    const { value } = target;
    this.setState({ message: value });
  };

  render() {
    this.requestNotificationPermission();

    return (
      <div className="App">
        <Banner
          setNofiticationAlert={this.setNofiticationAlert}
          disableNotificationAlerts={this.disableNotificationAlerts}
          isActive={this.state.active}
        />
        <About />
        <Configuration
          handleMessageUpdate={this.handleMessageUpdate}
          handleTimeUpdate={this.handleTimeUpdate}
          setNofiticationAlert={this.setNofiticationAlert}
          disableNotificationAlerts={this.disableNotificationAlerts}
        />
        <Testimonial />
      </div>
    );
  }
}

export default App;
