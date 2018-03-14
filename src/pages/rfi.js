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
import pdf from '../images/pdf.svg'
import zip from '../images/zip.svg'

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
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/real_estate.zip" className="btn">Download Complete RFI</a>
              </div>
            </div>
          </div>
        </div>
        <GridRFI />
        <div className="b b--fw">
          <div className="hro hro--books">
            <div className="hro-c">
              <h1 className="hro-t hro-t--l">&nbsp;</h1>
              <div className="hro-st hro-st--l" style={{marginBottom: 25, color: 'rgb(255,255,255)'}}>&nbsp;</div>
              <div className="hro-bc">&nbsp;</div>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Somerville</h2>
            </div>
            <div className="g m-b500">
              <div className="g--8">
                <div className="t--intro">Somerville’s response to the RFI questions.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/somerville/somerville.zip" className="btn" download>Download All</a>
              </div>
            </div>
            <div className="g">
              <a href="https://d279ml9s9jjbhy.cloudfront.net/somerville/MA_Boston_Somerville Orange Line_Talent.pdf" className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Talent</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/somerville/MA_Boston_Somerville Orange Line_Growth.pdf" className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Growth</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/somerville/real_estate.zip" className="cd m-t500 g--12" download>
                <img src={zip} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Real Estate</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/somerville/MA_Boston_Somerville Orange Line_Incentives.pdf" className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Incentives</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/somerville/MA_Boston_Somerville Orange Line_Taxes and Tax Policy.pdf " className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Taxes and Tax Policy</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Contact />
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
      </div>
    )
  }
}

export default IndexPage
