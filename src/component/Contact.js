import React from 'react';
import './Contact.css';
import styles from './Contact.module.css'

function Contact(props) {
    let className = props.primary ? 'primary': 'secondary';
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    return (
        <div className={className}>
            Contact Page
            <div style={heading}>
                Shop Page
            </div>
            <div className={`primary ${styles.fontxl}`}>
                About
            </div>
        </div>
    );
}

export default Contact;