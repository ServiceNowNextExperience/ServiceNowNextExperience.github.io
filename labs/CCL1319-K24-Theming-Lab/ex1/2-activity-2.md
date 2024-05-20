---
id: activity-2
title: "Exercise 1 - Activity 2"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 2"
---

## Edit and preview a theme in the Editor

After going through the built-in wizard and generating a theme, the theme can be edited on the Editor page, which provides more granularity and options to preview theming selections. This section will walk through the Editor page layout.

1. The Editor page should be visible, and the page pill next to the Theme Builder logo has Editor selected at the top left corner. 
	:::note 
	When creating a theme in the instance the first time, a tour modal may appear. For the lab, the tour can be skipped.
	:::
    
2. The Editor page contains three sections:
    
    1. On the left, there is the configuration panel, where Global style adjustments can be made, and Component styles displays frequently used components.
        
    2. On the right is the UI styles preview and Experience preview section where selections from the configuration panel are rendered.
        
    3. The header displays the current page, theme, application scope, the ability to apply the current theme, feedback button, and a status icon. 
	:::note
	The Feedback link will show a modal where feedback can be directly submitted to the ServiceNow Theme Builder product team in a customer instance. It is not used for this lab.
	:::        
    
3. In the configuration panel on the left, the Global styles tab displays an overview of the theme, color, imagery, font, and shape selections. The overview displays the selection made in the built-in wizard to edit global styling quickly.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FU7ajUZsv0xcj8RcYNS2X%252Fimage.png%3Falt%3Dmedia%26token%3Df4fa1187-c610-433f-9eeb-f2de089e8160&width=768&dpr=4&quality=100&sign=3b8af833f789259893bb0fcb449d88c11c7ab05bcb0245b525ef5499c9569673)
        
    
4. Click on each of the icons to view the configurations that can be made:
    
    1. _Color:_ The Your brand palette section contains the base set of colors used to generate the interface colors. The UI colors section contains the colors that are generated automatically based on your brand colors. The UI colors can be changed at any time.
        
        :::note
        The UI colors section has a dropdown to show preview colors and All colors. Preview colors are the ones that can be rendered in the preview area in Theme Builder. All colors will display options that are not able to be previewed in Theme Builder and will have to be viewed after applying the theme to the instance.
        :::
        
    2. _Imagery:_ The logo that applies to the Unified Navigation header.
        
    3. _Typography:_ The font selection is applied globally to create a cohesive typography experience, users will see it in headlines, titles, subtitles, body copy, and captions.
        
    4. _Shape:_ Corner styling, controls the corner radius of components. Current options are square, less rounded, more rounded, and most rounded.
        
    

## Preview a theme on different experiences

In the previous section, the UI styles preview was used to provide an overall preview of a theme on the instance and workspace pages. The Experience preview option is used to preview a theme on specific experiences that are installed on the instance.

1. On the Editor page, under the preview section click the Experience preview tab at the top center of the preview area.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FcpPxrEvXU0Jv80WWxvfO%252Fimage.png%3Falt%3Dmedia%26token%3Db5301a39-f627-4108-96ce-6e930ea22c7e&width=768&dpr=4&quality=100&sign=00c46aeb13c2e1d8a96e493f51d59b62781127a661dfca4ea64efa09ca8ea950)
        
    

	:::note
	You may receive a 403: You do not have permissions to access this page error, this means as an admin you do not have the roles to the experience that is on your instance and need the necessary roles added to view the experience.
	:::

1. At the top left of the preview area is an Experience picker, click on the experience name or the down arrow to see a list of experiences on the instance. Clicking the box and arrow icon will open the experience in a new tab.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FO5fhEkIrPlJHuwrJ0YOm%252Fimage.png%3Falt%3Dmedia%26token%3Da350fca5-7914-4dbc-858d-27747ed539c8&width=768&dpr=4&quality=100&sign=2f1d340a04461bba4ed871d0adb316a05e27f9065bfdd6f7d7c88cb5f51ef647)
        
    
2. In the experience list, select CMDB Workspace and notice how the experience loads in the preview pane and the theme is applied to it.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FfFkasid05iRUtizNLGTO%252Fimage.png%3Falt%3Dmedia%26token%3Decbc12fe-fcbe-417a-82e2-e3f2d00f4c39&width=768&dpr=4&quality=100&sign=824b0fe235b0e15d1ddd0919b6db8badf57ff9ea8e31b1fd8699ab28126b22cc)
        
    
3. Click through the experience menus such as Unified Navigation App (Next Experience UI), Governance, CMDB 360, etc. to view how the theme loads on different pages of the experience.
    

## Preview theme selections in frequently used components

In the previous sections, the Global styles tab was used to configure additional styling selections and the multiple experiences were previewed with the selections. This section will walk through the Component styles tab in the configuration panel.

1. On the Editor page in the configuration panel to the left, click on the Component styles tab to preview theme choices in frequently used components.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FVoYvn92Gvm4MeZTi6NEw%252Fimage.png%3Falt%3Dmedia%26token%3D1ef8cc12-f4a7-455d-9a15-38f5ccec6faf&width=768&dpr=4&quality=100&sign=c334be203ee52d9a6c9bcf3969c386989b9a4b7b07bd0cfb4f711cd9e7d427a6)
        
    
2. The preview area will display how the theme is applied to commonly used components, this is helpful in reviewing how selections will apply to components such as Buttons, Dropdowns, etc. without cycling through experiences or drilling down into the UI Styles preview. Less common components might not be shown in this preview.
	1. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FGmE9aYW0U05mjfJAu8Kp%252Fimage.png%3Falt%3Dmedia%26token%3Df44013c9-e1ae-4938-9e3d-c0daf1d3de78&width=768&dpr=4&quality=100&sign=9aa927005b7fa9572310c23b71335e2c47b19ff4e85f280f4798020ef69a978c)