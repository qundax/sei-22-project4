import React from 'react'

import Nav from 'react-bootstrap/Nav'

export default class PhotosLink extends React.Component {
    render() {
        return (
            <Nav.Link href='/photos-react'>
                Photos
            </Nav.Link>
        );
    }
}