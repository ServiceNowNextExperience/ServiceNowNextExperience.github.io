---
id: overview
title: "Exercise 4 Overview"
pagination_label: "Exercise 4 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---

# Exercise 4: Create and Edit Notes

##  Goal

In this section, you'll add the ability to edit existing notes in a modeless dialog window and create new notes.

##  Update notes dialog

The first part of this exercise will be opening a modeless dialog window when one of the note containers is clicked.

### Create and populate a client state parameter

1. Create a new Client state parameter by clicking **Client state parameters** in the _Data and scripts_ panel and adding the following values
    
    - **noteId | String | 00e84cc22159c6107f44b97c4dc7b6a1** _You're setting a default value for now to give you some test data._
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F61NBuCNMRvsD5uNJSieH%252FCleanShot%25202024-05-01%2520at%252016.36.33%25402x.png%3Falt%3Dmedia%26token%3Dc9451f41-e297-408d-9a96-a77bfb443507&width=768&dpr=4&quality=100&sign=5bca8eaccba077e1879e2b073fc906341cf5d1bf77f12a48c6308971237079fb)
        
    
2. Now you'll populate that CSP when a card base container is clicked. In the content tree, click into the **Card Base Container** inside the repeater, and click into its **Events** tab.
    
3. Add a new event mapping for the **Card clicked** event. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FNNxz8DjmiHjmjLColV31%252FCleanShot%25202024-05-01%2520at%252016.37.30%25402x.png%3Falt%3Dmedia%26token%3Dc8db678e-cf39-4e4a-b22e-f82f7e66e233&width=300&dpr=4&quality=100&sign=f58fc20fa9558c8c723a845876472e74d388dec264ca591954f0b6fa12eb1d71)
    
4. Choose **Update client state parameter**, choose **noteId** for the CSP name, and bind the following data to New Value: **Repeater > value > _row_data > uniqueValue**
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FyMAhpeiJK8HZX5Te70FK%252FCleanShot%25202024-04-09%2520at%252016.49.01%25402x.png%3Falt%3Dmedia%26token%3Df9aaf0f1-aa35-43a2-80b0-f7302a306007&width=768&dpr=4&quality=100&sign=ff17ce0fffadeb58b1bddb3eab28a657f8dfb487d8ec163aeb9d13570518b3b8)
    
5. Click **Apply** and **Add.**
    
6. **Save** the page.
    

###  Add the Note form in a modeless dialog

In this section you'll add the note form and actions to a modeless dialog that will be triggered on the card base container click. A modeless dialog is a type of dialog window similar to a modal, except it allows the user to drag it around the page, resize it, and most importantly, interact with the page behind it.

1. In the _Overlays_ section at the top of the content tree, mouse over _Modeless dialogs_, and click the + to the right, and choose **Modeless dialog**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FCHYKppGIUDiLXtjoOZw9%252FCleanShot%25202024-04-09%2520at%252016.54.11%25402x.png%3Falt%3Dmedia%26token%3Da6dae3e4-417f-40ec-bd71-fcdc05b2eb81&width=768&dpr=4&quality=100&sign=599ad1bfe303edb3e9932be050d28e3d9b0975f78e61b07c337bd91fcacef906)
    
2. In the config panel on the right, rename the modeless dialog to the following:
    
    - Label: Note dialog
        
    - ID: note_dialog ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FVplkeu8ZttzWJHcyjdaA%252FCleanShot%25202024-04-09%2520at%252021.24.14%25402x.png%3Falt%3Dmedia%26token%3D2a80d97c-7e49-4059-8571-e5d7204812e1&width=300&dpr=4&quality=100&sign=5499cebbb3d56ffb9d85e0eb5a6919e566cc53389d88dcf6cb7c8efc00d16a4b)
        
    
3. Set the Width config property to **810**.
    
4. In the content tree add a **Form** component to the container inside the body or the modeless dialog.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FHFBsnOkqnoRV2g1aSy2v%252FCleanShot%25202024-04-09%2520at%252021.38.36%25402x.png%3Falt%3Dmedia%26token%3D2180ad6a-7535-4d0f-bda6-3976123ca583&width=768&dpr=4&quality=100&sign=cae0bc026e65796e9d5eb91b8c0d23b4638b14253affb2c0ebb5d2af9499c261)
    
5. You'll now get a dialog that comes up telling you that a controller is being added with the form component. It also wants to add some page parameters, but you don't need those for this page. Choose **Configure manually**.
    

    > Because the form component is [preset enabled](https://docs.servicenow.com/bundle/washingtondc-application-development/page/administer/ui-builder/concept/presets.html) it's going to automatically add a controller which fetches its data and also allows you to control different things about the form.

1. Fill out the _Edit Form Controller_ panel as follows:
    
    - Table: N**ote [x_snc_killer_notes_note]**
        
    - Sys ID: **``<data binding>`` Client states > noteId**
        
    
2. Close the panel and you'll now see the note form shown in the form component. The field layout should probably change, so mouse over the form and choose **Edit Form** to launch _Form Builder_.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FxLIqtDj1uHQoMb8bPXtD%252FCleanShot%25202024-04-09%2520at%252022.03.13%25402x.png%3Falt%3Dmedia%26token%3D05398829-cfb9-4988-a505-4acb20d4d8ed&width=768&dpr=4&quality=100&sign=0d89fcf6cc8968cbe992d7e5b69e92f632cc99736e8d0367025db54cc5eba404)
    
3. First, drag the _Category_ field above the _Text_ field by grabbing the field by the six dots on the left (it appears when you mouse over the field) and dragging it above the Text field. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FGDh5SiTFiz8wPYkGHxD3%252FCleanShot%25202024-04-10%2520at%252008.44.49%25402x.png%3Falt%3Dmedia%26token%3D6452a176-0df5-46c6-b4c1-4ad1474083b8&width=300&dpr=4&quality=100&sign=ffe6e382918e7b4dd450831ac8fcec0c25978e911117645704156f7e0c70bca3)
    
4. Next, remove the User field from the form by mousing over it and clicking the X at the right of the field. You're not deleting the field from the database, just removing it from this form view.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F1DuzYw7kyMjEBpEktOzR%252FCleanShot%25202024-04-10%2520at%252008.46.31%25402x.png%3Falt%3Dmedia%26token%3Dd623e5b9-0b98-4596-8ed9-4b8f7bb00d40&width=768&dpr=4&quality=100&sign=9eb0f4e45c88b27a25edaa546cff3e6ff56d5ccc179dd58468bf74b234c9d413)
    
5. Now you'll make the Title and Category fields mandatory. Click on the title field and check the **Mandatory** checkbox on the right.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FLiuxPhHr3jaVgnicy20M%252FCleanShot%25202024-04-10%2520at%252008.49.13%25402x.png%3Falt%3Dmedia%26token%3D5db1eb48-673a-4adc-b42f-07bb4ce90e01&width=768&dpr=4&quality=100&sign=9ac810f3b090d2a6e3ad7aa9e1d63f01670f9436e65155d2cfd5a47ece2a2725)
    
6. Do the same thing for the **Category** field.
    
7. Delete the form section that held the moved and removed fields by mousing over it and choosing the trashcan icon.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FAZjioFPCF0tkwS35XyUb%252FCleanShot%25202024-05-01%2520at%252016.46.04%25402x.png%3Falt%3Dmedia%26token%3Dd77bac84-66d4-42d1-9503-a497df7bf5a3&width=768&dpr=4&quality=100&sign=d82a424c83873c7c87cb549b66c3365aafdd8c83d71a2bdd9c4d89e371c97179)
    
8. Your form should now look like the following. **Save** the form.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FuNO7F3m1IO417B12Qf9W%252FCleanShot%25202024-04-10%2520at%252008.50.13%25402x.png%3Falt%3Dmedia%26token%3D60c2a951-bd37-4200-b00b-f2d64aac44bc&width=768&dpr=4&quality=100&sign=31b40171d0fabdd0ddf835969a9d7b44e6b7ba4f01d220c048a9d801ee4ec439)
    
9. Use the X icon at the top right to return to UI Builder.
    
10. **Save** the UI Builder page and then refresh your UI Builder browser window (**SAVE FIRST**) to get the form to update. Click on the **Form Default** component in the content tree to see the new version.
    
11. Now you'll need to launch the modeless dialog from the card base container click. Click into the **Card Base Container** inside the repeater in the content tree.
    
12. Click into the **Events** tab and add a new event handler to the Card clicked event.
    
13. Choose **Open Modeless Dialog,** configure the form as follows, and choose **Add**:
    
    - Heading: **Edit note**
        
    - Modeless Dialog: **Note dialog**
        
    - Single instance: **true**
        
    - Modeless Dialog Instance ID: **note**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FENbkzr2y8DWzJeLTaQJq%252FCleanShot%25202024-05-01%2520at%252016.48.31%25402x.png%3Falt%3Dmedia%26token%3D08f9b7b6-9981-4075-ac0a-46ef7343dfe9&width=768&dpr=4&quality=100&sign=09a6a4340716310fc7e44c960b03e7dd4fb7bcb912cd5d63e3cadb7aa9b0fc38)
        
    
14. Now **Save** the page and test it by clicking on a couple of notes.
    

Note that if your cards aren't clickable you may need to go back to the card base container's configuration and validate that the Interaction is set to **Click.**

### **Add buttons to save notes**

Now you'll add the form's action bar that'll allow you to save notes and a cancel button to close the dialog.

1. In UI Builder, add an **Action bar** component to the **actions** slot of the Note dialog in the content tree.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FM3FWkHBC1EGy2NK7zdr2%252FCleanShot%25202024-04-10%2520at%252009.35.18%25402x.png%3Falt%3Dmedia%26token%3D118bbed7-b5e3-42a3-8a7d-9e10944c5e0d&width=768&dpr=4&quality=100&sign=ab75f2aad2fa14a799a148e407df0705f979eef97e6216f885f3fbeccd388fa1)
    

    > One thing you'll notice here is the components highlighted in blue. This signifies that the component has presets that can connect to one of the controllers on your page.

1. You'll notice that a couple of the properties on the component are preconfigured by the Form Controller data resource already. All you need to do is set the _Number of anchored buttons_ property to **1.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FgoSgP8489pqYnaFkAetx%252FCleanShot%25202024-05-01%2520at%252016.51.02%25402x.png%3Falt%3Dmedia%26token%3D9b9e7fe3-dbbf-4c9d-9e3b-9a8a2ac9b753&width=300&dpr=4&quality=100&sign=654f1d1ad956d72b0938845dd44cdc3ddb823abb32dc9f008f23b6eb8469eb04)
    
2. Now add a **Flexbox** layout to the footer of the modeless dialog.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F9JvmLKPXnXpDXI3gu8Bv%252FCleanShot%25202024-04-10%2520at%252009.42.47%25402x.png%3Falt%3Dmedia%26token%3D6519727e-d999-4065-a2ef-6352fce61767&width=768&dpr=4&quality=100&sign=3859d31098be140f40d66f09a6b5c43ed1bbe68b38892fb02c475865ce805029)
    
    A flexbox is just a container.
    
3. Choose **None** for the container's presets, click into its styles, and set _Align items_ to  **Flex-end** the _Margin_ to **L.**
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F0mPvhglV7CEN4jCuTQTM%252FCleanShot%25202024-04-10%2520at%252009.54.03%25402x.png%3Falt%3Dmedia%26token%3D07d17cd3-ce97-43ca-97fc-49a9c0f4343d&width=51&dpr=4&quality=100&sign=929b6762ec2450e80560d8a7b9fb76bdee0323a32932f2eac3f9694b2a5f4722)
    
4. Inside the container, add a **Button** component and choose **None** for the preset using the Preset dropdown in the config panel. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FPCzq7jfnxXHnigPek8kD%252FCleanShot%25202024-04-10%2520at%252009.56.18%25402x.png%3Falt%3Dmedia%26token%3D916fcd72-844d-463c-bcb2-76d4b161eca7&width=300&dpr=4&quality=100&sign=8768cb1fecd395e49012ef862fa946127680eec003ed764a7d34117be4392ea0)
    
5. Click **Remove** in the modal to remove the preset.
    
6. Set the following properties:
    
    - Label: **Close window**
        
    - Variant: **Tertiary**
        
    
7. Click into the **Events** tab of the button and add an event handler to the _Button clicked_ event.
    
8. Choose **Close Modeless Dialog,** set the Modeless Dialog Instance ID to **note,** and click **Add**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FvJ9kNutNZj6mUkDkEVUe%252FCleanShot%25202024-05-01%2520at%252016.59.19%25402x.png%3Falt%3Dmedia%26token%3D1f08ffd7-4bbd-430a-9cee-2d3d6cace7fc&width=768&dpr=4&quality=100&sign=9015f0d7efbe7e024715f59cd252ff4b4372c6de6c0c809db62794e1d3efb32c)
    
9.  Lastly, click into the **Form Controller** data resource in the Data and scripts panel.
    
10. Click the **Events** tab, choose **+Add event mapping**, and choose the **Form submit completed** event. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FhW0pF7qaZnahwrJLajDV%252FCleanShot%25202024-04-10%2520at%252010.30.45%25402x.png%3Falt%3Dmedia%26token%3D0ced7fac-1ccb-4113-95cb-7c44e6c01618&width=300&dpr=4&quality=100&sign=6998f31f54399f22e249af86a4b2a5c02548ec14c1ed839dd01148697127780d)
    
11. Add an event handler to **Refresh** the _Look up notes_ data resource.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FWkn30tJDYzRMfgc5MPor%252FCleanShot%25202024-04-10%2520at%252010.35.29%25402x.png%3Falt%3Dmedia%26token%3D409cd14d-3ff7-48cb-96df-d3d4ec27c9b1&width=768&dpr=4&quality=100&sign=95fc4c852fd28bc2dd079bfc52f3c1aee1223943deff665055f4204422e46af7)
    
12. **Save** the page in UI Builder and test. Try clicking on a note, editing the title, and saving it. Also, try the Close window button.
    

## Create a new note

In this section, you'll add a button that allows the user to create a new note.

1. in UIB, in the body container, there are some nested column layouts, click into Column 1, inside the second nested column layout. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FKAzjEslZMQP0oiBajfLM%252FCleanShot%25202024-04-10%2520at%252013.39.38%25402x.png%3Falt%3Dmedia%26token%3D2fd1f5cd-2455-4b91-98d3-d128cd154b19&width=300&dpr=4&quality=100&sign=e52960000a6a916a61f1cff94e96fd6b56cb51546c4998854a774df818bad58c)
    
2. Set the direction to Row instead of column.
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F2j8lLVbsPXASxKvv9DG9%252FCleanShot%25202024-04-10%2520at%252013.40.10%25402x.png%3Falt%3Dmedia%26token%3Dd9aaea7a-0a91-472c-be4f-64736e9e91bc&width=33&dpr=4&quality=100&sign=e0ce7ec0a03d5d12dd49f7e01db0f38121a3cdaf441d4e0ac8622c55445bd696)
3. Add a **Button** component after the _Stylized text_ component with the _Click a note to view it_ message and remove the preset using the dropdown in the config panel. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FTLPvU7xZobOxnvWWdOQO%252FCleanShot%25202024-05-01%2520at%252017.03.44%25402x.png%3Falt%3Dmedia%26token%3D2e9aafa9-9b98-46a3-a6da-440da5adb47e&width=300&dpr=4&quality=100&sign=200d822ea3d03e0cf48f41fc6b9b723923fcf63b679332c6bbbe30dcd9144a28)![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F8gD0jJebDt8Nc9Eq4gcs%252FCleanShot%25202024-05-01%2520at%252017.05.08%25402x.png%3Falt%3Dmedia%26token%3D1b6e42f4-fcf7-43a0-88f8-b3194a55cb54&width=300&dpr=4&quality=100&sign=12d9d5a8e116df473a5348b3ecba07665a012cfefa2c6c4bcb34d2f0d3c300be)
    
4. Change the config properties as follows:
    
    - Label: **New note**
        
    - Variant: **Primary**
        
    - Icon: **document-plus-outline**
        
    - Tooltip label: **Create a new note**
        
    
5. Click into the styles tab and set the following:
    
    - Alignment: Center
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FxQRlcmMxzab8u62B66s7%252FCleanShot%25202024-04-10%2520at%252013.45.02%25402x.png%3Falt%3Dmedia%26token%3Dce998725-b933-4ea3-aa72-ad15d615024d&width=49&dpr=4&quality=100&sign=223a43c829830a065d821db59ce7a22fc069735591478ae440a5a962dde75afe) 
    - Margin-left: **L**
        
    
6. Click into the **Events** tab and add an event handler to the button clicked event.
    
7. Choose **Update client state parameter** and set the following values:
    
    - Client State Parameter Name: noteId
        
    - New Value: -1
        
    
8. Choose **Add**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FOWugTB8hV37CQ1hVvrR3%252FCleanShot%25202024-05-01%2520at%252017.07.03%25402x.png%3Falt%3Dmedia%26token%3D13af573a-0a83-4f27-a702-90840d29197d&width=768&dpr=4&quality=100&sign=77e8e42ee1d821fba3fb65158c0b70353fbe5269fa163d97ccf3085daf5de099)
    
9. Add an additional event handler for _Open Modeless Dialog_ and set the following and click **Add**:
    
    - Heading: **Create note**
        
    - Modeless Dialog: **Note dialog**
        
    - Single instance: **true**
        
    - Modeless Dialog Instance ID: **note**
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FZQCzpEHvAS09A3iXsHWA%252FCleanShot%25202024-05-01%2520at%252017.07.57%25402x.png%3Falt%3Dmedia%26token%3D38f650a0-3f70-4b0c-b75c-96fa659ac409&width=768&dpr=4&quality=100&sign=dd38de959b1e2f9ca675ca63f07e5d6a909c17eaabce7074c00d9baeed68988c)
        
    
10. Now click into the **Form Controller** data resource in the Data scripts panel and click into the events tab.
    
11. Add a new event handler for **Form submit completed** event to refresh the Note count data resource.
    
12. Add another event handler for the **Form submit completed** event to **Update client state parameter** and set the following:
    
    1. Client State Parameter Name: noteId
        
    2. New Value: **`<data binding>`** **Event payload > sysId**
        
    
13. **Save** the page and test by using the button to create a new note. Does it save and does the note count update?
    

##  Conclusion

You now have a functional front end for a note-taking app built in UI Builder. Its branding should match the branding of other non-workspace modern UIs in your instance.
