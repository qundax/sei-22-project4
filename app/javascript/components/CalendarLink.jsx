import React from 'react'

import Nav from 'react-bootstrap/Nav'

export default class CalendarLink extends React.Component {
    render() {
        return (
            <Nav.Link href='/calendar'>
                Calendar
            </Nav.Link>
        );
    }
}