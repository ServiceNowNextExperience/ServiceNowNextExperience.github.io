import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="headerContent">
          <div className="headerText">
            <h1 className="hero__title customHeader">{siteConfig.title}</h1>
            <p className="hero__subtitle customSubtitle">{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageIntro(){
  return (
    <div className={clsx('container max-w-xl mx-auto px-4 md:px-6 md:py-7 lg:px-8 lg:py-9 lg:max-w-screen-xl pt-4 md:pt-6 lg:pt-8 ')}>  
      <h1>Getting started</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      <h1>Next Experience Resources</h1>

      <h1>Events</h1>
        <h2>Live</h2>
        <h2>Digital</h2>

      <h1>Who we are</h1>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}
