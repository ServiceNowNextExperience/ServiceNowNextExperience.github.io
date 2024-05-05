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
1.	Right click on the "Column 3" component in the component tree.
![LAB2050_EX1A5_image_1.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_1.png)

2. Click **Add Component**.
![LAB2050_EX1A5_image_3.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_3.png)

3. Select the **Data Visualization** component.
![LAB2050_EX1A5_image_4.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_4.png)

4. On the right, in the Component Configuration panel, change the name and ID.
    1.  Name: My Items Data Viz
    2.  ID: my_items_data_viz
![LAB2050_EX1A5_image_5.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_5.png)

5.  Click **Apply**.
![LAB2050_EX1A5_image_6.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_6.png)

6. Under "Data visualization type", select **Semi Donut** from the options provided.
![LAB2050_EX1A5_image_7.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_7.png)
![LAB2050_EX1A5_image_8.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_8.png)

7. Expand "Header and border" by clicking the down arrow.
![LAB2050_EX1A5_image_9.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_9.png)

8. Set the Chart Title to "**My Items**".
![LAB2050_EX1A5_image_10.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_10.png)

9.  Expand "Data" by clicking the down arrow if it's not already expanded.
![LAB2050_EX1A5_image_11.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_11.png)

10.  Click the **Add a Data Source** button.
![LAB2050_EX1A5_image_12.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_12.png)

11.  In the top left corner, click on the "Search sources" input box.
![LAB2050_EX1A5_image_13.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_13.png)

12.  Type "HR Case".
13.  Under the "Tables" category, select `HR Case [sn_hr_core_case]`.
![LAB2050_EX1A5_image_14.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_14.png)

14. Click **Add custom conditions**.
![LAB2050_EX1A5_image_15.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_15.png)

15. Fill in the condition editor as follows:
    1.  Select Field: **Assigned to**
![LAB2050_EX1A5_image_16.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_16.png)
![LAB2050_EX1A5_image_17.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_17.png)

    2.  Select Operator: **is (dynamic)**
![LAB2050_EX1A5_image_18.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_18.png)

    3.  Enter Value: **Me**
![LAB2050_EX1A5_image_19.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_19.png)

16. Click **Add this source** at the bottom right of the page.
![LAB2050_EX1A5_image_20.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_20.png)

17. Expand "Group by" by clicking the down arrow if it's not already expanded.
![LAB2050_EX1A5_image_21.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_21.png)

18. Click the **pencil icon** next to "Active"
![LAB2050_EX1A5_image_22.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_22.png)

19. Click the "Field for HR Case" **dropdown**.
![LAB2050_EX1A5_image_23.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_23.png)

20. Type "State" in the search bar.
21. Click on the **State** option.
![LAB2050_EX1A5_image_24.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_24.png)

22. Click **Apply**.
![LAB2050_EX1A5_image_25.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_25.png)

23. Expand "No data message" by clicking the down arrow.
![LAB2050_EX1A5_image_26.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_26.png)

24. Toggle the "Set custom message when no data" field.
![LAB2050_EX1A5_image_27.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_27.png)

25. Change the "Heading" to say: "No more work!"
![LAB2050_EX1A5_image_28.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_28.png)

26. Click **Save**.
![LAB2050_EX1A5_image_29.png](../images/LAB2050_EX1A5/LAB2050_EX1A5_image_29.png)