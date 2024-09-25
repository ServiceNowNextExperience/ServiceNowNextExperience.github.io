import React, { useState } from 'react';
import Layout from '@theme/Layout';
import DevelopmentStories from '../components/DevelopmentStories'; // Adjust the path as necessary
import styles from './buildAlongMonth.module.css'; // Make sure to create a corresponding CSS module file
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


function BAMHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="headerContent">
                    <div className="headerText">
                        <h1 className="hero__title customHeader">Welcome to Build Along Month</h1>
                        <p className="hero__subtitle customSubtitle">You & I Builder Live</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

const listStyles = {
    listStyleType: 'disc',
    paddingLeft: '20px',
};

const listItemStyles = {
    marginBottom: '10px',
};

function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.collapsibleSection}>
            <h2 onClick={() => setIsOpen(!isOpen)} className={styles.collapsibleHeader}>
                <span>{title}</span> <span>{isOpen ? '▲' : '▼'}</span>
            </h2>
            {isOpen && <div className={styles.collapsibleContent}>{children}</div>}
        </div>
    );
}

export default function BuildAlongMonth() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title="Build Along Month">
            <BAMHeader />

            <div className={clsx('container', styles.pageContainer, 'mx-auto', 'px-4', 'py-4', 'md:px-6', 'md:py-6', 'lg:px-8', 'lg:py-8')}>

                <div className={styles.welcomeBanner}>
                    <h1>Introduction</h1>

                    <p>For the month of August, <b>You & I Builder Live</b> will host “Build Along Month”, where developers will have the opportunity to follow along as Brad and Maria Gabriela build a ServiceNow application from scratch in UI Builder using  Agile methodology. </p>

                    <p>Our goal in “Build Along Month” is to help you:</p>
                    <ul style={listStyles}>
                    <li style={listItemStyles}>
                        Become more familiar with UI Builder 
                        </li>
                        <li style={listItemStyles}>
                        Learn more about UX concepts 
                        </li>
                        <li style={listItemStyles}>
                        Get real-life experience using Agile as you might in your job as a Developer or Administrator 
                        </li>
                        <li style={listItemStyles}>
                        Prepare you for future job opportunities
                        </li>
                    </ul>

                    <p>These stories will guide you through building an application that will allow an end user to go to conferences or other networking events and grab information quickly from people they meet so they can follow up later. It's meant to be quick to use - Users can whip out their phone, open the form, put in the information needed, and then keep moving on to the next session.</p>


                    <p className={styles.storyHints}>
                        Here are the livestreams where you can watch us working through the UI Builder stories:</p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}>
                            <a href="https://www.youtube.com/live/1Hcr4odti6A?si=tP0jrwuH24Zxsj3F" target="_blank"><u>Livestream 1 - August 8th, 2024</u></a>
                            </li>
                            <li style={listItemStyles}>
                            <a href="https://www.youtube.com/live/0e8Xkr5okbM?si=Plz-xjZP-pxJRU3d" target="_blank"><u>Livestream 2 - August 22nd, 2024</u></a>
                            </li>
                        </ul>
                    
                    <h3>Contributing</h3>
                    <p>If you have any feedback about this project, want to contribute more stories, or want to provide helpful links for any of the stories below, drop by the <a href ="https://github.com/ServiceNowNextExperience/ServiceNowNextExperience.github.io/discussions"><u>discussions section</u></a> of this github repository and let us know. Please use labels to tag your posts appropriately, and thanks in advance!</p>
                    <p>There will be a changelog maintained at the bottom of the page, and the <a href="https://github.com/ServiceNowNextExperience/ServiceNowNextExperience.github.io/blob/source/CHANGELOG.md"><u>github repository</u></a>, to keep track of changes as they are published. </p>
                    <p><a href="https://github.com/ServiceNowNextExperience/ServiceNowNextExperience.github.io/discussions/51"><u>Here is the list</u></a> of known issues that you might encounter.</p>
                </div>

                <CollapsibleSection title="Project Approach">
                <div className={styles.questionsSection}>

                    <p>You can approach this project in one of two ways: </p>
                    <ul style={listStyles}>
                        <li style={listItemStyles}>
                        Attempt to build the application using the stories* below in the order they are outlined on your own, and if you get stuck you can watch the livestreams provided. 
                        </li>
                        <li style={listItemStyles}>
                        Watch the videos first to get a sense of what we are doing, then go and build your own application using the stories below. 
                        </li>
                    </ul>
                    <p>Whichever way you decide to go about it, you are free to complete this project as you wish: either stick to the letter of the requirement or go above and beyond what you're being asked to do. Be as creative as you want to be, or just build a baseline application. This project is what you make of it – it's all up to you! </p>
                    <p><i>*See the “What is a story?” section below if you are not yet familiar with this term. </i></p>
                </div>
                </CollapsibleSection>

                <CollapsibleSection title="Preparation">
                    <div className={styles.questionsSection}>

                        <p>If you are brand new to the ServiceNow platform and/or UI Builder, you will most likely have trouble using the stories below right away. We are making a few assumptions as we write this, and we expect you are familiar with: </p>

                        <ul style={listStyles}>
                            <li style={listItemStyles}><b>ServiceNow Administration</b> - You either have your Certified System Administrator Certification or have 3-6 months of working in a ServiceNow Administrator capacity. The tasks below will expect you to be familiar with the platform, but especially UI Builder. You can attempt the tasks using whichever tools you are most comfortable using, for example if you prefer App Engine Studio then go for it, but if you don't want to use AES you don't have to. </li>

                            <li style={listItemStyles}><b>Technical knowledge</b> - You have some background or have researched how to work with <u><a href="https://www.atlassian.com/agile">Agile stories</a></u>, and you can identify what you don't know and google your way to success. <a href="https://www.youtube.com/watch?v=RtQ3tpq-RuE"><u>Here is a video</u></a> that can serve as a good introduction to this. </li>

                            <li style={listItemStyles}><b>UI Builder</b> - UI Builder is a ServiceNow developer tool that allows you to create front-end user experiences on the Now Platform. To learn more about UI Builder before you begin “Build Along Month,” check out: 
                                <ul style={listStyles}>
                                    <li style={listItemStyles}><a href="https://nowlearning.servicenow.com/lxp/en/now-platform/ui-builder-fundamentals-washington?id=learning_course_prev&course_id=a462a97fc35439185922751ce00131bd" target="_blank"><u>NowLearning - UI Builder Fundamentals (Washington)</u></a></li>
                                    <li style={listItemStyles}><a href="https://servicenownextexperience.github.io/labs/LAB2050-K24-Intro-to-Workspaces/overview" target="_blank"><u>Crafting Workspaces Like a Pro: A Hands-On Learning Adventure! Lab</u></a></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="What is a story?">
                    <div className={styles.storySection}>
                        <p>A "story," or “user story,” refers to a specific piece of work that needs to be completed to contribute to the overall functionality of an application. Stories are used within an Agile development framework, which is a method of software development that emphasizes incremental, iterative work sequences commonly known as sprints. </p>
                        <p>Think of a story as a clear and concise description of a feature or task from the perspective of the end user. It outlines who will use the feature (the persona), what they want to do, and why they want to do it (the goal or benefit). This is often structured in a simple template: "As a [persona], I want to [do something] so that [I can achieve some result]." </p>
                        <p>Each story also includes acceptance criteria, which are the specific requirements that must be met for the story to be considered complete. These criteria are essential as they guide developers to know when they have achieved the goals of the story. </p>
                        <p>In ServiceNow, stories are used to track the development of new applications, enhancements to existing applications, or other updates that need to be made to the ServiceNow instance. Working on stories allows developers to focus on small, manageable sections of work that contribute to larger projects, ensuring that each piece of the project is done to a certain standard and is delivering value to the users. </p>
                        <p>In the stories below, you will find information relaying what is expected for the story to be considered "Complete". It will only provide the bare minimum guidance you will need to fulfill these tasks; it is up to you to figure out how to execute them. Feel free to be as creative as you'd like. In a real-world job environment, you'd be expected to adhere to the stories very strictly, but for the purposes of this exercise you can do whatever you want with your application. You can approach the goal with whatever technology, philosophy, or product you might want to use, just make sure you have a working app at the end. </p>
                    </div>
                </CollapsibleSection>


                <CollapsibleSection title="Where to go if you are stuck">
                    <div className={styles.questionsSection}>
                        <p><b>The best place to ask questions about this project is going to be in the <a href ="https://github.com/ServiceNowNextExperience/ServiceNowNextExperience.github.io/discussions"><u>discussions section</u></a> of this github repository.</b> Be sure to use good <a href="https://xyproblem.info/" target="_blank"><u>question asking best practice</u></a>.</p>
                        
                        <p>The stories provided below aren't going to give you all the information you need, nor will they walk you through each task step by step like a lab guide typically does. It's up to you to google and do research to achieve the desired results, just like if you were receiving tasks to do at your job. Some of the stories will provide a help link or some extra guidance, but for the most part it's time to practice your Google-Fu! </p>

                        <p> Another good place to highlight is the SNDevs slack server. You can grab an invite by going to <a href="https://SNDevs.com" target="_blank"><u>SNDevs.com</u></a>. Once you have your account created, here's the two channels you should check out. Be sure to link to this page when you ask questions over there so people know what they're helping you with.</p>
                        <ul style={listStyles}>
                        <li style={listItemStyles}>
                            <code>#next-experience-uib-workspace</code> - for asking questions about UI Builder/Workspace related issues.
                            </li>
                            <li style={listItemStyles}><code>#you-and-i-build-along-month</code> - for help on any of the extra, non-UI Builder related stories.
                            </li>
                        </ul>


                        <p>Important things to include in your posts: </p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}>
                                What are you trying to solve? 
                                </li>
                            <li style={listItemStyles}>
                                What do you expect to happen? 
                                </li>
                            <li style={listItemStyles}>
                                What is happening from your observations? 
                                </li>
                            <li style={listItemStyles}>
                                What is the trouble you are encountering? 
                                </li>
                            <li style={listItemStyles}>
                                What have you tried so far? 
                                </li>
                        </ul>
                                
                    </div>
                </CollapsibleSection>
               
                <CollapsibleSection title="Share your Success!">
                    <div className={styles.uiBuilderSection}>
                        <p>Keep us posted on your progress on Linkedin! We'd love to see what you make of this, so be sure to use these hashtags on your LinkedIn posts:</p>
                        <p><code>#ServiceNow #ServiceNowDev #YIBL #BuildAlongMonth #UIBuilder</code></p>
                        
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Setting up your instance">
                    <div className={styles.uiBuilderSection}>
                        <p>You can build this application on any instance you would like, including your PDI, you just need to prepare a few things. First you need to download the Update Set and commit it in your instance, and next you should make sure that UI Builder is on the latest version. Ideally you will use this project on an instance that is on the Xanadu version or above, and make sure you upgrade your UI Builder plugin from the Application manager. </p>
                        <h3>UI Builder</h3>
                        <p> Follow these instructions to update UI Builder from the Application Manager:</p>

                            <ol className={styles.orderedList}>
                                <li className={styles.listItem}>Go to the "All" menu.</li>
                                <li className={styles.listItem}>Type in "Plugins".</li>
                                <li className={styles.listItem}>Select the "Plugins" application menu item under "System Definition".</li>
                                <li className={styles.listItem}>To make sure you have the most recent version from the Store, click the "Sync now" button.</li>
                                <li className={styles.listItem}>Type "UI Builder" into the search bar. The plugin name is <code>sn-ui-builder</code>.</li>
                                <li className={styles.listItem}>If there are updates, UI Builder will show up under the "Updates" tab of the Application Manager.</li>
                            </ol>
                        

                        <h3>Update set</h3>
                        <p>Here is the update set you're going to need to load into your instance to get the application files you can start with: </p>
                            <ul style={listStyles}>
                                <li style={listItemStyles}>Download Update Set - <a href="https://servicenownextexperience.github.io/downloads/YIBL_BAM_Conference-Notes_v1.0.01.zip" download="YIBL_BAM_Conference-Notes_v1.0.01.zip"><u>📝 YIBL_BAM_Conference-Notes_v1.0.01 (Last updated 7.28.2024)</u></a></li>
                                <li style={listItemStyles}>The name of the update set once imported in to your instance is "BAM - You & I Builder Live! Conference Notes". If you get any update set preview problems, just click "Accept Remote Update" and commit the update set.</li>
                            </ul>
                       

                        <p>In case you are unfamiliar or need a refresher, here are some helpful instructions on how to upload and commit a remote update set:</p>
                            <ul style={listStyles}>
                            <li style={listItemStyles}>
                                <a href="https://docs.servicenow.com/bundle/xanadu-application-development/page/build/system-update-sets/task/t_PreviewARemoteUpdateSet.html">Preview a remote update set</a>
                                </li>
                                <li style={listItemStyles}>
                                <a href="https://docs.servicenow.com/bundle/xanadu-application-development/page/build/system-update-sets/task/t_CommitAnUpdateSet.html">Commit a remote update set</a>
                                </li>
                            </ul>
                        
                        <h3>Roles</h3>
                        <p>To prevent any errors when trying to edit the workspace, be sure to give yourself the <code>x_snc_bam_you_i_0.user</code> and <code>x_snc_bam_you_i_0.admin</code> roles <b>after</b> you have installed the update set. </p>
                    </div>
                </CollapsibleSection>

                <DevelopmentStories />
                <br />
                <CollapsibleSection title="Changelog">
                    <div className={styles.questionsSection}>


                    <p>2024.08.09 - Update 2 </p> 
                        <ul style={listStyles}>
                            <li style={listItemStyles}>
                                
                            </li>

                            <li style={listItemStyles}>
                                
                            </li>
                        </ul>


                        <p>2024.08.07 - Update 1 </p> 
                        <ul style={listStyles}>
                            <li style={listItemStyles}>Added back a description of the app we're building that accidentally got removed. </li>

                            <li style={listItemStyles}>Added information where if you encounter an error stating "Private application scope" when you go to build the pages in UI Builder, you should give yourself the <code>x_snc_bam_you_i_0.user</code> and <code>x_snc_bam_you_i_0.admin</code> roles. </li>
                        </ul>


                        <p>2024.08.06 - Release </p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}>Initial release of stories. </li>

                            <li style={listItemStyles}>Updated all instances of "Form Component" to say "Form Component Bundle". </li>

                            <li style={listItemStyles}> Added changelog at bottom of page.
                            </li>
                            <li style={listItemStyles}> Added ability to filter by whether it's a UI Builder story or not.
                            </li>

                            <li style={listItemStyles}> Made it so checkboxed stories obeyed the filter. </li>
                        </ul>
                        
                      

                    </div>
                    
                </CollapsibleSection>
            </div>
        </Layout>
    );
}
