import React from 'react'

export default class AnniversaryCountdown extends React.Component {
    render() {
        let countdown = Math.round((this.props.anniversary - Date.now())/86400000)
        if (countdown < 0) {
            countdown += 365
        }

        return (
            <h3>{countdown} Days</h3>
        );
    }
}