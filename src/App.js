import React, {Component} from 'react';
import './App.css';
import schedule from './schedule/schedule';
import {Login} from './Login/Login';
import signup from './UserSignUp/SignUp';
import {Assistance} from './Meeting/Assistance';
import {Access} from './Meeting/Access';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import UserProfile from "./userProfile/UserProfile";
import EnterpriseSignUp from "./Company/SignUp";
import NewMeeting from "./Company/NewMeeting";
import CompanyMain from "./Company/Main";

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('email', 'escuela@escuelaing.edu.co');
        localStorage.setItem('password', 'cosw2019');
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Login}/>
                        <Route path="/Assistance" component={Assistance}/>
                        <Route path="/Access" component={Access}/>
                        <Route path="/UserProfile" component={UserProfile}/>
                        <Route path="/enterprise/newMeeting" component={NewMeeting}/>
                        <Route path="/Signup/user" component={signup}/>
                        <Route exact path="/Schedule" component={schedule}/>
                        <Route path="/company" component={CompanyMain}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
