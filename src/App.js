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
import CompanyMain from "./Company/Main";

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('email', 'daniel.orozco@mail.escuelaing.edu.co');
        localStorage.setItem('password', 'cosw2019');
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={Login}/>
                        <Route path="/assistance" component={Assistance}/>
                        <Route path="/access" component={Access}/>
                        <Route path="/userprofile" component={UserProfile}/>
                        <Route path="/enterprise/newmeeting" component={NewMeeting}/>
                        <Route path="/signup/user" component={signup}/>
                        <Route path="/schedule" component={schedule}/>
                        <Route path="/company/main" component={CompanyMain}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
