import React, { Component } from 'react';
import './App.css';
import {Login} from './Login/Login';
import {Assistance} from './Meeting/Assistance';
import {Access} from './Meeting/Access';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('email','escuela@escuelaing.edu.co');
        localStorage.setItem('password','cosw2019');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                  <Router>
                    <div>
                      <Route exact path="/" component={Login} />
                      <Route path="/Assistance" component={Assistance}/>
                      <Route path="/Access" component={Access} />
                    </div>
                  </Router>
                </header>
            </div>
        );
    }
}

export default App;
