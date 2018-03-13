import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import runtimeEnv from '@mars/heroku-js-runtime-env';

class App extends Component {
  render() {
    // Load the env object.
    const env = runtimeEnv();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <code>Runtime env var example: { env.REACT_APP_HELLO }</code>
        </p>
      </div>
    );
  }
}

export default App;
