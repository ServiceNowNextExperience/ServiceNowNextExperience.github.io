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
2. This should show the Component configuration in the right most panel.
3. Expand "Background" by pressing the **plus**.
4. Using the dropdown, select Neutral 1.
5. Expand "Spacing" by pressing the **plus**.
6. Add padding by clicking on **Padding** and selecting **M**.
7. We're going to make a quick change to the "User Greetings" component. Select it from the component tree. 
8. You’ll see it’s currently being populated by a Client State Parameter, we’re going to change this using the new Visual Data Binding formulas. 
9. Click on the **input box** below “Text” and it will show the “Bind data to Text” window. 
10.	On the left side, click on **Formulas**. 
11.	Click on the data pill at the box.
12. Click the X next to the data pill to remove it from the data output box.
13. Click on **Popular** under Formulas.
14. Click on **CONCAT**.
15. Click the **up arrow** next to “CONCAT” to bring that formula up to the data output box.
16. Inside the formula at the top, click on **Value 1** and type: `“Hello and Welcome “` (include the quotes and the space at the end, you might need to double-click).
17.	Click on the second **Values** box.
18. Click **Data Types** on the left.
19. Click **Page** **properties**.
20. Click **Session**.
21. Click **User**.
22. Click **firstName**.
23. Click the up arrow that appears to add it to the formula builder.
24.	Click **Apply**.
25. Click **Save**.
26.	Under the “Main” container in the content tree, move the **Date and Time** component below the **User greetings** component. 
27. Click on the second **Main** container in the Content Tree.
28. In the Component Configuration panel, go to Layout.
29. Click on the **px** under "Width".
30. Select `%`.
31. Type "25" in to the Width box.
32. Click **Save**.
