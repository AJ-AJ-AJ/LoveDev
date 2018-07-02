import React, { Component } from 'react'

class HomePage extends Component {
    render() {
        return (
            <div className="homeText">
                <h1 className="love">LoveDev</h1>
                <h3>Create <span>Share</span> Inspire </h3>

                <div className="boxHolder">
                    <div className="bigBox"></div>
                    <div className="bigBox"></div>
                    <div className="bigBox"></div>
                </div>

            </div>
        )
    }
}

export default HomePage