import React from "react"

class Video extends React.Component {
  render() {
    return (
      <div className="b b--fw">
        <div className="vid" style={{backgroundImage: 'url(https://patterns.boston.gov/images/crispus/boston.jpg)'}} onClick={() => this.props.videoAction('jihJIDE5KYA')}>
          <div className="vid-c">
            <div className="vid-ci">
              <div className="vid-t">Look to<br />Boston</div>
              <div className="vid-st m-t300">By: Mayor's Office of New Urban Mechanics</div>
              <div className="vid-ic m-t300">
                <button className="vid-cta">
                  <img src="https://patterns.boston.gov/images/global/icons/play.svg" alt="Play Video" height="97" width="97" className="vid-cta-i" />
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
