import React from 'react'

import AnniversaryDisplay from './AnniversaryDisplay'
import AddNewCountdown from './AddNewCountdown'
import CountdownDisplay from './CountdownDisplay'

export default class CountdownContent extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-around mt-2 w-100" style={{paddingBottom: '2.5em', backgroundColor: '#F6F6F6'}}>
                <div className='mt-5'>
                    <AnniversaryDisplay />
                    <AddNewCountdown />
                </div>
                <CountdownDisplay />
            </div>
        );
    }
}