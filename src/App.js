import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import Header from "./js/components/Header";

class App extends Component {
    constructor() {
        super();
        this.state = {name: "SomeApp"};
    }


    render() {
        /*setTimeout(() => {
            this.setState({name: this.state.name == "SomeApp" ? "React" : "SomeApp"});
        }, 1000)*/
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to {this.state.name}</h2>
                    <Header title={"title"} />
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
        App.propTypes = {simutation: propTypes.string}
    }
}

export default App;
