import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '../components/HomepageFeatures'
import { debounce } from '@mui/material'
import { createAutoRunVR } from '../components/home/AutoRunVR'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import './index.css'

const AutoRunVR = createAutoRunVR()

const getWindowInnerHeight = () => {
  if (ExecutionEnvironment.canUseDOM) {
    return window.innerHeight
  }

  return 720
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  const [height, setHeight] = React.useState(getWindowInnerHeight() - 60)

  React.useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return
    const listener = debounce(() => {
      setHeight(window.innerHeight - 60)
    })

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return (
    <header className="hero hero--primary cover__header" style={{ height: height + 'px' }}>
      <AutoRunVR />
      <div className="cover__header_mask"></div>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link className="button button--secondary button--lg button--entry" to="/docs/front/3d-space/intro">
            进入阅读
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description="开放共建三维生态，互联大千世界">
      <BrowserOnly>
        {() => (
          <>
            <HomepageHeader />
            <main>
              <HomepageFeatures />
            </main>
          </>
        )}
      </BrowserOnly>

    </Layout>
  )
}
