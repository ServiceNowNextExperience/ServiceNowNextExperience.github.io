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
2. In the top right corner click **View experience settings**.
3. Under "Description", clikc on **Advanced settings**.
4. In the new page that opened, scroll down to the Related Lists.
5. In the "UX Page Properties" related list, find the **chrome_tab** record and click on it.
6. This is the configuration for the plus menu. Take a look at the JSON in the Value box.
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
				" multiInstField": "sysId"
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
		}
	],
	"maxMainTabLimit": 10,
	"maxTotalSubTabLimit": 30
}
```
7. Add the following JSON to the bottom, starting at line 81, after the `},` and before `"maxMainTabLimit": 10,`.
```
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
```

Here are the descriptions of some of the JSON properties listed above:

- `message`: This is the text shown to the end user in the option when you click the plus menu.
- `routeInfo`: This is what tells the button what to do. 
	> `route` is the page ID.
	>
	> `fields` contains the URL parameters to be fed to the page when it's opened.

8. Navigate back to the Service Operations Workspace and test by refreshing the page. If the menu won't load, triple check whether your JSON is appropriately formatted and try again.