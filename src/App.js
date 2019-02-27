import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NewMeeting from "./Enterprise/NewMeeting";

class App extends Component {
    render() {

        const newMeetingView = () => (
            <NewMeeting/>
        );

        return (
            <div className="App">
                <Router>
                    <Route path="/enterprise/newMeeting" component={newMeetingView}/>
                </Router>
            </div>
        );
    }
}

export default App;
