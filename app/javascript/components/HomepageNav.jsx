import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import HomepageButton from './HomepageButton'

export default class HomepageNav extends React.Component {
    render() {
        return (
            <Navbar>
                <HomepageButton />
            </Navbar>
        );
    }
}