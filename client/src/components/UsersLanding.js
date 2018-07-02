import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Users extends Component {
    state = {
        username: '',
        password: '',
        users: []
    }

    getInput = (event) => {
        const inputValue = event.target.name
        const userInput = event.target.value

        const newState = { ...this.state }
        //set the key's value equal to what the user typed in 
        newState[inputValue] = userInput
        this.setState(newState)

    }

    whenSubmit = (event) => {
        event.preventDefault()
        axios.post('/users', this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    componentDidMount() {
        axios.get('/users').then(((res) => {
          this.setState({ users: res.data.user })
        console.log(res.data)
        })).catch((err) => {
          console.log(err)
        })
      }

    render() {
        return (
            <div>
                <h2 className="userHeading">Choose a User</h2>
                {this.state.users.map((user) => {
                    return (
                        <Link style={{ textDecoration: 'none' }} key={user._id} to={`/users/${user._id}`}> {user.username} <br/><br/></Link>
                    )
                    
                })}
                <h2 className="userHeading">Create New Account</h2>
                <form onSubmit={this.whenSubmit}>
                    <input
                        placeholder='username'
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.getInput}
                    />
                    <input
                        placeholder='password'
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.getInput}
                    />
                    <br/>
                    <button type='submit'>Create!</button>
                    </form>
            </div>
                )
            }
        }
        
export default Users