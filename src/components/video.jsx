import React from "react"
import styles from "./video.css"

import play from '../images/play.svg'

class Video extends React.Component {
  render() {
    return (
      <div className="b b--fw">
        <div className="vid" style={{backgroundImage: 'url(https://patterns.boston.gov/images/crispus/boston.jpg)'}} onClick={() => this.props.videoAction('jihJIDE5KYA')}>
          <div className="vid-c">
            <div className="b-c b-c--top">
              <div className="vid-t">It feels like home</div>
              <div className="vid-st m-t300">By: Dutch Rebelle, Tigerman WOAH, Julie Rhodes</div>
              <div className="vid-ic m-t300">
                <button className="vid-cta">
                  <img src={play} alt="Play Video" height="97" width="97" className="vid-cta-i" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Video
