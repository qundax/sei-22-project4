import React from 'react'

export default class Countdown extends React.Component {
    render() {
        let countdown = Math.round((Date.parse(this.props.countdown.date) - Date.now())/86400000)
        if (countdown < 0) {
            countdown += 365
        }

        return (
            <div className='my-3'>
                <h4>{this.props.countdown.name}</h4>
                <h5>{countdown} Days</h5>
            </div>
        );
    }
}