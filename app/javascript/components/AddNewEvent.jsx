import React from 'react'

import { Button } from '@blueprintjs/core'

export default class AddNewCountdown extends React.Component {
    render() {
        return (
            <a href='/events/new' style={{marginTop: '100px'}}>
                <Button icon='plus' text='Add New Event' minimal='true' style={{fontSize: '20px'}} />
            </a>
        );
    }
}