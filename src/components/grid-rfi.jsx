import React from "react";

import pdf from "../images/pdf.svg";
import zip from "../images/zip.svg";
import styles from "./grid-rfi.css";

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
                <div className="t--intro">
                  Take a deep dive into Boston’s diverse talent and how we are
                  fostering a strong pipeline for the future.
                </div>
              </div>
              <div className="g--4 ta-r--large">
                <a
                  href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Talent.pdf"
                  className="btn"
                  download
                >
                  Download PDF
                </a>
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
                <div className="t--intro">
                  Learn about all of the factors that make Boston a convenient,
                  affordable, and healthy community with a high quality of life.
                  Review how Boston is{" "}
                  <a
                    href="https://d279ml9s9jjbhy.cloudfront.net/rfi/No major city has enough affordable housing to meet demand, but how does Seattle stack up_ _ The Seattle Times.pdf"
                    download
                  >
                    leading in availability of affordable housing
                  </a>,{" "}
                  <a
                    href="https://d279ml9s9jjbhy.cloudfront.net/rfi/Is This Complex Affordable Housing Deal a Promising Model or a Unicorn_ – Next City.pdf"
                    download
                  >
                    supporting creative models to increase housing production
                  </a>, and is{" "}
                  <a
                    href="https://d279ml9s9jjbhy.cloudfront.net/rfi/Developers propose an affordable 30-floor tower in Chinatown with apartments, condos, hotel rooms - The Boston Globe.pdf"
                    download
                  >
                    fostering development without displacement
                  </a>, while the Walsh administration’s policies continue to{" "}
                  <a
                    href="https://d279ml9s9jjbhy.cloudfront.net/rfi/City seeking info on developing public assets with housing _ Bay State Banner.pdf"
                    download
                  >
                    innovate new housing options
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://d279ml9s9jjbhy.cloudfront.net/rfi/More Boston neighborhoods seeing affordable housing units - The Boston Globe.pdf"
                    download
                  >
                    ensure affordable development
                  </a>{" "}
                  throughout the City of Boston.
                </div>
              </div>
              <div className="g--4 ta-r--large">
                <a
                  href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Growth.pdf"
                  className="btn"
                  download
                >
                  Download PDF
                </a>
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
                <div className="t--intro">
                  Dig in to a dynamic, shovel-ready site ready to serve as the
                  foundation for Amazon’s future.
                </div>
              </div>
              <div className="g--4 ta-r--large">
                <a
                  href="https://d279ml9s9jjbhy.cloudfront.net/rfi/suffolk_downs.zip"
                  className="btn"
                  download
                >
                  Download PDFs
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="b b--g b--fw">
          <div className="b-c">
            <div className="sh m-b500">
              <h2 className="sh-title">
                Real Estate — South Boston Waterfront/Downtown
              </h2>
            </div>
            <div className="g m-b500">
              <div className="g--8">
                <div className="t--intro">
                  Explore several different locations primed for the future of
                  Amazon’s second North American headquarters.
                </div>
              </div>
              <div className="g--4 ta-r--large">
                <a
                  href="https://d279ml9s9jjbhy.cloudfront.net/rfi/south_boston_waterfront_downtown.zip"
                  className="btn"
                  download
                >
                  Download All
                </a>
              </div>
            </div>
            <div className="g">
              <a
                href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_MapofSouthBostonWaterfrontandDowntownCluster_RealEstate.pdf"
                className="cd m-t500 g--12"
                download
              >
                <img
                  src={pdf}
                  alt="City of Boston ❤︎ Amazon"
                  className="lo-i"
                  className="cd-i"
                  width="39"
                  height="59"
                />
                <div className="cd-c">
                  <div className="cd-t" style={{ maxWidth: "80%" }}>
                    Map of South Boston Waterfront/Downtown Cluster
                  </div>
                  <div className="cd-st t--upper t--subtitle" />
                </div>
              </a>
              <a
                href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_BulfinchCrossing_RealEstate.pdf"
                className="cd m-t500 g--12"
                download
              >
                <img
                  src={pdf}
                  alt="City of Boston ❤︎ Amazon"
                  className="lo-i"
                  className="cd-i"
                  width="39"
                  height="59"
                />
                <div className="cd-c">
                  <div className="cd-t" style={{ maxWidth: "80%" }}>
                    Bulfinch Crossing
                  </div>
                  <div className="cd-st t--upper t--subtitle" />
                </div>
              </a>
              <a
                href="https://d279ml9s9jjbhy.cloudfront.net/rfi/massport.zip"
                className="cd m-t500 g--12"
                download
              >
                <img
                  src={zip}
                  alt="City of Boston ❤︎ Amazon"
                  className="lo-i"
                  className="cd-i"
                  width="39"
                  height="59"
                />
                <div className="cd-c">
                  <div className="cd-t" style={{ maxWidth: "80%" }}>
                  Massport Parcels
                  </div>
                  <div className="cd-st t--upper t--subtitle" />
                </div>
              </a>
              <a
                href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_SeaportSquare_RealEstate.pdf"
                className="cd m-t500 g--12"
                download
              >
                <img
                  src={pdf}
                  alt="City of Boston ❤︎ Amazon"
                  className="lo-i"
                  className="cd-i"
                  width="39"
                  height="59"
                />
                <div className="cd-c">
                  <div className="cd-t" style={{ maxWidth: "80%" }}>
                    Seaport Square
                  </div>
                  <div className="cd-st t--upper t--subtitle" />
                </div>
              </a>
              <a
                href="https://d279ml9s9jjbhy.cloudfront.net/rfi/south_station.zip"
                className="cd m-t500 g--12"
                download
              >
                <img
                  src={zip}
                  alt="City of Boston ❤︎ Amazon"
                  className="lo-i"
                  className="cd-i"
                  width="39"
                  height="59"
                />
                <div className="cd-c">
                  <div className="cd-t" style={{ maxWidth: "80%" }}>
                    South Station
                  </div>
                  <div className="cd-st t--upper t--subtitle" />
                </div>
              </a>
              <a
                href="https://d279ml9s9jjbhy.cloudfront.net/rfi/winthrop_square.zip"
                className="cd m-t500 g--12"
                download
              >
                <img
                  src={zip}
                  alt="City of Boston ❤︎ Amazon"
                  className="lo-i"
                  className="cd-i"
                  width="39"
                  height="59"
                />
                <div className="cd-c">
                  <div className="cd-t" style={{ maxWidth: "80%" }}>
                    Winthrop Square
                  </div>
                  <div className="cd-st t--upper t--subtitle" />
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
                <div className="t--intro">
                  As we work together on building a long-term partnership to
                  enhance the experience of both our residents and Amazon
                  employees, the Commonwealth of Massachusetts and Boston look
                  forward to discussing incentives in greater detail as this
                  conversation progresses.
                </div>
              </div>
              <div className="g--4 ta-r--large">
                <a
                  href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Incentives.pdf"
                  className="btn"
                  download
                >
                  Download PDF
                </a>
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
                <div className="t--intro">
                  A detailed explanation of the tax structure in the
                  Commonwealth of Massachusetts and cities of Boston and Revere,
                  as well as proposed legislation, can be found here.{" "}
                </div>
              </div>
              <div className="g--4 ta-r--large">
                <a
                  href="https://d279ml9s9jjbhy.cloudfront.net/rfi/MA_Boston_Taxes and Tax Policy.pdf"
                  className="btn"
                  download
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GridRFI;
