/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'

import module from './layout.module.scss'
import 'normalize.css'
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </Helmet>
      {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
      <main className={module.main}>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
