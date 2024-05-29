"use strict";(self.webpackChunkservice_now_next_experience_github_io=self.webpackChunkservice_now_next_experience_github_io||[]).push([[3152],{17075:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(74848),o=i(28453);const s={id:"activity-3",title:"Exercise 3 - Activity 3",hide_table_of_contents:!0,draft:!1,sidebar_label:"Activity 3"},r=void 0,l={id:"ex3/activity-3",title:"Exercise 3 - Activity 3",description:"Unified Navigation Colors",source:"@site/labs/CCL1319-K24-Theming-Lab/ex3/3-activity-3.md",sourceDirName:"ex3",slug:"/ex3/activity-3",permalink:"/labs/CCL1319-K24-Theming-Lab/ex3/activity-3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"activity-3",title:"Exercise 3 - Activity 3",hide_table_of_contents:!0,draft:!1,sidebar_label:"Activity 3"},sidebar:"LAB2050K24",previous:{title:"Activity 2",permalink:"/labs/CCL1319-K24-Theming-Lab/ex3/activity-2"},next:{title:"Overview",permalink:"/labs/CCL1319-K24-Theming-Lab/ex4/overview"}},h={},a=[{value:"Unified Navigation Colors",id:"unified-navigation-colors",level:2},{value:"Browser tools",id:"browser-tools",level:2},{value:"Google Chrome",id:"google-chrome",level:3},{value:"Mozilla Firefox",id:"mozilla-firefox",level:3},{value:"Internet Explorer",id:"internet-explorer",level:3},{value:"Microsoft Edge",id:"microsoft-edge",level:3},{value:"Safari",id:"safari",level:3},{value:"Identifying what we want to change",id:"identifying-what-we-want-to-change",level:2},{value:"Updating our theming record",id:"updating-our-theming-record",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"unified-navigation-colors",children:"Unified Navigation Colors"}),"\n",(0,t.jsx)(n.p,{children:"We will use this as our example on how to make the changes you going to be making in the Challenges section. This is the general workflow you will follow to make almost all changes you want to make when it comes to custom theming. This is also typically the first thing that people change when they create a theme from Theme Builder and start customizing it."}),"\n",(0,t.jsx)(n.p,{children:"Note: The theming team is looking in to how to make editing the Unified Navigator an easier experience without leaving Theme Builder, so these specific steps might be moot in the future. But this still serves as a great example on how you will go about identifying what theming hooks to edit for any manual changes you want to make to your themes moving forward."}),"\n",(0,t.jsx)(n.h2,{id:"browser-tools",children:"Browser tools"}),"\n",(0,t.jsx)(n.p,{children:"The most important tool we will be using moving forward is the Browser Developer Tools. These vary in use in every browser, but they all share a few features, one of which is the Inspect tool. We will use this tool to inspect the HTML of the ServiceNow pages and identify what SCSS variables we will want to be editing in our themes to get the results we want."}),"\n",(0,t.jsx)(n.p,{children:"If you are unfamiliar with them, here is how you can access the browser tools in multiple different browsers. If these instructions aren't enough, i encourage you to google your specific browser and look up more thorough instructions for your specific use. The rest of the instructions in this lab will assume you are using Google Chrome as your browser."}),"\n",(0,t.jsx)(n.h3,{id:"google-chrome",children:"Google Chrome"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Command + Option + i (Mac)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ctrl + Shift + i (Windows/Linux)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Chrome settings menu in the top-right corner of your browser window and select ",(0,t.jsx)(n.code,{children:"More Tools"})," > ",(0,t.jsx)(n.code,{children:"Developer Tools"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mozilla-firefox",children:"Mozilla Firefox"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Command + Option + i (Mac)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ctrl + Shift + i (Windows/Linux)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the Chrome settings menu in the top-right"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"internet-explorer",children:"Internet Explorer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Pressing ",(0,t.jsx)(n.code,{children:"F12"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Command + Option + i (Mac)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ctrl + Shift + i (Windows/Linux)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the Chrome settings menu in the top-right"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"microsoft-edge",children:"Microsoft Edge"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Just like Internet Explorer, to open developer tools in Microsoft Edge simply press ",(0,t.jsx)(n.code,{children:"F12"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"safari",children:"Safari"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Develop menu in Safari\u2019s Advanced preferences"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Right-click on any page element and select Inspect Element"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Command + Option + i"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"identifying-what-we-want-to-change",children:"Identifying what we want to change"}),"\n",(0,t.jsx)(n.p,{children:"We want to change the background color of the Unified Navigation from white to our Infinite blue color. Here are the steps required to identify the correct theming hook we want to modify."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Starting in the platform view of ServiceNow, pin the ",(0,t.jsx)(n.strong,{children:"All menu."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open browser tools."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Open the "Elements" tab, or the equivalent that shows you the HTML structure of your browser page.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on the Inspect arrow. This is typically in the top left of the browser tools."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"The way the Inspect arrow works is complex but straightforward. As you hover over different parts of the browser, it will highlight the HTML element that you are hovering over in the HTML body in the browser tools. It will also visually show you the constraints of the element on the page you are inspecting and give you a brief summary of the properties of the element you are inspecting. Once you click on an element, you will be taken to the specific location it's at in the HTML and be shown the properties below it. We will use this to learn what we need to edit to get the results we desire."}),(0,t.jsx)(n.p,{children:"The rest of the instructions describe the general way you'll be looking for the theming hooks, but just know that it's more of an art than a science. Everyone finds the HTML elements in different ways, so if you are able to find them faster as you get more experience with it, don't worry too much about following the same formula each time."}),(0,t.jsx)(n.p,{children:"The way I found and wrote the instructions for you below was by clicking around and through trial and error. You won't always find the theming hook immediately, and that's ok. Just keep searching, and clicking on the surrounding HTML elements until you find the right one. For the purposes of demonstration, I will be giving you direct instructions on how to find this specific theming hook."})]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Hover over the pinned All menu until you find and are able to highlight the majority of the menu itself."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In this case, the HTML element we highlighted has the class ",(0,t.jsx)(n.code,{children:"sn-polaris-nav-body"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'In the Styles tab on the bottom half of the Browser tools, find the "Filter" search bar, type "background".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on the parent HTML element with the class ",(0,t.jsx)(n.code,{children:"sn-polaris-nav"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Styles tab again, you should find the ",(0,t.jsx)(n.code,{children:".sn-polaris-nav"})," class has a property ",(0,t.jsx)(n.code,{children:"background-color"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Note that the first theming hook referenced is ",(0,t.jsx)(n.code,{children:"--now-unified-nav_menu--background-color"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'To verify that this is the correct hook, let\'s change the background-color to be blue by highlighting the text, erasing it, and typing in "blue".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify that the pinned menu now looks horrendous, and we know we have the hook we are looking for! Using outlandish colors is a great way to find what you are looking for when testing hooks."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-our-theming-record",children:"Updating our theming record"}),"\n",(0,t.jsx)(n.p,{children:"We will now update our theming record to reflect the change we want to make."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Type "Theme" in to the Filter Navigator in the top left corner.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Under "Now Experience Framework" find and click on ',(0,t.jsx)(n.strong,{children:"Themes."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'This will bring up the UX Themes table. Search for "Custom Wasabi Donut" under Name and click on the record to open it.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Under the UX Theme Styles, select and open "Wasabi Donut - Colors".'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click in to the Style box."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click Ctrl + F or Command + F to open the search bar."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Paste the theming hook we found, ",(0,t.jsx)(n.code,{children:"--now-unified-nav_menu--background-color"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can see that it's currently set to ",(0,t.jsx)(n.code,{children:"255,255,255"}),". Remove that."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the theming hook to be: ",(0,t.jsx)(n.code,{children:'"3, 45, 66"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Update"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Refresh your page, and you should see your changes take effect!"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);