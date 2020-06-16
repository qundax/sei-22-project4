import React from 'react'

import logo from '../../assets/images/logo.png'

export default class HomepageButton extends React.Component {
    render() {
        return (
            <a href='/homepage'>
                <img src={logo} alt="DUO©" style={{height: "50px"}} />
            </a>
        );
    }
}