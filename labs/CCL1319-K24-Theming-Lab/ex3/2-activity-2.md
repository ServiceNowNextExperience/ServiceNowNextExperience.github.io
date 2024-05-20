---
id: activity-2
title: "Exercise 3 - Activity 2"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 2"

---

## Prepare UX Style record for edditing

The main record where the bulk of your color related changes will be made is the "Colors" core UX Theme Style record. When you click on it to open it, it will all be on one line and be hard to modify. We will walk through the steps required to make it easier to edit before we continue our editing.

1. Navigate to the platform view of ServiceNow where you can see the Unified Navigation
    
2. In the top left corner, expand the All menu if it's not expanded already.
    
3. Type "Theme" in to the Filter Navigator.
    
4. Under "Now Experience Framework" find and click on **Themes.**
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FXsVqqx19SjOeDno9lKue%252Fimage.png%3Falt%3Dmedia%26token%3D57e96265-8864-4e0b-a286-43adbf923edb&width=768&dpr=4&quality=100&sign=2fbbfc26b687769121185a2f65f907d96f5cf7008e7c4437ba8231f3e1bbfbbf)
        
    
5. This will bring up the UX Themes table. Search for " Custom Wasabi Donut" under Name and click on the record to open it
    
    1. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252F54gjzYhOm5RMlArZplcY%252Fimage.png%3Falt%3Dmedia%26token%3D1677f039-ce66-4d2a-a3cc-82ce1051e9c0&width=300&dpr=4&quality=100&sign=63510445248fef73efa50062b11083f282eac58c13f31ed1fd4ce08cbbeaabee)
        
    
6. Open the "Wasabi donut - Colors" record.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FXfyZ9wcWu1RMbhmKkEVY%252Fimage.png%3Falt%3Dmedia%26token%3D2f373003-a1df-4b0c-b13f-0ee2353f2f51&width=768&dpr=4&quality=100&sign=67570b8eae20b99f106cb20d1dd93e03611c93323bf71cf0236dd32965de3ae4)
        
    
7. Click in the "Style" box and select the entire string of text. You can easily do this by clicking "CTRL+A" (or Command + A if you're on mac), and then "CTRL+C" to copy it (or Command + C if you're on a mac).
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252F5z8bUuL5mJ8WfAEHs5Jo%252Fimage.png%3Falt%3Dmedia%26token%3D79e5cd47-a333-4468-8219-bc35101f9024&width=768&dpr=4&quality=100&sign=4933056ca12f13fdda11afd97b4515e5a71d611e576cf4bb9e0755f162b06b50)
        
    
8. Now that we have it in a clipboard, you are free to go to your favorite JSON Prettifier web application, in this example we'll be going to the one I frequently use: [https://jsonformatter.org/json-pretty-print](https://jsonformatter.org/json-pretty-print)
    
9. Navigate to the site: [https://jsonformatter.org/json-pretty-print](https://jsonformatter.org/json-pretty-print)
    
10. Paste your copied code in to the left box.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FYlGvGGcKZ5dMiMl3Kf8i%252Fimage.png%3Falt%3Dmedia%26token%3Dccc1266f-5bf2-44c9-8bcf-60c2c82cae66&width=768&dpr=4&quality=100&sign=0b4087655cf62d208e8bb82b662670270653121b25f370d1019f3c3476b1d6da)
        
    
11. Click **Make Pretty.**
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FPcvlD5FHieAA8F6iMhk6%252Fimage.png%3Falt%3Dmedia%26token%3De388886f-652c-4463-8817-92080d452228&width=768&dpr=4&quality=100&sign=7a63493e6fc8c9c48faeb9be9052fee3f94e3b82ab57a758b72a1257ba16ee08)
        
    
12. Copy the generated code on the right. You can easily do this by clicking "CTRL+A" (or Command + A if you're on mac), and then "CTRL+C" to copy it (or Command + C if you're on a mac).
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FdMnJcXdzaNoseCvXlv3T%252Fimage.png%3Falt%3Dmedia%26token%3D25946d9d-d634-4d7b-905b-922a516b35a4&width=768&dpr=4&quality=100&sign=a47f51875685f8cc4b7d1c10d49ea954054f95d79729ccf05a794520abc5fd83)
        
    
13. Navigate back to the ServiceNow tab we had open with our UX Theme Style record.
    
14. Select the entire text again if it's not already selected and delete it.
    
15. Paste in the copied code, you'll see it's much more readable now.
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FYJ9rbtxBvYaVAGXAFWCq%252Fimage.png%3Falt%3Dmedia%26token%3D312d044d-bfcf-4978-8a52-a7d42b6cfc0d&width=768&dpr=4&quality=100&sign=ba0bb83d0d93a53673724a25eb3b97ba6933c804f8fa4ed4ad4337868a008c40)
        
    
16. Right-click the header, click "Save".
    
     ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F3335125350-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FGxr3WM1YvkW8Yg6IwjeY%252Fuploads%252FjJPWkuDxUiIJkffE5Tcx%252Fimage.png%3Falt%3Dmedia%26token%3Dcdd72ba9-3951-44f3-a77d-9a13b4f7c030&width=768&dpr=4&quality=100&sign=31bcde2e9f19b8990c64ca40f51f5b5d925d1cee17dc78028aac7ebd8c88e500)
        
    
:::note
If you scroll up to the top of the code, you'll see "colorGenerationVersion" or something similar above the "base" colors. This is an easy way to tell if you are copying code from a Theme Builder theme, as the Polaris theme does not contain this string.
:::