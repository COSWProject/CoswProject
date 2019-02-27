import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Router>
                        <Route path="enterpriseregister"/>
                    </Router>
                </header>
            </div>
        );
    }
}

export default App;
