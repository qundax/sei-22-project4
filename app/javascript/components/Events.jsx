import React from 'react'
import axios from 'axios'

import { Button } from '@blueprintjs/core'

import Event from './Event'
import AddNewEvent from './AddNewEvent'

export default class Events extends React.Component {
    render() {
        let events = <Event event="There are no events today" />
        if (this.props.events.length > 0) {
            events = this.props.events.map(event => {
                return <Event event={event.name} is_couple={event.is_couple_event} />
            })
        }

        return (
            <div className='d-flex align-items-center flex-column mt-5' style={{minHeight: '550px'}}>
                <h3>Events on {this.props.selectedDate}</h3>
                <div className='align-self-start mt-5'>{events}</div>
                <AddNewEvent />
            </div>
        );
    }
}