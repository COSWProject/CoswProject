import React, { Component } from 'react';
import './App.css';
import Dashboard from './schedule/schedule';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route exact path="/Schedule" component={Dashboard} />
            </div>
          </Router>
        </header>

      </div>
    );
  }
}

export default App;
