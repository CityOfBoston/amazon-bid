import React from "react"

import pdf from '../images/pdf.svg'
import zip from '../images/zip.svg'
import styles from "./grid-rfi.css"

class GridRFI extends React.Component {
  render() {
    return (
      <div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Talent</h2>
            </div>
            <div className="g">
              <div className="g--8 m-b300--mo">
                <div className="t--intro">Take a deep dive into Boston’s diverse talent and how we are fostering a strong pipeline for the future.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Talent.pdf" className="btn" download>Download PDF</a>
              </div>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Growth</h2>
            </div>
            <div className="g">
              <div className="g--8 m-b300--mo">
                <div className="t--intro">Learn about all of the factors that make Boston a convenient, affordable, and healthy community with a high quality of life.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Growth.pdf" className="btn" download>Download PDF</a>
              </div>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Real Estate — Suffolk Downs</h2>
            </div>
            <div className="g">
              <div className="g--8 m-b300--mo">
                <div className="t--intro">Explore several different locations primed for the future of Amazon’s second North American headquarters. View a 2017 Boston Globe article regarding housing production.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/suffolk_downs.zip" className="btn" download>Download PDFs</a>
              </div>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Real Estate — South Waterfront / Downtown Boston</h2>
            </div>
            <div className="g m-b500">
              <div className="g--8">
                <div className="t--intro">Explore several different locations primed for the future of Amazon’s second North American headquarters. View a 2017 Boston Globe article regarding housing production.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/real_estate.zip" className="btn" download>Download All</a>
              </div>
            </div>
            <div className="g">
              <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_BulfinchCrossing_RealEstate.pdf" className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Bulfinch Crossing</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="xxxxxxx" className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Massport</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_SeaportSquare_RealEstate.pdf" className="cd m-t500 g--12" download>
                <img src={pdf} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Seaport Square</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/south_station.zip" className="cd m-t500 g--12" download>
                <img src={zip} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>South Station</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
              <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/winthrop_square.zip" className="cd m-t500 g--12" download>
                <img src={zip} alt="City of Boston ❤︎ Amazon" className="lo-i" className="cd-i" width="39" height="59" />
                <div className="cd-c">
                  <div className="cd-t" style={{maxWidth: '80%'}}>Winthrop Square</div>
                  <div className="cd-st t--upper t--subtitle"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Incentives</h2>
            </div>
            <div className="g">
              <div className="g--8 m-b300--mo">
                <div className="t--intro">As we work together on building a long-term partnership to enhance the experience of both our residents and Amazon employees, the Commonwealth of Massachusetts and Boston look forward to discussing incentives in greater detail with Amazon.</div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Incentives.pdf" className="btn" download>Download PDF</a>
              </div>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">Taxes and Tax Policy</h2>
            </div>
            <div className="g">
              <div className="g--8 m-b300--mo">
                <div className="t--intro">A detailed explanation of the tax structure in the Commonwealth of Massachusetts and cities of Boston and Revere, as well as proposed legislation, can be found here. </div>
              </div>
              <div className="g--4 ta-r--large">
                <a href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Taxes and Tax Policy.pdf" className="btn" download>Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GridRFI
