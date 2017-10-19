import React from "react"

import styles from "./contact.css"

class Contact extends React.Component {
  render() {
    return (
      <div className="b b--g b--fw">
        <div className="b-c">
          <div className="sh m-b500">
            <h2 className="sh-title">Contact</h2>
          </div>
          <div className="g">
            <div className="g--4">
              <div className="dept dept--w p-a500">
                <div className="dept-info">
                  <div className="dept-icon"><a href="https://www.boston.gov/departments/economic-development" className="t--sans t--upper"><img src="https://www.boston.gov/sites/default/files/department_icons/svg_economic_development_.svg" alt="Economic Development" /></a></div>
                  <div className="dept-name"><a href="https://www.boston.gov/departments/economic-development" className="t--sans t--upper">Economic Development</a></div>
                </div>
                <div className="dept-social">
                  <a href="https://twitter.com/econdevboston" className="icon-twitter icon-common icon-social sidebar-social-icon">Twitter</a>
                  <a href="https://www.facebook.com/EconDevBoston" className="icon-facebook icon-common icon-social sidebar-social-icon">Facebook</a>
                </div>
              </div>
            </div>
            <div className="g--8">
              <ul className="dl">
                <li className="dl-i">
                  <span className="dl-t"><div className="icon icon-phone"></div></span>
                  <span className="dl-d"><a href="tel:617-635-5729">617-635-5729</a></span>
                </li>
                <li className="dl-i">
                  <span className="dl-t"><div className="icon icon-email"></div></span>
                  <span className="dl-d"><a href="mailto:JOHN.BARROS@BOSTON.GOV">John Barros</a></span>
                </li>
                <li className="dl-i">
                  <span className="dl-t"><div className="icon icon-address"></div></span>
                  <span className="dl-d">
                    <address>
                      Boston City Hall<br /> Boston, MA 02201
                    </address>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
