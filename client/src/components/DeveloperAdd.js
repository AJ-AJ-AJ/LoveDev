import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Developer extends Component {
    state = {
        user: {},
        developers: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId

        axios.get(`/users/${userId}`)
            .then((res) => {
                this.setState({
                    user: res.data.user,
                    developers: res.data.user.developers
                })
            })
    }
    createDeveloper = () => {
        const userId = this.props.match.params.userId

        axios.post(`/users/${userId}/ideas`)
            .then((res) => {
                this.setState({
                    user: res.data.user,
                    developers: res.data.user.developers
                })
            })
    }

    updateDeveloper = (devId) => {
        const userId = this.props.match.params.userId
        const sendDeveloper = this.state.developers.find(developer => developer._id === devId)
        axios.patch(`/users/${userId}/developers/${devId}`, sendDeveloper)
            .then((res) => {
                this.setState({
                    user: res.data.user,
                    developers: res.data.user.developers
                })
            })
    }

    deleteDeveloper = (devId) => {
        const userId = this.props.match.params.userId
        axios.delete(`/users/${userId}/develoeprs/${devId}`)
        .then((res) => {
            this.setState({
                user: res.data.user,
                developers: res.data.user.developers
            })
        })
    }

    processChanges = (event, devId) => {
        console.log(devId)
        const newDevs = [...this.state.developers]
        const newDev = newDevs.find( developer => developer._id === devId)
        console.log(newDev)
        const inputValue = event.target.name
        const userInput = event.target.value

        newDev[ inputValue ] = userInput

        this.setState({ developers: newDevs})

    }

    render() {
        return (
            <div>
                <h2>Welcome {this.state.user.username}! Post a new developer</h2>
                <button onClick={this.createDeveloper}>Create</button>
            </div>
        )
    }
}

export default Developer