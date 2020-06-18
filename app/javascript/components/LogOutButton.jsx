import React from 'react'
import axios from 'axios'

import { Button } from '@blueprintjs/core'

export default class LogOutButton extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this)
    }

    logout() {
        axios.delete('/users/sign_out', {
        })
        .then((response) => {
            console.log('it worked')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <Button text='Log Out' onClick={this.logout} minimal='true' style={{fontSize: '20px'}} />
        );
    }
}