import React, { Component } from 'react';
import './App.css';
import {Login} from "./Login/Login";
import {Assistance} from "./Meeting/Assistance";

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
                    <Assistance/>
                </header>
            </div>
        );
    }
}

export default App;
