import React from 'react'

import profile from '../../assets/images/test-profile.jpg'

export default class ProfilePic extends React.Component {
    render() {
        return (
            <div>
                <img src={profile} width='200px' height='200px' style={{borderRadius: '100%', border: 'solid 3px #000000'}} />
            </div>
        );
    }
}