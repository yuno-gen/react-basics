import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <h1>
                Welcome, {this.props.name} aka {this.props.heroName}!
            </h1>
        )
    }
}
