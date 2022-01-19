import React, { Component } from 'react'
import { UserConsumer } from '../UserContext'

export class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return <div>Hello from component E - {user.firstName} {user.lastName}</div>
                }}
            </UserConsumer>
        )
    }
}

export default ComponentE
