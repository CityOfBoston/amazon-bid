import React from "react"

import styles from "./double.css"

class Grid extends React.Component {
  render() {
    return (
      <div className="b b--g b--fw">
        <div className="b-c">
          <div className="sh">
            <h2 className="sh-title">Starting Transactions</h2>
          </div>
          <div className="g">
              <a href="https://www.boston.gov/neighborhood/allston" className="cd m-t500 g--4 g--4--sl">
                  <div className="cd-ic" style={{backgroundImage: 'url(https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok&#x3D;jMsIfnJ6)'}}></div>
                <div className="cd-c">
                  <div className="cd-t">Allston</div>
                    <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                  <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
                </div>
              </a>
              <a href="https://www.boston.gov/neighborhood/allston" className="cd m-t500 g--4 g--4--sl">
                  <div className="cd-ic" style={{backgroundImage: 'url(https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok&#x3D;jMsIfnJ6)'}}></div>
                <div className="cd-c">
                  <div className="cd-t">Allston</div>
                    <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                  <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
                </div>
              </a>
              <a href="https://www.boston.gov/neighborhood/allston" className="cd m-t500 g--4 g--4--sl">
                  <div className="cd-ic" style={{backgroundImage: 'url(https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok&#x3D;jMsIfnJ6)'}}></div>
                <div className="cd-c">
                  <div className="cd-t">Allston</div>
                    <div className="cd-st t--upper t--subtitle">Neighborhood</div>
                  <div className="cd-d">Learn more about one of Boston’s most diverse and active neighborhoods.</div>
                </div>
              </a>
              <a href="https://www.boston.gov/neighborhood/allston" className="cd m-t500 g--4 g--4--sl">
                  <div className="cd-ic" style={{backgroundImage: 'url(https://www.boston.gov/sites/default/files/styles/grid_card_image/public/allston2.jpg?itok&#x3D;jMsIfnJ6)'}}></div>
                <div className="cd-c">
                  <div className="cd-t">Allston</div>
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
