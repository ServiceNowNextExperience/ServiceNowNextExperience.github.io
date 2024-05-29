---
id: overview
title: "Exercise 4 Overview"
pagination_label: "Exercise 4 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---

# Exercise 4: Dynamic List Declarative Action

In this exercise you'll add a new declarative action to a list that is only available when the records selected meet certain conditions.

##  Goal

In this exercise, you'll create a list button that allows the user to assign Priority 5 incidents to themselves.

##  Create the action

1. Change your application scope to **Service Operations Workspace ITSM Applications**.
    
2. In your Classic environment browser tab, go to **All > Now Experience Framework > Declarative Actions > Create New Action**.
    
3. Choose **List**.
    
4. Fill out the form that comes up as follows:
    
    - Action label: **Assign to me**
        
    - Action name: **acme_assign_to_me**
        
    - Table: **Incident [incident]**
        
    - Experience Restricted: **true**
        
    - Record Selection Required: **true**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FUpEXz3rBFaPvDu3xqxPv%252FCleanShot%25202024-04-23%2520at%252010.22.42%25402x.png%3Falt%3Dmedia%26token%3D3e4c6289-0d3f-4c4b-8b57-d0a845c7621b&width=768&dpr=4&quality=100&sign=30661011f98778d15fe9bf3c856ebe6155523a39619ac93ca10d41d0bbf61594)
        
    
5. **Right-click** on the form header and choose **Save**.
    
6. Switch to the **Advanced View** using the related link under the form.
    
7. In the _Conditions_ form tab, set the following:
    
    1. Enable Dynamic Evaluation: **true** (this will show the next two fields)
        
    2. Dynamic Script Condition:
    
        
        ```
        current.active && current.assigned_to.canWrite()
        ```
        
    3. Dynamic Record Conditions:
        
        - **Priority | is | 5 - Planning**
            
            ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F12ZMbeEvRztZQcJIj32X%252FCleanShot%25202024-04-23%2520at%252010.46.25%25402x.png%3Falt%3Dmedia%26token%3D4f12847d-8543-4919-b50d-7e41e3da8497&width=768&dpr=4&quality=100&sign=a782209e293c9b3ca665a01060a57c8a87da8a6196424359a88f158712915ee4)
            
        
    
8. Set the following Server Script:
    
    
    ```
    assignToMe();
    
    function assignToMe() {
    
        if (!current.active || !current.assigned_to.canWrite()) {
            gs.addErrorMessage(gs.getMessage('{0}, You do not have permission to update assigned to', [current.number]));
            return;
        }
    
        current.assigned_to = gs.getUserID();
        current.update();
    }
    ```
    
9. **Right-click** on the form header and choose **Save**.
    
10. Now, since you chose Experience Restricted is true, you need to associate this action with SOW. Scroll down to the **Action Configuration** Related List and choose **Edit**.
    
11. Move **SOW Actions** to the right and **Save**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FTOAzGTZOoIrQMZyhZ9Ja%252FCleanShot%25202024-04-23%2520at%252010.30.54%25402x.png%3Falt%3Dmedia%26token%3D4491b07e-b800-422a-8fb6-a499351d6efd&width=768&dpr=4&quality=100&sign=eeb7d9d55f96cbc331d193c41c2a266cf7bab6d5df2d91ee3c63496d194dff0b)
    

##  Test

Now you'll test to make sure this works.

1. Go to **Workspaces > Service Operations Workspace**
    
2. Click the ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FOhjbiI70HgFtP8lkdvyj%252FCleanShot%25202024-04-23%2520at%252010.51.36%25402x.png%3Falt%3Dmedia%26token%3D1eb3f863-6f4a-4685-af37-11e7a9fc97aa&width=38&dpr=4&quality=100&sign=dad301be91063c521d69e06350b44be6cd8c7f14d5e77e49be29c7aa341b4d08) List icon in the left menu.
    
3. Scroll down and choose **Incidents > Open**.
    
4. You should see your new _ACME Assign to me_ button grayed out in the action bar. Select the checkbox next to a Priority 5 incident and you should see the button become selectable.
    
5. Check an incident with a different priority and see if it becomes grayed out again.
    
6. Select only a few Priority 5 incidents and click the button. The list should refresh and they'll be assigned to you.