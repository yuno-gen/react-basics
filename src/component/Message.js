import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome Back!"
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        this.setState({ message: "Thank you for subscribing" })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Button                   
                    onClick={this.changeMessage}
                    variant="contained"
                >
                    Clear Message
                </Button>   
            </div>
        )
    }
}

export default Message;