import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Users from './components/Users'
import Developer from './components/DeveloperAdd'
import HomePage from './components/HomePage'

class App extends Component {
  state={
    users:[]
  }

  //get all of my users
  componentDidMount(){
    axios.get('/api/users').then(((res) => {
      this.setState({users: res.data.users})
    })).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React AJ Jimmy</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Users/>
      </div>
    );
  }
}

export default App;
