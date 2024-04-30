---
id: activity-1
title: "Exercise 4 - Activity 1"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 1"

---

## Overview
In this activity, you will add a menu item to the plus menu in the Service Operations Workspace.

## Instructions

1. Starting in the UI Builder home page, search for and click on **Service Operations Workspace** in the Experiences list.
![LAB2050_EX4A1_image_1.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_1.png)

2. In the top right corner click **View experience settings**.
![LAB2050_EX4A1_image_2.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_2.png)

3. Under "Description", click on **Advanced settings**.
![LAB2050_EX4A1_image_3.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_3.png)

4. Click on the update set picker in the top right corner and select the **Service Operations Workspace Core** application scope. 
![LAB2050_EX4A1_image_4.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_4.png)

5. Scroll down to the Related Lists.
![LAB2050_EX4A1_image_5.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_5.png)

6. In the "UX Page Properties" related list, find the **chrome_tab** record and click on it.
![LAB2050_EX4A1_image_6.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_6.png)

7. This is the configuration for the plus menu. Replace the JSON in the **Value** field with what is provided here:
![LAB2050_EX4A1_image_7.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_7.png)

```
{
	"contextual": [
		"record",
		"kb_view"
	],
	"newTabMenu": [
		{
			"label": {
				"translatable": true,
				"message": "New Interaction"
			},
			"routeInfo": {
				"route": "record",
				"fields": {
					"table": "interaction",
					"sysId": "-1"
				},
				"multiInstField": "sysId"
			},
			"condition": {
				"tableDescription": {
					"table": "interaction",
					"canCreate": true
				}
			}
		},
		{
			"label": {
				"translatable": true,
				"message": "New Incident"
			},
			"routeInfo": {
				"route": "record",
				"fields": {
					"table": "incident",
					"sysId": "-1"
				},
				"multiInstField": "sysId"
			},
			"condition": {
				"tableDescription": {
					"table": "incident",
					"canCreate": true
				}
			}
		},
		{
			"label": {
				"translatable": true,
				"message": "New Change Request"
			},
			"routeInfo": {
				"route": "create-change-request-page",
				"fields": {},
				"multiInstField": ""
			},
			"condition": {
				"tableDescription": {
					"table": "change_request",
					"canCreate": true
				}
			}
		},
{
			"label": {
				"translatable": true,
				"message": "New Knowledge Article"
			},
			"routeInfo": {
				"route": "record",
				"fields": {
					"table": "kb_knowledge",
					"sysId": "-1"
				},
				"multiInstField": "sysId"
			},
			"condition": {
				"tableDescription": {
					"table": "kb_knowledge",
					"canCreate": true
				}
			}
		}
	],		
	"maxMainTabLimit": 10,
	"maxTotalSubTabLimit": 30
}
```

Here are the descriptions of some of the JSON properties listed above:

- `message`: This is the text shown to the end user in the option when you click the plus menu.
- `routeInfo`: This is what tells the button what to do. 
	> `route` is the page ID.
	>
	> `fields` contains the URL parameters to be fed to the page when it's opened.
8. Click **Update**.
![LAB2050_EX4A1_image_8.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_8.png)

9.  Navigate back to the Service Operations Workspace and test by refreshing the page. If the menu won't load, triple check whether your JSON is appropriately formatted and try again.
![LAB2050_EX4A1_image_9.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_9.png)
![LAB2050_EX4A1_image_10.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_10.png)

10. Click the **Plus menu**.
![LAB2050_EX4A1_image_11.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_11.png)

11. Select your newly created option, **New Knowledge Article**.
![LAB2050_EX4A1_image_12.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_12.png)

12. The "Create New Knowledge" record page should greet you.
![LAB2050_EX4A1_image_13.png](../images/LAB2050_EX4A1/LAB2050_EX4A1_image_13.png)