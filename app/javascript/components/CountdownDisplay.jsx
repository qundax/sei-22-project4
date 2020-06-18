import React from 'react'
import axios from 'axios'

import Countdown from './Countdown'

export default class CountdownDisplay extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        axios.get('/countdowns.json')
        .then((res) => {
            this.setState({
                countdowns: res.data
            })
        })
    }

    render() {
        if (this.state.countdowns) {
            const countdowns = this.state.countdowns.map(countdown => {
                return <Countdown countdown={countdown} />
            })

            return (
                <div className='mt-5'>
                    <h3>Event Countdowns</h3>
                    <div className='mt-5'>{countdowns}</div>
                </div>
            );
        } else {
            return (
                <div className='mt-5'>
                    <h3>Event Countdowns</h3>
                </div>
            );
        }
    }
}