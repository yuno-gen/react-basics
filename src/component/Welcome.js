import React, { Component } from 'react';
import { Button } from '@mui/material';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }    

    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome {this.props.name}</div>
        }

        return (
            <div>
                <Button 
                    variant='contained' 
                    onClick={() => {this.setState({isLoggedIn: true})}}>
                    Login
                </Button>
                <div>Please Login</div>
            </div>
        )
    }
}
