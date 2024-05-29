---
id: overview
title: "Exercise 3 Overview"
pagination_label: "Exercise 3 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---
# Exercise 3: Field Decorator Declarative Action

Declarative actions add custom functionality to your Workspace forms, fields, lists, and related lists without writing custom scripts or learning APIs.

## Goal

In this exercise, you'll add a field decorator declarative action. In the HR Agent Workspace, you have a requirement to add a field decorator (icon button) to the HR Service field that will pop open a modal showing the most recent 10 cases opened in that category.

There are a few ways you could solve this problem of getting more context around what people are asking related to a specific service, and this exercise will teach you how to solve it with a declarative action.

##  Add Demo Data

You'll need to create a quick case for demo data.

1. In the platform view, go to **Workspaces > HR Agent Workspace**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FIAkY7SHPPoPVvSaw0aNB%252FCleanShot%25202024-05-06%2520at%252013.43.30%25402x.png%3Falt%3Dmedia%26token%3Df58ed973-e50b-475b-8bc5-f118f7d709d1&width=300&dpr=4&quality=100&sign=cffd01f581723e2bd90965f9416c47514b8a9cea7ef03628c3045cfdfc47c830)
    
2. Click on the plus sign and create a new HR Case. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FY4xonptC9nnJ5osV7tX9%252FCleanShot%25202024-05-06%2520at%252013.44.00%25402x.png%3Falt%3Dmedia%26token%3D51041548-bad9-48a0-882f-4642abef61f7&width=300&dpr=4&quality=100&sign=efd1219d0711fa9e74f129038e9c46e431352b13737da6e8c66a598984c70d18)
    
3. Choose **Skip verification** and fill out the form:
    
    - COE: **HR Case**
        
    - HR Service: **General Inquiry**
        
    
4. Click **Create Case**.
    
5. Create a second case.
    

#  Build the modal and event in UIB

##  Create a new record page variant

1. Open UI Builder (UIB) by going to **All > UI Builder** or click the icon at the top left of the UIB window to get to the UIB homepage.
    
2. Open the **HR Agent Workspace** experience. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FvvvGEQ1rRnpnnNSS3YEy%252FCleanShot%25202024-05-06%2520at%252013.37.55%25402x.png%3Falt%3Dmedia%26token%3D2022f4f6-1d96-4cea-9745-9118dbeb6c02&width=300&dpr=4&quality=100&sign=4e6ac51e53edc470452a024360041247f5e1f1f86175bfd68f6b1666822b014a)
    
3. Switch your scope to the Agent Workspace for HR Case Management. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FXA0XMNP5KWxxQJYiUiPF%252FCleanShot%25202024-04-22%2520at%252009.27.45%25402x.png%3Falt%3Dmedia%26token%3D1bfa31b4-fd18-4bec-a71d-db1514c55205&width=300&dpr=4&quality=100&sign=fb5b5fdc02321d53439ea115384a52fc1159c9d891cbd490843896812d66b539)
    

    > When duplicating a variant you want to do it in the same scope as the original variant.

1. Scroll down to the Record page and, mouse over **Case SRP**, click the three vertical dots icon to the far right, and choose **Duplicate Variant**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fi83UWEUwd2I5HiaNlSPY%252FCleanShot%25202024-04-22%2520at%252009.30.16%25402x.png%3Falt%3Dmedia%26token%3Dd6c9afd0-69b0-4ab9-a3e7-880a5e694aaf&width=768&dpr=4&quality=100&sign=19235d95bfd1ed6201e13452feb2ffb9bcb492577a6a87ecf62eef2a191e2faf)
    
2. Name the variant Case SRP Acme copy and click **Create**.
    

    > Since you're duplicating the page and owning the new variant it's probably helpful to come up with some sort of naming convention to easily tell your variants apart from the ServiceNow shipped pages.

1. Click the **Settings** pill at the top of the page, change the order to **0**, and click the **Save** button. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FvatMUso4OrPpChjDuNSh%252FCleanShot%25202024-04-22%2520at%252014.46.22%25402x.png%3Falt%3Dmedia%26token%3Dee93639b-dccf-4128-b72f-0b312ca27290&width=300&dpr=4&quality=100&sign=cb0bf77b344d35f562f82152131571cb23f4eb0bf32daf6b53356cfdb9983d62)
    
2. Switch back to the editor view and give the page some test values by clicking the **table** pill just under the experience name at the top of your window.
    
3. Set the table required parameter to **sn_hr_core_case**, let the sysId auto-fill, and choose **Apply.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FkkMcNeUnfcqXnbt7MRDW%252FCleanShot%25202024-04-22%2520at%252009.35.58%25402x.png%3Falt%3Dmedia%26token%3Dd07a5524-d078-48a6-b33e-d55f52d8fb19&width=300&dpr=4&quality=100&sign=af9994ae0d221d82037252e7f214d8b4a15b521fb3c25083807ed207d75c3c32)
    

    > You'll now see some of the components appear in the middle of the page since they've got data.

1. **Save** the **UI Builder** page.
    

## Add a modal

Now you'll add a new modal to the page that will show a list of related records.

1. In the content tree, mouse over modals toward the top under Overlays, choose the plus sign to the right, and choose **Custom**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F5TyWE3ouIfXQISuJMnyE%252FCleanShot%25202024-04-22%2520at%252009.38.26%25402x.png%3Falt%3Dmedia%26token%3De6af15ba-cabd-40f3-9571-f5cba7f7f881&width=768&dpr=4&quality=100&sign=c0ed6af9bb060e78e4536efde1c7730f15c09be91494d0ec75c27dbddf68a870)
    
2. Rename the modal by clicking the `(i)` icon next to _Custom 1_ in the right-hand panel to the following:
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F1cDhdn8AhAAviKQKyHV1%252FCleanShot%25202024-04-22%2520at%252009.40.01%25402x.png%3Falt%3Dmedia%26token%3D281548c5-e758-4e96-a72a-27e069c4fb6d&width=34&dpr=4&quality=100&sign=cd62b5892d591d398c1bd09c76f1c411f214a2a3166228775600d46ff765a00d)
    
    - Component label: **Related cases modal**
        
    - Component ID: **related_cases_modal** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FVvDARpritInbGdOTpxbx%252FCleanShot%25202024-04-22%2520at%252009.41.26%25402x.png%3Falt%3Dmedia%26token%3D54259391-07d3-4838-af19-9fd32a295035&width=300&dpr=4&quality=100&sign=410640582a967cc7046a2008f7f801d8ce4828cc39b96c83d3ea1a904b3925f9)
        
    
4. Click **Apply**.
    
5. Collapse all the modals in the content tree on the left except for your new modal, and click **+Add component** under the _Heading 1_ section of your modal.
    
6. Add a **Stylized text** component.
    
7. Remove the preset using the preset dropdown on the config panel and clicking **Remove** in the popup. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FwbF7RUWPdVR8dAwY5gm9%252FCleanShot%25202024-04-22%2520at%252009.45.21%25402x.png%3Falt%3Dmedia%26token%3D5db77726-c7ec-44f3-9bf5-c324eee05299&width=300&dpr=4&quality=100&sign=a0acbea183634c7502581fd38e6fa8f34610538ff9426c94603c454234255f78)
    
8. Change the _Text_ property to data binding.
    
9. Choose the **Formulas** tab and the **CONCAT** formula. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FwSZcA5k0j0xKe59ITcBd%252FCleanShot%25202024-04-22%2520at%252009.48.59%25402x.png%3Falt%3Dmedia%26token%3D3fdf349f-82d0-4027-b3bf-b728b5357fd3&width=300&dpr=4&quality=100&sign=df97ee99d3a763b3abf120264af842414bf39d33685cd2ea3f8a53f28f13c823)
    
10. Double-click into **value1** and type **"Related records for "** (with the quotes)
    
11. Now click into the second value, click into the Data types tab, and choose **Data resource > record > form > fields > hr_service > displayValue**, and choose **Apply**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fx0nNANGCr5OsAG6bWVyU%252FCleanShot%25202024-04-22%2520at%252009.52.22%25402x.png%3Falt%3Dmedia%26token%3D3e5755da-5830-48eb-9317-9f69c7930b6d&width=768&dpr=4&quality=100&sign=bca2c674f4f0422c270ac29bea0b76354357a1e9dda8a64276e64a8d69519701)
    
12. In the Body 2 section in the content tree, choose **+ Add component** and add a **List - Simple**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FjG7qsAaNq1CHuMMVF0bD%252FCleanShot%25202024-04-22%2520at%252009.54.02%25402x.png%3Falt%3Dmedia%26token%3D6f4d28da-a28d-41c5-8210-fc5aaeaa18b3&width=300&dpr=4&quality=100&sign=d981bd07ae44c2f52dddbeed446f37d950076f8a81a6148b5c658571a126cd7d)
    
13. Choose **None** for the preset to configure it manually.
    
14. Configure the component's properties in the _Configure_ panel as follows:
    
    - Table: **HR Case**
        
    - Edit fixed filter: `<data binding>` **HR service | is |**  **Data resource > record > form > fields > hr_service > value**
        
    - Columns: `<add one at a time>`
        
        - **Number**
            
        - **Subject person**
            
        - **Description**
            
        
    - Maximum rows: **10**
        
    
15. Now add a **Button** component to the modal's footer. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FsvDJrPK5fbze3zDURlrg%252FCleanShot%25202024-05-06%2520at%252013.58.06%25402x.png%3Falt%3Dmedia%26token%3Da02d785f-ce2f-4e7f-b10f-eb81871b6ec8&width=300&dpr=4&quality=100&sign=db51714de2a4d215310419e8bd994ce474f414ec53c03aa944978f61db6b7f01)
    
16. Remove the preset.
    
17. Change the button's label to **Close**.
    
18. Click into the Styles tab and give the button a margin of **L**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FyYwlnxJrByfnvzj6gZCo%252FCleanShot%25202024-04-22%2520at%252010.03.34%25402x.png%3Falt%3Dmedia%26token%3D49d0a22b-363e-4294-be7a-881eb89a1c7f&width=300&dpr=4&quality=100&sign=f24b722b3724b879d221f3348dc35ccff14ed104566c63825e044d223ef726d7)
    
19. Click into the **Events** tab and choose **Add Event Handler.**
    
20. Choose **Open or close modal dialog.**
    
21. Choose the **Related cases modal** for the Modal and click **Add.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FDsfUHIMoC4GaZtAeg5CO%252FCleanShot%25202024-04-22%2520at%252010.08.26%25402x.png%3Falt%3Dmedia%26token%3D7bd2dc97-8ff3-45b2-afb4-4089a2aba95a&width=768&dpr=4&quality=100&sign=09e0c3c76392a2b7e3c718300892644e942043fbb37546c4513745246abfa94d)
    
22. **Save** the UI Builder page.
    

##  Add a handled event to the page

In this section, you'll create a handled page event. This will alow the declarative action to tie into it and take some action based on what the event does. Handled events can be used for any number of things including if you need to call the same series of event handlers more than once, you could do that from the handled event and define it once.

1. Click on **Body** in the content tree.
	![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FTgjDLD8WGSoC3FAo97tg%252FCleanShot%25202024-04-22%2520at%252010.05.56%25402x.png%3Falt%3Dmedia%26token%3D3ae651c3-0ebb-4793-b038-b078e85ab8b7&width=300&dpr=4&quality=100&sign=b95056ea0ceb1fe2ed948eb46be04edecf472bf12b2685dd4f183c5b28c05ab6)
    
2. Click into the **Events** tab on the right.
    
3. Scroll all the way down to the _Handled events_ section at the very bottom of the Events tab and choose **+Add**.
    
4. Set the Event label to **HR Service Related Records** and click **Add**.
    
5. Scroll back up in the Events tab and choose the **+ Add event mapping** button.
    
6. Choose the **HR Service Related Records** event you just created. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fux57X4bmnBkXLa10IxWL%252FCleanShot%25202024-04-22%2520at%252010.13.05%25402x.png%3Falt%3Dmedia%26token%3D491db25f-33bd-415c-85a3-d8de52642b52&width=300&dpr=4&quality=100&sign=0745499bcb7844ebb41ed66ffa0b10b5db07c5c8da47844f2ebe3a63e8f4a4de)
    
7. Choose the Open or close modal dialog event, set the following, and click **Add.**
    
    - Open modal dialog: **true**
        
    - Modal: **Related cases modal**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FDXVSVkAhWnQ3tzYnW3ds%252FCleanShot%25202024-04-22%2520at%252010.14.59%25402x.png%3Falt%3Dmedia%26token%3D8914d679-defb-41bd-9a51-4519bb924365&width=768&dpr=4&quality=100&sign=e1c946f0b67e4c9d1aa0db69ab1c2681f33ff9631a183e8f0c8100d8adc70c01)
        
    
8. **Save** the page.
    

##  Create the declarative action

Now you'll use the declarative actions framework to create an action that will show up on the HR Service field as an icon button that will trigger the event you just created.

1. In your Classic environment browser tab, go to **All > Now Experience Framework > Declarative Actions > Create New Action**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FgZqnhyFkayqgbguMPdKX%252FCleanShot%25202024-04-22%2520at%252013.26.26%25402x.png%3Falt%3Dmedia%26token%3D0631a524-756e-48bd-bf8f-436f592de93c&width=300&dpr=4&quality=100&sign=b31cdb0e687f004de31e8943df13bde372e80ed659b4a20079c15c532f7c3a2c)
    
2. Choose **Field decorator** on the page that comes up and fill out the form as follows:
    
    - Action label: HR Service Related Records
        
    - Action name: hr_service_related_records
        
    - Implemented as: UXF Client Action
        
    - Table: HR Case [sn_hr_core_case]
        
3. Specify client action: `<click the magnifying glass and choose **New** to create a new client action>`
        
   - Key: HR_SERVICE_ACTION
   - Label: HR Service Related Records
   - Applicable to: UXF, Field
   - Payload:
           
            ```
            {
              "referenceField": "{{fieldName}}",
              "referenceKey": "{{referenceKey}}",
              "referenceTable": "{{referenceTable}}",
              "fieldLabel": "{{label}}",
              "parentTable": "{{tableName}}",
              "parentSysId": "{{recordSysId}}",
              "encodedRecord": "{{encodedRecord}}",
              "serializedChanges": "{{serializedChanges}}",
              "fieldType": "{{fieldType}}",
              "value": "{{value}}",
              "displayValue": "{{displayValue}}",
              "dependentField" : "{{dependentField}}",
              "dependentValue": "{{dependentValue}}"
            }
            ```
            
4. Click **Submit.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FuaObR1tEaBXJXRXroXpZ%252FCleanShot%25202024-05-06%2520at%252014.04.45%25402x.png%3Falt%3Dmedia%26token%3D903c349b-6766-404a-8e4e-f0a4768456a0&width=300&dpr=4&quality=100&sign=0c5e006c12dcc902a18bff07ea859c5c010dbec78f46af08bfb245139d2e0149)
            
5. Set the following fields:
    - Decorator applies to: Specific field
        
    - Field name: HR service
        
    - Icon: related-list-fill
        
    - Tooltip: Other cases for this HR Service
        
    - Description: Shows the other cases for this HR Service
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FyfRI88eHgAeJvCoMIrDK%252FCleanShot%25202024-04-22%2520at%252013.36.49%25402x.png%3Falt%3Dmedia%26token%3Da49b52e4-c8dc-4b87-aae3-09fa5b2c8d38&width=768&dpr=4&quality=100&sign=0b102246754c4b18cf1cc4deb0621729cf7346cd113b82109de601aee5012535)
        
    
6. Right-click on the header and choose **Save.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FdPsqO8SZAatw3RVtK5X8%252FCleanShot%25202024-04-22%2520at%252013.37.23%25402x.png%3Falt%3Dmedia%26token%3Da56e95a9-046d-4131-872c-e8f248d4fd77&width=300&dpr=4&quality=100&sign=b3deca8c1a1dd6befb51b9cc721a9b2705d3f232c057cc6c1fecd2de04ce8348)
    
7. Choose **Advanced view** under _Related Links_ below the form fields. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FcMNhAx6shptxhhnYLR6x%252FCleanShot%25202024-04-22%2520at%252013.39.38%25402x.png%3Falt%3Dmedia%26token%3D23a21e5e-1f3f-4467-94df-b5291df7fdeb&width=300&dpr=4&quality=100&sign=9cd6c1d686d12ec56328d2bd7c7a508fd6c3b7d3d86e017bb5e5753d35661b84)
    
8. When the form reloads click on the **Conditions** tab.
    
9.  Set the _Record Conditions_ to: **HR Service | is not empty** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FFjyFivogsC8FoEA0slOe%252FCleanShot%25202024-04-22%2520at%252013.42.37%25402x.png%3Falt%3Dmedia%26token%3D2a33ee3f-79c0-4346-9a37-1d35bd953593&width=300&dpr=4&quality=100&sign=f74fb2c40e7d5506897954ccbca68e20c6f41cbceeb53707fbbd1bbc524d405c)
    
10. Right-click on the header and **Save** the form.
    
11. Scroll down to and click on the **UX Add-on Event Mappings** related list.
    
12. Choose **New** and fill out the form as follows:
    
    - Event mapping name: **HR Service Related Records**
        
    - Source element ID: **form**
        
    - Parent Macroponent: **Case SRP Acme copy**
        
    - Target Event: **HR Service Related Records**
        
    - Target Payload Mapping:
        
    
        ```
        {
            "container": {
                "fields": {
                    "container": {
                        "encodedRecord": {
                            "binding": {
                                "address": [
                                    "encodedRecord"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        },
                        "label": {
                            "binding": {
                                "address": [
                                    "fieldLabel"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        },
                        "referenceField": {
                            "binding": {
                                "address": [
                                    "referenceField"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        },
                        "referenceKey": {
                            "binding": {
                                "address": [
                                    "referenceKey"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        },
                        "serializedChanges": {
                            "binding": {
                                "address": [
                                    "serializedChanges"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        },
                        "size": {
                            "type": "JSON_LITERAL",
                            "value": "md"
                        },
                        "sysId": {
                            "binding": {
                                "address": [
                                    "parentSysId"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        },
                        "table": {
                            "binding": {
                                "address": [
                                    "parentTable"
                                ]
                            },
                            "type": "EVENT_PAYLOAD_BINDING"
                        }
                    },
                    "type": "MAP_CONTAINER"
                },
                "params": {
                    "type": "JSON_LITERAL",
                    "value": {}
                },
                "route": {
                    "type": "JSON_LITERAL",
                    "value": "modal_ref_lookup"
                },
                "size": {
                    "type": "JSON_LITERAL",
                    "value": "lg"
                }
            },
            "type": "MAP_CONTAINER"
        }
        ```
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FUN6xXo6oh4VTTLYA0QSU%252FCleanShot%25202024-04-22%2520at%252013.48.23%25402x.png%3Falt%3Dmedia%26token%3Dc1130e28-1389-4552-b646-24dd87057f6f&width=768&dpr=4&quality=100&sign=ed3e51b2427776fa40e6b696fcca2a5c695c3eab576b41ff78b7dd3f8f3ea835)
        
    
13. Choose **Submit**.
    
14. Now to test this open a case in the HR Agent Workspace and notice the new icon in the HR service field next to the preview icon. When you click it the modal _should_ appear, but sometimes declarative actions have caching issues. You may need to clear the instance cache by appending cache.do to the url after `.service-now.com/`, clearing browser cache, and closing and reopening windows.