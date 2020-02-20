import React, { Component } from 'react';

import Navigation from './navigation';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <h1>HELLO WORLD</h1>
      </div>
    );
  }
}
