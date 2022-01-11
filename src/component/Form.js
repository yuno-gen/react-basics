import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            comments:''
        }
    }

    handleUserNameChange=(event)=>{
        this.setState({
            userName: event.target.value
        })
    }

    handleComments=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`${this.state.userName} ${this.state.comments}`)
        event.preventDefault();
    }
        
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type='text'
                            value = {this.state.userName}
                            onChange={this.handleUserNameChange}/>
                    </div>
                    <div>
                        <lable>Comments</lable>
                        <textarea
                            value = {this.state.comments}
                            onChange={this.handleComments}/>
                        
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}
