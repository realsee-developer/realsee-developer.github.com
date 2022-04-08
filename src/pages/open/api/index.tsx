import * as React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { API } from '@stoplight/elements'
// import '@stoplight/elements/styles.min.css'
import './index.css'
import './custom.css'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={`如视开放 API${siteConfig.title}`} description="开放共建三维生态，互联大千世界">
      <BrowserOnly>{() => <API layout="sidebar" hideTryIt={false} router='hash' basePath='' apiDescriptionUrl={`${siteConfig.baseUrl}openapi.yaml`} />}</BrowserOnly>
    </Layout>
  )
}
