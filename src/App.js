import React, {Component} from 'react';
import './App.css';
import schedule from './schedule/schedule';
import Login from './Login/Login';
import {Assistance} from './Meeting/Assistance';
import Access from './Meeting/Access';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import UserProfile from "./userProfile/UserProfile";
import NewMeeting from "./Company/NewMeeting";
import CompanyProfile from "./Company/Profile";
import CompanyMeetings from "./Company/Meetings";

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
                        <Route path="/confirm-assistance" component={Assistance}/>
                        <Route path="/meeting-access" component={Access}/>
                        <Route path="/user-profile" component={UserProfile}/>
                        <Route path="/enterprise/newMeeting" component={NewMeeting}/>
                        <Route path="/schedule" component={schedule}/>
                        <Route path="/company/profile" component={CompanyProfile}/>
                        <Route path="/company/meetings" component={CompanyMeetings}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
