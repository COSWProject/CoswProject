import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import EnterpriseSignUp from "./SignUp/EnterpriseSignUp";

class App extends Component {
    render() {

        const enterpriseView = () => (
            <EnterpriseSignUp/>
        );

        return (
            <div className="App">
                <Router>
                    <Route path="/enterprise/register" component={enterpriseView}/>
                </Router>
            </div>
        );
    }
}

export default App;