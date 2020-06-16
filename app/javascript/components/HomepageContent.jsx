import React from 'react'

import HomepageCover from './HomepageCover'

export default class HomepageContent extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center mt-2 w-100" style={{paddingBottom: "2.5em"}}>
                <HomepageCover />
            </div>
        );
    }
}