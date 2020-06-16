import React from 'react'

import { Button } from '@blueprintjs/core'

export default class AddNewCountdown extends React.Component {
    render() {
        return (
            <div>
                <Button icon='plus' text='Add New Countdown' minimal='true' style={{fontSize: '20px'}} />
            </div>
        );
    }
}