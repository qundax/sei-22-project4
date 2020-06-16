import React from 'react'

import ProfilePic from './ProfilePic'

export default class CouplePic extends React.Component {
    render() {
        return (
            <div className='d-flex align-items-center'>
                <ProfilePic />
                <p className='mx-5' style={{fontSize: '80px'}}>💖</p>
                <ProfilePic />
            </div>
        );
    }
}