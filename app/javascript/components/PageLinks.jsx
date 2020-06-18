import React from 'react'

import CalendarLink from './CalendarLink'
import CountdownLink from './CountdownLink'
import PhotosLink from './PhotosLink'
import LogOutButton from './LogOutButton'

export default class PageLinks extends React.Component {
    render() {
        return (
            <div className='d-flex align-items-center' style={{textDecoration: 'none'}}>
                <CalendarLink />
                <CountdownLink />
                <PhotosLink />
                <LogOutButton />
            </div>
        );
    }
}