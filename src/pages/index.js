import React from 'react'
import Link from 'gatsby-link'

import Double from '../components/double'
import Grid from '../components/grid'
import Hero from '../components/hero'
import Footer from '../components/footer'
import ModalVideo from 'react-modal-video'
import Video from '../components/video'

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
        <Double videoAction={this.openModal} />
        <Grid videoAction={this.openModal} />
        <Video videoAction={this.openModal}></Video>
        <Footer />
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}

export default IndexPage
