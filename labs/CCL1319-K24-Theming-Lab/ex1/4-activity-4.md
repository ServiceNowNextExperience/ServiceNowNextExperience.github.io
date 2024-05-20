---
id: activity-4
title: "Exercise 1 - Activity 4"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 4"

---
# Activity 4

## Explore the Theme Record

This section will focus on how a theme is comprised of a theme record and associated style records, with a short overview of the new data model used for theming.

1. In the All menu navigate to Now Experience Framework > Theme Management > Themes
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FU69sERs099XBtNr5dgce%252F22C55E_standard.png%2526wat_pad%253D121%252C277.png%3Falt%3Dmedia%26token%3Dcfb07e9c-9822-41b2-b55a-32e9e33eec57&width=768&dpr=4&quality=100&sign=61fa852be99afb03b102ed9d7f30a69cd475eea7d69c9d400d976ca6586da0fb)
    
2. Locate the Wasabi Donut Theme in the list, or search for it in the filter, and click on the record to open it.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FMm3v5I13QkJOPlVARsqH%252Fimage.png%3Falt%3Dmedia%26token%3D5563f185-9627-4bc5-92cf-34c676bf9790&width=768&dpr=4&quality=100&sign=e1e0d05f150d0584777bf3f0568b640b404e99b317252145a82889f5c70081bc)
    
3. Within the UX Theme record, you’ll see the theme name, description, application scope, and if the theme is active. You will also see two form sections:
    
    1. Compositional: App Theme – This is the new data model for theming Next Experience UI and associated workspaces. A compositional theme uses one Theme record as a container and multiple style records to hold CSS for colors, fonts, etc. This means that there is not one large JSON object for all theming elements, and style records can be re-used across themes. There is more information on this new data model in the community.
        
    2. Legacy: Experience Theme – This is the previous data model that uses one JSON object. It is used when Next Experience UI is not enabled, and for Portal Experiences (Not Service Portal).
        
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252F8IRfltqmiuqBE1eIL5Tz%252Fimage.png%3Falt%3Dmedia%26token%3Da7f46af0-7bec-4fd8-971f-40eeb4e5645c&width=768&dpr=4&quality=100&sign=766f3bb8c8dc89b6b574f616fa071b0d1404eb98b3cd38c5ada44b38db91102e)
    
4. Theme Builder automatically generated 5 Core style records for the Wasabi Donut Theme, and changes made in Theme Builder are reflected in these records.
    
    1. Colors: Contains the CSS Variables of the brand colors defined in the wizard, as well as colors generated from branding colors.
        
    2. Typography: CSS Variables for the selected font, with associated weights, styles, and links to the style assets themselves, i.e., attachments for fonts.
        
    3. Imagery: Contains the logo file.
        
    4. Shape and Form: Contains the CSS Variables for the rounded corners that were selected in the wizard and other form elements.
        
    5. Mobile Colors: Defines the color variables that apply to Mobile applications.
        
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FoY6q4NZowTAe4hM4Bw41%252Fimage.png%3Falt%3Dmedia%26token%3D49b7d184-57c0-4ef3-a08a-70242b605d13&width=768&dpr=4&quality=100&sign=5e94491314f859e92e7bef231f84b2a13c5b9e030934a2fbd00f54bacd2538b3)
    

## Edit a UX Style Record

This section will walk through making an edit to the Shape and Form UX Style record and view how that change applies to the theme. As of this lab, changes made in UX Style records will not reflect in Theme Builder.

1. In the Wasabi Donut Theme record, click on the Shape and Form link under the Style column to open the UX Style record.
    
2. Within the Style field, locate the “—now-container—border-width” CSS variable (the 4th variable from the left), it currently has a value of 1px, change the value to 10px.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FYKeJKsjW0EGMcXlY8bp1%252Fimage.png%3Falt%3Dmedia%26token%3Dd8317bf7-d44d-4ea2-8597-a18d5f101b0f&width=768&dpr=4&quality=100&sign=79829dd29b8e1453b16c6d60eaf03777c0aad4ebb57a5f6d767b3d387de6df14)
    
3. Click Update.
    
4. Navigate back to the landing page by clicking the ServiceNow logo in the top left corner. You may need to refresh the browser window for the changes to take effect.
    
5. Notice that some of the components on the page have a border width of 10px.
    

![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FiMdmeJJBG6VhLXlPRIU0%252Fimage.png%3Falt%3Dmedia%26token%3Dd6c786f0-5889-4bb8-8a34-856c451d5148&width=768&dpr=4&quality=100&sign=7b1680cd8951c645a76c233bf16d800d3ab6bf7bf45ae92a4289d0f1d90f68b7)

Note: Changes made to the UX Style record(s) will not reflect in the current version of Theme Builder used for this lab. Ensure you are making changes incrementally and testing when making changes in the UX Style records. If a previous version of the record is needed, add the Versions related list to the UX Style record form and revert to the version needed.