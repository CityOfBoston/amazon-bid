import React from "react"
import Letters from '../testimonials/BostonLettersOfSupport.pdf'
import styles from "./support.css"

class Support extends React.Component {
  render() {
    return (
      <div className="b b--b b--fw">
        <div className="b-c">
          <div className="sh sh--w">
            <h2 className="sh-title">Letters of Support</h2>
          </div>
          <p className="t--intro t--w">Read more from our amazing business, education, and community leaders.</p>
          <a href={Letters} className="btn btn--o">Download PDF</a>
        </div>
      </div>
    )
  }
}

export default Support
