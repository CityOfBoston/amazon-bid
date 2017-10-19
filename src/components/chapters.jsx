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
            <h2 className="sh-title">Chapters</h2>
          </div>
          <div className="ch">
            <div className="g">
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Chapter title</h2>
                  <div className="t--info">Some larger text will go here.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">Here is some longer text</p>
                </div>
              </div>
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterOne} className="ch-i" />
                </div>
              </div>
            </div>
          </div>
          <div className="ch">
            <div className="g">
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterTwo} className="ch-i" />
                </div>
              </div>
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Chapter title</h2>
                  <div className="t--info">Some larger text will go here.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">Here is some longer text</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ch">
            <div className="g">
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Chapter title</h2>
                  <div className="t--info">Some larger text will go here.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">Here is some longer text</p>
                </div>
              </div>
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterThree} className="ch-i" />
                </div>
              </div>
            </div>
          </div>
          <div className="ch">
            <div className="g">
              <div className="g--6">
                <div className="ch-c">
                  <img src={chapterFour} className="ch-i" />
                </div>
              </div>
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Chapter title</h2>
                  <div className="t--info">Some larger text will go here.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">Here is some longer text</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ch">
            <div className="g">
              <div className="g--6">
                <div className="ch-t ch-c">
                  <h2 className="h2 t--upper m-b300">Chapter title</h2>
                  <div className="t--info">Some larger text will go here.</div>
                  <hr className="hr hr--sq" />
                  <p className="t--s400">Here is some longer text</p>
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
