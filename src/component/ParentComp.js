import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ayush"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ayush1'
            })
        }, 2000)
    }
    
    render() {
        console.log('parent comp')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}
