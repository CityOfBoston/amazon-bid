import React from 'react'
import Link from 'gatsby-link'

import Double from '../components/double'
import Grid from '../components/grid'
import GridRFI from '../components/grid-rfi'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Footer from '../components/footer'
import ModalVideo from 'react-modal-video'
import Intro from '../components/intro'

import styles from "./index.css"

class IndexPage extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: true
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal (videoId) {
    this.setState({isOpen: true, videoId: videoId})
  }

  componentDidMount() {
    if (this.props.location.hash) {
      let videoId = this.props.location.hash.replace('#', '')
      this.setState({isOpen: true, videoId: videoId})
    }
  }

  render () {
    return (
      <div className="mn">
        <Hero />
        <div className="b b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Say yes to Boston</h2>
            </div>
            <div className="g">
              <div className="g--8">
                <div className="t--intro">We’re proud to present our response to Amazon's HQ2 Request for Proposal. Boston is an open and welcoming city — a city everyone can call home. Whether you’re an innovator, entrepreneur, dreamer, or doer, Boston has a place for you. Take a look at the featured videos below to learn more about what we have to offer.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="/real_estate.zip" className="btn">Download Complete RFI</a>
              </div>
            </div>
          </div>
        </div>
        <GridRFI />
        <Contact />
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}

export default IndexPage
