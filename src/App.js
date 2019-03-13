import React, {Component} from 'react';
import './App.css';
import schedule from './schedule/schedule';
import Login from './Login/Login';
import signup from './UserSignUp/SignUp';
import {Assistance} from './Meeting/Assistance';
import {Access} from './Meeting/Access';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import UserProfile from "./userProfile/UserProfile";
import NewMeeting from "./Company/NewMeeting";
import CompanyProfile from "./Company/Profile";

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
                        <Route path="/confirm-assistance" component={Assistance}/>
                        <Route path="/meeting-access" component={Access}/>
                        <Route path="/UserProfile" component={UserProfile}/>
                        <Route path="/enterprise/newMeeting" component={NewMeeting}/>
                        <Route path="/Signup/user" component={signup}/>
                        <Route path="/schedule" component={schedule}/>
                        <Route path="/company/profile" component={CompanyProfile}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
