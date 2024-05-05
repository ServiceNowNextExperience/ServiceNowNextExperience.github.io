"use strict";(self.webpackChunkservice_now_next_experience_github_io=self.webpackChunkservice_now_next_experience_github_io||[]).push([[5860],{5311:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(4848),s=n(8453);const r={id:"activity-1",title:"Exercise 4 - Activity 1",hide_table_of_contents:!0,draft:!1,sidebar_label:"Activity 1"},a=void 0,c={id:"ex4/activity-1",title:"Exercise 4 - Activity 1",description:"Overview",source:"@site/labs/LAB2050-K24-Intro-to-Workspaces/ex4/1-activity-1.md",sourceDirName:"ex4",slug:"/ex4/activity-1",permalink:"/labs/LAB2050-K24-Intro-to-Workspaces/ex4/activity-1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"activity-1",title:"Exercise 4 - Activity 1",hide_table_of_contents:!0,draft:!1,sidebar_label:"Activity 1"},sidebar:"LAB2050K24",previous:{title:"Exercise 4 Overview",permalink:"/labs/LAB2050-K24-Intro-to-Workspaces/ex4/overview"},next:{title:"Exercise 5 Overview",permalink:"/labs/LAB2050-K24-Intro-to-Workspaces/ex5/overview"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Instructions",id:"instructions",level:2}];function d(t){const e={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(e.p,{children:"In this activity, you will add a menu item to the plus menu in the Service Operations Workspace."}),"\n",(0,i.jsx)(e.h2,{id:"instructions",children:"Instructions"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Starting in the UI Builder home page, search for and click on ",(0,i.jsx)(e.strong,{children:"Service Operations Workspace"})," in the Experiences list.\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_1.png",src:n(150).A+"",width:"860",height:"482"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["In the top right corner click ",(0,i.jsx)(e.strong,{children:"View experience settings"}),".\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_2.png",src:n(829).A+"",width:"860",height:"480"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:['Under "Description", click on ',(0,i.jsx)(e.strong,{children:"Advanced settings"}),".\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_3.png",src:n(4676).A+"",width:"860",height:"616"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Click on the globe icon in the top right corner of the page, which shows the update set picker. Select the ",(0,i.jsx)(e.strong,{children:"Service Operations Workspace Core"})," application scope.\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_4.png",src:n(4619).A+"",width:"860",height:"480"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Scroll down to the Related Lists.\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_5.png",src:n(9266).A+"",width:"860",height:"482"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:['In the "UX Page Properties" related list, find the ',(0,i.jsx)(e.strong,{children:"chrome_tab"})," record and click on it.\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_6.png",src:n(4409).A+"",width:"860",height:"482"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["This is the configuration for the plus menu. Replace the JSON in the ",(0,i.jsx)(e.strong,{children:"Value"})," field with what is provided here:\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_7.png",src:n(9584).A+"",width:"860",height:"481"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'{\n\t"contextual": [\n\t\t"record",\n\t\t"kb_view"\n\t],\n\t"newTabMenu": [\n\t\t{\n\t\t\t"label": {\n\t\t\t\t"translatable": true,\n\t\t\t\t"message": "New Interaction"\n\t\t\t},\n\t\t\t"routeInfo": {\n\t\t\t\t"route": "record",\n\t\t\t\t"fields": {\n\t\t\t\t\t"table": "interaction",\n\t\t\t\t\t"sysId": "-1"\n\t\t\t\t},\n\t\t\t\t"multiInstField": "sysId"\n\t\t\t},\n\t\t\t"condition": {\n\t\t\t\t"tableDescription": {\n\t\t\t\t\t"table": "interaction",\n\t\t\t\t\t"canCreate": true\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"label": {\n\t\t\t\t"translatable": true,\n\t\t\t\t"message": "New Incident"\n\t\t\t},\n\t\t\t"routeInfo": {\n\t\t\t\t"route": "record",\n\t\t\t\t"fields": {\n\t\t\t\t\t"table": "incident",\n\t\t\t\t\t"sysId": "-1"\n\t\t\t\t},\n\t\t\t\t"multiInstField": "sysId"\n\t\t\t},\n\t\t\t"condition": {\n\t\t\t\t"tableDescription": {\n\t\t\t\t\t"table": "incident",\n\t\t\t\t\t"canCreate": true\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"label": {\n\t\t\t\t"translatable": true,\n\t\t\t\t"message": "New Change Request"\n\t\t\t},\n\t\t\t"routeInfo": {\n\t\t\t\t"route": "create-change-request-page",\n\t\t\t\t"fields": {},\n\t\t\t\t"multiInstField": ""\n\t\t\t},\n\t\t\t"condition": {\n\t\t\t\t"tableDescription": {\n\t\t\t\t\t"table": "change_request",\n\t\t\t\t\t"canCreate": true\n\t\t\t\t}\n\t\t\t}\n\t\t},\n{\n\t\t\t"label": {\n\t\t\t\t"translatable": true,\n\t\t\t\t"message": "New Knowledge Article"\n\t\t\t},\n\t\t\t"routeInfo": {\n\t\t\t\t"route": "record",\n\t\t\t\t"fields": {\n\t\t\t\t\t"table": "kb_knowledge",\n\t\t\t\t\t"sysId": "-1"\n\t\t\t\t},\n\t\t\t\t"multiInstField": "sysId"\n\t\t\t},\n\t\t\t"condition": {\n\t\t\t\t"tableDescription": {\n\t\t\t\t\t"table": "kb_knowledge",\n\t\t\t\t\t"canCreate": true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\t\t\n\t"maxMainTabLimit": 10,\n\t"maxTotalSubTabLimit": 30\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"Here are the descriptions of some of the JSON properties listed above:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"message"}),": This is the text shown to the end user in the option when you click the plus menu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"routeInfo"}),": This is what tells the button what to do.","\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"route"})," is the page ID."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"fields"})," contains the URL parameters to be fed to the page when it's opened."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{start:"8",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Click ",(0,i.jsx)(e.strong,{children:"Update"}),".\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_8.png",src:n(6855).A+"",width:"860",height:"482"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Navigate back to the Service Operations Workspace and test by refreshing the page. If the menu won't load, triple check whether your JSON is appropriately formatted and try again.\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_9.png",src:n(5518).A+"",width:"860",height:"481"}),"\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_10.png",src:n(2292).A+"",width:"860",height:"482"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Plus menu"}),".\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_11.png",src:n(7914).A+"",width:"860",height:"481"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Select your newly created option, ",(0,i.jsx)(e.strong,{children:"New Knowledge Article"}),".\n",(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_12.png",src:n(118).A+"",width:"860",height:"480"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:['The "Create New Knowledge" record page should greet you.\n',(0,i.jsx)(e.img,{alt:"LAB2050_EX4A1_image_13.png",src:n(3919).A+"",width:"860",height:"480"})]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},150:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_1-423a4f4d3a889fdbd9f8a177dde37f5d.png"},2292:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_10-d178e9da3a26e205363d65a5cc54b25c.png"},7914:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_11-52f5d09b5fd80e69e1ab17771a07343c.png"},118:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_12-8d0d200685cf48e06375c6909f564aad.png"},3919:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_13-b79507f41b4ea832b1f7babdaef69f6d.png"},829:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_2-345b64504258fbc4583afe158c0a7dc1.png"},4676:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_3-f7256f957a9164398514d413990a6fe3.png"},4619:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_4-68b1079a77d30a13844d988c74f0f034.png"},9266:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_5-53f8e3e80bcbe605b53d0a5f4a7d0040.png"},4409:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_6-b469bad42c47770ba8bd7c012181ed43.png"},9584:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_7-9975c86ab8b0e91db6c91f95704d85f1.png"},6855:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_8-a9244e98a036324ce785e8e206f44808.png"},5518:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/LAB2050_EX4A1_image_9-cd5c2e1bd30ac93a93252a8d985348d1.png"},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>c});var i=n(6540);const s={},r=i.createContext(s);function a(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);