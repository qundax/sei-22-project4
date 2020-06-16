import React from 'react'

import AddNewPhoto from './AddNewPhoto'
import PhotosDisplay from './PhotosDisplay'

export default class PhotosContent extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center mt-2 w-100" style={{paddingBottom: '2.5em', backgroundColor: '#F6F6F6'}}>
                <AddNewPhoto />
                <PhotosDisplay />
            </div>
        );
    }
}