import React from 'react'

export default class Event extends React.Component {
    render() {
        if (this.props.is_couple) {
            return (
                <h4 className='my-3' style={{color: '#EC46A4'}}>{this.props.event}</h4>
            );
        } else {
            return (
                <h4 className='my-3'>{this.props.event}</h4>
            );
        }
    }
}