import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import Logo from './Logo'

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    <Logo />
                </Navbar.Brand>
            </Navbar>
        );
    }
}