---
id: activity-2
title: "Exercise 5 - Activity 2"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 2"

---

## Overview
In this activity, you will learn more about Form Builder and how it works. 

Form Builder was designed to be a simple, yet powerful one-stop-shop configuration experience for form, allowing you to access the most-commonly customized aspects of the form administration under one roof. This includes the layout of the form, UI Policy, Dictionary, and ACLs. Form Builder is intended to be the new way to make common configurations that would previously have been done in the “Form Design” and “Form Layout” tools (although you’ll still have access to both if you prefer). 

A few things to note: 
- The left content panel displays the following tabs: 
  - Fields: All fields on the table; with option to add a new field.
  - Components: components that are available to add to the form layout (i.e., Annotations and Sections)
  - The “More” menu includes the Formatters and Embedded lists that are available to add to the form.
  - The fields with yellow icons indicate they have a UI Policy that applies to them.
  - Toggle the slider icon to see field details and ui policies associated with the fields on the form
:::note
These are also accessible when clicking the “+” to add elements directly in the form
:::

## Working with update sets
Now that we are on the Form Builder, you might see a blue bar across the top of the stage. It's telling us we are in the wrong scope. Typically if you click "Edit in original scope", it will update this record in scope B and save that record to our update set which might be in scope A. When working in a ServiceNow instance outside of a lab, you want to make sure you maintain your scopes and update sets properly so you don't run in to any issues when promoting changes from one instance to another. 

What you might normally do is:
1. Go back to the update sets list.
2. Change scope to the one corresponding to this form view.
3. Create a new update set.
4. Refresh Form Builder to make sure it knows you have a new update set.
5. Make the changes to the form.
6. Go back to the update set and set the original update set to be it's batch parent.
7. Close the new update set as complete. 

Doing these steps will ensure your update sets work just fine when being promoted between instances. For the purposes of this lab, we aren't working with update sets, so we will not do the steps outlined above. 

## Instructions

1. Click on the update set picker in the top right corner and select the **Incident Management for Service Operations Workspace** application scope if it's not already selected. 
![LAB2050_EX5A2_image_1.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_1.png)

2. Now let’s add the “Company” field to the form. The customer wants the field to appear between the “Caller” and “Location” fields. Click on the “Caller” field and click on the bottom “+” to “Add below”. 
![LAB2050_EX5A2_image_2.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_2.png)

3. Type “Company” in the search box. Select the **“Company”** reference field by double-clicking.
![LAB2050_EX5A2_image_3.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_3.png)

4. Now that the field is on the form and is selected, we need to add ui policy so the field is only shown if the caller is a VIP. Select the “UI Policies” tab in the right hand pane.
![LAB2050_EX5A2_image_4.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_4.png)

5. Select “**+Add a UI Policy**”.
![LAB2050_EX5A2_image_5.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_5.png)

6. Set **Short description** to "Show only if caller is a VIP".
![LAB2050_EX5A2_image_6.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_6.png)

7. Expand **Advanced Settings**.
![LAB2050_EX5A2_image_7.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_7.png)

8. Un-check **Apply to all views**. This ensures the update is only made to the Service Operations Workspace form view.
![LAB2050_EX5A2_image_8.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_8.png)

9.  Under "When these conditions are met" set the following:
   1. Select field: Caller > VIP
![LAB2050_EX5A2_image_9.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_9.png)
![LAB2050_EX5A2_image_10.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_10.png)

   2. Select operator: is
   3. Enter value: true
![LAB2050_EX5A2_image_11.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_11.png)

10.  Under "Do the following" set “Visible” to **“true”**.
![LAB2050_EX5A2_image_12.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_12.png)

11.  Click **Add UI Policy**. 
![LAB2050_EX5A2_image_13.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_13.png)

12. Observe the new UI Policy appears in the right hand panel.
13. Click **Save**.
![LAB2050_EX5A2_image_14.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_14.png)

14. Test your changes in the Service Operations Workspace by looking up `INC0000050` again.
15. Verify the "Company" field shows up.
![LAB2050_EX5A2_image_15.png](../images/LAB2050_EX5A2/LAB2050_EX5A2_image_15.png)
