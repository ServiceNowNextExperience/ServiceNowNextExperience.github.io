---
id: activity-5
title: "Exercise 1 - Activity 5"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 5"

---

## Overview
In this activity, you will create a Data Visualization and add it to the page. 

## Instructions
23.	Right click on the "Column 3" in the component tree.
24. Click **Add Component**.
25. Select the **Data Visualization** component.
26. On the right, in the Component Configuration panel, change the name and ID.
    1.  Name: My Items Data Viz
    2.  ID: my_items_data_viz
27. Under "Data visualization type", select **Semi Donut** from the options provided.
28. Expand "Header and boarder" by clicking the down arrow.
29. Set the Chart Title to "**My Items**".
30. Expand "Data" by clicking the down arrow.
31. Click the **Add a Data Source** button.
32. In the top left corner, click on the "Search sources" input.
33. Type "HR Case".
34. Under the "Tables" category, select `HR Case [sn_hr_core_case]`.
35. Click **Add custom conditions**.
36. Fill in the condition editor as follows:
    1.  Select Field: **Assigned to**
    2.  Select Operator: **is (dynamic)**
    3.  Enter Value: **Me**
37. Click **Add this source** at the bottom right of the page.
38. Expand "Group by" by clicking the down arrow.
39. Click the **pencil icon** next to "Active"
40. Click the "Field for HR Case" **dropdown**.
41. Type "State" in the search bar.
42. Click on the **State** option.
43. Click **Apply**.
44. Expand "No data message" by clicking the down arrow.
45. Toggle the "Set custom message when no data" field.
46. Change the "Heading" to say: "No more work!"
