import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import countdown from '../../assets/images/countdown.jpg'
import photos from '../../assets/images/photos.jpg'
import calendar from '../../assets/images/calendar.jpg'
import Cover from './Cover'

export default class LandingContent extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center w-100" style={{background: "#F6F6F6", paddingBottom: "2.5em"}}>
                <Carousel>
                    <Carousel.Item style={{height: "500px"}}>
                        <img
                            className="d-block w-100"
                            src={countdown}
                            alt="Track Anniversaries"
                            style={{height: "500px", objectFit: "cover"}}
                        />
                        <Carousel.Caption>
                            <h3>Track Anniversaries</h3>
                            <p>Keep track of important dates in your relationship to show your partner how much you care.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{height: "500px"}}>
                        <img
                            className="d-block w-100"
                            src={photos}
                            alt="Share Photos"
                            style={{height: "500px", objectFit: "cover"}}
                        />
                        <Carousel.Caption>
                            <h3>Share Photos</h3>
                            <p>Share photos with your partner in the safe space we have created for you.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{height: "500px"}}>
                        <img
                            className="d-block w-100"
                            src={calendar}
                            alt="Plan Your Schedules"
                            style={{height: "500px", objectFit: "cover"}}
                        />
                        <Carousel.Caption>
                            <h3>Plan Your Schedules</h3>
                            <p>Plan your schedule together with your partner to ensure you will always have enough time together.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Cover />
            </div>
        );
    }
}