---
id: overview
title: "Exercise 5 Overview"
pagination_label: "Exercise 5 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---

# Challenge: Page Collections - Overview tab

In this section you'll continue working with page collections in SOW.

##  Goal

In this exercise, you'll add more content to the incident overview tab in Service Operations Workspace. You've gotten a requirement to add SLAs to

##  Duplicate the Overview Variant

1. In UI Builder, click the ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F1wnqfhL48aUCXrWtmsqU%252FCleanShot%25202024-04-24%2520at%252009.42.26%25402x.png%3Falt%3Dmedia%26token%3D8fcf31f6-5953-4374-95d1-610cad3ec3b1&width=35&dpr=4&quality=100&sign=050357dc5569f793c2fd1f235c93fafd5550e6a40f40e4dd84d3433415337bd1) icon at the very top left of your UIB window to go back to the UIB home page.
    
2. Scroll down to page collections and search SOW. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FJHm8iZtMzMTMCfD2xrF6%252FCleanShot%25202024-04-24%2520at%252009.43.51%25402x.png%3Falt%3Dmedia%26token%3Df36f6820-19a9-49e7-960b-c03eb2c83f91&width=300&dpr=4&quality=100&sign=04ca7e0dd6653690247cccb83aa4cc0c115768fcbaa0a2691128f53f71a42980)
    
3. In the list that comes up, choose **SOW - Record tabs left**.
    
4. Change your app scope to **Incident Management for Service Operations Workspace**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FsgVlLcHr2oO5xxxgeHUx%252FCleanShot%25202024-04-24%2520at%252009.44.58%25402x.png%3Falt%3Dmedia%26token%3Dc786ec24-eb27-4584-bf53-82f9b9cf30b6&width=300&dpr=4&quality=100&sign=ccdb62b749faaa338b03aacda248a32b31c5892823e41d5883d1a1737b13c4ac)
    
5. Mouse over the _Incident Overview SNC_ variant, choose the three vertical dots icon on the far right, and choose **Duplicate variant**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FLts36heh6N7hmqINEjHa%252FCleanShot%25202024-04-24%2520at%252009.46.28%25402x.png%3Falt%3Dmedia%26token%3D78ce5b64-15bf-4bb3-827f-c7c55f767960&width=768&dpr=4&quality=100&sign=53f3aba9a947d5590d6fe974a6a2e90e4aeb52c172af520ed30a1cd2cb3d2e97)
    
6. Name it **Incident Overview SNC Acme copy** and choose **Create**.
    
7. You'll see a green success message with a button on the far right to **Open in editor**. Click that button.
    
8. Click the Settings pill at the top of the page, change the _Order_ to **0**, and **Save**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fo0B3ZV0FkaW8vwx4b4pw%252FCleanShot%25202024-04-24%2520at%252009.50.16%25402x.png%3Falt%3Dmedia%26token%3Db9a26cda-55ef-403e-a126-7ab6b8ff4c00&width=300&dpr=4&quality=100&sign=8903d8669e9b1ac6e802e571324eac15368cc1e71388f706ffb8c65ebe6cf4e8)
    

#  Build out the Page

Now you have an editable version of this page to which you can add things.

##  Add and style a new container

1. Click the **Editor** pill at the top to switch back to the editing view.
    
2. Set the following _Test values_.
    
    - Table: **incident**
        
    - Sys ID: **INC0000015** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FBsjQbw4aMrhryM7AroWv%252FCleanShot%25202024-04-24%2520at%252009.53.17%25402x.png%3Falt%3Dmedia%26token%3Dc6e602f6-91eb-4e4d-a9c1-57abbb8bc603&width=300&dpr=4&quality=100&sign=5abf4531ffbb4a731ffd7fa57ef6625561cc2b49702ddf0007bbcead27d561d4)
        
    
3. Find the _Summary Container_ in the content tree on the left, right-click, and choose **Add after**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fz19plbJYtkTYkDx4sfWn%252FCleanShot%25202024-04-24%2520at%252009.54.21%25402x.png%3Falt%3Dmedia%26token%3Dea9f0ac9-84e1-410e-977b-965769d6cf08&width=300&dpr=4&quality=100&sign=d2444ad380683da8710a8ed036fc93708f255410e524fdab72947fc20412d774)
    
4. Choose the **Layouts** tab and add a **Flexbox** in the _Advanced_ section.
    
5. Choose **None** for the preset in the configuration section on the right.
    
6. Click the (i) icon to the right of Container 2 on the right, rename it to the following, and choose **Apply**:
    
    - Component label: SLA Container
        
    - Component ID: sla_container ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FjQNRDgJsjn2L2Hv09wxs%252FCleanShot%25202024-04-24%2520at%252009.57.00%25402x.png%3Falt%3Dmedia%26token%3D7edb4592-233a-45c6-b0c9-cc3447c54397&width=300&dpr=4&quality=100&sign=22509694fd5d8d245a3191dd2b3659906c71df22dd0ff9806724671f75a24b39)
        
    
7. In the _Styles_ tab, set the following values:
    
    - Min. H: (click **px** and use **Choose custom**) **fit-content**
        
    - Padding: **20px** (click the **Padding** link and use **Choose custom**)
        
    - Background: **Brand neutral**
        
    - Border: (leave defaults)
        
        - Thickness: **1 px**
            
        - Type: **Solid**
            
        - Color: **Neutral 3**
            
        - Corner shape: **Less rounded** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FlUEaVveKbbyij6V7Y47l%252FCleanShot%25202024-04-24%2520at%252010.49.13%25402x.png%3Falt%3Dmedia%26token%3D88b58695-9601-4495-9d61-0133b3cd5095&width=300&dpr=4&quality=100&sign=319724aebf033b15f6896ae7f1975244546b5cbbab34f3bc7570e5e96470814a)
            
        
    

##  Add a data resource

Now you'll add a Look up multiple records data resource to grab task sla record associated to the incident.

1. In the _Data and scripts_ panel, mouse over data resources line, choose the **+** icon, choose **Look up multiple records**, and choose **Add**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FO3S0Q2v2FPdm5lKFJfeC%252FCleanShot%25202024-04-24%2520at%252010.07.01%25402x.png%3Falt%3Dmedia%26token%3Da49c99a8-8078-4034-b280-c8d971ee4a9d&width=768&dpr=4&quality=100&sign=bae0309b6299ba2aed9ca598d68f54b1cd6eef71717d8258e372f552a6e250cf)
    
2. Rename the data resource:
    
    - Data resource label: Look up Task SLAs
        
    - Data resource ID: look_up_task_slas
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FZ6HxlBJtxo7DHW6CsNwQ%252FCleanShot%25202024-04-24%2520at%252010.09.13%25402x.png%3Falt%3Dmedia%26token%3Df8219528-7835-47d5-a13b-668870e0c018&width=768&dpr=4&quality=100&sign=32fdac31e5166171bdf8514b673e9fe08ab6932200d324985182142c059f0a0f)
        
    
3. FIll out the data resource Configure panel as follows:
    
    - Table: Task SLA
        
    - Edit conditions:
        
        - `<data binding>` **Task | is |**  **Data resource > record > sysId**
            
            ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fmgfgi6uzVU4W2qEjQZ98%252FCleanShot%25202024-04-24%2520at%252010.12.25%25402x.png%3Falt%3Dmedia%26token%3Dfd528323-1143-4aa2-8d67-9456bde67733&width=768&dpr=4&quality=100&sign=e1258a86acb2d2a598c079c5e655584bb69b896f7598a6a2f8f5e7cde5d060d9)
            
        
    - Return fields:
        
        - Business elapsed percentage
            
        - Has breached
            
        - SLA Definition
            
        
    - Order by: Created
        
    - Sort type: desc
        
    - Max results: 10
        
    
4. Close the data resource window.
    
5. **Save** the page.
    

##  Show the Task SLAs

1. Choose **+ Add component** under _SLA Container_ in the content tree and add a **Heading** component. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FA1ya2LkvIfnU6dkHt8za%252FCleanShot%25202024-04-24%2520at%252010.18.15%25402x.png%3Falt%3Dmedia%26token%3Df088ad75-6c7e-4150-90d7-cd9b4cdf3541&width=300&dpr=4&quality=100&sign=0efba90ac1af7fa08e767c616c90f65014feb083020f3b64e4e896a38bea2d89)
    
2. Remove the preset using the preset dropdown. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FRWNa87jcU0R5YF917bIp%252FCleanShot%25202024-04-24%2520at%252010.18.59%25402x.png%3Falt%3Dmedia%26token%3De3f761ff-4896-4842-99a3-a192560368db&width=300&dpr=4&quality=100&sign=8385602c3bfcedf10b3fc8f37f9d368f0282e13e323aef7effbbbacb8f3820ba)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FJ5MjAvkpjmea4aOlzYel%252FCleanShot%25202024-04-24%2520at%252010.19.20%25402x.png%3Falt%3Dmedia%26token%3De95585de-6314-4061-9f8c-43faa893475c&width=300&dpr=4&quality=100&sign=2c4e9544b799d5106c3e5f5a00a889bab44305271277f48df158ffb5a6ca3c38)
    
3. Rename the component to the following:
    
    - Component label: SLA Heading
        
    - Component ID: sla_heading
        
    

    > The more components that are on a page, the more important it is to rename them so they make sense when you're looking at the content tree. I also like to keep the original name of the component in the name so I remember what type of component it is. Some components look pretty similar.

1. Configure the component as follows:
    
    - Style: Header-secondary
        
    - Label: **SLA**
        
    
2. In the content tree, right-click on SLA Heading and choose **Add after**.
    
3. Choose **Repeater** and choose **None** for the preset in the config panel.
    
4. Choose data binding for the Data array property to bring up the visual data binding window and choose: **Data resource > look_up_task_slas > results** and click **Apply.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FdMMDNDesVOK4dZs45XmU%252FCleanShot%25202024-04-24%2520at%252010.30.03%25402x.png%3Falt%3Dmedia%26token%3D1345207a-d65c-4bc3-913d-44bdd7eb0d4e&width=768&dpr=4&quality=100&sign=94317f1c84f22afca421c6f4fc640b21c21795fc3b8f2a5a7f014c9d8f51c413)
    
5. Click into the **Styles** tab and choose **Enable styles**, then adjust these styles:
    
    - Direction: Row
        
    
6. Add a **Highlight value** component after the stylized text component in your repeater.
    
7. Choose **None** for the preset and fill out the config panel as follows:
    
    - Label: `<data binding>`
        
        1. Choose **Formulas** and choose **CONCAT**
            
        2. In value1 choose **Data types > Repeater > value > business_percentage > displayValue**
            
        3. In the second value, double-click and type **"%"**
            
        4. Click **Apply**.
            
        
    - Variant: **Primary**
        
    - Color: `<data binding>`
        
        1. Choose **Formulas** and choose **IF**
            
        2. In _if_ choose **Data types > Repeater > value > has_breached > value**
            
        3. In _then_, double-click and type **"critical"**
            
        4. In _else_, double-click and type **"info"**
            
        5. Click **Apply**.
            
        
    
8. **Save** the page.
    

#  Test

Open Service Operations Workspace and open up INC000019 from the open incidents list and see the SLA percentage.