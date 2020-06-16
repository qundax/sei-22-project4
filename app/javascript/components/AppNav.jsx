import React from 'react'

import HomepageNav from './HomepageNav'
import PageLinks from './PageLinks'

export default class AppNav extends React.Component {
    render() {
        return (
            <div className='d-flex flex-column align-items-center w-100' style={{backgroundColor: '#FFFFFF'}}>
                <HomepageNav />
                <PageLinks />
            </div>
        );
    }
}