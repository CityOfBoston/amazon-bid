import React from "react"

import styles from "./hero.css"
import hero from '../images/boston_yes.jpg'

class Hero extends React.Component {
  render() {
    return (
      <div className="b b--fw">
        <div className="hro">
          <div className="hro-c">
            <h1 className="hro-t hro-t--l">Amazon HQ2</h1>
            <div className="hro-st hro-st--l" style={{marginBottom: 25, color: 'rgb(255,255,255)'}}>Request for proposal response</div>
            <div className="hro-bc">
              <a href="https://d279ml9s9jjbhy.cloudfront.net/BostonAmazonHQ2Read.pdf" className="btn btn--c btn--ib" type='application/pdf'>Read Our Proposal</a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/BostonAmazonHQ2Read.pdf" className="btn btn--c btn--ib" download>Download Our Proposal</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
