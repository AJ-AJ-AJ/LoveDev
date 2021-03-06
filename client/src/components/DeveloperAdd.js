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
                console.log('data', res.data)
                this.setState({
                    user: res.data.user,
                    developers: res.data
                })
            })
    }

    deleteUser =() =>{
        const userId = this.state.user._id
        axios.delete(`/users/${userId}`)
        .then(res => {
            console.log('This is Working')
            this.props.history.push('/users')
        }) 
    }


    createDeveloper = () => {
        const userId = this.props.match.params.userId
        console.log('user id', userId)
        axios.post(`/users/${userId}/developer`)
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
        const newDev = newDevs.find(developer => developer._id === devId)
        console.log(newDev)
        const inputValue = event.target.name
        const userInput = event.target.value

        newDev[inputValue] = userInput

        this.setState({ developers: newDevs })

    }

    render() {
        return (
            <div>
                <h2 className='postDev'>Welcome <span className='toBlue'>{this.state.user.username}</span>! Post a new developer</h2>
                <button onClick={this.deleteUser}>Delete Your Account</button>
                <button onClick={this.createDeveloper}>Create A Dev</button>
            </div>
        )
    }

}

export default Developer