import React from "react"

import styles from "./hero.css"
import hero from '../images/boston_yes.jpg'
import pdf from '../proposals/BostonAmazonHQ2.pdf'

class Hero extends React.Component {
  render() {
    return (
      <div className="b b--fw">
        <div className="hro">
          <div className="hro-c">
            <h1 className="hro-t hro-t--l">Amazon HQ2</h1>
            <div className="hro-st hro-st--l" style={{marginBottom: 25, color: 'rgb(255,255,255)'}}>Request for proposal response</div>
            <div className="hro-bc">
              <a href={pdf} className="btn btn--c btn--ib" download>Download Our Proposal</a>
              <a href={pdf} className="btn btn--c btn--ib" target="_blank" rel="noopener noreferrer">Read Our Proposal</a>
              <a href="https://amazon.boston.gov" className="btn btn--c btn--ib">View our public site</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
