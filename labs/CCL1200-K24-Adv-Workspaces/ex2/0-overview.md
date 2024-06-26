---
id: overview
title: "Exercise 2 Overview"
pagination_label: "Exercise 2 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---
# Exercise 2: Page Collections - Sidebar

##  Goal

In this lab you’ll add a tab to the contextual sidebar to the Standard Record Page (SRP) in Service Operations Workspace (SOW) that shows all other incidents for the Caller. This will allow you to add functionality to the record page without owning it. You can think of page collections (PC) as extension points.

This lab assumes you have completed the pre-work and are comfortable navigating UI Builder.

Depending on your demo data situation you may want to create at least two incidents with the caller you’re planning on using for testing.

##  Create a new page

1. Open UI Builder (UIB) by going to **All > UI Builder** or if you still have it open click on the UI Builder icon at the top left of the builder window to bring up the homepage. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FSK8XBtKnbZEJ4WRAg6hw%252FCleanShot%25202024-04-16%2520at%252014.14.27%25402x.png%3Falt%3Dmedia%26token%3D1a5d6981-7651-474c-8bf3-0bc181ba3d4c&width=300&dpr=4&quality=100&sign=7757caec1b77631a26e198f933852f44bf2fc174d8e14ad101a7178650747f58)
    
2. Change your scope
    
3. Scroll down past the _Experiences_ section to the **Page Collections** section and filter the Display name on **sow.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F2Gd6Ctn0QeNs0kcdWiYl%252FCleanShot%25202024-04-16%2520at%252014.58.21%25402x.png%3Falt%3Dmedia%26token%3D551ae9ec-195a-48b5-a4f8-994f035182ae&width=300&dpr=4&quality=100&sign=a2ae22761e11b82b3a4c6c98a67cdc7403f254e2a4d2f9a1fc61d3ab0f6b2c39)
    

    > _Note:_ there are 4 different page collections for SOW SRP tabs depending on where you want to add content:

1. Open **SOW – Sidebar tabs top** by clicking on it.
    

    > _Note:_ You’ll see a view with all of the pages in the page collection. If you look at the record information page you’ll see that pages in a Page Collection can have different variants and show different things based on the parent record page. For example, the second item in the list only shows for new incidents:

1. Change your scope in UI Builder to **Service Operations Workspace ITSM Commons** in UI Builder. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FCbXgwxOPEOODuteOzBGf%252FCleanShot%25202024-05-06%2520at%252012.58.49%25402x.png%3Falt%3Dmedia%26token%3D78d0a9c9-5e24-48f4-8810-f8e4323354bf&width=300&dpr=4&quality=100&sign=c7be34864f682008b32eec27b64ca55b1028a48a49bb72a73e1dcd53bf9438ab)
    
2. Click the plus sign to create a new page: ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fhg8sT780RIgZ7prjI2Ki%252FCleanShot%25202024-04-16%2520at%252015.08.21%25402x.png%3Falt%3Dmedia%26token%3D4a0c65b3-0340-416c-adee-f9a2e705a754&width=300&dpr=4&quality=100&sign=5641d36b23bb066e88899cdc70277f3de448c5e0e13f786517776d7cb3bcdebc)
    
3. Choose **Create a new page** and fill out the new page form:
    
    - Name: **Caller related incidents**
        
    - URL path: **caller-related-incidents**
        
    
4. Choose **Continue.**
    
5. Name your Variant **CRI Default** and then choose **Create**.
    
6. In the green banner that appears choose **Open in Editor**.
    
7. One last thing you need to do with the page is give it an icon for the sidebar. Click the **Settings** pill/toggle at the top middle of the UI Builder window, choose the **Open records** dropdown under _Actions_, and choose **Page collection** to open the page collection record in a new tab. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FlaBwHg3YXcDIVLvXBEP3%252FCleanShot%25202024-04-16%2520at%252015.17.26%25402x.png%3Falt%3Dmedia%26token%3D05d2a991-58f6-48db-b876-95122395b8d1&width=300&dpr=4&quality=100&sign=90176360558142c4a8d5e7384759a5d31e00cd11d770428ad61e37487101382b)
    
8. Scroll down to the UX App Aroutes related list, double-click into the _Icon_ column for the _Caller related incidents_ row, and type **list-fill** for the icon. Hit enter or click the check mark.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FZqB7A29diNAQgq23Ry2x%252FCleanShot%25202024-04-16%2520at%252015.28.42%25402x.png%3Falt%3Dmedia%26token%3Da456b0d7-3c03-4eca-9050-e02229b1149d&width=768&dpr=4&quality=100&sign=91095ad573c8620edfe39000b3fe7181ac955f31bb971527ae3c76f6539091a4)
    

###  Test the Record Page

1. Test this by opening up a record page in Service Operations Workspace. Choose **Workspaces > Service Operations Workspace.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fki5CYRMtiETMf3jsCfIq%252FCleanShot%25202024-04-16%2520at%252016.27.23%25402x.png%3Falt%3Dmedia%26token%3D41338b03-6d08-4293-aac6-2806057d3eb3&width=300&dpr=4&quality=100&sign=53a82dd011f5bc6e7cafcdef06806316f7df1542b3e292e97892fea69ec5f43c)
    
2. Close the modal.
    
3. Click on the List icon ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fe0W0SNtU2LQBTflot8Gt%252FCleanShot%25202024-04-16%2520at%252016.30.38%25402x.png%3Falt%3Dmedia%26token%3Db3c4a1a6-625f-456a-9bad-f7e804d77990&width=34&dpr=4&quality=100&sign=509bdf2996aceb8a086830bf60625724078aa39c80a08bb94b4dc17f796bbca7) in the left hand menu, choose **Open incidents**, and click into an incident.
    
4. You should see a new list icon on the right menu with a _No content available_ message in the page body on the right. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FZNFjmITxXV5FigPy8zPR%252FCleanShot%25202024-04-16%2520at%252016.31.20%25402x.png%3Falt%3Dmedia%26token%3D93633bc1-4a54-4271-86dc-7b740d2eaa85&width=300&dpr=4&quality=100&sign=c0ca0ac898c39d4c1638efe7785ed9a4fb95f11412029d96ab8950ad3eb4c1b6)
    

##  Build out the Caller related incidents page

Now you’ll add some content to the _Caller related incidents_ (CRI) page that pulls from the parent page.

1. Switch from Settings to **Editor** using the pill at the top of your UI Builder window. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FyBF2bphmqPs8zrpvW4H4%252FCleanShot%25202024-04-17%2520at%252012.45.47%25402x.png%3Falt%3Dmedia%26token%3D658ca6c6-118f-46e1-b291-90e0632003fb&width=300&dpr=4&quality=100&sign=df241d30d9738b8f441c519cd540ada03c24c200a6b55407bd1f00459fa7ec3b)
    
2. Find the _Test values_ dropdown towards the top left of the page, change to **Form** in the dropdown, and choose **Add test value.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FL6QPrd8YDwiFHyutoNth%252FCleanShot%25202024-04-17%2520at%252012.47.47%25402x.png%3Falt%3Dmedia%26token%3D795a3c66-11d4-44c3-a603-ca5846339e4b&width=300&dpr=4&quality=100&sign=f6989d4b74d0de814da542caa32534ba8eff8eb75e6446b4577083e102cb6b9e)
    
3. Check **Table** and **Sys ID** and choose **Update**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FQofWMyX9MoDLLYqrcNBr%252FCleanShot%25202024-04-17%2520at%252012.48.59%25402x.png%3Falt%3Dmedia%26token%3D2ff7eaf0-d5e4-4bf1-a5ef-2415bdf8d6e3&width=300&dpr=4&quality=100&sign=1e85d66d34670b49114f362f7703763fcc6afab5b73a6476d8941e5426ae8b6c)
    
4. Choose **Incident** for table and let the Sys ID autopopulate. It should just grab a random incident record id.
    
5. Choose **Apply.**
    
6. Add a new data resource by clicking **+Add data resource** in the _Data and scripts_ panel at the bottom left of the UIB window. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fn0bZy7NC13ZA4FBxd6Uq%252FCleanShot%25202024-04-17%2520at%252012.51.00%25402x.png%3Falt%3Dmedia%26token%3Dbd916e61-897d-4fee-a32d-d717affb3e7a&width=300&dpr=4&quality=100&sign=6cc8a9c5bcfd399647de8410611add01a8a71f071976ecdc0a39569899ca5429)
    
7. Choose **Look up multiple records** and choose **Add.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F9tadTdVQ22hnfAXnRuQA%252FCleanShot%25202024-04-17%2520at%252012.52.00%25402x.png%3Falt%3Dmedia%26token%3D022873ef-399a-412a-8c4c-7016f45fdd1d&width=768&dpr=4&quality=100&sign=30eeb53674fbb7ec1de864090d666e19ddf9608f87f02c6834507585a44b7f07)
    
8. Rename the data resource by using the `(i)` icon to the right of the name and fill in:
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F59lneKvLuHtZ9czNs9H7%252FCleanShot%25202024-04-17%2520at%252012.57.06%25402x.png%3Falt%3Dmedia%26token%3D6207201f-555c-4e75-8ecf-417cd8cd5bc8&width=40&dpr=4&quality=100&sign=78e935d8531db783cafd862947e61ddb03d10a9f9b6f9ebe05237150d360155d) 
    1. Data resource label: **Look up incidents**
        
    2. Data resource ID: **look_up_incidents**
        
    
9. Choose **Apply**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fj1EzU0iS6UPAfiDZx6cZ%252FCleanShot%25202024-04-17%2520at%252012.58.15%25402x.png%3Falt%3Dmedia%26token%3D07ee5e5b-14bf-4116-b9bb-37aa69711097&width=768&dpr=4&quality=100&sign=f457a1d4be14151638f1c523d8d4b48c86b9d6988bf04c028ec5c43a1816b709)
    
10. Fill out the data resource as follows
    
    - **Table**: Incident
        
    - Choose **Edit conditions** and fill out:
        
        - `<data binding>` **Caller | is |** **Data resource > record > form > fields > caller_id > value**
            
        - AND 
        - `<data binding>` **Sys ID | is not |** **Data resource > record > sysId**
            
            ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FUrGPLyCSbjdmAhK4pmKm%252FCleanShot%25202024-05-06%2520at%252013.12.40%25402x.png%3Falt%3Dmedia%26token%3D465cffe1-89d1-40a9-9d5a-2c347e9c7b04&width=768&dpr=4&quality=100&sign=15afeca3a07a3b3eacc1665455b70de9374ec39ffe3e19178c96062fd008a79b)
            
        - Click **Apply.**
            
        
    - Return fields (click +Add and choose one field at a time)
        
        - **Short description**
            
        - **State**
            
        
    - Order by: **Number**
        
    - Sort type: **desc**
        
    - Max results: **20**
        
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FeSm46dyLSeTDbv88fuk1%252FCleanShot%25202024-04-17%2520at%252013.07.25%25402x.png%3Falt%3Dmedia%26token%3Dc7c57031-01b1-4207-9e8f-39a120feefbf&width=768&dpr=4&quality=100&sign=b03056b37991a917cfc3d0dc79669cec37d95a6654ee58a2dea3e20ec7383a96)
    
11. Close the _Data resource_ window.
    
12. In the content tree under Body, add a _Single column_ layout.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FeAtbcGncvm4Q019Ku8jg%252FCleanShot%25202024-04-17%2520at%252013.08.41%25402x.png%3Falt%3Dmedia%26token%3D90446b5d-a042-4d78-a364-5ffea3ce3b20&width=768&dpr=4&quality=100&sign=bedeaf9c0492abfc392a7256a210dcf1ddb30f29074da9057f7a7284f34c5c4a)
    
13. In the right panel add **L** padding. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FdxJseW5m3XiJ8P7ZD3ZL%252FCleanShot%25202024-04-17%2520at%252013.09.50%25402x.png%3Falt%3Dmedia%26token%3D593d2c35-f109-43bb-865d-55ad69e15a65&width=300&dpr=4&quality=100&sign=b03aa43b54d28a0c12a0fc0d025d9e1ec431e0b495f4033b7d2afa04746c86f0)
    
14. Add a **Stylized text** component within Column 1.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FGis8SIhGnzNz3dYAKG1F%252FCleanShot%25202024-04-17%2520at%252013.10.58%25402x.png%3Falt%3Dmedia%26token%3D3405169f-0347-4cc8-935d-f0f3c3183ea4&width=768&dpr=4&quality=100&sign=f5a7589401e01b0e04b5c6359d8b763ab45f28559fcbf9db0cc0279839510f14)
    
15. Remove the preset using the Preset dropdown and choosing **None** and then **Remove.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F5aQf3Qw1mn9sKZC9dHVN%252FCleanShot%25202024-04-17%2520at%252013.12.06%25402x.png%3Falt%3Dmedia%26token%3D1adaaa45-7d8d-4109-a4d7-84abe1fb9106&width=300&dpr=4&quality=100&sign=9a881675cf136f14e955666833b31007c7dadcfe14ceef96afa5c2cd8fc34473)
    
16. Configure the stylized text component as follows:
    
    - Text: **Caller related incidents**
        
    - HTML tag: **H2**
        
    
17. Add a **Repeater** component within _Column 1_ after the stylized text by right-clicking on **Stylized text 1** and choosing **Add after**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F2hiOU6RjaZJRU0HkVWsA%252FCleanShot%25202024-04-17%2520at%252013.14.39%25402x.png%3Falt%3Dmedia%26token%3D89217e4d-9ac0-4fd4-a7ab-c911a07cd9ee&width=300&dpr=4&quality=100&sign=3f39897853b4e13130fc1a1d27b7e865995143af3a6bc08d9bfcf8f2039b1ef8)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FyJsVgqEGjzutfaZaAdpF%252FCleanShot%25202024-04-17%2520at%252013.15.08%25402x.png%3Falt%3Dmedia%26token%3Df1655099-8045-4a65-81f8-f88e35d31643&width=300&dpr=4&quality=100&sign=1527cc01314f1f327815fa5c4e13fa29236bd2f3fc4401b76c88ab50670ff703)
    

    > A [repeater](https://docs.servicenow.com/bundle/washingtondc-application-development/page/administer/ui-builder/task/repeaters.html) acts as a basic loop that repeats the data you provide in multiple components within UI Builder. Repeaters use an array or an array of objects.

1. Choose **None** for the preset and click the Data binding icon on the _Data array_ property. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FOuHmAVDo8vJAQJLLDZZt%252FCleanShot%25202024-04-17%2520at%252013.17.44%25402x.png%3Falt%3Dmedia%26token%3D9da2fe27-239b-4f33-b754-fa32c53d5aa5&width=300&dpr=4&quality=100&sign=aff7489b63eac81ed2b92078ff2d7b3638878144157016f4b2cf06efac000f31)
    
2. Choose **Data resource > look_up_incidents > results** and choose **Apply.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F5cuauxPGYEa8aISemuVv%252FCleanShot%25202024-04-17%2520at%252013.18.48%25402x.png%3Falt%3Dmedia%26token%3D86474cff-2ad0-48fc-93cc-3b514bcdc1b9&width=768&dpr=4&quality=100&sign=8ce2bfd9159cd987955613fdadc4c9f0f097e163ee3a698a2da15152206bbc13)
    
3. Click into the Styles tab on the repeater and choose the **Enable Styles** link. This causes the repeater to act like a container where you can add some margin and padding. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F9AVBnGbYc7BREm1X6fU8%252FCleanShot%25202024-04-17%2520at%252013.19.52%25402x.png%3Falt%3Dmedia%26token%3D7b27f5dd-fbd2-4c60-bb42-3c03293c20d2&width=300&dpr=4&quality=100&sign=70ef73ada703521d481795ff9771f5184b49d262c3415134445eadfa43062fdb)
    
4. In the _Styles_ tab, set the _Width_ to **100%**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FaTkeqelEIaP356liqdEw%252FCleanShot%25202024-04-17%2520at%252013.20.53%25402x.png%3Falt%3Dmedia%26token%3D9d0ec4f4-734a-4122-a709-dc7b0f891e29&width=300&dpr=4&quality=100&sign=205e05211a0f44f06640af1dc9d9b989d9f9f3f45690d12a7fa5799d439b1b12)
    
5. Add a **Card base container** within the repeater using the **+Add component** link under the repeater in the content tree.
    
6. On the Config tab, choose **None** for the preset, set the size to **Medium,** and Interaction to **Click**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FlcdXpJqIGg4Et0eocTAD%252FCleanShot%25202024-04-17%2520at%252013.22.28%25402x.png%3Falt%3Dmedia%26token%3D4307a85d-c420-411a-a01e-cf7afe1969cb&width=300&dpr=4&quality=100&sign=ca69e9f8355e966ebe4c941c8ff008f9e58e54c50c5ab3828d8ddabe4518c9cf)
    
7. Click into the **Events** tab and add an event mapping for the Card clicked event. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fa3AG37GwI5A7SmdTezyt%252FCleanShot%25202024-04-17%2520at%252013.23.08%25402x.png%3Falt%3Dmedia%26token%3Daa2eab8b-15b3-44e6-96bc-dd42d0bfbc40&width=300&dpr=4&quality=100&sign=606550bf6cceea72a8ade6e965eb4c0c5895b6d3ebd559c0dd12b5101ae2fc34)
    
8. Scroll all the way down in the event handlers window and choose the **Relay open record** event handler under the _Form Controller._ ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F96W6aRye2TusD2PaeQNS%252FCleanShot%25202024-05-06%2520at%252013.23.47%25402x.png%3Falt%3Dmedia%26token%3Ddb59958a-396c-424d-a92e-3373c04d16ca&width=300&dpr=4&quality=100&sign=348549901594c3f4c998cdf7b69e696cfd3401c72dd7a1484879e24e3614dc49)
    
9. Fill out the properties on the right:
    
    - Table: **Incident**
        
    - Sys id: `<data binding>` **Repeater > value > _row**_**_**_**data > uniqueValue** and hit **Apply**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FtUIxfxQ2qRr7r2AYFNvD%252FCleanShot%25202024-04-17%2520at%252013.27.27%25402x.png%3Falt%3Dmedia%26token%3D34455882-e5d7-448e-8376-aaf7d5474e88&width=768&dpr=4&quality=100&sign=942234018cbe80ceb7ca04056a94fb2742d033d847377bfb57249e863d5a9c46)
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FjSe6slzu2rQpndnVLi2C%252FCleanShot%25202024-05-06%2520at%252013.25.09%25402x.png%3Falt%3Dmedia%26token%3D55e38c83-76ee-41bb-a49b-f14f8607e5eb&width=768&dpr=4&quality=100&sign=bbd6807f85954fe89a96c6626befcb2ea18e918da6e23c8a9cf99949e2ab48bd)
        
    

    > This is an important step to note. The page in the page collection cannot directly communicate or get values from the parent page except through the controller. The form controller has many event handlers built into for this purpose you can explore.

1. Click **Add**.
    
2. Within the Card Base Container 1, add a **Stylized text** component, remove the preset, and set the following props:
    
    - Text: `<data binding>` **Repeater > value > number > displayValue**
        
    - HTML tag: **Div**
        
    
3. Duplicate that stylized text component by right-clicking it in the content tree and choosing **Duplicate.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F7vpVcFw4aZcMGr5QKJ2y%252FCleanShot%25202024-04-17%2520at%252013.37.38%25402x.png%3Falt%3Dmedia%26token%3Dce49ac35-36a9-4005-8996-68e505cb8c05&width=300&dpr=4&quality=100&sign=0e6ea5eb3aaca16718e0f1ee2baabf2a2c841fbeb56f21254d278fa5b7a516f8)
    
4. In the new stylized text 3 component, change the text to reference the short description instead of the number. You may have to remove the current value by clicking the value and clicking the X. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FpWoBT73jKS5zesKIGxVK%252FCleanShot%25202024-04-17%2520at%252013.40.12%25402x.png%3Falt%3Dmedia%26token%3D51678d3c-e458-4060-bec4-073b592f3ed3&width=300&dpr=4&quality=100&sign=fb5f9ff8a09550d51981aa5415f0c1c07d54c0ef045116ffb66410d7f7db1421) If you have any trouble getting the short description to display here, you may need to remove the value altogether, save the UIB window, refresh it, then rebind the data to the short description value.
    
5. Save your page collection and test in the workspace on an incident. Make sure to hard refresh the page CMD+SHIFT+R or CTRL+SHIFT+R. (That’s good practice to get into overall with UIB pages). When you click one of the caller related incidents you should have the incident open in a subtab under the current incident record.
    

#  Advanced Challenge Exercises

- Try adding filtering to the list of incidents.

- If there are multiple open incidents show a message below the caller field on the form.