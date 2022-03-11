import * as React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { API } from '@stoplight/elements'
// import '@stoplight/elements/styles.min.css'
import './index.css'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`如视开放 API${siteConfig.title}`} description="开放共建三维生态，互联大千世界">
      {/* <API router='hash' basePath='/open/api' apiDescriptionUrl="https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/zoom/openapi.yaml" /> */}
      <API router='hash' basePath='path/' apiDescriptionUrl="/openapi.yaml" />
    </Layout>
  )
}
