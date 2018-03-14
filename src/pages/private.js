import React from 'react'
import Link from 'gatsby-link'

import Double from '../components/double'
import Grid from '../components/grid'
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

  setMain = (el) => {
    // Adds event listening to all of our downloads
    el.addEventListener('click', (ev) => {
      if (typeof ga === 'undefined') {
        return;
      }

      for (let target = ev.target; target; target = target.parentNode) {
        if (target.tagName === 'A') {
          const href = target.href;
          if (href.match(/(\.pdf|\.zip)$/)) {
            const path = href.match(/https?:\/\/[^/]*(\/.*\/([^/.]+)\.\w*)/);
            ga('send', 'pageview', path[1], { title: path[2] });
          }
        }
      }
    })
  }


  render () {
    return (
      <div className="mn" ref={this.setMain}>
        <Hero />
        <Intro />
        <Double videoAction={this.openModal} />
        <Grid videoAction={this.openModal} />
        <Contact />
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}

export default IndexPage
