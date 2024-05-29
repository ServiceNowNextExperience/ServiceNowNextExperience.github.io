---
id: overview
title: "Exercise 2 Overview"
pagination_label: "Exercise 2 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---
# Exercise 2: Build the Interface and Pagination

##  Goal

In this exercise, you'll add a data resource to query the database for a list of notes and add a repeater to the page to show those notes in a card view.

##  Add a Look up multiple records data resource

1. In UI Builder, find the _Data and scripts_ panel in the bottom left corner of the page. This area has been redesigned in the Washington DC release to be more better organized and reduce clicks. Click **+Add data resource** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F66DW83lczxJPIiNPEBjk%252FCleanShot%25202024-05-01%2520at%252009.53.07%25402x.png%3Falt%3Dmedia%26token%3D616eef57-a683-451d-ad10-8ce77bad6b4a&width=300&dpr=4&quality=100&sign=38a31273064062113c9cfb99d2b4350cf8adbe9b2d6c4745b9907f895edac924)
    
2. Choose **Look up multiple records** and click **Add**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FretRnh4ZNcCsHFbUALpJ%252FCleanShot%25202024-04-03%2520at%252009.46.44%25402x.png%3Falt%3Dmedia%26token%3De9b1e36f-cdf1-4d9e-9756-8f8cec3d2639&width=768&dpr=4&quality=100&sign=dceff355b820ab2b01dfec1870c2937e89bb1aa235c7ab6c42497e5b46e21073)
    
3. Rename the data resource by clicking the (i) icon at the top of the configuration panel next to the name of the data resource:
   ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FmcK9ruIovbNQYWPbLCqO%252FCleanShot%25202024-04-03%2520at%252009.50.12%25402x.png%3Falt%3Dmedia%26token%3D6d6cd212-6857-4162-bc5a-58070f69039d&width=40&dpr=4&quality=100&sign=a603f76594d68ad55ffef2b317ad3d70b2ab9a33582d5510fff154dfb625de60) 
    
    - Data resource label: **Look up notes**
        
    - Data resource ID: **look_up_notes** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FxzpBWJAXGKbymwVUOeo8%252FCleanShot%25202024-04-08%2520at%252014.46.26%25402x.png%3Falt%3Dmedia%26token%3D33195c48-47dd-4d74-b9d2-f379f5fa3933&width=300&dpr=4&quality=100&sign=dc04dd90acaae00195324f4ffb321bf9e3392d9ded4bfa867c7d41d4925e31e2)
        
    
4. Click **Apply.**
    
5. Configure the rest of the data resource as follows
    
    - Table: **Note [x_snc_killer_notes_note]**
        
    - Filter: click **Edit conditions** and set the following conditions: **User | is (dynamic) | Me**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FjON8fxpFANoJWwnsjcp3%252FCleanShot%25202024-04-08%2520at%252014.48.03%25402x.png%3Falt%3Dmedia%26token%3D984f288d-1180-4548-817b-e87a986198e6&width=768&dpr=4&quality=100&sign=75c70fc315ffa5eb32e7500d5e61103a35d1a594c8764cba1fd87804abc07ee4)
        
    - Fields (you'll have to add these one at a time):
        
        - Title
            
        - Text
            
        - Created
            
        - Category.color (make sure to use the next to Category right-arrow to show Color on the right)
            
            ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F2KVWhq8DEjecQdtwO8QV%252FCleanShot%25202024-05-01%2520at%252009.55.23%25402x.png%3Falt%3Dmedia%26token%3D934f4792-094f-4f00-918d-ed29c29e5e80&width=768&dpr=4&quality=100&sign=d08ac5309179b69248755f13ccdd19b6a152d61e5268aa0891fffe34beb3e59c)
            
        
    
6. You should now see some JSON in the right-hand panel that shows you the values for all the fields you've added for about 40 note records. Close the **Edit Look up notes** dialog.
    
7. **Save** the page.
    

##  Build the page out

Now you'll add Layouts and Components to your page and connect your data resource to them. Layouts consist of column layouts and flex and grid containers and allow you to lay out your page without having to know too much CSS. You'll add components within the containers that will show the data returned by the data resource.

###  Add a Repeater

In this section, you'll add a repeater component. A repeater is simply an iterator that will repeat over every element in an array. It is a great way to build out a list of cards as you'll be doing here. Use it similarly to a for loop in JavaScript, ngRepeat in AngularJS, or j:while in Jelly (for the oldtimers).

That means that if your data resource returns 10 records, you can show each record in whatever layout you want (grid, list, etc.), showing individual fields from each record.

1. In the content tree on the left side of the builder above the Data and scripts panel, click **+Add component** under the _Body Container_ and choose **Single column** under _Layouts._
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FqQGAIh2SL9HIXG6qWVyx%252FCleanShot%25202024-04-03%2520at%252012.12.19%25402x.png%3Falt%3Dmedia%26token%3Df7fa597b-7d47-4325-94f6-dbc5b95e692a&width=768&dpr=4&quality=100&sign=c4a393f47f50d51106a61266f2585699605f5cad6c869690eec75d9cd0a80ffb)
    
    > Adding a column layout instead of a simple container gives you the option to add additional columns later, for example adding a left-hand menu. Consider how your page might change in the future and plan ahead when laying out your page.
    
2. Now you'll add a repeater component within the new single-column layout. Use the **+Add component** button under Column 1 to add a repeater component.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FdRyz4Y13Q0xoJht2ltC6%252FCleanShot%25202024-04-03%2520at%252012.39.36%25402x.png%3Falt%3Dmedia%26token%3D11c673c6-ddb8-4c5f-8f40-4e3d80d1c07d&width=768&dpr=4&quality=100&sign=e640c4a5452953b773e2e2fbb6773fe02caba7ac929f475fe64fd59d5b216800)
    
    > UI Builder also has right click menus that make it easy to insert components. Right click directly on the page you are building or in the contents panel to the left.
    
3. In the configuration panel on the right-hand side of the page, choose **None: Configure the component manually** when presented with the preset options. Learn more about presets in the doc [Automatically configure components using presets](https://docs.servicenow.com/bundle/washingtondc-application-development/page/administer/ui-builder/concept/presets.html).
    
4. The Repeater only has one property called _Data array_. Mouse over that property to reveal the data binding icon to the right and click it. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FRD1x95bc80F2EMHvhetk%252FCleanShot%25202024-04-03%2520at%252012.44.17%25402x.png%3Falt%3Dmedia%26token%3D8f68f1e1-e63e-4a47-970e-e55209cb71dc&width=300&dpr=4&quality=100&sign=1da5a3461ebf9f414be1325ae2c7121ac964b4b21ca3d10718b2540f9588ea98)
    
5. This brings up the new visual data binding feature introduced in the Washington DC release. This shows you all of the data that is available for you to bind or connect to your components. Choose **Data resource > look_up_notes > results** and either **double-click results, drag it up, or click the arrow** to bind the data. Make sure that the data binding has moved up to the blank area at the top!
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fy49FqERiNAQY4KJXk5Jm%252FCleanShot%25202024-04-03%2520at%252012.51.17%25402x.png%3Falt%3Dmedia%26token%3D41481b3f-45ee-4e7f-9f1b-bbe91701eb61&width=768&dpr=4&quality=100&sign=ff46da6c8e6579c3f0e2ac9f7cd3eee729a1936818f1110c477e9de651a99d08)
    
    > This new data UI for Washington DC presents data and formulas in a more visual way. You can now create complex data binding values that combine both data output, script output, client state parameters, and formulas.
    
6. Click **Apply**. You should now see the data binding in the Data array property.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FULCr9d9XfqC07VAjxuSt%252FCleanShot%25202024-05-01%2520at%252010.14.25%25402x.png%3Falt%3Dmedia%26token%3D1759d21c-2f1e-4480-8735-69b92fcb9a25&width=768&dpr=4&quality=100&sign=ab4541661557b230ee2951c8e92ecfc05693efe694efaf16a0a6a1acf03ab5e9)
    
7. Now click on the **Styles** next to the configuration tab of the repeater component and choose **Enable styles**. Enabling styles for the repeater effectively turns it into a container which can be useful in certain cases to reduce the number of elements on your page. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FIQah7bjQqzq6hzl6BXOg%252FCleanShot%25202024-04-03%2520at%252012.55.33%25402x.png%3Falt%3Dmedia%26token%3D2cd4c48a-b9a5-419b-9a3e-ca0c9a233477&width=300&dpr=4&quality=100&sign=1699408496c80f2acdc880a6a7de9c206c1b5bbe9ff536fd746906b1019ecfd0)
    
8. Fill in the Styles panel as follows:
    
    - Type: Grid
        
    - Columns: 5
        
    - Rows: 1
        
    - Gap: L ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FsEegTljGAZIBYP0YmWmM%252FCleanShot%25202024-05-01%2520at%252010.16.46%25402x.png%3Falt%3Dmedia%26token%3Dbc660d2f-5069-4b77-a85e-1c0a56188243&width=300&dpr=4&quality=100&sign=7b35446358d97d540de259bc3ebbd0b42acffd855359e37be77f02d212b255c1)
        
    
9. **Save** the page in UIB.
    
    > We are leveraging CSS Grid to layout this part of the page. CSS Grid ([learn more about CSS Grid on MDN](https://developer.mozilla.org/docs/Web/CSS/grid)) is a really useful web standards-based layout system for when you have a variable number of items that will be returned from the database. You setup the rules of the grid (in this case 5 columns with a large gap) and the web browser will keep increasing the number of rows required for the data that you give it, no matter if your array has 20 items or 200 items.

###  Add components to the repeater

You've bound data to and styled the repeater, but you'll need to add additional components to see the data reflected on the page.

1. Inside the repeater, add a **Card Base Container.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FW2AThuGxSm0Aib1vYlR5%252FCleanShot%25202024-04-03%2520at%252013.16.13%25402x.png%3Falt%3Dmedia%26token%3D05cc9e05-d3a6-43c7-88c8-9fb1006e810f&width=768&dpr=4&quality=100&sign=096a727d3044c7b09959ea54119a24e24db106eac70669503ce2cb17d54feea3)
    
2. Choose **None** for the presets.
    
3. Set the _Interaction_ property to **Click** on the config panel. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FHfbbrn0NzGbrVg34AR4J%252FCleanShot%25202024-05-01%2520at%252010.18.54%25402x.png%3Falt%3Dmedia%26token%3Ddb4eba72-ea68-4452-a189-c3e73e0401b1&width=300&dpr=4&quality=100&sign=ecb6081a2458a8248c44039e819689f757d17baabca3328a66f79164d0a8669d)
    
4. Add a **Heading** component inside the Card Base Container. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F3zgEJf9vQCGxlfWXAjMj%252FCleanShot%25202024-05-01%2520at%252010.20.05%25402x.png%3Falt%3Dmedia%26token%3Dac222978-f832-4bda-aba4-50e39128ba1a&width=300&dpr=4&quality=100&sign=e920d79b044540733bd9c57bb50cc08d2aa776c9c46699cde9e0dc34605b422a)
    
5. Choose **None** for the preset, and set the Style property to **Header-tertiary.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FyfGsQTKXhUaqYoDQbjko%252FCleanShot%25202024-05-01%2520at%252010.20.57%25402x.png%3Falt%3Dmedia%26token%3Ddfc8bc9c-eccc-4e97-9662-5c45223dfa6d&width=300&dpr=4&quality=100&sign=139b21d363bc5c01497f41066686c56139204a04dedaf3fd942b292afed5592e)
    
6. For the _Label_ property, use the data binding icon to open the visual data binding modal. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F7gvdxOLbLAgOw0ynJJKC%252FCleanShot%25202024-05-01%2520at%252010.21.31%25402x.png%3Falt%3Dmedia%26token%3D3d314356-f172-4426-b199-65adcb9da7c6&width=300&dpr=4&quality=100&sign=b2a452c042c207ff26b8401c149742781a429e4c907969ccb4fbc2f38e1d292f)
    
7. Choose **Repeater > value > title > displayValue** and choose **Apply.** Any components that are inside a repeater will have the option to leverage the repeater data array.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F29nJGzX7DlxK8aFdvrL4%252FCleanShot%25202024-04-03%2520at%252013.45.44%25402x.png%3Falt%3Dmedia%26token%3D3a83a9c7-da2d-4ba1-861f-cdcd9c3e002f&width=768&dpr=4&quality=100&sign=c265315a31198bfd0184f33d9d65f59b4336d495d20150481a38e511ca4323c1)
    
    You'll now see an actual note title displayed in the preview ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FLlztbiUAskufZ1eMJVx0%252FCleanShot%25202024-05-01%2520at%252010.24.37%25402x.png%3Falt%3Dmedia%26token%3Dd4a92691-0e35-4ad7-aaa7-b62a03ef4580&width=300&dpr=4&quality=100&sign=74d23b6161cf352b7ecb226d77473aa12771028df66b3936a9dc4f4cca729472)
    > You'll notice that the data binding is contextually aware. Since this component is inside a repeater you have access to the values that you bound to the repeater from the data resource.

1. Add a **Highlighted value** component after the Heading component by right-clicking **Heading 2** in the content tree and choosing **Add after**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FChq7IoerFSaTUfOzKxBG%252FCleanShot%25202024-04-03%2520at%252013.57.27%25402x.png%3Falt%3Dmedia%26token%3D2ea6c23a-7126-4c68-a836-ce46bb601512&width=300&dpr=4&quality=100&sign=7a8eb3a599c350bab80d741ffe96c44334d34bcc3ae9ec5374c2b8938e32eb4b)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FeZfVlH24ZdTZxGnt2nCx%252FCleanShot%25202024-04-03%2520at%252013.59.02%25402x.png%3Falt%3Dmedia%26token%3D14b27479-6fc1-44f0-b95c-efca3423e11c&width=300&dpr=4&quality=100&sign=9fd9e95a618a3a653ba120ae69bdfe8225a02f6da9472072d1a4cf5cc39b049b)
    
2. Choose **None** for the preset and configure the component as follows using data binding:
    
    - Label: `<data binding>` **Repeater > value > category > displayValue**
        
    - Color: `<data binding>` **Repeater > value > category > _reference > color > displayValue** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FzatwaCAACy0GanTzUxGk%252FCleanShot%25202024-05-01%2520at%252010.26.51%25402x.png%3Falt%3Dmedia%26token%3D9f3bd13e-72d5-4f07-b8d0-463b79e9c104&width=300&dpr=4&quality=100&sign=18801410ee6946f7f1fe48a1082bfd9bb5c323cc75d80e3765e30759a2c0764d)
        
    
3. Now add a **Label value** component after the _Highlighted value_ component by right-clicking in the content tree and choosing **Add after**.
    
4. Choose **None** for the preset and configure the component as follows:
    
    - Label: **Created:**
        
    - Value: `<data binding>` **Repeater > value > sys_created_on > displayValue** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F1q0ZBzU0sebFdTRomyB9%252FCleanShot%25202024-05-01%2520at%252010.27.44%25402x.png%3Falt%3Dmedia%26token%3D163da469-438c-46e4-baf5-3aef15a18ce9&width=300&dpr=4&quality=100&sign=5df4911d47d77b7d212745ec1f7ead62604d056a62e5c44b0befff4af68cc0ce)
        
    
5. Click into the **Styles** tab of the Label value component and set the Margin-top to **S.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Flt0SJOsYKknx1CuHupeZ%252FCleanShot%25202024-04-03%2520at%252014.14.26%25402x.png%3Falt%3Dmedia%26token%3D5bb6f74c-3ed5-4745-8a97-f0ef34e85d89&width=300&dpr=4&quality=100&sign=0cd5f348f44ce926ed36373b7080e32b5a5544a7055694fa9fce548f67386f15)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FtroIpA6qzukl3ST5p4Fm%252FCleanShot%25202024-04-03%2520at%252014.15.01%25402x.png%3Falt%3Dmedia%26token%3Dea087301-d525-457c-9b71-6f3a3ba46d31&width=300&dpr=4&quality=100&sign=d1006f42142040de4a14114ea0741cb5d4c23001f4f66a6c758954ad91095058)
    
6. **Save** the page and click the **Preview** button next to Save to test the page. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FeQnNLtUqJ7rjuPumAroT%252FCleanShot%25202024-05-01%2520at%252010.29.23%25402x.png%3Falt%3Dmedia%26token%3Dce65c3f5-0010-4354-aebc-890e1afe3189&width=300&dpr=4&quality=100&sign=90eecef348dc44c1424928e9060339517459d99d10c8ba06cf5ad245c9f2da07)
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F06fRj5zApuvm68fj0a29%252FCleanShot%25202024-04-03%2520at%252014.16.29%25402x.png%3Falt%3Dmedia%26token%3D74050419-6384-4a0a-8368-1551712454ea&width=768&dpr=4&quality=100&sign=5eeb59e5283f67b55c79ace6f01c6a900045d6ce5c032aec22010ebfd0bd21a0)
    
    You should see cards with all the notes and their values filled in.
    

##  Add Pagination

Returning all 41 notes is probably too much data to display on the page, and over time that could grow pretty large and affect performance. One of our performance engineers has a [great article](https://www.servicenow.com/community/next-experience-articles/performance-hacks-next-experience-quot-repeater-quot-and-quot/ta-p/2881052) about repeaters, pagination, and performance if you want to go deeper.

###  Set up client state parameters and data resources

In this section, you'll add a few client state parameters. You can think of client state parameters as the page's scratchpad or as the page's state. You can populate them and then bind them to multiple components and manage the values on the component by updating the CSP.

1. Click the **Client state parameters** button in the _Data and scripts_ panel to open the editing modeless dialog window. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FCQRzOO12TY3xka0ATPYC%252FCleanShot%25202024-04-03%2520at%252015.17.19%25402x.png%3Falt%3Dmedia%26token%3D64cb585d-656a-4577-b398-13bdb0c5e959&width=300&dpr=4&quality=100&sign=8836d934ea25cf2c31dab2b8c76adaf915d1b305379d9936a282737b151ada42)
    
2. In the _Edit client state parameters_ dialog that comes up, edit the first CSP and add another using the **+Add** button. Set the Name, Type, and Initial values as follows:
    
    - noteLimit | number | 10 (This will limit the number of notes records returned at any time and the pagination component will allow you to change this limit, similarly to a standard ServiceNow list)
        
    - notePageOffset | number | 0 (This will control which page you're currently looking at. So for 42 record, page 2 would be 11-20)
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FjSVbnXG78q1f92kqXS2U%252FCleanShot%25202024-04-03%2520at%252015.38.00%25402x.png%3Falt%3Dmedia%26token%3Dccb0b742-7e63-49ff-ab1d-c3a0dfd73c7a&width=768&dpr=4&quality=100&sign=f5ee17d0b27312effcd275409c8ae57f6297c00e477707cb0632002125e6b4f7)
        
    
3. Close the _Edit client state parameters_ dialog and add an Aggregation Query data resource using the plus sign when you mouse over the _Data resources_ section.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F2ZnR4v4zEQqvR0OI9tOM%252FCleanShot%25202024-05-01%2520at%252015.04.50%25402x.png%3Falt%3Dmedia%26token%3D92958aa2-69b9-49ff-96e7-016359f474f3&width=768&dpr=4&quality=100&sign=7a85314465c3447facfb832aa121e180cf95dc9f1aca69be4268a039518dee4f)
    
    The aggregation data resource will give you the total number of available records in the most performant way possible. You'll use that number in the pagination component.
    
4. Rename the data resource by clicking the (i) icon at the top of the configuration panel next to the name of the data resource:
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FmcK9ruIovbNQYWPbLCqO%252FCleanShot%25202024-04-03%2520at%252009.50.12%25402x.png%3Falt%3Dmedia%26token%3D6d6cd212-6857-4162-bc5a-58070f69039d&width=40&dpr=4&quality=100&sign=a603f76594d68ad55ffef2b317ad3d70b2ab9a33582d5510fff154dfb625de60)
    
    - Data resource label: **Note count**
        
    - Data resource ID: **note_count**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FMfZ2UqMlAIWgqVtDaiX4%252FCleanShot%25202024-05-01%2520at%252015.06.10%25402x.png%3Falt%3Dmedia%26token%3D7f91e6b8-f5e0-4913-9ae0-6f3cf9e43251&width=768&dpr=4&quality=100&sign=1827f3dc38f044a3e96db49406a1e35c3dd7ac052e91ddeeecae089496e10627)
        
    
6. Set the following properties
    
    - Table: **Note [x_snc_killer_notes_note]**
        
    - Edit conditions: **User | is (dynamic) | Me**
        
    
7. Close the _Note count_ data resource panel and open the **Look up notes** data resource by clicking its name in the Data resource section
    
8. Scroll down and set the following for the _Max results_ and Pagination offset properties using the data binding icon.
    
    - Max results: `<data binding>` **Client states > noteLimit**
        
    - Pagination offset: `<data binding>` **Client states > notePageOffset** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FgNXblOKftce5JnqizTpQ%252FCleanShot%25202024-04-03%2520at%252015.45.30%25402x.png%3Falt%3Dmedia%26token%3D1c81af13-bf87-434e-9f18-262e17a58231&width=300&dpr=4&quality=100&sign=6f7a23141e130b29b55b20260d76248d197b52358fee3f9f7fe933a47b39314a)
        
    
9. Close the data resource panel and **Save** your page.
    
10. You may run into some caching issues testing the page, so for this one, click the down arrow next to _Preview_ and choose **Open URL path**. If you see more than 10 records still, do a hard refresh of your browser using CMD+SHIFT+R on mac or CTRL+F5 on windows, which clears the cache on the page as you refresh. You should now see 10 cards/records.
    

###  Pagination controls component

Now you'll need to add the pagination component and configure it to set the pagination Client State Parameters based on clicks.

1. Add a **Pagination control** component after the repeater (right-click on the repeater component in the content tree). Make sure this component is placed outside the repeater or you'll get unexpected results. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F1O9fzQbFSvaclMwbtdV7%252FCleanShot%25202024-04-03%2520at%252015.52.07%25402x.png%3Falt%3Dmedia%26token%3D3f8b34bc-78af-460c-846c-d2c09814bb50&width=300&dpr=4&quality=100&sign=0395d74c9013ae930e6da9f56887b4f00b1519a8ed58d8f8ef9bac366cc4be44)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FVneZCmvUk4Lsat0ACNg0%252FCleanShot%25202024-04-03%2520at%252015.53.12%25402x.png%3Falt%3Dmedia%26token%3D24f6258c-0aaa-42e8-bafe-fcce7cbe124a&width=300&dpr=4&quality=100&sign=20d760bbab03799479b64680b04dd94b227275a4e0fc81adc2280c6ada2ea2cf)
    
2. Choose **None** for the preset and configure the component as follows:
    
    - Total records: `<data binding>` **Data resource > note_count > output > data > GlideAggregate_Query > 0 > count**
        
    - Viewable items per page: `<data binding>` **Client states > noteLimit**
        
    
3. Select the **Events** tab, choose **+Add event mapping**, and choose **Pagination control selected page set** (the first event). ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F1J0EDr8UU4CfhLkLFzwf%252FCleanShot%25202024-04-03%2520at%252015.59.29%25402x.png%3Falt%3Dmedia%26token%3Dd1bbdada-1170-4c76-9ac2-acc34ae657a0&width=300&dpr=4&quality=100&sign=60f629b720a87c5c869cb6a2a06e5ece6514ef57cd02a796ea13f45694dd3ec0)
    
4. Choose **Update client state parameter** and set the _Client State Parameter Name_ to **notePageOffset.**
    
5. Select the data binding option for _New Value_ to bring up the dynamic data binding option. You're going to use a simple formula to multiply two numbers together. Click the **Formulas** tab, choose **Math**, and choose **Multiply**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FVw4FYbfvv3QYSov1BveQ%252FCleanShot%25202024-04-03%2520at%252016.06.30%25402x.png%3Falt%3Dmedia%26token%3Dfa178f17-a128-48f9-9246-9ccf6302af43&width=768&dpr=4&quality=100&sign=a8fbc780233b180003394f39952663d81d01aeee7e0b5ced970a4f14a0aa54e7)
    
6. Now you'll need to populate the left and right values with data. Left should already be highlighted but click back into it if not. Click the **Data types** tab and choose **Event payload > value**. If you have trouble getting the value up there, select the part of the formula you want to insert into first, and then double-click to add. You can also drag and drop data values and formulas, which can be easier.
    
7. Now for the right side, click into it and choose **Client states > noteLimit**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FtV4QbEMhf1GrYTsbPpQN%252FCleanShot%25202024-04-03%2520at%252016.10.30%25402x.png%3Falt%3Dmedia%26token%3D2865407a-edd8-4de6-9709-55e4d5bc3bdc&width=300&dpr=4&quality=100&sign=ea5e9cc2e6da70db9fe6aafc54aa1409b36e1c6ab1bd9574ea85919eecab8984)
    
8. Click **Apply** and then **Add** for the event handler.
    > With that step you're having the pagination component tell the look up notes data resource which page it needs to return. So if you click on page 3, it returns items 21-30 if you're returning 10 items per page.

1. Now add a new event mapping and choose **Pagination control selected page size set.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fk0iaNiwFlpc4ywJdi9Df%252FCleanShot%25202024-05-01%2520at%252015.43.14%25402x.png%3Falt%3Dmedia%26token%3D4a285361-9a02-450b-9af3-95a0b6217dde&width=300&dpr=4&quality=100&sign=bc28b974b3237a40438dc1de8338245349da02b0ad35d85e63f8403bb9c57b9e)
    
2. Add the **Update client state parameter** event handler to the new event and set:
    
    - Client State Parameter Name: **noteLimit**
        
    - New Value: `<data binding>` **Event payload > value** (you may need to drag the value up to the _Add a data output..._ area)
        
    
3. Click **Apply** and then **Add** for the event handler.
    
4. **Save** the page and test the pagination by going to your new tab and doing a hard refresh. Try paging to the next page and watch the notes change. Try changing the record per page to 20 and watch the page respond.
    

You now have a page that pulls and displays notes with pagination controls.

## Back to classic button

In this section, you'll add a button to the page footer that will only display for admins. The button will open the Notes table in the classic UI in a new browser tab so admins can easily troubleshoot, etc.

###  Add the button

1. In your UI Builder tab, scroll down to the _Footer Container_ in the content tree and add a **Button bare** component. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F2ZQyCvXmyscMoBmCQBYm%252FCleanShot%25202024-05-01%2520at%252015.47.05%25402x.png%3Falt%3Dmedia%26token%3Dd1615ed8-a4d5-4ba6-8a69-357e2689564c&width=300&dpr=4&quality=100&sign=cb015c9deff038d25df8966ff76cc3963bc54d9f695e5fa75d1de1ac73610fb3)
    
2. Choose **None** for the preset and set the following properties:
    
    - Label: **Go to the notes table in classic**
        
    - Icon (the second one): **arrow-up-right-outline** 
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FnBnWGsLTPvGX77bxPlua%252FCleanShot%25202024-04-04%2520at%252011.17.48%25402x.png%3Falt%3Dmedia%26token%3D859a6633-255c-4c0d-ba3d-715da30beac3&width=47&dpr=4&quality=100&sign=2f2de66b7fd334c014b1dc33efbc459a4987879fe4fdf12664f75cf48d72d9ee)
     
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FjkerWxRa1BaMtpKRKJEy%252FCleanShot%25202024-05-01%2520at%252015.48.28%25402x.png%3Falt%3Dmedia%26token%3De8f7c5a8-d2d7-4acb-b203-0ca5ed12fdda&width=300&dpr=4&quality=100&sign=8877497dc3e6b731824a7d17e0baabc08a7a77e940665756dd9708a83677b683)
        
    
1. Switch to the **Events** tab and add an event handler to the _Button bare clicked_ event.
    
2. Choose **Link to destination** and then choose **Select destination**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FrOWC6cJUPAgwmnY751KJ%252FCleanShot%25202024-05-01%2520at%252015.49.23%25402x.png%3Falt%3Dmedia%26token%3D268eba9d-1069-4ea0-9f42-9a111bdea422&width=768&dpr=4&quality=100&sign=4508ea609ed103b1ee35c031a8f5acdaf08c09dd23f98bcb61ca9d3618c43f81)
    
3. Choose **External URL** and set it to: **now/nav/ui/classic/params/target/x_snc_killer_notes_note_list.do**
    
4. Click **OK** and then **Add**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F9gyR55SsUltzBP4dfzg3%252FCleanShot%25202024-05-01%2520at%252015.50.09%25402x.png%3Falt%3Dmedia%26token%3Dc41a9ba9-5b77-4b1f-93fe-c74343892b37&width=768&dpr=4&quality=100&sign=e64990b6f2c4079f9578a20e465997472e59ca51f7bca133341d45d205929d90)
    
5. **Save** the page and test by opening the url path next to _Preview_. When you click the button it should open the notes list in a new tab.
    

### Hide the button for non-admins

In UI Builder, you can get the list of roles for the logged-in user. You're going to check and see if the admin role is one of those roles and if not, hide the footer container.

1. Back in UIB, click on the **Footer Container** in the content tree.
    
2. Click on the **Configure** tab in the right panel.
    
3. Click **Component Visibility,** mouse over the _Hide component_ property, and choose the data binding icon to launch the data binding modal. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FTqUCm07e3yxV8iieETGP%252FCleanShot%25202024-04-04%2520at%252014.13.38%25402x.png%3Falt%3Dmedia%26token%3D88331590-a095-469d-8303-b3e07ab9a78f&width=300&dpr=4&quality=100&sign=2ee34a752d3649f935bd166500303d7fa64b26ca3822f0789c87ecd88552e5b6)
    
4. Click on the Formulas tab, click **Comparison**, and choose **NOT**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F1Ja7NzusviB4qoemMuVb%252FCleanShot%25202024-04-04%2520at%252014.21.23%25402x.png%3Falt%3Dmedia%26token%3Db4349ae5-0b05-40cb-892b-e7076169dc94&width=768&dpr=4&quality=100&sign=2227f1b3642e2b96c3c8585229eb0da1853577f9fea8bc3b51e1f4432364e00c)
    
5. Next with the _operand_ highlighted, click **String**, then **INCLUDES**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FSYHLh19siLWBRJn6fZnj%252FCleanShot%25202024-04-04%2520at%252014.24.03%25402x.png%3Falt%3Dmedia%26token%3D70fab030-3217-4aa1-83a4-9d4ce7abc3ad&width=300&dpr=4&quality=100&sign=55db07304bfdabfc5d76a3f1bf75490c39da8e1345a1261ebc085ecb03138d09)
    
6. Now with _stringOrArray_ highlighted click back into **Data types** and choose **Page properties > session > user > roles.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FtY4Q1ifQObA0BAs5sxFA%252FCleanShot%25202024-05-01%2520at%252015.52.42%25402x.png%3Falt%3Dmedia%26token%3D299958dc-3b2c-4feb-86f3-f549fd8f90f7&width=768&dpr=4&quality=100&sign=023d545930858ca09bbcdc538aeba55a8851651478a6e6438b6c4172044dd5ab)
    
7. Now double click into **value** and type **"admin"** (with the quotes, you're telling it it's a string and not dynamic) ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FpSm3D7C1AjHFxEIC2SAC%252FCleanShot%25202024-04-04%2520at%252014.26.36%25402x.png%3Falt%3Dmedia%26token%3D7014e1e8-bbd4-4ab8-aff9-fb8c89d70931&width=300&dpr=4&quality=100&sign=66232a96bed1fe6a4e02797c4ab68453c579150b0dd6c54691142e97986a33b3) At this point, you've built a formula that says "The logged-in user's roles do not contain the admin role."
    
8. Click **Apply** and **Save** the page.
    
9. Test the page in a new window as the admin user and the button should appear. Try impersonating Abel Tuter (you may need to click Open URL path again in UIB) Does the button show up?
    
10. End the impersonation.