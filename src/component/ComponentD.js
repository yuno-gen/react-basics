import React, { Component } from 'react'
import UserContext from '../UserContext';
import ComponentE from './ComponentE'

export class ComponentD extends Component {    
    static contextType = UserContext
    render() {
        return (
            <div>
                Component D Context - {this.context}
                <ComponentE />
            </div>
        )
    }
}

export default ComponentD
