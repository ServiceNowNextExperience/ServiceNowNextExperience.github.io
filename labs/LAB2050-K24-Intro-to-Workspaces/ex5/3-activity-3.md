---
id: activity-3
title: "Exercise 5 - Activity 3"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 3"

---

// REMOVED

## Overview
In this activity, you will learn how to highlight list fields. Our customer wants us to show on the list view that this incident involves a VIP. 

## Instructions

1. Navigate to the platform view of your instance. You should see the all menu in the top left.
2. Click on the **All** menu.
3. Type "Highlighted Values" in to the filter navigator search bar.
4. Click on **Highlighted Values** under `Workspace Experience > Administration`.
5. Once the form loads, click on the **New** button in the top right.
6. Fill in the following fields on the form:
   1. Table: Incident [incident]
   2. Field: Caller > VIP. (Click the **+** next to the `Caller` field, and this will expand the related fields for the caller record. Scroll down until you see the `VIP` field and click on that.)
   3. Workspace: **Leave empty**
7. Right-click header, click **Save**.
8. In the "Highlighted Value Conditions" related list, click **New**.
9. Fill in the condition builder as follows:
   1.  Click on the dropdown and scroll to the bottom of `-- choose field --`, then select **Show Related Fields**.
   2.  Click on the dropdown again and click **Caller ==> User fields**.
   3.  Click on the dropdown again and under `.Caller >> User fields`, find and click on the **VIP** field.
   4.  Leave the `is true` as is when it populates.
10. Click on the dropdown next to "Color" and select **high**.
11. Fill in Label: **VIP**
12. Fill in Icon: **star-fill**
13. Right-click 

17.	Add field highlight to caller field, if VIP = true
