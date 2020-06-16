// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import AppNav from '../components/AppNav'
import PhotosContent from '../components/PhotosContent'
import Footer from '../components/Footer'

class Photos extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center" style={{position: "relative", minHeight: "100vh"}}>
                <AppNav />
                <PhotosContent />
                <Footer />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Photos />,
    document.body.appendChild(document.createElement('div')),
  )
})