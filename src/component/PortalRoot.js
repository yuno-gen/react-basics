import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class PortalRoot extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                Portal Component
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default PortalRoot
