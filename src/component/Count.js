import { Button } from '@mui/material';
import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.incrementByFive = this.incrementByFive.bind(this);
    }

    incrementCounter() {
        // this.setState({ count: this.state.count +1 });
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {});       
    }

    incrementByFive() {
        this.setState((prevState, props) => ({
            count: prevState.count + 5
        }), () => {});
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <div>
                    <Button onClick={this.incrementCounter} variant="contained">
                        Increment
                    </Button>
                    <Button onClick={this.incrementByFive} variant="contained">
                        Increment By 5
                    </Button>
                </div>
            </div>
        )
    }
}


export default Count;