import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { core, theme } from 'materialui-hua';

class App extends Component {
  render() {
    return (
      <div className="App">
      <core.MuiThemeProvider theme={theme} >
                <core.Button variant="contained" >
                    Default
                </core.Button>
                <core.Button variant="contained" color="primary" >
                    Primary
                </core.Button>
                <core.Button variant="contained" color="secondary" >
                    Secondary
                </core.Button>
                <core.Button variant="contained" color="secondary" disabled >
                    Disabled
                </core.Button>
                <core.Button variant="contained" href="#contained-buttons" >
                    Link
                </core.Button>                
      </core.MuiThemeProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Nice!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
      
    );
  }
}

export default App;
