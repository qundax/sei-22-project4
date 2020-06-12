import React from 'react'

import { Button } from "@blueprintjs/core";

export default class EnterButton extends React.Component {
    render() {
        return (
            <a href="/homepage" style={{textDecoration: "none"}}><Button text="Begin Your Journey" minimal="true" large="true" style={{fontSize: "32px"}}>
            </Button></a>
        );
    }
}