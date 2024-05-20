---
id: activity-1
title: "Exercise 3 - Activity 1"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 1"

---
## Locate the UX Theme record

1. Navigate to the platform view of ServiceNow where you can see the Unified Navigation
    
2. In the top left corner, expand the All menu if it's not expanded already.
    
3. Type "Theme" in to the Filter Navigator.
    
4. Under "Now Experience Framework" find and click on **Themes.**
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FXsVqqx19SjOeDno9lKue%252Fimage.png%3Falt%3Dmedia%26token%3D57e96265-8864-4e0b-a286-43adbf923edb&width=768&dpr=4&quality=100&sign=2fbbfc26b687769121185a2f65f907d96f5cf7008e7c4437ba8231f3e1bbfbbf)
        
    
5. This will bring up the UX Themes table. Search for "Wasabi Donut" under Name and click on the record to open it.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FewBskicqF2xnsUUcq7n9%252Fimage.png%3Falt%3Dmedia%26token%3D20be7b1b-1961-4e53-8478-7d3179d15785&width=768&dpr=4&quality=100&sign=445d5ce009381e1a2423854fe8dc64ca802627efb38413a339893e1a4e2d83e4)
        
    

:::note
The "Active" checkbox does not denote whether it is the currently active theme being used by the instance. That is governed by a system property we will cover in a later activity.
:::
## Clone the UX Theme Style records

Here you can see the UX Theme Styles in the center of the page, these are what determine all the different configurations of your theme. You will repeat the following steps for each of the records listed there:

1. Right click on the name of the Style record **Mobile Colors.**
    
2. Click **Open in New Tab.**
    
3. At the top in the Name field, add "Wasabi Donut - " to the start of the name field, it should now display "Wasabi Donut - Mobile Colors".
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FxsuVrKuzzIRv4tW3Iod6%252Fimage.png%3Falt%3Dmedia%26token%3D2efce7aa-3750-4243-bfa5-4be878fbb461&width=768&dpr=4&quality=100&sign=92c76dd47f34f6e7f3aeb706381a2f7f1bf5392b49d3245b40e47b46e3f9f13b)
        
    
4. Right-click the gray header and select "Insert and stay".
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252Fqci5EBUSfRmCh1ry1Gfz%252Fimage.png%3Falt%3Dmedia%26token%3D8760dd29-2de6-44e7-ab34-edfa2977c41e&width=768&dpr=4&quality=100&sign=dec771f8e2a5c64c71115be821a7fa7bc37ae98b2b7332d2d60f264df08ca844)
        
    
5. Close out of this tab.
    
6. Repeat this process for the rest of the UX Theme Style records. You should end up with new records named:
    
    - Wasabi Donut - Mobile colors
    - Wasabi Donut - Shape and Form
    - Wasabi Donut - Colors
    - Wasabi Donut - Imagery
    - Wasabi Donut - Typography
        
    

	:::note
	The records will not show up in the UX Theme Styles of the theme you are currently in, this is expected behavior.
	:::
## Clone the UX Theme Record

1. Change the name to "Custom Wasabi Donut"
	 ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FXkeBppOwJLXHxCKn0Kzv%252Fimage.png%3Falt%3Dmedia%26token%3D49035c19-15a3-4c51-90d7-8007a69c4523&width=300&dpr=4&quality=100&sign=d51152d21f0cb9941176cd2b63196fb260e130cc3ddc37f823fa4bbeb178fd65)
    
2. Right-click the gray header and select "Insert and stay"
    
3. We are now in our new UX Theme record. You can see the UX Theme Styles are now empty, this is to be expected. We will now go through and add each of our UX Theme Styles one by one.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FKTSH38VbiCaCUuDy69T2%252Fimage.png%3Falt%3Dmedia%26token%3D1f84e067-de3b-46ba-a412-effe2ec21505&width=768&dpr=4&quality=100&sign=dafe80658551ea9aede0ab9e4db500dc8e8f3ffb33e44ccd5c1498751ba0cf0f)
        
    
4. Double-click the blank box under "Style" to bring up the lookup field.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FjO2eUZYQw0Ijj0cpSNuT%252Fimage.png%3Falt%3Dmedia%26token%3D300669ee-160b-49d7-bc8b-2c2ad2b22a35&width=768&dpr=4&quality=100&sign=c745de1bd9f33c76725d487da147f598dac055fb97a77989680c25f851ffdb12)
        
    
5. Search for "Wasabi Donut - Mobile colors" and select it in the lookup pop-up.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252Fp3ukpiBOLVsRveD2wwdJ%252Fimage.png%3Falt%3Dmedia%26token%3D053847ba-8b77-420d-8d57-55818e39cf9d&width=768&dpr=4&quality=100&sign=9e08930c2cdb8845127d571a5070f02a58bc32f17c9e3b43e95044432a48c262)
        
    
6. Click the green checkbox
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252F7BkVD4CFIEvM1h8mSIU1%252Fimage.png%3Falt%3Dmedia%26token%3Deafab3b4-541e-4946-b3aa-5cff9426d127&width=768&dpr=4&quality=100&sign=df90f8ee524a988a452f416635f9eb93357389114adb6d8b5171c3e1d7c0fa32)
        
    
7. Double-click the blank box under "Type" to bring up the drop-down.
    
8. Select "Core".
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FYgXttgeZrf187LX951it%252Fimage.png%3Falt%3Dmedia%26token%3D1b51c094-0b01-4efa-b52d-a004c88cc88c&width=768&dpr=4&quality=100&sign=52003a804a58ee434dcd07db215c429866711d5994edc4593c04312abbb330bc)
        
    
9. This associates your UX Theme Style record to the current UX theme. Repeat the process for the other 4 records we created above.
    
10. Right-click the header and click **Save** to save your changes. As long as the green bars are next to the lines you added, the changes haven't been saved. Be careful not to lose your work!
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FZEzY0lvSAv0nvBWQTzGG%252Fimage.png%3Falt%3Dmedia%26token%3D42fc0be1-d3ed-492a-9a0f-4ff096d7f2b4&width=768&dpr=4&quality=100&sign=204a89ee4fad22ea2a134e9202092433517c650d178992f7511021aced01b8fb)
        
    

## Set the new Theme as our instance's theme

1. Navigate back to the "Custom Wasabi Donut" UX theme if you are no longer on the page.
    
2. Right-click the gray header and select **Copy sys_id.**
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FJof3AVClrNYrh4CGDswy%252Fimage.png%3Falt%3Dmedia%26token%3Dc40a34c9-f1f8-4899-83f0-e4b39dfdaa47&width=768&dpr=4&quality=100&sign=7dbb03b614598ed2000de63665e94ed273e7e7a5a405aa67bd6d7dd18a406d55)
        
    
3. In the filter navigator to the top left, type `sys_properties.list` to pull up the system properties table.
    
4. Look up the `glide.ui.polaris.theme.custom` system property.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252Ftv2q84r7ncTTrPOEZrVX%252Fimage.png%3Falt%3Dmedia%26token%3D6eed85f0-525d-435b-a8ba-c16eebdb45bb&width=768&dpr=4&quality=100&sign=25abae7a2d5d7220845424b07822137b0e2f00c6baef5f25cb1841684d8c593f)
        
    
5. Set the value to be the sys_id you just copied. (Note: it will be different from what is in the screenshots)
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FFCFCQibV19kOH0WedNdP%252Fimage.png%3Falt%3Dmedia%26token%3D6c1759f1-d4b0-4224-ade6-1532eec23506&width=768&dpr=4&quality=100&sign=627b544fe49a6acade47c0a37e189ba1d3a735efc503e2bbbac42760131df9ac)
        
    
6. Click **Save**.
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FQJMLQP4uLgTb9O9cEY3M%252Fimage.png%3Falt%3Dmedia%26token%3Da832a595-0a99-46ed-8a64-bd5f9fa79403&width=768&dpr=4&quality=100&sign=bfb6ff9ad5150bbfe677877f95879778c1054961b5273eed178a58bca86d4c12)