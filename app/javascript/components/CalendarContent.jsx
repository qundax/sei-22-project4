import React from 'react'

import { DatePicker } from "@blueprintjs/datetime"

import Events from './Events'

export default class CalendarContent extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date(Date.now())};
    }

    setDate(value) {
        this.setState({date: value})
    }

    render() {
        return (
            <div className="d-flex justify-content-around mt-2 w-100" style={{paddingBottom: '2.5em', backgroundColor: '#F6F6F6'}}>
                <DatePicker className='datepicker mt-5' highlightCurrentDay='true' onChange={(value)=>{this.setDate(value)}} />
                <Events date={this.state.date} />
            </div>
        );
    }
}