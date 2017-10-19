import React from "react"

import pdf from '../images/pdf.svg'
import styles from "./grid.css"
import letters from '../testimonials/BostonLettersOfSupport.pdf'

class Grid extends React.Component {
  render() {
    return (
      <div className="b b--g b--fw">
        <div className="b-c">
          <div className="sh">
            <h2 className="sh-title">Testimonials</h2>
          </div>
          <div className="g">
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('ZNy8vC4Q7Zs')}>
              <div className="cd-ic cd-ic--marty"></div>
              <div className="cd-c">
                <div className="cd-t">Martin J. Walsh</div>
                <div className="cd-st t--upper t--subtitle">City of Boston</div>
                <div className="cd-d">Mayor</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('kJ-sAaZway0')}>
              <div className="cd-ic cd-ic--anne"></div>
              <div className="cd-c">
                <div className="cd-t">Ann Klee</div>
                <div className="cd-st t--upper t--subtitle">General Electric</div>
                <div className="cd-d">VP, Environmental & Safety, head of Boston operations</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('FIgnnAl0VCI')}>
              <div className="cd-ic cd-ic--zorica"></div>
              <div className="cd-c">
                <div className="cd-t">Zorica Pantić</div>
                <div className="cd-st t--upper t--subtitle">Wentworth Institute of Technology</div>
                <div className="cd-d">President</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('kO7vZiMC34M')}>
              <div className="cd-ic cd-ic--panos"></div>
              <div className="cd-c">
                <div className="cd-t">Panos Panay</div>
                <div className="cd-st t--upper t--subtitle">Berklee College of Music</div>
                <div className="cd-d">Vice President for Innovation and Strategy</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('xHvg0aR7BJA')}>
              <div className="cd-ic cd-ic--lee"></div>
              <div className="cd-c">
                <div className="cd-t">Christine Lee</div>
                <div className="cd-st t--upper t--subtitle">Northeastern University</div>
                <div className="cd-d">Student</div>
              </div>
            </a>
            <a href={letters} className="cd m-t500 g--4 g--4--sl" download>
              <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
              <div className="cd-c">
                <div className="cd-t" style={{maxWidth: '80%'}}>Letters of Support</div>
                <div className="cd-st t--upper t--subtitle"></div>
                <div className="cd-d">Hear more from our amazing business, education, and community leaders.</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Grid
