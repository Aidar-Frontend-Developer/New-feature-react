import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle'
import Portal from './Portal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show/Hide</button>
              <Portal>
                {on && <h1>Hello. I'am from portal</h1>}
              </Portal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;