---
id: activity-1
title: "Exercise 2 - Activity 1"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 1"

---

## Overview
In this activity, you will 


## Instructions
1. At the top right in the native view, set the Application Scope to **CSM and FSM Configurable Workspace Foundation**

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FDyPWLqGmDq4SRoNKPJHm%252Fimage.png%3Falt%3Dmedia%26token%3D7457ef4f-6c7b-4acc-99c2-dc7106ef180d)

2. Navigate to **Dashboards** in the "Platform Analytics" application to review all current OOB dashboards

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fd5PvTU2QsV5ENFJjy3UD%252Fimage.png%3Falt%3Dmedia%26token%3Da1c1a1e9-8abd-43fb-9086-c9ed60ca3433)

3. Click "**Create new dashboard**" at the top right

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FW8ipVaiHvJamXJFQ6Ep0%252Fimage.png%3Falt%3Dmedia%26token%3Dc332a012-cac4-4b04-b2fa-38968f30aba5)

4. Select **In-line editor** and fill out the fields as follows and click **Create new dashboard**:

    - **Name**: PA K25 Case Dashboard
    - **Description**: This is a sample dashboard (or whatever sample text you would like to write)

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fj38LVN916qNhkI0F3yX2%252Fimage.png%3Falt%3Dmedia%26token%3D68c1a2f7-91c4-417c-98bb-1923dab34842)

5. We will add a few sample reports to populate this dashboard

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FnaVYUA72xG8yeCvpHl4g%252Fimage.png%3Falt%3Dmedia%26token%3Ded3e89a1-dd05-43f8-8182-fa94c3f3d6a1)

6. Add a **single score report** by navigating to the top right **Add new element** and selecting d**ata visualization**

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FwvCyxc8LCLyl1eDO29RW%252Fimage.png%3Falt%3Dmedia%26token%3Dd9530307-3964-4abe-bd20-aefe3e105b28)

7. Click **New Visualization**

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FF3WDpvm07v9S2DZhs4zd%252Fimage.png%3Falt%3Dmedia%26token%3D1ed38ca4-8dae-4210-a5c4-69a0a85170ce)

8. Navigate to the right configuration panel, in the "Header and border" section, update the **Chart title** with "All active cases" to better describe the new report

    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fjbc7FfQPGUte0O3lJFJp%252Fimage.png%3Falt%3Dmedia%26token%3D2609c700-b1d8-434b-9519-a44014182e54)

9. Scroll down on the right configuration panel and select Add data source

10. Type in "Case" in order to have this report reference the case table and select Add custom conditions in order to display only a subset of cases

11. Add the following filter condition
    - **Field**: Active
    - **Operator**: Is
    - **Value**: True


12. Add a list report by navigating to the top right Add new element and selecting List - Simple

13. On the right hand configuration panel, select Case in the Table field and click Edit fixed filter to add the same filter criteria from the previous report

    - **Field**: Active
    - **Operator**: Is
    - **Value**: True

14. Scroll down on the right hand configuration panel to the Header section and update the Title to "All Active Cases" to better describe the new report

15. Click Save at the top to save all progress so far and then click the "i" icon

16. On the right hand panel, toggle the Mark as certified to be true and type in CSM/FSM Configurable Workspace under the "Dashboard Visibility" field. This will allow this dashboard to be selectable in the workspace later

17. Click Save and Exit editing mode at the top

    Challenge! Add additional reports to explore the capabilities of Platform Analytics

    Add a new Filter and use the State field to see cases by State

    Add an image and select one of the default images