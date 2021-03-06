import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const rootStyle = {
  width: "100%",
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div style={rootStyle}>
      <div style={{ width: "80%", height: "100%", maxWidth: 1024, maxHeight: 1024 }}>
        <Image/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
