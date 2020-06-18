import React from 'react'

import { Button } from '@blueprintjs/core'

export default class AddNewPhoto extends React.Component {
    render() {
        return (
            <a href='/photos/new' className='my-5'>
                <Button icon='plus' text='Add New Photo' minimal='true' style={{fontSize: '20px'}} />
            </a>
        );
    }
}