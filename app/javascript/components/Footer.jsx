import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

export default class Footer extends React.Component {
    render() {
        return (
            <Navbar style={{position: "absolute", bottom: "0", width: "100%", height: "2.5rem", color: "#FFFFFF", justifyContent: "center", background: "#000000"}}>
                DUO © 2020
            </Navbar>
        );
    }
}