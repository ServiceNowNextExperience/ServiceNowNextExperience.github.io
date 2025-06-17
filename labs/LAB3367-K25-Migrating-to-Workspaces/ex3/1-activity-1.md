---
id: activity-1
title: "Exercise 3 - Activity 1"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 1"

---

## Overview
In this activity, you will 


## Instructions
1. From the native view, use the application navigator to type in “declarative actions” and select the “Create New Action”  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FI5C9iUcRM0M7JwYMvqqA%252FScreenshot%25202025-04-21%2520at%252010.29.35%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D00abf290-5b57-42c2-a1a3-9ac3f526123c)

2. Select Form  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FdwRYspw9GVUJykySNdUq%252FScreenshot%25202025-04-21%2520at%252010.30.22%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D3a541e54-553f-4884-857f-4e6829bd1d68)

3. Fill out the Action Assignment record as follows:  
    - **Action label**: Reopen Case  
    - **Table**: Case  
    - **Enable for all Configurable Experiences**: True  
    - **Tooltip**: Reopen resolved Case  
    - **Description**: Used to reopen a resolved Case  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FSTveh5ccmeGdEgLuX5qw%252FScreenshot%25202025-04-21%2520at%252010.30.53%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dd0067bc0-a031-4242-b40e-21a451aefc2f)

4. Copy and paste the below script into the **Server Script** field and click on "Advanced View."  
   ```current.state = 1; //New
    current.update();
    action.setRedirectURL(current);
    gs.addInfoMessage('Case number ' + current.number + ' has been reopened.');
    ```

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FXs0S2PF1lrupJh0GL6I5%252FScreenshot%25202025-04-21%2520at%252010.49.06%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dd0964798-344d-4391-b7f5-fe695ff82770)

5. Complete the **record conditions** as follows.  
    - **State**: Resolved  
    - **Requires write access**: True  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fj4W8CDnRmf7lWInJHqqs%252FScreenshot%25202025-04-21%2520at%252010.49.41%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dee25c513-49b4-48b2-a343-32a22c52e6da)

6. Click on **Update** at the top right of the form to save changes or right click the header to hit **Save**

7. Navigate CSM Workspace and click on a Resolved case (note: you may need to right click and show matching on  
    - **State**: Resolved  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FccDs7jSSqxinnVhFROiS%252FScreenshot%25202025-04-21%2520at%252010.50.13%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D14734574-a8d0-45b5-8ca0-e24fb5712216)

8. Verify to make sure the “Reopen Case” button is available at the top right

9. When the button is clicked, the Case state should be set back to “New” state and a blue notification should be displayed as well

10. Activity log shows all changes to this record