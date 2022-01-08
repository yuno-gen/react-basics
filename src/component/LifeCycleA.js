import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ayush'
        }
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render')
        return (
            <div>
                { this.state.name }
            </div>
        )
    }
}

export default LifeCycleA
