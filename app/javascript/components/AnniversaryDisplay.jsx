import React from 'react'
import axios from 'axios'

import AnniversaryCountdown from './AnniversaryCountdown'

export default class AnniversaryDisplay extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0}
    }

    componentDidMount() {
        if (this.state.counter < 1) {
            axios.get('/couples.json')
            .then((res) => {
                this.setState({
                    counter: 1,
                    anniversary: Date.parse(res.data[0].anniversary)
                })
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Anniversary</h1>
                <div className='d-flex justify-content-center align-items-center' style={{height: '200px', marginBottom: '200px'}}>
                    <AnniversaryCountdown onLoad={()=>{this.loadHandler()}} anniversary={this.state.anniversary} />
                </div>
            </div>
        );
    }
}