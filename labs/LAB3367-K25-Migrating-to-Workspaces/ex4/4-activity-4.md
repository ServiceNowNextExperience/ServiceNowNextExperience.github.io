---
id: activity-4
title: "Exercise 4 - Activity 4"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 4"

---

## Overview
In this activity, you will add Account related cases list to K25 CSM Page 2

## Instructions
You will now begin adding components to the newly created K25 CSM Page 2. These components will leverage data from the current parent case to identify and display related cases associated with the same account

1. Go to UI Builder  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F2j1yIPEnksDolCG4keTW%252FScreenshot%25202025-04-23%2520at%252012.17.29%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D845d27f8-f6b4-4c15-a3ba-e68304bc09ca)

2. Click on Page Collections, search for **CSM**, and select **CSM default record post-tabs** similar to activity three  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FBVoZ4B2Ay3WdSwKStpnN%252FScreenshot%25202025-04-21%2520at%25208.58.44%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dc80c0748-0577-404b-848c-d33291d69f4a)

3. Select the **K25 Page 2** blue hyperlink this time instead of page 1  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FgsOkOalX8qKmsAJSFDL0%252FScreenshot%25202025-04-23%2520at%252011.44.58%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dc0525398-fc1f-4356-a26d-d4dbcb5befdb)

4. Find the Test values dropdown towards the top left of the page, change to **Form** in the dropdown, and click **Add test value**  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FmIAwZ8a243RBGFBE9K9e%252FScreenshot%25202025-04-23%2520at%252011.45.47%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D7832573c-0cd3-40d9-b253-6f45b23f1490)

5. Check Table and Sys ID and click **Update**  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F83LTayfcZoXIpYUga9mA%252FScreenshot%25202025-04-23%2520at%252011.46.18%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D3568543b-8234-48a6-9e45-bdea5a2413cf)

6. Type in **Case** for the Table and let the Sys ID auto populate. It should just grab a random case record id. Click **Apply**  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fxc4LkclK0XgKjizBJCv6%252FScreenshot%25202025-04-23%2520at%252011.46.50%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D3e384235-5985-438e-bc37-07c9e3b06fe4)

7. On the left side panel, scroll down to the **Data and scripts** section. Add a new data resource by clicking **+Add data resource** in the Data and scripts panel at the bottom left of the UIB window  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FmB9Td8T8EZzUB0gkS1MS%252FScreenshot%25202025-04-23%2520at%252011.47.41%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D05ad112b-cb17-441e-ac00-ff44506aa506)

8. Select "Look up multiple records" and click **Add**  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F2BFh3baCuRfTZ9Z5rcPn%252FScreenshot%25202025-04-23%2520at%252011.48.24%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D378d4117-412a-47ee-b932-5a8f61487aaa)

9. On the new modal, click the (i) icon to the right of the Look up multiple records 1 and ensure the following values are filled in:  
    - Data resource label: Look up cases  
    - Data resource ID: look_up_cases  
    - Click Apply  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FctUDyhsQ4AU392qhfcfm%252Fimage.png%3Falt%3Dmedia%26token%3Dc726025b-01e4-45ec-9c6b-b0e909f50581)

10. Continue updating the fields as follows and click Apply  
    - Table: Case  
    - Choose Edit conditions and fill out the following for the Field, Operator, and Value:  
        - Field: Account  
        - Operator: Is  
        - Value: click on the cylinder icon called "Bind data" and click on the following in order to build the value query  
            - Click Data resource on the left  
            - Click Form  
            - Click form  
            - Click Header  
            - Click secondaryItems  
            - Click 0  
            - Double click SysID  
    - Final check to ensure the query was captured at the top (see screenshot below)  
    - Click Apply  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FAOCAoblT1mH2K4PwMF66%252Fimage.png%3Falt%3Dmedia%26token%3D60ade808-7acd-4b60-b009-6bc1c1a7744a)

11. In the Return fields section, click +Add and choose one field at a time  
    - Short description  
    - State  
    - Order by: Number  
    - Sort type: desc  
    - Max results: 20  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F6AFWmUQXNE9KjVnrdoo3%252Fimage.png%3Falt%3Dmedia%26token%3Dd7277f4f-2bea-4581-a484-4141126e3eec)

12. Close the Data resource window and hit Save at the top right

13. In the content tree under Body, add a Single column layout  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FcszmpFD8RAIbMDniCsHj%252FScreenshot%25202025-04-23%2520at%252011.53.25%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D25f71afa-cd99-4ffa-9181-09500f7d9171)

14. In the right panel navigate and select Padding by the "Spacing" section and select L padding  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fb9Kig0X1jtaV73Ky6gif%252Fimage.png%3Falt%3Dmedia%26token%3D477c7a8d-bf0a-4986-9237-ea463804f6ac)

15. On the left content panel, select Add Content under column 1 and add a Stylized text component  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FbTb1j3zvdOQ2w1zMCpEb%252FScreenshot%25202025-04-23%2520at%252011.54.49%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D5d194b42-3561-42bb-a813-404e32b62f50)

16. On the right panel, click on Record subheading in Preset Used  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fff9VjSflwtlY4gXl2WoC%252FScreenshot%25202025-04-23%2520at%252011.55.38%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D98e201f9-120f-485b-b96d-81ab7d2c4e7e)

17. Click on Remove current preset and click Apply  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F1xojaA3FZRkjHPshyXr5%252FScreenshot%25202025-04-23%2520at%252011.56.05%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D7f73d571-dc08-4038-adb8-1c62cefc55cd)

18. Configure the stylized text component as follows:  
    - Text: Account Related Cases  
    - HTML tag: H2  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FveOGtiT8D4l5k9kukxtB%252FScreenshot%25202025-04-23%2520at%252011.56.49%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D0a50a577-a368-48ff-9d45-cba1107654ef)

19. On the left hand Content panel, add a Repeater component within Column 1 after the stylized text by right-clicking on Stylized text 1 and choosing Add after  
    Note: A [repeater](https://docs.servicenow.com/bundle/washingtondc-application-development/page/administer/ui-builder/task/repeaters.html) acts as a basic loop that repeats the data you provide in multiple components within UI Builder. Repeaters uses an array or an array of objects  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FxnlSOHzRrYJ2nU6Tjv0M%252FScreenshot%25202025-04-23%2520at%252012.02.29%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dad5c629c-02d9-48a3-818a-316b6a2302ca)

20. On the right panel, click on the Use preset for the preset and select remove the current preset. Then click the Data binding cylinder icon under the Data array property  
    - Data array: click on the cylinder icon called "Bind data" and click on the following in order to build the query  
        - Click Data resource on the left  
        - Click Look up cases  
        - Double click results  
    Note: double check to ensure your query is as so otherwise this will affect step 28  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F8XEY3VTIJ9sPYwcfHBDw%252FScreenshot%25202025-04-23%2520at%252012.03.43%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D8ab15ecd-d06e-4bba-9e25-da95d53b38b9)

21. On the right hand panel, click into the Styles tab on the repeater and choose the Enable Styles link. This causes the repeater to act like a container where you can add some margin and padding  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fq3ZLQVCZQvVgoyUn5R5z%252FScreenshot%25202025-04-23%2520at%252012.05.04%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dc27221f4-cfce-40f9-84d4-feef6e3a3e69)

22. In the Styles tab, set the Width to 100 and ensure it is at percentage. Click on Save  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FGFTzkhDV5YvtB49b9l5Y%252FScreenshot%25202025-04-23%2520at%252012.05.47%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D119da8bf-27b3-4404-bcdf-f81f9067faae)

23. On the left panel, add a Card base container within the repeater using the +Add content link under the repeater in the content tree  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F1vXCBfvZsYuF9ydfogdN%252FScreenshot%25202025-04-23%2520at%252012.06.17%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D81cc2333-42c6-42ba-b440-b8d6730b1c6b)

24. On the right side panel in the Configure tab, ensure there is no preset at the top and fill the following fields:  
    - Size: Medium  
    - Interaction: Click  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FwPXU7Ru0tMmddZFVnvFT%252FScreenshot%25202025-04-23%2520at%252012.06.50%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dfc28b528-ad87-446d-b33f-1c6da80b6e41)

25. On the right panel, click into the Events tab and add an event mapping for the Card clicked event  
    Note: If you don't see Events for mapping, try to clear cache and refresh the page  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fc9OsU8ZSTiydZQ2dTkYL%252FScreenshot%25202025-04-23%2520at%252012.07.55%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D1874c104-9707-440b-b599-98c870cd30e7)

26. Click on Card clicked and click on Continue  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F88JDfovwIfAdwe8UGYeq%252FScreenshot%25202025-04-23%2520at%252012.08.30%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D1d6449f0-a026-4eb8-9d2a-17f0f2626ba4)

27. Click on the Add handler and now search for "relay open" and choose the Relay open record event handler and click continue  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FyX4YCBgO1LeEX3gT8o8g%252FScreenshot%25202025-04-23%2520at%252012.09.09%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D2b5d9a3e-26b4-4260-b8ad-139e9720994d)

28. Fill out the properties as below and build out the query for the Sys ID:  
    - Table: Case  
    - Sys id: (Data binding) Repeater > value > _row_data > double click uniqueValue and hit Apply  
    Note: ensure you double click the uniqueValue  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FFrcWZdYwB5IBTjSZgORg%252FScreenshot%25202025-04-23%2520at%252012.09.50%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D9b6243d7-2f75-4f84-ad9d-fbba9fd2304d)

29. Now add Stylized text under the Card Base Container 1  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252F2aAFUb2Q8cDbzlvsUri9%252FScreenshot%25202025-04-23%2520at%252012.10.25%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D47f79077-3d90-4fdf-9e05-bc02354c5d7f)

30. Click on the preset and remove current preset and click Apply  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FxsKBZSaZ52opwRil7mlA%252FScreenshot%25202025-04-23%2520at%252012.11.05%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Daa4047a4-1c5a-44c5-8bca-dfa2f0344949)

31. Once removed preset you will see below list with default text  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FhNGWiSTMg8RlYxYxpV7S%252FScreenshot%25202025-04-23%2520at%252012.11.41%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D3170c5fa-fd90-4bba-84d1-b90240f8b4fd)

32. Lets add the case number to this stylized text 2. Go to right side panel, click the cylinder for bind data for the Text field and build out the text query as below:  
    - Repeater -> value -> number -> double click displayValue  
    - Change HTML Tag: Div  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FQ8NzX42dUnmsN1uZR8EQ%252FScreenshot%25202025-04-23%2520at%252012.12.27%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D7f8c47fb-63dd-4d61-ab28-75f6a8847457)

33. In the Styles tab, set the Width to 100 percent  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FRy8jus8q3aHA5S7yx5xB%252FScreenshot%25202025-04-23%2520at%252012.13.02%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D00345a6e-9c2b-46d8-8bd1-3e7990dfbcfa)

34. Add another stylized text after Stylized text 2 to show case description by clicking on the three dots  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FgBl4incapVCxpxfwQ6GG%252FScreenshot%25202025-04-23%2520at%252012.13.40%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D7e845492-0a0a-481a-9a19-89196b5e453f)

35. On right side panel, remove current preset for the new Stylized Text 3 and click Apply  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252Fq5bccsnIfiojRrrOmM0q%252FScreenshot%25202025-04-23%2520at%252012.14.18%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3De0d7b353-406e-4627-afa8-934ce2a4e6e3)

36. Repeat similar step from the earlier stylized text 2. Go to right side Configure panel, click the cylinder for bind data for the Text field and build the query as below:  
    - Repeater -> value -> short_description -> double click displayValue  
    - Change HTML Tag: div  
    Note: you must double click displayValue to build the query as above  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FLhfz1Be8JAg1vbuBVbe5%252FScreenshot%25202025-04-23%2520at%252012.14.55%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3De3aa3aca-8ebb-4632-9311-32f439eb839a)

37. In the Styles tab, set the Width to 100 percent  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FRy8jus8q3aHA5S7yx5xB%252FScreenshot%25202025-04-23%2520at%252012.13.02%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D00345a6e-9c2b-46d8-8bd1-3e7990dfbcfa)

38. Click on Save to save all changes to this page

39. To test the changes, navigate to the CSM Workspace -> open a case -> click on sidebar list icon -> you should then be able to find the account related cases list  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FaOJuOFq7DsVj5vJeOl5R%252FScreenshot%25202025-04-23%2520at%252012.15.38%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dfadaa09e-462f-439c-a6ec-99912c9e7616)

40. Click on one of the cases in Account related cases list and a new tab should open for the selected case  
    ![](https://www.gitbook.com/cdn-cgi/image/dpr=2,width=760,onerror=redirect,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FvjXMCrVxKM4rIxrP7AcN%252Fuploads%252FvJLpeCD2m2tlUEhtgVRO%252FScreenshot%25202025-04-23%2520at%252012.16.28%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Db75281f2-5966-44ab-8248-1897af4b1f26)