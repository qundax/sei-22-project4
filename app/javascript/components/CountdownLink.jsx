import React from 'react'
import axios from 'axios'

import Nav from 'react-bootstrap/Nav'

export default class CountdownLink extends React.Component {
    render() {
        return (
            <Nav.Link href='/countdown'>
                Countdown
            </Nav.Link>
        );
    }
}