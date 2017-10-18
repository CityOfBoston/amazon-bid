import React from "react"

import pdf from '../images/pdf.svg'
import styles from "./grid.css";

class Grid extends React.Component {
  render() {
    return (
      <div className="b b--g b--fw">
        <div className="b-c">
          <div className="sh">
            <h2 className="sh-title">Testimonials</h2>
          </div>
          <div className="g">
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('_S2LCKoctjI')}>
              <div className="cd-ic cd-ic--anne"></div>
              <div className="cd-c">
                <div className="cd-t">Allston</div>
                <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('_S2LCKoctjI')}>
              <div className="cd-ic cd-ic--marty"></div>
              <div className="cd-c">
                <div className="cd-t">Allston</div>
                <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('_S2LCKoctjI')}>
              <div className="cd-ic cd-ic--zorica"></div>
              <div className="cd-c">
                <div className="cd-t">Allston</div>
                <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl">
              <div className="cd-ic" style={{backgroundImage: 'url(https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok&#x3D;jMsIfnJ6)'}}></div>
              <div className="cd-c">
                <div className="cd-t">Letters of Support</div>
                <div className="cd-st t--upper t--subtitle">Something here...</div>
                <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('_S2LCKoctjI')}>
              <div className="cd-ic" style={{backgroundImage: 'url(https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok&#x3D;jMsIfnJ6)'}}></div>
              <div className="cd-c">
                <div className="cd-t">Allston</div>
                <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
              </div>
            </a>
            <a className="cd m-t500 g--4 g--4--sl" onClick={() => this.props.videoAction('_S2LCKoctjI')}>
              <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
              <div className="cd-c">
                <div className="cd-t">Letters of Support</div>
                <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Grid
