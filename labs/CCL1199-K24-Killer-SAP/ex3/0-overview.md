---
id: overview
title: "Exercise 3 Overview"
pagination_label: "Exercise 3 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---
# Exercise 3: Add Searching and Sorting

## Goal

In this exercise, you'll add the ability to search and sort your notes.

## Add search capability

You'll start this exercise by adding a way to filter your notes by using a text search.

###  Add a search component

1. Start by adding a client state parameter to hold the search term. At the bottom left in the _Data and scripts_ panel choose **Client state parameters.**
    
2. In the dialog box, choose the +Add button and add a _String_ type parameter with the name **searchTerm** and no value.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FKLxfWJTUhIVTuEaprxqj%252FCleanShot%25202024-04-04%2520at%252020.36.59%25402x.png%3Falt%3Dmedia%26token%3D70bd25ce-1cf8-48b1-a720-ff32acfb5d70&width=768&dpr=4&quality=100&sign=3a049436479694df4039f440254c598de8595d38a9553848e511d9d361af9aa8)
    
3. Close the _Edit client state parameters_ modeless dialog.
    
4. Add a **Search input** component after the _Heading 1_ component in the _Search Container_. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FTAN6PHjUww0Zpw8dS62M%252FCleanShot%25202024-04-04%2520at%252020.44.10%25402x.png%3Falt%3Dmedia%26token%3D5724c7e7-b7c1-4d31-a42c-3072a7d823d1&width=300&dpr=4&quality=100&sign=5005a50e423ddd1a7bbb83a0be9752f135484baacf3e8afa336ff20a8e46aa67)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FEDey98mksCdhbQLnNlRS%252FCleanShot%25202024-04-04%2520at%252020.44.57%25402x.png%3Falt%3Dmedia%26token%3D76be83ca-7908-4565-b17a-eb520b6d29e3&width=300&dpr=4&quality=100&sign=e39752d3f876e5fbfa955e72c6fb470e110d55783539a26e08d6e0fe5aeed95c)
    
5. In the _Configure_ panel set the following properties:
    
    1. Placeholder: **Search notes**
        
    2. Placement: **Header**
        
    
6. Click into the **Events** tab and add a new event mapping for the **Search executed** event. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FHqw1UTHKfk0S4vYxDyos%252FCleanShot%25202024-04-04%2520at%252020.50.20%25402x.png%3Falt%3Dmedia%26token%3D7d79a4df-15b0-4ac0-a65c-37bfdef21a58&width=300&dpr=4&quality=100&sign=20bd04e0170fc4e52199e96b5c289cd61ea313a41e55e883963e21a1bc977cf0)
    
7. Choose the **Update client state parameter** event, set the _Client State Parameter Name_ to **searchTerm**, and choose data binding for the _New Value_.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fjqy3qINaiIDUqJTaEHsI%252FCleanShot%25202024-04-04%2520at%252020.55.44%25402x.png%3Falt%3Dmedia%26token%3D9b7b718b-7e6e-437f-b7cb-ca27546a30d2&width=768&dpr=4&quality=100&sign=d46d905df04f11c99d9e830bcbabf2543fc83a53843a593b2f4d4ad5b6b38449)
    

    > Unfortunately, not all events currently expose their event payload schema in UI Builder so you'll have to write the event payload in manually. This is a current limitation with some events and their payloads in UI Builder. The payload is the data that comes along with the event. For this event that is the term that is being searched.

1. In the bind data modal that comes up, double click into the top section that says _Add data output to this area,_ paste in **@payload.searchTerm,** and choose **Apply** and then **Add.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FOwK5wIjrW3jdF4M6y7Ci%252FCleanShot%25202024-04-04%2520at%252021.00.19%25402x.png%3Falt%3Dmedia%26token%3Dff1f1911-529a-4e2b-b4fb-04c4dcee6b39&width=300&dpr=4&quality=100&sign=4ef31810e7b4d888cab702404329280ba31d717ae1b3a70418af33ab30a73cb1)
    
2. **Save** the page (this step is important). Save time saving with the keyboard shortcut CMD+S (mac) or CTRL+S (Windows).
    

### Filter the data resources

Now you'll use the searchTerm client state parameter to filter both the data resources to display only the records containing the search term.

1. Click on the **Look up notes** data resource in the _Data and scripts_ section.
    
2. Click on **Edit conditions** and add the following **and** conditions and hit **Apply**:
    
    - **Title | contains | `<data binding>` Client states > searchTerm OR**
        
    - **Text | contains | `<data binding>` Client states > searchTerm**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FUaMNUfSqGZeY1jnB5diM%252FCleanShot%25202024-05-01%2520at%252016.06.34%25402x.png%3Falt%3Dmedia%26token%3D10b81c98-7305-42f7-8715-4e2006f740ae&width=768&dpr=4&quality=100&sign=cc2cac4d8d6cd638c1376083ec3b307cd4e4cf133eabe812b48cafc13b4c6d07)
        
    
3. Now do the same thing with the **Note count** data resource so the conditions on the two data resources match.
    
4. Now you'll need to have the two data resources refresh when the search is executed. In the _Events_ tab of the _Search input_ component, add another event handler to the _Search executed_ event.
    
5. Choose the REFRESH event handler under the Look up notes section and click **Add.**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FbZgfnyDozhUMc5DzMAGH%252FCleanShot%25202024-04-04%2520at%252021.28.36%25402x.png%3Falt%3Dmedia%26token%3D26b8a88e-ec66-49a2-8c8e-643407a4d33c&width=768&dpr=4&quality=100&sign=00b21304d194b049cb3ef164e994d9cd503668f356c6f4a077075ae9d38686b9)
    
6. Do the same thing and add an event handler for the _Note count_ data resource as well. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fytiyvm6KPrEGb9yIU61x%252FCleanShot%25202024-04-08%2520at%252021.05.22%25402x.png%3Falt%3Dmedia%26token%3Db3620712-6404-4963-9844-3887667f1c0b&width=300&dpr=4&quality=100&sign=d3b99a87696db1e9d0920acd464da5efacc7d51006c20d6e07545b6e64857d6b)
    
7. **Save** the page and test it in a new tab by searching the term **Training**. You should end up with three results.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fswz7NqcXzpIl8ePtQJGV%252FCleanShot%25202024-05-01%2520at%252016.09.21%25402x.png%3Falt%3Dmedia%26token%3D75b0abc6-1b47-4c7d-a15f-99f19a44bebc&width=768&dpr=4&quality=100&sign=1be12216b25710da0a2adc75207b5f1c834b5afda2d26b2c57b4cd2766fdf5b8)
    

##  Add sorting

In the section, you'll add the capability to sort your notes by Created and Updated ascending or descending.

###  Add controls

You'll start by adding some client state parameters and binding them to your data resource.

1. Back in your UI Builder tab, start by adding 2 client state parameters from the _Data and scripts_ panel.
    
    - **sortField | string | sys_updated_on**
        
    - **sortOrder | string | desc** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FWI8Be0oJwG8tRf2ZtbBB%252FCleanShot%25202024-05-01%2520at%252016.12.34%25402x.png%3Falt%3Dmedia%26token%3Dca83f867-3e10-45a7-a7d3-40b58854dfd2&width=300&dpr=4&quality=100&sign=ffa5b4b5af6b56263eda74bdbe2e80a0c6112782b1874a56cd5dce80d9417460)
        
    
2. Now open the **Look up notes** data resource from the _Data and scripts_ panel.
    
3. Scroll down to the Order by and Sort type properties and bind the following values:
    
    - Order by: `<data binding>` **Client states > sortField**
        
    - Sort type: `<data binding>` **Client states > sortOrder** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FOVG2qXojljYUgEaadmjn%252FCleanShot%25202024-05-01%2520at%252016.13.12%25402x.png%3Falt%3Dmedia%26token%3Dbd415bf3-57fc-4cb0-849d-9d8b9306ffe1&width=300&dpr=4&quality=100&sign=3c56ebaf33211b62bda84619b4aa7677320a959dfb29ede89819004c28fe5b83)
        
    

###  **Add components**

Now, you need to set those two CSPs to control the sorting. You could even set them from multiple areas.

1. Find the _Repeater 1_ component in the content tree and add a component _before_. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FsDZmQklBGaC8PVwXIdDS%252FCleanShot%25202024-04-05%2520at%252010.36.20%25402x.png%3Falt%3Dmedia%26token%3D319558e7-62eb-49e5-9df0-655e73a3c7cc&width=300&dpr=4&quality=100&sign=7bcec6b82a23da67d2dad77730814586b1928f602774e521f166c4d29ef1aadc)
    
2. Click the **Layouts** tab and add a **Two columns** layout.
    
3. Click on **Column 2** in the content tree and set its layout as follows:
    
    - Direction: Row
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FoNMV4wraXVr7RptHnxRS%252FCleanShot%25202024-04-05%2520at%252010.41.18%25402x.png%3Falt%3Dmedia%26token%3D0326df59-0934-458a-89c8-6e7c2907b02c&width=44&dpr=4&quality=100&sign=a835c0854220cf49f4be0470433b48657924d3c29802a946e20065d76f2ec41d)
    - Align items: Center
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FAmc7dJGec7vCBDIZ6Kt4%252FCleanShot%25202024-04-05%2520at%252010.41.45%25402x.png%3Falt%3Dmedia%26token%3Dee180fa7-4d83-453f-979d-4b8aac4b5604&width=45&dpr=4&quality=100&sign=8b29f66242d0f9666795227680e89212df5aa386ad31521ee6e0951fcec257ac)
    - Justify content: Flex-end 
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FEU1feuR1iRodVfXgmfeR%252FCleanShot%25202024-04-05%2520at%252010.42.18%25402x.png%3Falt%3Dmedia%26token%3D9fc92f2f-0db4-4ffc-8e8f-7b119e68d37d&width=46&dpr=4&quality=100&sign=56ea6d0d72c6380ddb195cd0dc57236f2036dc7351195c831c212ac4400ff554) 
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FiRiH8ZbL9jfuGuHjB2bW%252FCleanShot%25202024-04-05%2520at%252010.42.50%25402x.png%3Falt%3Dmedia%26token%3D7b5eeba4-8a85-41b0-8234-484efc266c96&width=300&dpr=4&quality=100&sign=42bd5a24ba024fda95b973562d58294095d89c0663ebb929fa8db9412cee1721)
       
    
4. Now add a **Stylized text** component inside _Column 2_ and choose **None** for the presets.
    
5. Set the properties as follows:
    
    - Text: **Sort:**
        
    - HTML Tag: **H3** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Fxzb4N5a0gRFQFPIxe1ml%252FCleanShot%25202024-05-01%2520at%252016.15.19%25402x.png%3Falt%3Dmedia%26token%3D57ef0b97-ae93-49b7-9cd0-942e70dd13d0&width=300&dpr=4&quality=100&sign=e3fddff591ab5d6d4bf8821550273d8fd698a5ebdc1aee05ada9be8bfab91e25)
        
    
6. Now add a **Dropdown** component after the _Heading_ component in _Column 2_ and choose **None** for the preset.
    
7. Scroll down to the _List items_ property in the config panel, mouse over it, and click **Edit.**
    
8. In the modal that appears with the JSON editor, you'll delete all but two of the six List Items by clicking on the trashcan icon for each of the first four. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FdcVpP5kb1bSIicXlrdvu%252FCleanShot%25202024-04-05%2520at%252013.13.02%25402x.png%3Falt%3Dmedia%26token%3D8745bca2-4115-4fd9-a1e9-7db400080b0f&width=300&dpr=4&quality=100&sign=0952a1e82256744c6e5d169c950e9ab46a31afa3d57993349171baa200747932)
    
9. For the two remaining, set the following values
    
    1. List item 1
        
        - Id: **sys_created_on**
            
        - Label: **Created**
            
        
    2. List item 1
        
        - Id: **sys_updated_on**
            
        - Label: **Updated**
            
        
    
10. Click **Apply** and the List items property should look like this: ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252Foa41SzDGBGRWQErD6YNk%252FCleanShot%25202024-04-08%2520at%252021.13.35%25402x.png%3Falt%3Dmedia%26token%3D729d7afd-451a-4cb5-a8e4-bd6b86e87c7e&width=300&dpr=4&quality=100&sign=7f1ebac05c1b429ee1fcfcfcba63dd280bef09f0935d6dec8094bbbc3a072267) _You can also edit the JSON directly by switching from form to JSON in the JSON editor modal._
    
11. Now scroll down to the _Selected items_ property (two below the List items prop) and switch to dynamic data binding. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FGoKtgWZ5UzAnCRs2X7w7%252FCleanShot%25202024-05-01%2520at%252016.18.04%25402x.png%3Falt%3Dmedia%26token%3D4991d1d9-3559-49b6-bfd3-10cd4616e0ed&width=300&dpr=4&quality=100&sign=ca5e0ffb034fc24f6e6478f2ced4051228dcfa74ebd6ade442f9b2e9de637b1e)
    
12. Add **Client states > sortField.**
    
13. Double click into sortField so it shows @state.sortField and add square brackets on each side (this property is expecting an array of values) and choose **Apply**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FXnIbo41iIukFS37q9bd9%252FCleanShot%25202024-04-05%2520at%252013.24.25%25402x.png%3Falt%3Dmedia%26token%3D7cdc1c55-9b1d-49a7-a32d-6dba2ad3c8dc&width=300&dpr=4&quality=100&sign=e4782a555a2c0e45a112515dc7bbc7974a526b5044809acbf18cca9cadd09883)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FRrertSLJY7Z4sN07HGWj%252FCleanShot%25202024-04-05%2520at%252013.24.40%25402x.png%3Falt%3Dmedia%26token%3Dd860ea23-e384-497e-ac3e-f8b1a802f9ab&width=300&dpr=4&quality=100&sign=e41187d2d451d4c436858757990babd1bb127f8f32195497da54dfc70f389cf6)
    
14. Click into the **Styles** tab and add **L** left and right margins. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FmE9vBkHvXrVn4pzS2YSV%252FCleanShot%25202024-04-05%2520at%252013.31.31%25402x.png%3Falt%3Dmedia%26token%3D2e37dd3d-88db-4546-9ef2-52ae0647ac57&width=300&dpr=4&quality=100&sign=d82837f20fe17a4433a36bad498a3ca04d831cd22e1e24f01c4a90e49516aa24)
    
15. Now click into the **Events** tab and add an event mapping for **Dropdown selected items set.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FZ3yZ8qM22zJThELHf8Zn%252FCleanShot%25202024-04-05%2520at%252013.49.20%25402x.png%3Falt%3Dmedia%26token%3D086709ee-592b-47fc-93af-6d0d43629c29&width=300&dpr=4&quality=100&sign=740fe13a5dafe989b42bed90a28a43f45d275bf2e8b20ea632171cf02b95e424)
    
16. Choose **Update client state parameter.**
    
17. For this step, you'll use a script as it's a little easier than using a formula. You'll need the first element in the array returned by the event payload. Change the _Mode_ from _Form_ to **Script** at the top right on the dialog.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FfKw5NBGejiqmqTsvt0dO%252FCleanShot%25202024-04-09%2520at%252014.07.42%25402x.png%3Falt%3Dmedia%26token%3Ddea73427-c622-47dd-8a0b-64173fa7a63d&width=768&dpr=4&quality=100&sign=c29ef609bd20cdb434bbc896fc45e97115742ae9f2b2f88f720705030efacc1f)
    
18. Most of the script is already provided so you'll just need to provide the propName and value as follows:
    
    ```
    /**
    * @param {params} params
    * @param {api} params.api
    * @param {any} params.event
    */
    function evaluateEvent({api, event}) {
        return {
            propName: "sortField",
            value: event.payload.value[0]
        };
    }
    ```

1. Click **Add**.
    
2. Now you'll add another dropdown to control the order. Right-click on the dropdown component and choose **Duplicate**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FJfYTwN5hFyVMFGOLSOiz%252FCleanShot%25202024-05-01%2520at%252016.26.39%25402x.png%3Falt%3Dmedia%26token%3Db9b5b93d-0f2e-4d82-a35b-53f11ffb22e9&width=300&dpr=4&quality=100&sign=f980e5c64975ec7c443ea8b2233028a1e5ca8162ae3b7039366958f4a95f6cfc)
    
3. Click into **Dropdown 2** in the content tree.
    
4. Click **Edit** on the _List items_ property, change the two items to the following and click **Apply**:
    
    1. List item 1
        
        - Id: **desc**
            
        - Label: **Descending**
            
        
    2. List item 1
        
        - Id: **asc**
            
        - Label: **Ascending**
            
        
    
5. Click into the Selected items field by clicking the data binding icon, double-click into the value, change _sortField_ to **sortOrder**, and choose **Apply.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FGl3HWbBBT3sRzaJDAkAk%252FCleanShot%25202024-05-01%2520at%252016.30.28%25402x.png%3Falt%3Dmedia%26token%3De6489d3b-b790-4ad7-9f7b-f30f4d56cc05&width=300&dpr=4&quality=100&sign=998a6c75fe54c7e70dcb9c5f7d2994c7591262d978a46a7dde4e3429cbcb2d3b)
    
6. Set the margins to **0** for this dropdown in its _Styles_ tab as the previous dropdown handles the spacing.
    
7. Next click into the **Events** tab, click **Update client state parameter**, change _propName_ to **sortOrder** in the code and choose **Apply**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F2DFxMIAkS5gSKnJxCd1C%252FCleanShot%25202024-04-09%2520at%252014.14.52%25402x.png%3Falt%3Dmedia%26token%3D96edcef4-05c6-4f37-98ab-2a7a3b6a5184&width=768&dpr=4&quality=100&sign=6e87a468b8bf25d33b45d96764b6c5226a9604ab49f0b3442ba4832b95d9bec9)
    
8. Lastly, to make the spacing work in the column layout, you need something in column 1. Add another stylized text component in Column 1 (the one before Column 2), choose **None** for the preset, and set the following values:
    
    - Text: **Click a note to view edit it**
        
    - HTML Tag: **H3**
        
    
9. **Save** the page and test it. For most of the notes the created and updated dates are the same so try changing the order from Descending to Ascending.
    
