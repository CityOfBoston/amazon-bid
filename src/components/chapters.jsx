import React from "react"

import styles from "./chapters.css"
import chapterOne from "../images/chapter-1.jpg"
import chapterTwo from "../images/chapter-2.jpg"
import chapterThree from "../images/chapter-3.jpg"
import chapterFour from "../images/chapter-4.jpg"
import chapterFive from "../images/chapter-5.jpg"

class Contact extends React.Component {
  render() {
    return (
      <div className="b b--w b--fw">
        <div className="b-c">
          <div className="sh m-b500">
            <h2 className="sh-title">Get the details</h2>
          </div>
          <div className="ch ch--odd">
            <div className="g">
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Your Perfect Match</h2>
                  <div className="t--info">Innovation is embedded in Boston’s DNA. From Boston’s worldclass researchers, engineers and scientists to our motivation for addressing societal growth, Boston is a city with a passion for creativity, transformation and invention. </div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">As the higher education capital of the world, Boston attracts and retains the best and brightest from around the globe and we are proud to be home to the highest concentration of young adults of any of the 25 largest cities in the country. In July 2017, we released the first citywide plan in more than fifty years, Imagine Boston 2030. Shaped by more than 15,000 voices, this plan lays the framework and vision for our future. With Imagine Boston 2030, we are ready to welcome Amazon’s second North American headquarters.</p>
                </div>
              </div>
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterOne} className="ch-i" />
                </div>
              </div>
            </div>
          </div>
          <div className="ch ch--even">
            <div className="g">
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterTwo} className="ch-i" />
                </div>
              </div>
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Your Hub of Skilled Talent</h2>
                  <div className="t--info">Boston boasts a highly-experienced workforce which is both trained and experienced in the skills Amazon needs as it continues to grow.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">As the epicenter of world-class higher education, the region is home to 75 institutions of higher learning with a collective enrollment of 300,000 students. Boston’s workforce is as diverse as it is talented with a foreign born population representing over 100 countries. Our strong network of public, private and higher education partners are passionately committed to growing the talent pipeline and connecting these workers to the businesses that need them, a proven decision driver for global companies choosing to grow their business in Boston.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ch ch--odd">
            <div className="g">
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Boston, Your Home</h2>
                  <div className="t--info">Strategically located within the urban fabric of East Boston and Revere, the unique 161-acre Suffolk Downs site offers the thriving, healthy and viable environment that Amazon is seeking for its second corporate headquarters.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">As one of the largest development sites in the Northeast, Suffolk Downs enjoys the advantage of providing a blank canvas for the HQ2 development — this area has the flexibility to not only meet and exceed Amazon’s current goals, it will also be able to evolve with the ever-changing needs of the company.</p>
                </div>
              </div>
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterThree} className="ch-i" />
                </div>
              </div>
            </div>
          </div>
          <div className="ch ch--even">
            <div className="g">
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterFour} className="ch-i" />
                </div>
              </div>
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Boston, Your Community Partner</h2>
                  <div className="t--info">The City of Boston looks forward to fostering a long-term partnership with Amazon that will support the development of Amazon’s second North American headquarters while ensuring the city stays true to its principles of guiding inclusive growth thoughtfully and responsibly in Boston’s neighborhoods.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s500 lh-300">This chapter has been organized into three categories: Investments, Incentives, and Initiatives. Each category presents opportunities for collaboration with Amazon as we work together in building a long-term partnership to enhance the experience of both our residents and Amazon employees in the city. Boston looks forward to discussing this chapter in further detail with Amazon.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ch ch--odd">
            <div className="g">
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">There's More</h2>
                  <div className="t--info">Boston is a rapidly growing, increasingly diverse, and well-educated city with opportunities for all.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">Boston would be thrilled to welcome Amazon’s second North American headquarters to our city. As part of our response to Amazon’s Request for Proposal, this chapter provides information requested.</p>
                </div>
              </div>
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterFive} className="ch-i" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
