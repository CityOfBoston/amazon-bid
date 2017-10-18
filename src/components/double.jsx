import React from "react"
import styles from "./double.css"

import play from '../images/play.svg'

class Double extends React.Component {
  render() {
    return (
      <div className="b b--fw">
        <div id="vid" className="vid-split">
          <div className="vid vid-1" onClick={() => this.props.videoAction('_S2LCKoctjI')}>
            <div className="vid-c">
              <div className="vid-ci">
                <div className="vid-t">Boston.<br />Yes.</div>
                <div className="vid-st m-t300">By: NEOSCAPE</div>
                <div className="vid-ic m-t300">
                  <button className="vid-cta">
                    <img src={play} alt="Play Video" height="97" width="97" className="vid-cta-i" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="vid vid-2" onClick={() => this.props.videoAction('hW6vfkxEaZM')}>
            <div className="vid-c">
              <div className="vid-ci">
                <div className="vid-t">Look to<br />Boston</div>
                <div className="vid-st m-t300">By: Mayor's Office of New Urban Mechanics</div>
                <div className="vid-ic m-t300">
                  <button className="vid-cta">
                    <img src={play} alt="Play Video" height="97" width="97" className="vid-cta-i" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Double
