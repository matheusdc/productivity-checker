import React, { Component } from 'react';

import About from './sections/About';
import Banner from './sections/Banner';
import Configuration from './sections/Configuration';
import Testimonial from './sections/Testimonial';

import './App.scss';
import NotificationProvider from './providers/NotificationProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationProvider>
          <Banner />
          <About />
          <Configuration />
        </NotificationProvider>
        <Testimonial />
      </div>
    );
  }
}

export default App;
