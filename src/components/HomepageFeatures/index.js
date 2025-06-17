import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUsers, faCog, faPlane, faRobot, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';


const listStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const listItemStyles = {
  marginBottom: '10px',
};

const HomepageFeatures = () => (
            <div className={clsx('container', styles.pageContainer, 'mx-auto', 'px-4', 'py-4', 'md:px-6', 'md:py-6', 'lg:px-8', 'lg:py-8')}>


<h1>Getting started</h1>
      <p>Welcome to our Lab Guides Repository! Here, our team has curated a collection of lab guides designed to empower you to independently learn in your personal development environments. Each guide is crafted with detailed instructions and best practices, ensuring you have the resources needed to succeed. 
      <br />
      <br />

        Should you require further assistance or have additional questions, we invite you to explore our <u><a href="https://www.servicenow.com/community/next-experience-articles/next-experience-center-of-excellence/ta-p/2332092">Next Experience Center of Excellence</a></u>, where you’ll find an array of articles and resources for deeper guidance and support. Happy experimenting!
      </p>
<br/>
      <h1>Next Experience Resources</h1>

      <ul style={listStyles}>
        <li style={listItemStyles}><u><a href="https://www.servicenow.com/community/next-experience-articles/next-experience-center-of-excellence/ta-p/2332092">Next Experience Center of Excellence</a></u> - Collection of articles and resources.</li>
        <li style={listItemStyles}><u><a href="https://www.youtube.com/playlist?list=PL3rNcyAiDYK2Bgzj4mRdtfxMpGkI5KXBJ">You & I Builder Live</a></u> - Unrehearsed live technical show creating apps and configuring workspaces on UI Builder, aimed at a more technical audience but still accessible for beginners. Live on the 2nd and 4th thursday of every month.</li>
        <li style={listItemStyles}><u><a href="https://www.servicenow.com/community/next-experience-blog/next-experience-academy-upcoming-and-recorded-sessions/ba-p/2272673">Next Experience Academy</a></u> - Monthly webinar focused on providing the latest information about Next Experience and related products, aimed at an Admin/Product Owner persona. Live on the 3rd wednesday of every month. </li>
        <li style={listItemStyles}><u><a href="https://linktr.ee/sndevs">SNDevs</a></u> - Community composed of people who work on ServiceNow. We have a channel there where you can ask questions: #next-experience-uib-workspace. </li>
      </ul>
<br/>
      <h1>Labs</h1>

      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-2 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-50')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ title, description, to, icon, target }) => (
<li className={clsx('p-6 md:mt-6 lg:mt-8 pb-2 md:pb-2 lg:pb-2')}>
    <div className={clsx('flex items-start')}>
        <div className={clsx('flex-shrink-0')}>
            <Link to={to} className={clsx('hover:no-underline')} target={target}>
                <div className={clsx('flex items-center justify-center h-12 w-12 rounded-md bg-nowinfblue-100 hover:bg-nowinfblue-200 text-nowwasabi hover:text-nowwasabi/70 dark:bg-nowwasabi dark:hover:bg-nowwasabi/70 dark:text-white dark:hover:text-white')}>
                    <FontAwesomeIcon className={clsx('')} icon={icon} alt={title} />
                </div>
            </Link>
        </div>
        <div className={clsx('ml-4')}>
            <Link to={to} className={clsx('hover:no-underline group')} target={target}>
                <div className={clsx('group-hover:text-nowwasabi')}>
                    <h4 className={clsx('text-xl font-extrabold text-nowinfblue-100 group-hover:text-nowwasabi dark:text-white dark:group-hover:text-nowwasabi/70')}>
                        {title}
                    </h4>
                    <p className={clsx('text-lg mt-2 leading-6 text-nowinfblue-100 group-hover:text-nowwasabi dark:text-nowwasabi dark:group-hover:text-nowwasabi/70')}>
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    </div>
</li>


);
export default HomepageFeatures;

const FeatureList = [

  {
    title: 'Migrating to workspaces Lab',
    icon: faFileCode,
    description: (
      <>
      <div className="button-homepage-yokohama" style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}>
      🇯🇵️ Yokohama
    </div>
    
      <br/>
      <strong>Beginner Level</strong>
      <br/>

      Get ready to roll up your sleeves and dive into five hands-on exercises designed to help builders, admins, and implementation pros get comfortable working in UI Builder. You'll explore everything from page structure and data sources to component binding and client-side actions—building your skills step by step. Just a heads-up: be sure to complete Exercise 4 (Page Collection) before starting Exercise 5 (Recommended Actions), since it sets up the foundation you’ll need for that final step. Let’s get started!
 
      <br/>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-workspaces">Workspaces</div>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-uib">UI Builder</div>
      </>
    ),
    to: '/labs/LAB3367-K25-Migrating-to-Workspaces/overview',
    target: '_self',
  },/*
  {
    title: 'Build a Killer Experience: Animal Shelter Edition! Lab',
    icon: faFileCode,
    description: (
      <>
      <div className="button-homepage-yokohama" style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}>
      🇯🇵️ Yokohama
    </div>
    
      <br/>
      <strong>Advanced Level</strong>
      <br/>

      LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIGENDI VOLUPTATES. LABORIOSAM, VOLUPTAS. IN CULPA, VOLUPTATE, VOLUPTAS. 
      <br/>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-workspaces">Workspaces</div>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-uib">UI Builder</div>
      </>
    ),
    to: '/labs/CCL1344-K25-BAKE-Shelter/overview',
    target: '_self',
  },
*/
  {
    title: 'Crafting Workspaces Like a Pro: A Hands-On Learning Adventure! Lab',
    icon: faFileCode,
    description: (
      <>
      <div className="button-homepage-washdc" style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}>
      🇺🇸️ Washington D.C.
    </div>
    
      <br/>
      <strong>Beginner Level</strong>
      <br/>

      Dive into the world of workspace mastery in this hands-on session! Join this session to learn the essentials of crafting workspaces like a pro. From navigating menus to unlocking the art of theming and creating variants, this lab is a gateway to understanding configurable workspaces. Perfect for beginners, it's a learning adventure not to be missed! Get ready to click, customize, and conquer the basics.
      <br/>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-workspaces">Workspaces</div>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-uib">UI Builder</div>
      </>
    ),
    to: '/labs/LAB2050-K24-Intro-to-Workspaces/overview',
    target: '_self',
  },
  {
    title: 'Advanced workspace configuration with UI Builder Lab',
    icon: faFileCode,
    description: (
      <>
            <div className="button-homepage-washdc" style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}>
            🇺🇸️ Washington D.C.</div>
      <br/>
      <strong>Advanced Level</strong>
      <br/>

      In this session, you will learn advanced strategies for customizing and building out workspaces like using page collections, declarative actions, custom data resources, next experience developer tools, and more. This session assumes you have hands-on UI Builder experience and exposure to workspaces already.
      <br/>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-workspaces">Workspaces</div>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-uib">UI Builder</div>

      </>    
      ),
    to: '/labs/CCL1200-K24-Adv-Workspaces/overview',
    target: '_self',
  },
  {
    title: 'Build a killer single page app with UI Builder Lab',
    icon: faFileCode,
    description: (
      <>
            <div className="button-homepage-washdc" style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}>
            🇺🇸️ Washington D.C</div>
      <br/>
      <strong>Intermediate Level </strong>
      <br/>

      In this lab you will use UI Builder to create a single-page note-taking app. You will learn different UI Builder techniques and strategies you can use to build your own experiences to solve problems at your company.
      <br/>
      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-uib">UI Builder</div>

    </>
    ),
    to: '/labs/CCL1199-K24-Killer-SAP/overview',
    target: '_self',
  },


  {
    title: 'Level up your ServiceNow style: Your roadmap to advanced theming mastery Lab',
    icon: faFileCode,
    description: (
      <>
            <div className="button-homepage-washdc" style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}>
            🇺🇸️ Washington D.C.</div>
      <br/>

      <strong>Intermediate Level</strong>
      <br/>
      Explore advanced theming in this hands-on lab, focusing on Next Experience custom themes. Join this lab as we navigate through the nuances of enhancing your ServiceNow® style with custom themes. Learn when it's best to use different theming tools and walk you through finding specific theming hooks and making changes to themes. Uncover the practical side of theming mastery and level up your color game seamlessly.
      <br/>

      <div style={{ marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}class="button-homepage-theming">Theming</div>

    </>
    ),
    to: '/labs/CCL1319-K24-Theming-Lab/overview',
    target: '_self',
  },


];