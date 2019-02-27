import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import EnterpriseSignUp from "./SignUp/EnterpriseSignUp";

class App extends Component {
    render() {

        const enterpriseView = () => (
            <EnterpriseSignUp/>
        );

        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <Route path="/enterpriseregister" component={enterpriseView}/>
                    </Router>
                </header>
            </div>
        );
    }
}

export default App;