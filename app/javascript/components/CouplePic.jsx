import React from 'react'

import profile from '../../assets/images/test-profile.jpg'
import profile2 from '../../assets/images/test-profile2.jpg'

import ProfilePic from './ProfilePic'

export default class CouplePic extends React.Component {
    render() {
        return (
            <div className='d-flex align-items-center'>
                <ProfilePic profile={profile} />
                <p className='mx-5' style={{fontSize: '80px'}}>💖</p>
                <ProfilePic profile={profile2} />
            </div>
        );
    }
}