import React, { Component } from 'react';
import './App.css';
import {Login} from './Login/Login';
import signup from './UserSignUp/SignUp';
import {Assistance} from './Meeting/Assistance';
import {Access} from './Meeting/Access';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import UserProfile from "./userProfile/UserProfile";
import EnterpriseSignUp from "./Enterprise/SignUp";
import NewMeeting from "./Enterprise/NewMeeting";

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
                      <Route path="/UserProfile" component={UserProfile}/>
                      <Route path="/enterprise/register" component={EnterpriseSignUp}/>
                      <Route path="/enterprise/newMeeting" component={NewMeeting}/>
                      <Route path="/Signup/user" component={signup}/>
                    </div>
                  </Router>
                </header>
            </div>
        );
    }
}

export default App;
