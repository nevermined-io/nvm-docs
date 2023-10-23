import React, { ReactNode } from 'react'
import '@nevermined-io/styles/lib/esm/styles/globals.scss'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Box, BoxItem } from '@site/src/components/box'
import { UiText } from '@nevermined-io/styles'
import { BEM } from '@nevermined-io/styles'
import styles from './index.module.scss'
import nvmSVGIcon from '@site/static/nevermined/neverminedDocs.svg'
import integrationDocsSVGIcon from '@site/static/nevermined/integrationDocs.svg'
import tutorialPNGIcon from '@site/static/nevermined/tutorialsDocs.png'

const b = BEM('nvm', styles)

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={b('banner')}>
      <div className={b('container')}>
        <UiText type="h2" variants={['heading']} className={b('title')}>
          {siteConfig.title}
        </UiText>

        {siteConfig.customFields?.subtitle && (
          <UiText type="p" variants={['heading']} className={b('subtitle')}>
            {siteConfig.customFields.subtitle as ReactNode}
          </UiText>
        )}

        <UiText type="p" className={b('description')}>
          {siteConfig.tagline}
        </UiText>
      </div>
    </header>
  )
}

const FeatureList: BoxItem[] = [
  {
    title: 'Nevermined',
    className: clsx(b('box', ['main'])),
    link: 'docs/getting-started',
    Svg: nvmSVGIcon,
    description: <>What is Nevermined? And what can I use it for?</>,
    overlay: <div className={b('box-overlay')} />,
  },
  {
    title: 'SDK',
    className: b('box'),
    link: 'docs/nevermined-sdk/intro',
    Svg: integrationDocsSVGIcon,
    description: (
      <>
        Everything you need to know about using Nevermined via our SDK. For
        developers who want to use a low-level library.
      </>
    ),
  },
  {
    title: 'React Catalog',
    className: b('box'),
    link: 'docs/react-components/intro',
    png: tutorialPNGIcon,
    description: (
      <>
        Everything you need to know about using Nevermined via our Catalog. For
        developers who are using React.
      </>
    ),
  },
]

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={b('boxes')}>
      <div className="container">
        <div className={clsx('row', b('row'))}>
          <div className={clsx('col col--6', b('col'), b('gutter', ['main']))}>
            <Box {...FeatureList[0]} />
          </div>
          <div className={clsx('col col--6', b('col'))}>
            <div className={clsx('row', b('gutter'))}>
              <div className="col">
                <Box {...FeatureList[1]} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Box {...FeatureList[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} docs`}
      description="Everything about Nevermined, documentation and tutorials"
    >
      <div className={b('page-wrapper')}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>
      <div className="overlay" />
    </Layout>
  )
}
