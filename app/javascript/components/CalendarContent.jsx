import React from 'react'
import axios from 'axios'

import { DatePicker } from "@blueprintjs/datetime"

import Events from './Events'

export default class CalendarContent extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date(Date.now()), events: []};
    }

    componentDidMount() {
        this.getEvents()
    }

    stringifyDate(date) {
        return date.toString().slice(0,15);
    }

    dateConverter(date) {
        return new Date(Date.parse(date))
    }

    setDate(value) {
        this.setState({date: value})
    }

    getEvents() {
        axios.get('/events.json')
        .then((res)=>{
            const events = res.data.filter(event => this.stringifyDate(this.dateConverter(event.date)) === this.stringifyDate(this.state.date))
            this.setState({events: events})
        })
    }

    changeHandler(value) {
        this.setDate(value)
        this.getEvents()
    }

    render() {
        return (
            <div className="d-flex justify-content-around mt-2 w-100" style={{paddingBottom: '2.5em', backgroundColor: '#F6F6F6'}}>
                <DatePicker className='datepicker mt-5' highlightCurrentDay='true' onChange={(value)=>{this.changeHandler(value)}} />
                <Events selectedDate={this.stringifyDate(this.state.date)} events={this.state.events} />
            </div>
        );
    }
}