import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import logo from '../images/logo.svg'

const Header = () => (
  <header className="h" role="header">
    <div className="lo" style={{paddingLeft: 20}}>
      <a href="#" className="lo-l">
        <img src={logo} alt="City of Boston ❤︎ Amazon" className="lo-i" style={{width: 270}} />
      </a>
    </div>
    <a href="#" className="s">
      <img src="https://patterns.boston.gov/images/public/seal.svg" alt="City of Boston" className="s-i" style={{maxHeight: 125}} />
    </a>
    <nav className="nv-h">
      <ul className="nv-h-l">
        <li className="nv-h-l-i"><a href="https://boston.gov/public-notices" title="Public Notices" className="nv-h-l-a">Public Notices</a></li>
        <li className="nv-h-l-i"><a href="https://boston.gov/pay-and-apply" title="Pay and Apply" className="nv-h-l-a">Pay and Apply</a></li>
        <li className="nv-h-l-i"><a href="https://boston.gov/feedback" title="Feedback" className="nv-h-l-a">Feedback</a></li>
      </ul>
    </nav>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="City of Boston Amazon Pitch"
      meta={[
        { name: 'description', content: 'City of Boston Amazon Pitch' },
      ]}
    >
      <link rel="stylesheet" type="text/css" href="https://patterns.boston.gov/css/public.css" />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
