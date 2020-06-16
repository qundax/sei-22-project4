import React from 'react'

import { Icon } from "@blueprintjs/core";

export default class UploadCoverButton extends React.Component {
    render() {
        return (
            <div style={{position: 'absolute', bottom: '20px', right: '30px'}}>
                <Icon icon='plus' iconSize='60px' style={{color: '#545454'}}/>
            </div>
        );
    }
}