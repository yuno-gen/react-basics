import React from 'react';
import './Contact.css'

export default function About(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <div className={className}>
                Contact Page
            </div> 
        </div>
    )
}
