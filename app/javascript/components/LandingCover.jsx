import React from 'react'

import cover from '../../assets/images/cover.jpg'
import EnterButton from './EnterButton'

export default class LandingCover extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${cover})`, backgroundPosition: "center bottom", backgroundSize: "cover", width: "100%", height: "500px"}}>
                <EnterButton />
            </div>
        );
    }
}