---
id: activity-4
title: "Exercise 1 - Activity 4"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 4"

---

## Overview
In this activity, you will make modifications to the column layout component and the columns inside.

## Instructions
1. Click on the **Header column layout** component in the Component Tree.
![LAB2050_EX1A4_image_1.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_1.png)

2. This should show the Component configuration in the right most panel.
3. Expand "Background" by pressing the **plus**.
![LAB2050_EX1A4_image_2.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_2.png)

4. Using the dropdown, select **Surface neutral 2**.
![LAB2050_EX1A4_image_03.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_03.png)
![LAB2050_EX1A4_image_04.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_04.png)

5. Expand "Spacing" by pressing the **plus** if it's not already expanded.

6. Add padding by clicking on **Padding** and selecting **M**.
![LAB2050_EX1A4_image_05.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_05.png)
![LAB2050_EX1A4_image_06.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_06.png)

7. We're going to make a quick change to the "User Greetings" component. Select it from the component tree. 
![LAB2050_EX1A4_image_7.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_7.png)

8. You’ll see it’s currently being populated by a Client State Parameter, we’re going to change this using the new Visual Data Binding formulas. 
![LAB2050_EX1A4_image_8.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_8.png)

9.  Click on the **input box** below “Text” and it will show the “Bind data to Text” window. 
10. Click on the data pill at the box.
11. Click the X next to the data pill to remove it from the data output box.
12. ![LAB2050_EX1A4_image_9.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_9.png)
13.	On the left side, click on **Formulas**
![LAB2050_EX1A4_image_10.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_10.png)
 
14. Click on **Popular**.
![LAB2050_EX1A4_image_11.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_11.png)

15. Click on **CONCAT**.
![LAB2050_EX1A4_image_12.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_12.png)

16. Click the **up arrow** next to “CONCAT” to bring that formula up to the data output box.
![LAB2050_EX1A4_image_13.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_13.png)

17. Inside the formula at the top, click on **Value 1**.
![LAB2050_EX1A4_image_14.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_14.png)

18. Type: `“Hello and Welcome “` (include the quotes and the space at the end, you might need to double-click to get the empty box to show up).
![LAB2050_EX1A4_image_15.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_15.png)
![LAB2050_EX1A4_image_16.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_16.png)

18.	Click on the second **Values** box.
![LAB2050_EX1A4_image_17.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_17.png)

19. Click **Data Types** on the left.
![LAB2050_EX1A4_image_18.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_18.png)

20. Click **Page** **properties**.
![LAB2050_EX1A4_image_19.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_19.png)

21. Click **Session**.
![LAB2050_EX1A4_image_20.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_20.png)

22. Click **User**.
![LAB2050_EX1A4_image_21.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_21.png)

23. Click **firstName**.
![LAB2050_EX1A4_image_22.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_22.png)

24. Click the up arrow that appears next to the `firstName` pill to add it to the formula builder.
![LAB2050_EX1A4_image_23.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_23.png)

25.	Click **Apply**.
![LAB2050_EX1A4_image_24.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_24.png)

27.	Under the “Main” container in the content tree, move the **Date and Time** component below the **User greetings** component. 
![LAB2050_EX1A4_image_25.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_25.png)

28. Click **Save**.
![LAB2050_EX1A4_image_26.png](../images/LAB2050_EX1A4/LAB2050_EX1A4_image_26.png)