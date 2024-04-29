import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUsers, faCog, faPlane, faRobot, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';


const HomepageFeatures = () => (
  <div className={clsx('container max-w-xl mx-auto px-4 md:px-6 md:py-7 lg:px-8 lg:py-9 lg:max-w-screen-xl pt-4 md:pt-6 lg:pt-8 ')}>
      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-50')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ title, description, to, icon, target }) => (
  <li className={clsx('p-6 md:mt-6 lg:mt-8 pb-2 md:pb-2 lg:pb-2')}>
    <div className={clsx('flex')}>
        <div className={clsx('flex-shrink-0')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <div className={clsx('flex items-center justify-center h-10 w-10 rounded-md bg-nowinfblue-100 hover:bg-nowinfblue-200 text-nowwasabi hover:text-nowwasabi/70 dark:bg-nowwasabi dark:hover:bg-nowwasabi/70 dark:text-white dark:hover:text-white')}>
            <FontAwesomeIcon className={clsx('')} icon={icon} alt={title} />
            </div>
          </Link>
        </div>
        <div className={clsx('ml-4 mr-4')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <h4 className={clsx('text-xl leading-6 font-extrabold text-nowinfblue-100 hover:text-nowwasabi dark:text-white dark:hover:text-white/70')}>
              {title}
            </h4>
            <p className={clsx('text-md mt-2 leading-6 text-nowinfblue-100 hover:text-nowwasabi dark:text-nowwasabi dark:hover:text-nowwasabi/70')}>
              {description}
            </p>
          </Link>
        </div>
    </div>
  </li>
);
export default HomepageFeatures;

const FeatureList = [

  {
    title: 'Crafting Workspaces Like a Pro: A Hands-On Learning Adventure! Lab',
    icon: faFileCode,
    description: (
      <>
      <div class="button-homepage-washdc">Washington D.C.</div>
      <div class="button-homepage-workspaces">Workspaces</div>
      <div class="button-homepage-uib">UI Builder</div>
      <br/>
      <strong>Beginner Level  - </strong>
      Dive into the world of workspace mastery in this hands-on session! Join this session to learn the essentials of crafting workspaces like a pro. From navigating menus to unlocking the art of theming and creating variants, this lab is a gateway to understanding configurable workspaces. Perfect for beginners, it's a learning adventure not to be missed! Get ready to click, customize, and conquer the basics.
      </>
    ),
    to: '/labs/LAB2050-K24-Intro-to-Workspaces/overview',
    target: '_self',
  },

  {
    title: 'Build a killer single page app with UI Builder Lab',
    icon: faFileCode,
    description: (
      <>
      <div class="button-homepage-washdc">Washington D.C</div>
      <div class="button-homepage-uib">UI Builder</div>
      <br/>
      <strong>Intermediate Level - </strong>
      In this lab you will use UI Builder to create a single-page note-taking app. You will learn different UI Builder techniques and strategies you can use to build your own experiences to solve problems at your company.
    </>
    ),
    to: '/labs/example-lab/overview',
    target: '_self',
  },

  {
    title: 'Advanced workspace configuration with UI Builder Lab',
    icon: faFileCode,
    description: (
      <>
      <div class="button-homepage-washdc">Washington D.C.</div>
      <div class="button-homepage-uib">UI Builder</div>
      <div class="button-homepage-workspaces">Workspaces</div>

      <br/>
      <strong>Advanced Level - </strong>
      In this session, you will learn advanced strategies for customizing and building out workspaces like using page collections, declarative actions, custom data resources, next experience developer tools, and more. This session assumes you have hands-on UI Builder experience and exposure to workspaces already.
      </>
    ),
    to: '/labs/example-lab/overview',
    target: '_self',
  },

  {
    title: 'Level up your ServiceNow style: Your roadmap to advanced theming mastery Lab',
    icon: faFileCode,
    description: (
      <>
      <div class="button-homepage-washdc">🇺🇸️ Washington D.C.</div>
      <div class="button-homepage-theming">Theming</div>
      <br/>
      <strong>Intermediate Level - </strong>
      Explore advanced theming in this hands-on lab, focusing on Next Experience custom themes. Join this lab as we navigate through the nuances of enhancing your ServiceNow® style with custom themes. Learn when it's best to use different theming tools and walk you through finding specific theming hooks and making changes to themes. Uncover the practical side of theming mastery and level up your color game seamlessly.
    </>
    ),
    to: '/labs/example-lab/overview',
    target: '_self',
  },


];