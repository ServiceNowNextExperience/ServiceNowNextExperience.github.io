---
id: overview
title: "Exercise 1 Overview"
pagination_label: "Exercise 1 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---

# Exercise 1: Record Watcher

##  Goal

We will show how to add an Asynchronous Message Bus (AMB) Record Watcher to an existing workspace. This will allow our app to respond to changes in the data, for instance when a new record is added or changed and needs to update the UI without the typical polling technique.

In this example, we will notify the user if an active case which they are assigned to changes while on the CSM Landing Page.

![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F705ryi41Ia49dnawhYD5%252Fimage.png%3Falt%3Dmedia%26token%3Dcc1ef7a6-83ff-44f5-8963-b65c16155e29&width=768&dpr=4&quality=100&sign=955dfa2ec06e6baf9c35d78654dc2387bfba274ac692fe617dcb03de04375c4d)

##  About the Record Watcher

There are two key concepts with the AMB Record Watcher--the action and the operation.

###  Actions

The Action is the activity that occurred to engage the record watcher and fire the event. It is centered around the state of the condition in relation to the record watcher. Did it enter the state? Did it exit the state? Or did something on the record that already satisfied the state change?

Consider the following response for the `action` property for the condition "assigned to is me".
- entry: A change happened to cause a record to satisfy the condition that did not formerly satisfy that condition. E.g. the assigned to field changes from blank to myself or a new record assigned to me is inserted.
- change: A record that already satisfies the condition changes. E.g. the description of the record changes.
- exit: A record that formerly satisfied the condition no longer does so, e.g. assigned to field changes to another person.

###  Operation

The Operation is an old-fashioned GlideRecord operation--insert, update, delete. As you can see you could have a combination of actions and operations that aren't exactly 1:1. I.e. a "change" action and "update" operation may seem like the same thing, but in fact an update operation on a record may cause it to "enter" the condition.

You can use these values in combination with the filter to make sure that you only respond to the specific situations that you want to and don't cause too much noise.

#  Using a record watcher on the UIB page

##  Open CSM/FSM Workspace in UI Builder (UIB)

1. Change the scope to "CSM Configurable Workspace". ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FbJwnoCUhhEQ0ea5ZrGQH%252FCleanShot%25202024-04-17%2520at%252015.09.35%25402x.png%3Falt%3Dmedia%26token%3D9c42b6cb-ff2c-4617-afef-d65da7a22850&width=300&dpr=4&quality=100&sign=55102ff2f53a33377b75e34be1f65e9035a178310c3afa12a2466491e1869f15) You can also switch scope directly within UI Builder.
    
2. Open UI Builder by going to **All > Now Experience UI Framework > UI Builder** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F4LM5ZUW5oZZNk3RueU8H%252FCleanShot%25202024-04-17%2520at%252015.10.29%25402x.png%3Falt%3Dmedia%26token%3D403628c1-d49e-43dd-b572-9993140557d7&width=300&dpr=4&quality=100&sign=15951a8157e368ef4780b738240febe609f66e5b23c97b1612252e173b1554e0)
    
3. Find the experience **CSM/FSM Configurable Workspace** in the list and click the name to open it.
    
4. Create a duplicate of _CSM Landing Page_ (near the top) by clicking the three vertical dots or snowman icon at the right-end of the line and **Duplicate variant**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F3Ge38ehsJaUiHBnERxmE%252FCleanShot%25202024-04-17%2520at%252015.12.09%25402x.png%3Falt%3Dmedia%26token%3Da9ffdcf4-fe0a-476d-95b4-544f4c52ddbd&width=768&dpr=4&quality=100&sign=7227da0ea052ad153386e2f238839e0e654c9d96ffd6d0c03518773ab5996b9e)
    
5. Name the new variant **CSM Landing Page Active** and choose **Create**.
    
6. The newly created variant will open in Editor mode. Select the **Settings** pill at the top and change the Order to **0** so that we're sure it's the version that is rendered by default. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FdLapjyPbPW85SyZPC9M1%252FCleanShot%25202024-04-17%2520at%252015.14.22%25402x.png%3Falt%3Dmedia%26token%3D097b8ff4-fad1-4875-a6bf-3bb0430ee900&width=300&dpr=4&quality=100&sign=d78bf214a7fd11392c50c0695b0e1d4d06f9bfd497f62cc6f421cb817e61e8e0)
    
7. Click **Save** towards the bottom of the screen then switch back to Editor.
    

##  Edit Landing Page and Add Watcher for My Active Cases

Next, we want to add an AMB Record Watcher which will show a message whenever a case to which you are assigned changes. This way we won't miss any critical inputs when they occur.

1. Switch back to the **Editor** tab using the pill at the top.
    
2. In the Data and scripts panel at the bottom left of your window, choose **Data resources > + Add data resource**, select **Record Watcher,** then select **Add**.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FtSRvTOiYTXMGxaiVFIxm%252FCleanShot%25202024-04-17%2520at%252015.18.56%25402x.png%3Falt%3Dmedia%26token%3D8ae15876-11f7-4707-b966-08d4e1ac968e&width=768&dpr=4&quality=100&sign=a66402bd1875fb876525418e6adb648d29605922424b71027be9343d3a451392)
    
3. Use the i icon next to the name to rename the data resources as follows:
    
    1. Data resource label: **My Active Cases Watcher**
        
    2. Data resource ID: **my_active_cases_watcher** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F8gYB7MDDJETSBLGouIsH%252FCleanShot%25202024-04-17%2520at%252015.21.01%25402x.png%3Falt%3Dmedia%26token%3Db9f2b635-d328-4c30-aa02-c953d01b752f&width=300&dpr=4&quality=100&sign=12ec3e668d233ef0768b91099b9dcdb785b12029aad998ce3e57843e5e05fb71)
        
    
4. Choose **Apply**.
    
5. Set the following properties on the data resource:
    
    1. Table: Case [sn_customerservice_case]
        
    2. Choose **Edit filter conditions** and fill in **Assigned to | is** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FbFEJO1IEHk863sth67zx%252FCleanShot%25202024-05-06%2520at%252010.54.52%25402x.png%3Falt%3Dmedia%26token%3D394204b5-f642-42c7-8667-8a52498f0f62&width=300&dpr=4&quality=100&sign=482a60fa6ed0f934512203a33d38735127351b3a57f9b1089b73b3fa48391bec)
        
    3. Mouse over the value where it says --None-- and choose the data binding icon. In the future we'll refer to this as `<data binding>` whenever you need to use it. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FzWgvikvsghy20hdkqDvS%252FCleanShot%25202024-04-17%2520at%252015.25.49%25402x.png%3Falt%3Dmedia%26token%3D28c7c67d-2ecf-4cff-8aa9-bb03637a523c&width=300&dpr=4&quality=100&sign=37dbd369d6b49b0185aa45573dde6ff127085e88ae70776b7ebb9708b26a36e8)
        
    4. This pops open the (new in Washington DC) visual data binding window. Choose **Page properties > session > user > sys_id** and use the little up arrow to the right, double click, or drag the data pill up into the blank white space.
        
        ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F7qQVPTjT93eYwuoHpWvf%252FCleanShot%25202024-04-17%2520at%252015.28.40%25402x.png%3Falt%3Dmedia%26token%3D4a266df8-b383-47ef-97f5-ee78af11d945&width=768&dpr=4&quality=100&sign=8abdc4dd12b0e484fbabe5e8a26755d9533ce1d20d2741a3be70d5c8485f4c4c)
        
    5. Click **Apply** and click **Apply** again.
        
    6. Set _Subscribe_ to **true.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252Fy4wFHsl6aKx8176sOCne%252FCleanShot%25202024-04-17%2520at%252015.42.27%25402x.png%3Falt%3Dmedia%26token%3Dbc20079a-a647-4521-b2a6-9d806ff567e0&width=300&dpr=4&quality=100&sign=761ce81dc31b957f952ff067522fa975ff8629d8adf12483d64f2aecfd192131)
        
    
6. **Save** the page.
    

##  Add script to investigate events

Before we wire this up, we need to figure out what sort of data the record watcher events provide. To do this we could try to track down the documentation, but instead, we are going to create a generic script (save it for future use--I have a version of this script in every project that I work on) that will reveal the payload of those events. Events are also very contextual, so this will give us the payload values for the context in which we're working.

1. Under Data and Scripts in the bottom left of the screen, mouse over _Client scripts_ and click the “**+**” on the right to add a new script.
    
2. Name your script **Debug events** and add the following code:
        
    ```
    function handler({api, event, helpers, imports}) {
        console.log(event.name, event);
    }
    ```

    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FZbuac4Wc4FiBxrh8D6Mq%252FCleanShot%25202024-04-19%2520at%252013.33.28%25402x.png%3Falt%3Dmedia%26token%3D4b6d0770-00fc-4121-9cfa-f14daa1b7527&width=768&dpr=4&quality=100&sign=bb2f14d73b53426dc86ef1bcaa1b19c9373d1b44a8cdd977a61f5f2d4dc1aba9)

1. **Save** the page.
    
2. Open the **My Active Cases Watcher** data resource you created in the last section.
    
3. Click into the **Events** tab.
    
4. Choose **+Add event mapping** and choose the **Message received** event. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FLLbsHaQ9B4gRbg9oSrTw%252FCleanShot%25202024-04-19%2520at%252013.36.27%25402x.png%3Falt%3Dmedia%26token%3D069dcc01-77d4-45d7-85dd-dd23ab524f96&width=300&dpr=4&quality=100&sign=b3f16c3dc35ca54a63082e725f49c2b11a39d35ad8a774ff7f16eebe67028abb)
    
5. Add the **Scripts > Debug Events** event handler and click **Add.**
    
6. Close the data resource and **Save** the page.
    
7. Select **Preview > Open URL Path** and open your page in a separate window. Right-click on a blank spot on the page, choose **Inspect,** and then make sure that the Console is open.
    
8. Now you need to give the record watcher something to respond to. Go back to Core UI in a separate tab and navigate to **All > Customer Service > Cases > My Cases** and click **New** to create a case assigned to you. You can continue to trigger the record watcher by adding work notes.
    
9. Go back to your workspace page and note the console entry just added in your workspace in the console, something like this:
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FCzWMkrrv1En3s9xPqzfo%252Fimage.png%3Falt%3Dmedia%26token%3D9a4d2d1e-ebeb-4034-8841-11c6adee6975&width=768&dpr=4&quality=100&sign=d9634f356cc978cfefac7467364d45b84e9185a85fe37bbe2862c220878d6d00)
    

    > By inspecting this object we can deduce what values we can use for deciding when to notify the user. In this case we can drill down to _payload.data.action_ to know that a record changed, _payload.data.changes_ to get a list of fields that changed and _payload.data.record_ to get the newly changed value for standard field types.

##  Add an alert when a case is updated

Now that we know what to look for, let's do something practical with this info. We'll add an event handler to alert the user if any changes happen to a CSM case to which they are assigned.

1. Open the **My Active Cases Watcher** data resource back up, open the events tab, and add another event handler to the Message received event. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252F5MewIUZOjdcWbq5Ni0U1%252FCleanShot%25202024-04-19%2520at%252014.43.48%25402x.png%3Falt%3Dmedia%26token%3D538310d8-134a-4d51-8e38-8ad16a7e80ef&width=300&dpr=4&quality=100&sign=045dbc24af22936094884b93c39581225f081a8a936e84b9278c5405a5e21893)
    
2. Choose **Page-level event handlers > Add alert notifications** and change the _Mode_ from _Form_ to **Script.** You'll use a script here as it allows for a more dynamic message.
    
    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FNWdJdNDs66zTwlZQmQ1p%252FCleanShot%25202024-04-19%2520at%252014.53.14%25402x.png%3Falt%3Dmedia%26token%3D02cfa270-0556-4a54-b28c-91a98a66722c&width=768&dpr=4&quality=100&sign=4054aa2966bd918048d7337a82a0807dea6d40af9c73e02f2afbb3cf88c9cbb8)
    
3. You'll want to add to the items array so that the script looks like this:
    
    ```
    function evaluateEvent({api,event}) {
        return {
            items: [{
                "status": "info",
                "content": `Your case ${event.payload.data.display_value} has been updated`,
                "action": {
                    "type": "dismiss"
                }
            }]
        };
    }
    ```

1. Below the script box, choose **Advanced** and choose to trigger **Conditionally** (you may have to scroll down to reveal more options).
    
2. Mouse over the field and choose data binding icon to open the visual data binding window.
    
3. Double-click into the area with the message _Add a data output to this area, etc._
    
4. Paste in **(@payload.data.action == "change")** and choose **Apply.** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FdCfvJzj2UBr3lPX7DBGC%252FCleanShot%25202024-04-19%2520at%252015.11.47%25402x.png%3Falt%3Dmedia%26token%3Dc184341a-1c5b-43bd-a290-49ac16e3da7e&width=300&dpr=4&quality=100&sign=3b1feb5974fe58a498065233c384a980e9cfbffed0ce1eeef05dc2fe7b2c6880)
    
5. Choose **Add**.
    
6. Close the data resource modal and **Save** the page.
    
7. Now test the page by going to your test tab and refreshing. Then go back to the record in Core UI and add a work note.
    
8. You should see a message on the workspace landing page whenever you add a work note to a case assigned to you.
    

#  Challenges

##  Display different message on assignment vs update

Try using the same techniques but this time show a different message on "entry" to let the user know that a new record has been assigned to them and that they should refresh their list of cases. You will use the same techniques as the prior section but instead use the condition on the "Add alert notifications" event handler of `(@payload.data.action == "entry")`;

##  Update the list when assigned

Another real-world example would be to tell the user they have had a record assigned to them and update the _My active cases_ list on the landing page. On the CSM workspace landing page the controls do not have a way to directly force a refresh, but we can work around that.

The only thing we can do to manipulate the components is to change the state. We will add an arbitrary date to the filter for "updated after" and change that value to different times of the day on 1970-01-01.

1. In the bottom left hand part of the screen select “Client state parameters” and add a new state parameter called "updatedAfter".
    
2. Go to the "My active cases" list in the middle of the screen and click "Edit filter" in the Config panel on the right and add "Updated after @state.updatedAfter" to the filter:
    

    ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F292040176-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F0la4ZJXmrgp1xVmGUG6L%252Fuploads%252FLfF1UhETJ3kWtYqdVbqr%252Fimage.png%3Falt%3Dmedia%26token%3D6b9c69d8-2c90-48c1-a6da-14f44b775cde&width=768&dpr=4&quality=100&sign=94f42f21ac0e914f220f0d3f43a4bc13c08ea9993cb6fd70abf96bb9c20e32b8)

1. Go back to the record watcher Events tab under _Message received_ and add "Update client state parameter" using Script mode to update the value of this state parameter.
    
2. Mode: **Script**
    
    ```
    function evaluateEvent({api, event}) {
        var msSinceMidnight= new Date()-new Date().setHours(0,0,0,0);
        const newDate = new Date(msSinceMidnight);
        const [dtString] = newDate.toISOString().split('.');
    
        return { propName: "updatedAfter", value: dtString };
    }
    ```

3. When to trigger:
    

    `((@payload.data.action == "entry") || (@payload.data.action == "exit"))`
