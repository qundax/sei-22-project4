import React from 'react'

import CalendarLink from './CalendarLink'
import CountdownLink from './CountdownLink'
import PhotosLink from './PhotosLink'

export default class PageLinks extends React.Component {
    render() {
        return (
            <div className='d-flex' style={{textDecoration: 'none'}}>
                <CalendarLink />
                <CountdownLink />
                <PhotosLink />
            </div>
        );
    }
}