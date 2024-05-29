"use strict";(self.webpackChunkservice_now_next_experience_github_io=self.webpackChunkservice_now_next_experience_github_io||[]).push([[5351],{52496:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var t=n(74848),i=n(28453);const o={id:"overview",title:"Exercise 3 Overview",pagination_label:"Exercise 3 Overview",sidebar_label:"Overview",hide_table_of_contents:!0,draft:!1},a="Exercise 3: Add Searching and Sorting",d={id:"ex3/overview",title:"Exercise 3 Overview",description:"Goal",source:"@site/labs/CCL1199-K24-Killer-SAP/ex3/0-overview.md",sourceDirName:"ex3",slug:"/ex3/overview",permalink:"/labs/CCL1199-K24-Killer-SAP/ex3/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",title:"Exercise 3 Overview",pagination_label:"Exercise 3 Overview",sidebar_label:"Overview",hide_table_of_contents:!0,draft:!1},sidebar:"examplelab",previous:{title:"Exercise 2 Overview",permalink:"/labs/CCL1199-K24-Killer-SAP/ex2/overview"},next:{title:"Exercise 4 Overview",permalink:"/labs/CCL1199-K24-Killer-SAP/ex4/overview"}},l={},r=[{value:"Goal",id:"goal",level:2},{value:"Add search capability",id:"add-search-capability",level:2},{value:"Add a search component",id:"add-a-search-component",level:3},{value:"Filter the data resources",id:"filter-the-data-resources",level:3},{value:"Add sorting",id:"add-sorting",level:2},{value:"Add controls",id:"add-controls",level:3},{value:"<strong>Add components</strong>",id:"add-components",level:3}];function c(e){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"exercise-3-add-searching-and-sorting",children:"Exercise 3: Add Searching and Sorting"}),"\n",(0,t.jsx)(s.h2,{id:"goal",children:"Goal"}),"\n",(0,t.jsx)(s.p,{children:"In this exercise, you'll add the ability to search and sort your notes."}),"\n",(0,t.jsx)(s.h2,{id:"add-search-capability",children:"Add search capability"}),"\n",(0,t.jsx)(s.p,{children:"You'll start this exercise by adding a way to filter your notes by using a text search."}),"\n",(0,t.jsx)(s.h3,{id:"add-a-search-component",children:"Add a search component"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Start by adding a client state parameter to hold the search term. At the bottom left in the ",(0,t.jsx)(s.em,{children:"Data and scripts"})," panel choose ",(0,t.jsx)(s.strong,{children:"Client state parameters."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the dialog box, choose the +Add button and add a ",(0,t.jsx)(s.em,{children:"String"})," type parameter with the name ",(0,t.jsx)(s.strong,{children:"searchTerm"})," and no value."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FKLxfWJTUhIVTuEaprxqj%252FCleanShot%25202024-04-04%2520at%252020.36.59%25402x.png%3Falt%3Dmedia%26token%3D70bd25ce-1cf8-48b1-a720-ff32acfb5d70&width=768&dpr=4&quality=100&sign=3a049436479694df4039f440254c598de8595d38a9553848e511d9d361af9aa8",alt:""})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Close the ",(0,t.jsx)(s.em,{children:"Edit client state parameters"})," modeless dialog."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add a ",(0,t.jsx)(s.strong,{children:"Search input"})," component after the ",(0,t.jsx)(s.em,{children:"Heading 1"})," component in the ",(0,t.jsx)(s.em,{children:"Search Container"}),". ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FTAN6PHjUww0Zpw8dS62M%252FCleanShot%25202024-04-04%2520at%252020.44.10%25402x.png%3Falt%3Dmedia%26token%3D5724c7e7-b7c1-4d31-a42c-3072a7d823d1&width=300&dpr=4&quality=100&sign=5005a50e423ddd1a7bbb83a0be9752f135484baacf3e8afa336ff20a8e46aa67",alt:""}),(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FEDey98mksCdhbQLnNlRS%252FCleanShot%25202024-04-04%2520at%252020.44.57%25402x.png%3Falt%3Dmedia%26token%3D76be83ca-7908-4565-b17a-eb520b6d29e3&width=300&dpr=4&quality=100&sign=e39752d3f876e5fbfa955e72c6fb470e110d55783539a26e08d6e0fe5aeed95c",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.em,{children:"Configure"})," panel set the following properties:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Placeholder: ",(0,t.jsx)(s.strong,{children:"Search notes"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Placement: ",(0,t.jsx)(s.strong,{children:"Header"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click into the ",(0,t.jsx)(s.strong,{children:"Events"})," tab and add a new event mapping for the ",(0,t.jsx)(s.strong,{children:"Search executed"})," event. ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FHqw1UTHKfk0S4vYxDyos%252FCleanShot%25202024-04-04%2520at%252020.50.20%25402x.png%3Falt%3Dmedia%26token%3D7d79a4df-15b0-4ac0-a65c-37bfdef21a58&width=300&dpr=4&quality=100&sign=20bd04e0170fc4e52199e96b5c289cd61ea313a41e55e883963e21a1bc977cf0",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Choose the ",(0,t.jsx)(s.strong,{children:"Update client state parameter"})," event, set the ",(0,t.jsx)(s.em,{children:"Client State Parameter Name"})," to ",(0,t.jsx)(s.strong,{children:"searchTerm"}),", and choose data binding for the ",(0,t.jsx)(s.em,{children:"New Value"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fjqy3qINaiIDUqJTaEHsI%252FCleanShot%25202024-04-04%2520at%252020.55.44%25402x.png%3Falt%3Dmedia%26token%3D9b7b718b-7e6e-437f-b7cb-ca27546a30d2&width=768&dpr=4&quality=100&sign=d46d905df04f11c99d9e830bcbabf2543fc83a53843a593b2f4d4ad5b6b38449",alt:""})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Unfortunately, not all events currently expose their event payload schema in UI Builder so you'll have to write the event payload in manually. This is a current limitation with some events and their payloads in UI Builder. The payload is the data that comes along with the event. For this event that is the term that is being searched."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the bind data modal that comes up, double click into the top section that says ",(0,t.jsx)(s.em,{children:"Add data output to this area,"})," paste in ",(0,t.jsx)(s.strong,{children:"@payload.searchTerm,"})," and choose ",(0,t.jsx)(s.strong,{children:"Apply"})," and then ",(0,t.jsx)(s.strong,{children:"Add."})," ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FOwK5wIjrW3jdF4M6y7Ci%252FCleanShot%25202024-04-04%2520at%252021.00.19%25402x.png%3Falt%3Dmedia%26token%3Dff1f1911-529a-4e2b-b4fb-04c4dcee6b39&width=300&dpr=4&quality=100&sign=4ef31810e7b4d888cab702404329280ba31d717ae1b3a70418af33ab30a73cb1",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Save"})," the page (this step is important). Save time saving with the keyboard shortcut CMD+S (mac) or CTRL+S (Windows)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"filter-the-data-resources",children:"Filter the data resources"}),"\n",(0,t.jsx)(s.p,{children:"Now you'll use the searchTerm client state parameter to filter both the data resources to display only the records containing the search term."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click on the ",(0,t.jsx)(s.strong,{children:"Look up notes"})," data resource in the ",(0,t.jsx)(s.em,{children:"Data and scripts"})," section."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click on ",(0,t.jsx)(s.strong,{children:"Edit conditions"})," and add the following ",(0,t.jsx)(s.strong,{children:"and"})," conditions and hit ",(0,t.jsx)(s.strong,{children:"Apply"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Title | contains | ",(0,t.jsx)(s.code,{children:"<data binding>"})," Client states > searchTerm OR"]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Text | contains | ",(0,t.jsx)(s.code,{children:"<data binding>"})," Client states > searchTerm"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FUaMNUfSqGZeY1jnB5diM%252FCleanShot%25202024-05-01%2520at%252016.06.34%25402x.png%3Falt%3Dmedia%26token%3D10b81c98-7305-42f7-8715-4e2006f740ae&width=768&dpr=4&quality=100&sign=cc2cac4d8d6cd638c1376083ec3b307cd4e4cf133eabe812b48cafc13b4c6d07",alt:""})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now do the same thing with the ",(0,t.jsx)(s.strong,{children:"Note count"})," data resource so the conditions on the two data resources match."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now you'll need to have the two data resources refresh when the search is executed. In the ",(0,t.jsx)(s.em,{children:"Events"})," tab of the ",(0,t.jsx)(s.em,{children:"Search input"})," component, add another event handler to the ",(0,t.jsx)(s.em,{children:"Search executed"})," event."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Choose the REFRESH event handler under the Look up notes section and click ",(0,t.jsx)(s.strong,{children:"Add."})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FbZgfnyDozhUMc5DzMAGH%252FCleanShot%25202024-04-04%2520at%252021.28.36%25402x.png%3Falt%3Dmedia%26token%3D26b8a88e-ec66-49a2-8c8e-643407a4d33c&width=768&dpr=4&quality=100&sign=00b21304d194b049cb3ef164e994d9cd503668f356c6f4a077075ae9d38686b9",alt:""})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Do the same thing and add an event handler for the ",(0,t.jsx)(s.em,{children:"Note count"})," data resource as well. ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fytiyvm6KPrEGb9yIU61x%252FCleanShot%25202024-04-08%2520at%252021.05.22%25402x.png%3Falt%3Dmedia%26token%3Db3620712-6404-4963-9844-3887667f1c0b&width=300&dpr=4&quality=100&sign=d3b99a87696db1e9d0920acd464da5efacc7d51006c20d6e07545b6e64857d6b",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Save"})," the page and test it in a new tab by searching the term ",(0,t.jsx)(s.strong,{children:"Training"}),". You should end up with three results."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fswz7NqcXzpIl8ePtQJGV%252FCleanShot%25202024-05-01%2520at%252016.09.21%25402x.png%3Falt%3Dmedia%26token%3D75b0abc6-1b47-4c7d-a15f-99f19a44bebc&width=768&dpr=4&quality=100&sign=1be12216b25710da0a2adc75207b5f1c834b5afda2d26b2c57b4cd2766fdf5b8",alt:""})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"add-sorting",children:"Add sorting"}),"\n",(0,t.jsx)(s.p,{children:"In the section, you'll add the capability to sort your notes by Created and Updated ascending or descending."}),"\n",(0,t.jsx)(s.h3,{id:"add-controls",children:"Add controls"}),"\n",(0,t.jsx)(s.p,{children:"You'll start by adding some client state parameters and binding them to your data resource."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Back in your UI Builder tab, start by adding 2 client state parameters from the ",(0,t.jsx)(s.em,{children:"Data and scripts"})," panel."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"sortField | string | sys_updated_on"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"sortOrder | string | desc"})," ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FWI8Be0oJwG8tRf2ZtbBB%252FCleanShot%25202024-05-01%2520at%252016.12.34%25402x.png%3Falt%3Dmedia%26token%3Dca83f867-3e10-45a7-a7d3-40b58854dfd2&width=300&dpr=4&quality=100&sign=ffa5b4b5af6b56263eda74bdbe2e80a0c6112782b1874a56cd5dce80d9417460",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now open the ",(0,t.jsx)(s.strong,{children:"Look up notes"})," data resource from the ",(0,t.jsx)(s.em,{children:"Data and scripts"})," panel."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Scroll down to the Order by and Sort type properties and bind the following values:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Order by: ",(0,t.jsx)(s.code,{children:"<data binding>"})," ",(0,t.jsx)(s.strong,{children:"Client states > sortField"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Sort type: ",(0,t.jsx)(s.code,{children:"<data binding>"})," ",(0,t.jsx)(s.strong,{children:"Client states > sortOrder"})," ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FOVG2qXojljYUgEaadmjn%252FCleanShot%25202024-05-01%2520at%252016.13.12%25402x.png%3Falt%3Dmedia%26token%3Dbd415bf3-57fc-4cb0-849d-9d8b9306ffe1&width=300&dpr=4&quality=100&sign=3c56ebaf33211b62bda84619b4aa7677320a959dfb29ede89819004c28fe5b83",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"add-components",children:(0,t.jsx)(s.strong,{children:"Add components"})}),"\n",(0,t.jsx)(s.p,{children:"Now, you need to set those two CSPs to control the sorting. You could even set them from multiple areas."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Find the ",(0,t.jsx)(s.em,{children:"Repeater 1"})," component in the content tree and add a component ",(0,t.jsx)(s.em,{children:"before"}),". ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FsDZmQklBGaC8PVwXIdDS%252FCleanShot%25202024-04-05%2520at%252010.36.20%25402x.png%3Falt%3Dmedia%26token%3D319558e7-62eb-49e5-9df0-655e73a3c7cc&width=300&dpr=4&quality=100&sign=7bcec6b82a23da67d2dad77730814586b1928f602774e521f166c4d29ef1aadc",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Layouts"})," tab and add a ",(0,t.jsx)(s.strong,{children:"Two columns"})," layout."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click on ",(0,t.jsx)(s.strong,{children:"Column 2"})," in the content tree and set its layout as follows:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Direction: Row\n",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FoNMV4wraXVr7RptHnxRS%252FCleanShot%25202024-04-05%2520at%252010.41.18%25402x.png%3Falt%3Dmedia%26token%3D0326df59-0934-458a-89c8-6e7c2907b02c&width=44&dpr=4&quality=100&sign=a835c0854220cf49f4be0470433b48657924d3c29802a946e20065d76f2ec41d",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Align items: Center\n",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FAmc7dJGec7vCBDIZ6Kt4%252FCleanShot%25202024-04-05%2520at%252010.41.45%25402x.png%3Falt%3Dmedia%26token%3Dee180fa7-4d83-453f-979d-4b8aac4b5604&width=45&dpr=4&quality=100&sign=8b29f66242d0f9666795227680e89212df5aa386ad31521ee6e0951fcec257ac",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Justify content: Flex-end\n",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FEU1feuR1iRodVfXgmfeR%252FCleanShot%25202024-04-05%2520at%252010.42.18%25402x.png%3Falt%3Dmedia%26token%3D9fc92f2f-0db4-4ffc-8e8f-7b119e68d37d&width=46&dpr=4&quality=100&sign=56ea6d0d72c6380ddb195cd0dc57236f2036dc7351195c831c212ac4400ff554",alt:""}),"\n",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FiRiH8ZbL9jfuGuHjB2bW%252FCleanShot%25202024-04-05%2520at%252010.42.50%25402x.png%3Falt%3Dmedia%26token%3D7b5eeba4-8a85-41b0-8234-484efc266c96&width=300&dpr=4&quality=100&sign=42bd5a24ba024fda95b973562d58294095d89c0663ebb929fa8db9412cee1721",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now add a ",(0,t.jsx)(s.strong,{children:"Stylized text"})," component inside ",(0,t.jsx)(s.em,{children:"Column 2"})," and choose ",(0,t.jsx)(s.strong,{children:"None"})," for the presets."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Set the properties as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Text: ",(0,t.jsx)(s.strong,{children:"Sort:"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["HTML Tag: ",(0,t.jsx)(s.strong,{children:"H3"})," ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fxzb4N5a0gRFQFPIxe1ml%252FCleanShot%25202024-05-01%2520at%252016.15.19%25402x.png%3Falt%3Dmedia%26token%3D57ef0b97-ae93-49b7-9cd0-942e70dd13d0&width=300&dpr=4&quality=100&sign=e3fddff591ab5d6d4bf8821550273d8fd698a5ebdc1aee05ada9be8bfab91e25",alt:""})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now add a ",(0,t.jsx)(s.strong,{children:"Dropdown"})," component after the ",(0,t.jsx)(s.em,{children:"Heading"})," component in ",(0,t.jsx)(s.em,{children:"Column 2"})," and choose ",(0,t.jsx)(s.strong,{children:"None"})," for the preset."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Scroll down to the ",(0,t.jsx)(s.em,{children:"List items"})," property in the config panel, mouse over it, and click ",(0,t.jsx)(s.strong,{children:"Edit."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the modal that appears with the JSON editor, you'll delete all but two of the six List Items by clicking on the trashcan icon for each of the first four. ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FdcVpP5kb1bSIicXlrdvu%252FCleanShot%25202024-04-05%2520at%252013.13.02%25402x.png%3Falt%3Dmedia%26token%3D8745bca2-4115-4fd9-a1e9-7db400080b0f&width=300&dpr=4&quality=100&sign=0952a1e82256744c6e5d169c950e9ab46a31afa3d57993349171baa200747932",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"For the two remaining, set the following values"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"List item 1"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Id: ",(0,t.jsx)(s.strong,{children:"sys_created_on"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Label: ",(0,t.jsx)(s.strong,{children:"Created"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"List item 1"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Id: ",(0,t.jsx)(s.strong,{children:"sys_updated_on"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Label: ",(0,t.jsx)(s.strong,{children:"Updated"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Apply"})," and the List items property should look like this: ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Foa41SzDGBGRWQErD6YNk%252FCleanShot%25202024-04-08%2520at%252021.13.35%25402x.png%3Falt%3Dmedia%26token%3D729d7afd-451a-4cb5-a8e4-bd6b86e87c7e&width=300&dpr=4&quality=100&sign=7f1ebac05c1b429ee1fcfcfcba63dd280bef09f0935d6dec8094bbbc3a072267",alt:""})," ",(0,t.jsx)(s.em,{children:"You can also edit the JSON directly by switching from form to JSON in the JSON editor modal."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now scroll down to the ",(0,t.jsx)(s.em,{children:"Selected items"})," property (two below the List items prop) and switch to dynamic data binding. ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FGoKtgWZ5UzAnCRs2X7w7%252FCleanShot%25202024-05-01%2520at%252016.18.04%25402x.png%3Falt%3Dmedia%26token%3D4991d1d9-3559-49b6-bfd3-10cd4616e0ed&width=300&dpr=4&quality=100&sign=ca5e0ffb034fc24f6e6478f2ced4051228dcfa74ebd6ade442f9b2e9de637b1e",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Add ",(0,t.jsx)(s.strong,{children:"Client states > sortField."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Double click into sortField so it shows @state.sortField and add square brackets on each side (this property is expecting an array of values) and choose ",(0,t.jsx)(s.strong,{children:"Apply"}),". ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FXnIbo41iIukFS37q9bd9%252FCleanShot%25202024-04-05%2520at%252013.24.25%25402x.png%3Falt%3Dmedia%26token%3D7cdc1c55-9b1d-49a7-a32d-6dba2ad3c8dc&width=300&dpr=4&quality=100&sign=e4782a555a2c0e45a112515dc7bbc7974a526b5044809acbf18cca9cadd09883",alt:""}),(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FRrertSLJY7Z4sN07HGWj%252FCleanShot%25202024-04-05%2520at%252013.24.40%25402x.png%3Falt%3Dmedia%26token%3Dd860ea23-e384-497e-ac3e-f8b1a802f9ab&width=300&dpr=4&quality=100&sign=e41187d2d451d4c436858757990babd1bb127f8f32195497da54dfc70f389cf6",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click into the ",(0,t.jsx)(s.strong,{children:"Styles"})," tab and add ",(0,t.jsx)(s.strong,{children:"L"})," left and right margins. ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FmE9vBkHvXrVn4pzS2YSV%252FCleanShot%25202024-04-05%2520at%252013.31.31%25402x.png%3Falt%3Dmedia%26token%3D2e37dd3d-88db-4546-9ef2-52ae0647ac57&width=300&dpr=4&quality=100&sign=d82837f20fe17a4433a36bad498a3ca04d831cd22e1e24f01c4a90e49516aa24",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now click into the ",(0,t.jsx)(s.strong,{children:"Events"})," tab and add an event mapping for ",(0,t.jsx)(s.strong,{children:"Dropdown selected items set."})," ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FZ3yZ8qM22zJThELHf8Zn%252FCleanShot%25202024-04-05%2520at%252013.49.20%25402x.png%3Falt%3Dmedia%26token%3D086709ee-592b-47fc-93af-6d0d43629c29&width=300&dpr=4&quality=100&sign=740fe13a5dafe989b42bed90a28a43f45d275bf2e8b20ea632171cf02b95e424",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Choose ",(0,t.jsx)(s.strong,{children:"Update client state parameter."})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For this step, you'll use a script as it's a little easier than using a formula. You'll need the first element in the array returned by the event payload. Change the ",(0,t.jsx)(s.em,{children:"Mode"})," from ",(0,t.jsx)(s.em,{children:"Form"})," to ",(0,t.jsx)(s.strong,{children:"Script"})," at the top right on the dialog."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FfKw5NBGejiqmqTsvt0dO%252FCleanShot%25202024-04-09%2520at%252014.07.42%25402x.png%3Falt%3Dmedia%26token%3Ddea73427-c622-47dd-8a0b-64173fa7a63d&width=768&dpr=4&quality=100&sign=c29ef609bd20cdb434bbc896fc45e97115742ae9f2b2f88f720705030efacc1f",alt:""})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Most of the script is already provided so you'll just need to provide the propName and value as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'/**\n* @param {params} params\n* @param {api} params.api\n* @param {any} params.event\n*/\nfunction evaluateEvent({api, event}) {\n    return {\n        propName: "sortField",\n        value: event.payload.value[0]\n    };\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Add"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now you'll add another dropdown to control the order. Right-click on the dropdown component and choose ",(0,t.jsx)(s.strong,{children:"Duplicate"}),". ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FJfYTwN5hFyVMFGOLSOiz%252FCleanShot%25202024-05-01%2520at%252016.26.39%25402x.png%3Falt%3Dmedia%26token%3Db9b5b93d-0f2e-4d82-a35b-53f11ffb22e9&width=300&dpr=4&quality=100&sign=f980e5c64975ec7c443ea8b2233028a1e5ca8162ae3b7039366958f4a95f6cfc",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click into ",(0,t.jsx)(s.strong,{children:"Dropdown 2"})," in the content tree."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click ",(0,t.jsx)(s.strong,{children:"Edit"})," on the ",(0,t.jsx)(s.em,{children:"List items"})," property, change the two items to the following and click ",(0,t.jsx)(s.strong,{children:"Apply"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"List item 1"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Id: ",(0,t.jsx)(s.strong,{children:"desc"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Label: ",(0,t.jsx)(s.strong,{children:"Descending"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"List item 1"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Id: ",(0,t.jsx)(s.strong,{children:"asc"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Label: ",(0,t.jsx)(s.strong,{children:"Ascending"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Click into the Selected items field by clicking the data binding icon, double-click into the value, change ",(0,t.jsx)(s.em,{children:"sortField"})," to ",(0,t.jsx)(s.strong,{children:"sortOrder"}),", and choose ",(0,t.jsx)(s.strong,{children:"Apply."})," ",(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FGl3HWbBBT3sRzaJDAkAk%252FCleanShot%25202024-05-01%2520at%252016.30.28%25402x.png%3Falt%3Dmedia%26token%3De6489d3b-b790-4ad7-9f7b-f30f4d56cc05&width=300&dpr=4&quality=100&sign=998a6c75fe54c7e70dcb9c5f7d2994c7591262d978a46a7dde4e3429cbcb2d3b",alt:""})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set the margins to ",(0,t.jsx)(s.strong,{children:"0"})," for this dropdown in its ",(0,t.jsx)(s.em,{children:"Styles"})," tab as the previous dropdown handles the spacing."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Next click into the ",(0,t.jsx)(s.strong,{children:"Events"})," tab, click ",(0,t.jsx)(s.strong,{children:"Update client state parameter"}),", change ",(0,t.jsx)(s.em,{children:"propName"})," to ",(0,t.jsx)(s.strong,{children:"sortOrder"})," in the code and choose ",(0,t.jsx)(s.strong,{children:"Apply"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F2DFxMIAkS5gSKnJxCd1C%252FCleanShot%25202024-04-09%2520at%252014.14.52%25402x.png%3Falt%3Dmedia%26token%3D96edcef4-05c6-4f37-98ab-2a7a3b6a5184&width=768&dpr=4&quality=100&sign=6e87a468b8bf25d33b45d96764b6c5226a9604ab49f0b3442ba4832b95d9bec9",alt:""})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Lastly, to make the spacing work in the column layout, you need something in column 1. Add another stylized text component in Column 1 (the one before Column 2), choose ",(0,t.jsx)(s.strong,{children:"None"})," for the preset, and set the following values:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Text: ",(0,t.jsx)(s.strong,{children:"Click a note to view edit it"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["HTML Tag: ",(0,t.jsx)(s.strong,{children:"H3"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Save"})," the page and test it. For most of the notes the created and updated dates are the same so try changing the order from Descending to Ascending."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>d});var t=n(96540);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);