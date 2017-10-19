import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/footer'

import './index.css'
import logo from '../images/logo.svg'

const Header = () => (
  <header className="h" role="header">
    <div className="lo" style={{paddingLeft: 20}}>
      <a href="#" className="lo-l">
        <img src={logo} alt="City of Boston ❤︎ Amazon" className="lo-i" style={{width: 270}} />
      </a>
    </div>
    <a href="https://www.boston.gov" className="s" title="Boston.gov">
      <img src="https://patterns.boston.gov/images/public/seal.svg" alt="City of Boston" className="s-i" style={{maxHeight: 125}} />
    </a>
    <nav className="nv-h">
      <ul className="nv-h-l">
        <li className="nv-h-l-i"><a href="https://www.boston.gov/departments/economic-development" title="Economic Development" className="nv-h-l-a">Economic Development</a></li>
        <li className="nv-h-l-i"><a href="https://imagine.boston.gov" title="Imagine Boston 2030" className="nv-h-l-a">Imagine Boston 2030</a></li>
        <li className="nv-h-l-i"><a href="https://www.boston.gov" title="Boston.gov" className="nv-h-l-a">Boston.gov</a></li>
      </ul>
    </nav>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="City of Boston Amazon Pitch"
      meta={[
        { name: 'description', content: 'City of Boston ❤︎ Amazon ' },
      ]}
    >
      <link rel="stylesheet" type="text/css" href="https://patterns.boston.gov/css/public.css" />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
