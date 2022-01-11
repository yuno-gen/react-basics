import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            comments: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleComments = this.handleComments.bind(this);
    }

    handleSubmit(event) {
        alert(`${this.state.userName} ${this.state.comments}`);
        event.preventDefault();
    }

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        });
    }

    handleComments(event) {
        this.setState({
            comments: event.target.value
        });        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} target=''>
                <div>
                    <label>Username: </label>
                    <input
                      type='text'
                      value={this.state.userName}
                      onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label>Comments:  </label>
                    <textarea
                      type='text'
                      value={this.state.comments}
                      onChange={this.handleComments}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
