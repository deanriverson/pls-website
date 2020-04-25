/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { graphql, useStaticQuery } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/*<Header siteTitle={data.site.siteMetadata.title}/>*/}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor: 'black',
        }}
      >
        <main style={{ flexGrow: 1 }}>{children}</main>
        <footer
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: `rgba(255, 255, 255, 0.1)`,
            color: '#444',
            padding: '0.5rem 0',
          }}
        >
          <div>
            © {new Date().getFullYear()}, Pleasing Software
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
