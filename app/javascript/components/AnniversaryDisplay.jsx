import React from 'react'

export default class AnniversaryDisplay extends React.Component {
    render() {
        return (
            <div>
                <h1>Anniversary</h1>
                <div className='d-flex justify-content-center align-items-center' style={{height: '200px', marginBottom: '200px'}}>
                    <h3>[Time Left] Days</h3>
                </div>
            </div>
        );
    }
}