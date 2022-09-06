import React from 'react';
import '@nevermined-io/styles/lib/esm/styles/globals.scss'
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Box, BoxItem} from '@site/src/components/box';
import { UiText } from '@nevermined-io/styles'
import { BEM } from '@nevermined-io/styles'
import styles from './index.module.scss';

const b = BEM('nvm', styles)

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={b('banner')}>
      <div className={b('container')}>
        <UiText type='h2' variants={['heading']} className={b('title')}>{siteConfig.title}</UiText>
        
        <UiText type='p' className={b('description')}>{siteConfig.tagline}</UiText>
      </div>
    </header>
  );
}

const FeatureList: BoxItem[] = [
  {
    title: 'Nevermined',
    className: b('box'),
    link: 'docs/getting-started/what-is-nvm',
    Svg: require('@site/static/nevermined/neverminedDocs.svg').default,
    description: (
      <>
        Nevermined in detail about what is it, for what is usefull and use cases
      </>
    ),
  },
  {
    title: 'Integration',
    className: b('box'),
    link: 'docs/catalog/intro',
    Svg: require('@site/static/nevermined/integrationDocs.svg').default,
    description: (
      <>
        All the documentation that you need to start to integrate Nevermined
        in your project
      </>
    ),
  },
  {
    title: 'Tutorials',
    className: b('box'),
    link: 'docs/category/tutorials',
    Svg: require('@site/static/nevermined/tutorialsDocs.svg').default,
    description: (
      <>
        Tutorials which will guide you, step by step, how you can achieve different
        features easly in your project with Nevermined
      </>
    ),
  }
];

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={b('boxes')}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Box key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
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
    </Layout>
  );
}
