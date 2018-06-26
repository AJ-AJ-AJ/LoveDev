import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';
import Users from './components/UsersLanding'
import Developer from './components/DeveloperAdd'
import HomePage from './components/HomePage'

class App extends Component {
  state = {
    users: []
  }

  //get all of my users
  componentDidMount() {
    axios.get('/api/users').then(((res) => {
      this.setState({ users: res.data.users })
    })).catch((err) => {
      console.log(err)
    })
  }

  //wrap your UsersLanding in a wrapper to pass in the users props in a clean way
  render() {

    const UsersWrapper = (props) => (
      <Users users={this.state.users}{...props} />
    )

    return (
      <Router>
        <div>
          <div>
            <Link to='/'>
              Home
              </Link>
            <Link to='usersLogin'>
              Get Started
              </Link>
          </div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/usersLogin' component={UsersWrapper} />
            <Route exact path='/users/:userId' component={Developer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
