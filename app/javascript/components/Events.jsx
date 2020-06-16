import React from 'react'

export default class Events extends React.Component {
    stringifyDate(date) {
        return date.toString().slice(0,15);
    }

    render() {
        const selectedDate = this.stringifyDate(this.props.date);

        return (
            <div className='mt-5' style={{minHeight: '550px'}}>
                <h3>Events on {selectedDate}</h3>
            </div>
        );
    }
}