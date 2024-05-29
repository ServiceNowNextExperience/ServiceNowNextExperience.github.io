---
id: overview
title: "Exercise 1 Overview"
pagination_label: "Exercise 1 Overview"
sidebar_label: "Overview"
hide_table_of_contents: true
draft: false
---

# Exercise 1: Build out the Home Page

## Goal

In this exercise, you'll build out the layout for the experience home page. The overall goal of the lab is to build out an interface for a single-page note-taking app that looks and feels like the other base app shell experiences that ServiceNow ships by default.

## Format the home page

For the first part of this exercise, you're going to bootstrap the development of the page by pulling a layout from the existing admin home page to get a head start on development. You'll do this by inserting some values in the macroponent record for the home page that comes with the app.

The macroponent record holds almost all of your UI Builder page configuration across a few JSON fields. While it's not possible to duplicate pages inside of UIB across experiences, you can copy and paste the JSON to get your page bootstrapped more quickly. The technique described in this exercise is really only necessary if you're copying a page, but I wanted to include it as a tool to add to your UIB development toolbox.

### What's a macroponent anyway?

In short, the macroponent is a metadata-defined UX Framework component that is defined in the table sys_ux_macroponent. Instead of writing a page-level component in code, you declaratively define the component's composition, data, and business logic through UI Builder, and then the system translates the macroponent metadata into HTML, CSS, and JavaScript for the client browser in the runtime.

### Switch to the right application scope

1. First, switch to the **Killer Notes** application scope by clicking the ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FjFL1hKvRMFi15XiR0vEx%252FCleanShot%25202024-04-30%2520at%252015.17.34%25402x.png%3Falt%3Dmedia%26token%3D2829cc17-a001-4e4b-b94e-6a1c46bb0d49&width=42&dpr=4&quality=100&sign=a2e9b03715915eed1c1c09cdf7833ed2f3baeee47232e659b1ab8300399e710f) **Show instance tools** icon at the right-side of the header.
    
2. Change from _Global_ to **Killer Notes**. ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FmUBOyGKtStfTwom22Kar%252FCleanShot%25202024-04-08%2520at%252014.36.05%25402x.png%3Falt%3Dmedia%26token%3Df9a84ec7-c681-46a7-9cf3-222ddbe5f9a5&width=300&dpr=4&quality=100&sign=513bdd10741552cd2399fe9d4ed74b11aa6c9c8ea9e535f4cd2b23e470604884)
    

> You can also switch scope directly within UI Builder.

### Find the macroponent record for the home page

1. Click the **All** menu.
    
2. In the filter, type **sys_ux_macroponent.list** and hit **Return** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252F1n2tvsU6mBfgP1gDdzKl%252FCleanShot%25202024-04-01%2520at%252015.31.45%25402x.png%3Falt%3Dmedia%26token%3D9f55d75e-5cb3-4952-90c2-02d831e1e539&width=300&dpr=4&quality=100&sign=c20211bd0ecaffba3d041046e10dcbeded081e12ca1760ff9879abfd502b9850)
    
3. Find the specific macroponent record by filtering the list for:
    
    1. Sys ID | is | **e70d4cb1219586107f44b97c4dc7b60a** ![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FQrUSTuGXJHuj6r6pp4Ga%252FCleanShot%25202024-04-01%2520at%252015.33.41%25402x.png%3Falt%3Dmedia%26token%3D26e74dce-6cf8-4699-b855-875aac038b22&width=300&dpr=4&quality=100&sign=314436a813c2cfd525832230f88378597001194b7c45b48839eeb1f3ee3cc50c)
        
    
4. Click into the page to bring up the macroponent record.
    

You should now see the mostly empty macroponent record. This is the back-end representation of the UI Builder page you'll work with. Almost everything you do with the page in UIB will be saved to this record.

###  Populate the structure of the page

We're cheating a bit in this section, but this is a valid strategy if you find a UIB page somewhere and want to copy the page's structure in your new page. There are a couple of large JSON blobs to copy and paste in this section so rather than highlighting try to use the little copy icon at the top right of the code block.

In the real world you'd copy these JSON fields from one page to another, but in the interest of time and ease, the JSON has already been provided.

1. Paste the following JSON into the _Layout model_ field on the macroponent:
    ```
    {
        "default": {
            "children": null,
            "isInline": null,
            "items": [
                {
                    "element_id": "header_container",
                    "styles": {
                        "background": "RGB(var(--now-color_brand--secondary))",
                        "flex": "1",
                        "width": "100%"
                    }
                },
                {
                    "element_id": "search_container",
                    "styles": {
                        "background": "rgb(var(--now-color_background--secondary))",
                        "height": "100%",
                        "width": "100%"
                    }
                },
                {
                    "element_id": "body_container",
                    "styles": {
                        "background": "rgb(var(--now-color_background--secondary))",
                        "width": "100%"
                    }
                },
                {
                    "element_id": "footer_container",
                    "styles": {
                        "background": "rgb(var(--now-color_background--secondary))",
                        "width": "100%"
                    }
                }
            ],
            "root": null,
            "rules": null,
            "styles": {
                "background": "RGB(var(--now-color_brand--secondary))",
                "display": "flex",
                "flex-direction": "column"
            },
            "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
            "type": "flex"
        },
        "version": "3.0.0"
    }
    ```

2. In the _Composition_ field paste the following: 
    ```
    [
        {
            "definition": {
                "id": "d356d14b6e293a3020a244b63d278d8f",
                "type": "MACROPONENT"
            },
            "elementId": "header_container",
            "elementLabel": "Header Container",
            "eventMappings": [
                
            ],
            "extensionPoints": [
                
            ],
            "isHero": false,
            "isHidden": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "isNonDestructive": false,
            "items": [
                
            ],
            "overrides": {
                "composition": [
                    {
                        "definition": {
                            "id": "d356d14b6e293a3020a244b63d278d8f",
                            "type": "MACROPONENT"
                        },
                        "elementId": "container_4",
                        "elementLabel": "Container 4",
                        "eventMappings": [
                            
                        ],
                        "extensionPoints": [
                            
                        ],
                        "isHero": false,
                        "isHidden": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "isNonDestructive": false,
                        "items": [
                            
                        ],
                        "overrides": {
                            "composition": [
                                {
                                    "definition": {
                                        "id": "d356d14b6e293a3020a244b63d278d8f",
                                        "type": "MACROPONENT"
                                    },
                                    "elementId": "container_5",
                                    "elementLabel": "Container 5",
                                    "eventMappings": [
                                        
                                    ],
                                    "extensionPoints": [
                                        
                                    ],
                                    "isHero": false,
                                    "isHidden": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "isNonDestructive": false,
                                    "items": [
                                        
                                    ],
                                    "overrides": {
                                        "composition": [
                                            {
                                                "definition": {
                                                    "id": "4335ba6dca80378f7ba7a67cd6667bec",
                                                    "type": "MACROPONENT"
                                                },
                                                "elementId": "stylized_text_4",
                                                "elementLabel": "Stylized text 4",
                                                "eventMappings": [
                                                    
                                                ],
                                                "extensionPoints": [
                                                    
                                                ],
                                                "isHero": false,
                                                "isHidden": {
                                                    "type": "JSON_LITERAL",
                                                    "value": null
                                                },
                                                "isNonDestructive": false,
                                                "items": [
                                                    
                                                ],
                                                "overrides": null,
                                                "propertyValues": {
                                                    "css": {
                                                        "type": "JSON_LITERAL",
                                                        "value": "* { \n    color: rgb(var(--now-color--neutral-0, 255, 255, 255));\n    font-family: var(--now-font-family, 'Cabin');\n    font-style: normal;\n    font-weight: 700;\n    font-size: var(--now-global-font-size--xxl, 32px);\n    margin-top: 50px;\n}"
                                                    },
                                                    "tag": {
                                                        "type": "JSON_LITERAL",
                                                        "value": "span"
                                                    },
                                                    "text": {
                                                        "type": "TRANSLATION_LITERAL",
                                                        "value": {
                                                            "code": null,
                                                            "comment": "",
                                                            "message": "Notes"
                                                        }
                                                    }
                                                },
                                                "slot": null,
                                                "styles": null
                                            }
                                        ],
                                        "layout": {
                                            "default": {
                                                "children": null,
                                                "isInline": null,
                                                "items": [
                                                    {
                                                        "element_id": "stylized_text_4",
                                                        "styles": {}
                                                    }
                                                ],
                                                "root": null,
                                                "rules": null,
                                                "styles": {
                                                    "display": "flex",
                                                    "flex-direction": "column",
                                                    "gap": "var(--now-static-space--sm)",
                                                    "margin": "2rem 0 0 0",
                                                    "padding-left": "3rem",
                                                    "padding-right": "1rem"
                                                },
                                                "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                                "type": "flex"
                                            },
                                            "version": "3.0.0"
                                        }
                                    },
                                    "propertyValues": {
                                        "ariaRegionHeadingLevel": {
                                            "type": "JSON_LITERAL",
                                            "value": "1"
                                        },
                                        "ariaRegionName": {
                                            "type": "TRANSLATION_LITERAL",
                                            "value": {
                                                "code": null,
                                                "comment": "",
                                                "message": ""
                                            }
                                        },
                                        "ariaRole": {
                                            "type": "JSON_LITERAL",
                                            "value": ""
                                        },
                                        "includeAriaHeading": {
                                            "type": "JSON_LITERAL",
                                            "value": false
                                        },
                                        "type": {
                                            "type": "JSON_LITERAL",
                                            "value": "section"
                                        }
                                    },
                                    "slot": null,
                                    "styles": null
                                }
                            ],
                            "layout": {
                                "default": {
                                    "children": null,
                                    "isInline": null,
                                    "items": [
                                        {
                                            "element_id": "container_5",
                                            "styles": {
                                                "background": "rgb(var(--now-color--primary-3))",
                                                "background-image": "url(\"admin-home-banner.svg\")",
                                                "background-position": "right",
                                                "background-repeat": "no-repeat",
                                                "background-size": "100%",
                                                "box-shadow": "var(--now-static-drop-shadow--md)",
                                                "height": "100%",
                                                "min-height": "200px",
                                                "width": "100%"
                                            }
                                        }
                                    ],
                                    "root": null,
                                    "rules": null,
                                    "styles": {},
                                    "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                    "type": "flex"
                                },
                                "version": "3.0.0"
                            }
                        },
                        "propertyValues": {
                            "ariaRegionHeadingLevel": {
                                "type": "JSON_LITERAL",
                                "value": "1"
                            },
                            "ariaRegionName": {
                                "type": "TRANSLATION_LITERAL",
                                "value": {
                                    "code": null,
                                    "comment": "",
                                    "message": ""
                                }
                            },
                            "ariaRole": {
                                "type": "JSON_LITERAL",
                                "value": ""
                            },
                            "includeAriaHeading": {
                                "type": "JSON_LITERAL",
                                "value": false
                            },
                            "type": {
                                "type": "JSON_LITERAL",
                                "value": "section"
                            }
                        },
                        "slot": "",
                        "styles": null
                    }
                ],
                "layout": {
                    "default": {
                        "children": null,
                        "isInline": null,
                        "items": [
                            {
                                "element_id": "container_4",
                                "styles": {
                                    "background": "--now-color_brand--secondary",
                                    "height": "15rem",
                                    "max-height": "300px",
                                    "width": "100%"
                                }
                            }
                        ],
                        "root": null,
                        "rules": null,
                        "styles": {
                            "display": "grid",
                            "flex-direction": "column",
                            "grid-auto-columns": "1fr",
                            "grid-auto-rows": "1fr",
                            "grid-template-columns": "1fr",
                            "grid-template-rows": "0.1fr"
                        },
                        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                        "type": "grid"
                    },
                    "version": "3.0.0"
                }
            },
            "propertyValues": {
                "ariaRegionHeadingLevel": {
                    "type": "JSON_LITERAL",
                    "value": "1"
                },
                "ariaRegionName": {
                    "type": "TRANSLATION_LITERAL",
                    "value": {
                        "code": null,
                        "comment": "",
                        "message": ""
                    }
                },
                "ariaRole": {
                    "type": "JSON_LITERAL",
                    "value": ""
                },
                "includeAriaHeading": {
                    "type": "JSON_LITERAL",
                    "value": false
                },
                "type": {
                    "type": "JSON_LITERAL",
                    "value": "section"
                }
            },
            "slot": "",
            "styles": null
        },
        {
            "definition": {
                "id": "d356d14b6e293a3020a244b63d278d8f",
                "type": "MACROPONENT"
            },
            "elementId": "search_container",
            "elementLabel": "Search Container",
            "eventMappings": [
                
            ],
            "extensionPoints": [
                
            ],
            "isHero": false,
            "isHidden": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "isNonDestructive": false,
            "items": [
                
            ],
            "overrides": {
                "composition": [
                    {
                        "definition": {
                            "id": "d356d14b6e293a3020a244b63d278d8f",
                            "type": "MACROPONENT"
                        },
                        "elementId": "container_1",
                        "elementLabel": "Container 1",
                        "eventMappings": [
                            
                        ],
                        "extensionPoints": [
                            
                        ],
                        "isHero": false,
                        "isHidden": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "isNonDestructive": false,
                        "items": [
                            
                        ],
                        "overrides": {
                            "composition": [
                                {
                                    "definition": {
                                        "id": "1f6e0643eca7a637e36bd7833549ec9e",
                                        "type": "MACROPONENT"
                                    },
                                    "elementId": "heading_1",
                                    "elementLabel": "Heading 1",
                                    "eventMappings": [
                                        
                                    ],
                                    "isHidden": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "preset": null,
                                    "propertyValues": {
                                        "hasNoMargin": {
                                            "type": "JSON_LITERAL",
                                            "value": false
                                        },
                                        "label": {
                                            "type": "TRANSLATION_LITERAL",
                                            "value": {
                                                "code": null,
                                                "comment": "",
                                                "message": "Search your notes"
                                            }
                                        },
                                        "level": {
                                            "type": "JSON_LITERAL",
                                            "value": "3"
                                        },
                                        "variant": {
                                            "type": "JSON_LITERAL",
                                            "value": "header-primary"
                                        },
                                        "wontWrap": {
                                            "type": "JSON_LITERAL",
                                            "value": false
                                        }
                                    },
                                    "slot": null,
                                    "styles": null
                                }
                            ],
                            "layout": {
                                "default": {
                                    "children": null,
                                    "isInline": null,
                                    "items": [
                                        {
                                            "element_id": "heading_1",
                                            "styles": {}
                                        }
                                    ],
                                    "root": null,
                                    "rules": null,
                                    "styles": {
                                        "flex-direction": "column",
                                        "flex-wrap": "nowrap",
                                        "gap": "",
                                        "padding": "var(--now-scalable-space--xl)",
                                        "padding-bottom": "var(--now-scalable-space--xl)",
                                        "padding-left": "var(--now-scalable-space--xl)",
                                        "padding-right": "var(--now-scalable-space--xl)",
                                        "padding-top": "var(--now-scalable-space--xl)"
                                    },
                                    "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                    "type": "flex"
                                },
                                "version": "3.0.0"
                            }
                        },
                        "propertyValues": {
                            "ariaRegionHeadingLevel": {
                                "type": "JSON_LITERAL",
                                "value": "1"
                            },
                            "ariaRegionName": {
                                "type": "TRANSLATION_LITERAL",
                                "value": {
                                    "code": null,
                                    "comment": "",
                                    "message": ""
                                }
                            },
                            "ariaRole": {
                                "type": "JSON_LITERAL",
                                "value": ""
                            },
                            "includeAriaHeading": {
                                "type": "JSON_LITERAL",
                                "value": false
                            },
                            "type": {
                                "type": "JSON_LITERAL",
                                "value": "section"
                            }
                        },
                        "slot": "",
                        "styles": null
                    }
                ],
                "layout": {
                    "default": {
                        "children": null,
                        "isInline": null,
                        "items": [
                            {
                                "element_id": "container_1",
                                "styles": {
                                    "background": "rgb(var(--now-color_background--primary))",
                                    "border-color": "",
                                    "border-radius": "8px",
                                    "border-style": "id",
                                    "border-width": "",
                                    "box-shadow": "var(--now-static-drop-shadow--md)",
                                    "height": "100%",
                                    "width": ""
                                }
                            }
                        ],
                        "root": null,
                        "rules": null,
                        "styles": {
                            "flex-direction": "column",
                            "margin": "-4rem 3rem 1rem 3rem"
                        },
                        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                        "type": "flex"
                    },
                    "version": "3.0.0"
                }
            },
            "propertyValues": {
                "ariaRegionHeadingLevel": {
                    "type": "JSON_LITERAL",
                    "value": "1"
                },
                "ariaRegionName": {
                    "type": "TRANSLATION_LITERAL",
                    "value": {
                        "code": null,
                        "comment": "",
                        "message": ""
                    }
                },
                "ariaRole": {
                    "type": "JSON_LITERAL",
                    "value": ""
                },
                "includeAriaHeading": {
                    "type": "JSON_LITERAL",
                    "value": false
                },
                "type": {
                    "type": "JSON_LITERAL",
                    "value": "section"
                }
            },
            "slot": "",
            "styles": null
        },
        {
            "definition": {
                "id": "d356d14b6e293a3020a244b63d278d8f",
                "type": "MACROPONENT"
            },
            "elementId": "body_container",
            "elementLabel": "Body Container",
            "eventMappings": [
                
            ],
            "isHidden": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "overrides": {
                "composition": [
                    
                ],
                "layout": {
                    "default": {
                        "children": null,
                        "items": [
                            
                        ],
                        "root": null,
                        "rules": null,
                        "styles": {
                            "flex-direction": "column",
                            "padding": "1rem",
                            "padding-bottom": "1rem",
                            "padding-left": "1rem",
                            "padding-right": "1rem",
                            "padding-top": "1rem"
                        },
                        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                        "type": "flex"
                    },
                    "version": "3.0.0"
                }
            },
            "preset": null,
            "propertyValues": {
                "ariaRegionHeadingLevel": {
                    "type": "JSON_LITERAL",
                    "value": "1"
                },
                "ariaRegionName": {
                    "type": "TRANSLATION_LITERAL",
                    "value": {
                        "code": null,
                        "comment": "",
                        "message": ""
                    }
                },
                "ariaRole": {
                    "type": "JSON_LITERAL",
                    "value": ""
                },
                "hideEmptyStateUi": {
                    "type": "JSON_LITERAL",
                    "value": true
                },
                "includeAriaHeading": {
                    "type": "JSON_LITERAL",
                    "value": false
                },
                "slotWrapperBehavior": {
                    "type": "JSON_LITERAL",
                    "value": "fullheight"
                },
                "type": {
                    "type": "JSON_LITERAL",
                    "value": "section"
                }
            },
            "slot": null,
            "styles": null
        },
        {
            "definition": {
                "id": "d356d14b6e293a3020a244b63d278d8f",
                "type": "MACROPONENT"
            },
            "elementId": "footer_container",
            "elementLabel": "Footer Container",
            "eventMappings": [
                
            ],
            "extensionPoints": [
                
            ],
            "isHero": false,
            "isHidden": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "isNonDestructive": false,
            "items": [
                
            ],
            "overrides": {
                "composition": [
                    
                ],
                "layout": {
                    "default": {
                        "children": null,
                        "isInline": null,
                        "items": [
                            
                        ],
                        "root": null,
                        "rules": null,
                        "styles": {
                            "align-items": "center",
                            "flex-direction": "row",
                            "gap": "var(--now-static-space--lg)",
                            "justify-content": "center",
                            "padding": "var(--now-static-space--lg)"
                        },
                        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                        "type": "flex"
                    },
                    "version": "3.0.0"
                }
            },
            "propertyValues": {
                "ariaRegionHeadingLevel": {
                    "type": "JSON_LITERAL",
                    "value": "1"
                },
                "ariaRegionName": {
                    "type": "TRANSLATION_LITERAL",
                    "value": {
                        "code": null,
                        "comment": "",
                        "message": ""
                    }
                },
                "ariaRole": {
                    "type": "JSON_LITERAL",
                    "value": ""
                },
                "includeAriaHeading": {
                    "type": "JSON_LITERAL",
                    "value": false
                },
                "type": {
                    "type": "JSON_LITERAL",
                    "value": "section"
                }
            },
            "slot": "",
            "styles": null
        }
    ]
    ```
3. **Save** or **Update** the record.
   
    We could have auto-populated this page as part of the lab, but sometimes it helps knowing where to go look at what is being stored in the back-end of one of our builders. Feel free to switch back to the macroponent record periodically throughout the lab to see how the macroponent changes as you make changes in UI Builder.

    
    You can easily navigate to this record from UI Builder, also. To open the macroponent record for the page you're editing in UI Builder, click the _Menu_ icon under the UIB logo, navigate to **Developer > Open page definition**.

## Test the page in UI Builder

Now that the structure of the page is populated, let's open it in UI Builder.

1. In the _All_ menu, go to **Now Experience Framework > UI Builder** (or just filter to _ui b_) and UIB will open in a new tab.
    
2. On the UIB homepage, find the **Killer Notes** experience and click on it.
    
3. You'll see there is only one page in the experience called **Home default**. Click into that page by clicking on the name.
    
4. You should see a very barebones version of the page from the JSON you pasted in the previous section.
    

![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FZcbdDuBdN3l0mnNnG4ou%252FCleanShot%25202024-04-01%2520at%252016.58.26%25402x.png%3Falt%3Dmedia%26token%3Dd9eec983-dce5-4040-bf77-8263f61929b6&width=768&dpr=4&quality=100&sign=c90b83e7ff7e81bcd69b21b3ee2fc6f11d3fcc83397fe78072cfdf5146cfa252)

Home default page in UI Builder

In order to generate this template, I took the admin homepage, duplicated it into a new variant, and deleted most of the contents. I then changed the wording on a couple of components, and copied the JSON from the _Composition_ and _Layout Models_ fields in the macroponent.