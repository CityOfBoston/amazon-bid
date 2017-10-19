import React from "react"
import styles from "./footer.css";

import cart from '../images/cart.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer className="ft">
        <div className="g">
          <div className="g--6" style={{display: 'flex', alignItems: 'center'}}>
            <a href="https://www.boston.gov" className="m-r500"><img src="https://patterns.boston.gov/images/b-light.svg" alt="City of Boston" /></a>
            <a href="https://www.boston.gov/departments/mayors-office/martin-j-walsh" className="t--info t--w">Mayor Martin J Walsh</a>
          </div>
          <div className="g--6 ft-ic">
            <a href="https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=%22City+of+Boston%22&rh=i%3Aaps%2Ck%3A%22City+of+Boston%22" className="t--intro t--w" style={{display: 'block'}}>
              <img src={cart} alt="Boston items on Amazon" style={{display: 'block'}} />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
