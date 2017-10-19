import React from 'react'
import Link from 'gatsby-link'

import pdf from "../proposals/BostonAmazonHQ2Read.pdf"
import styles from "./read.css"

class ReadPage extends React.Component {

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
        <embed src={pdf} className="iframe" type='application/pdf' />
      </div>
    )
  }
}

export default ReadPage
