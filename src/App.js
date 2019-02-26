import React, { Component } from 'react';
import './App.css';
import {Login} from "./Login/Login";

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
                    <Login/>
                </header>
            </div>
        );
    }
}

export default App;