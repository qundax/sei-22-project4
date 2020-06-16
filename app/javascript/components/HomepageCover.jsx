import React from 'react'

import cover from '../../assets/images/test-cover.jpeg'

import CouplePic from './CouplePic'
import UploadCoverButton from './UploadCoverButton'

export default class HomepageCover extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{position: 'relative', backgroundImage: `url(${cover})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '650px'}}>
                <CouplePic />
                <UploadCoverButton />
            </div>
        );
    }
}