import React from 'react'

import logo from '../../assets/images/logo.png'

export default class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="DUO©" style={{height: "50px"}} />
            </div>
        );
    }
}