import React, { Component } from "react";


class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Subscriber"
        })
    }


    render() {
        return (
            <div>
                <h1>Welcome {this.state.message}</h1>
                <button onClick={
                    () => this.changeMessage()
                }>Subscribe</button>
            </div>
        )
    }
}

export default Message;