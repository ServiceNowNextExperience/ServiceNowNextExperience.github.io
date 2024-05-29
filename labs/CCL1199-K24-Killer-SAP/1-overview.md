---
id: overview
title: "Introduction"
pagination_label: "Introduction"
sidebar_label: "Introduction"
hide_table_of_contents: true
draft: false
---

Welcome to the **Building a Killer Single Page App with UI Builder** Lab. 

## Scenario

In this lab, you'll build out a single-page app interface that allows you to view, create, edit, sort, and search notes.

![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FERt1GBTnXzovDsDQpRVC%252FCleanShot%25202024-05-01%2520at%252017.12.32%25402x.png%3Falt%3Dmedia%26token%3Dce6191ea-5f1a-4f18-a584-6ec474fd9637&width=768&dpr=4&quality=100&sign=9aa30ee3a17aa29d8420c78da7150d81f79b0ba2bc6c27323682fa5e9dbcd1ad)

The overall goal of the lab is to build out an interface for a single-page note-taking app that looks and feels like the other base app shell experiences that ServiceNow ships by default. What each exercise will cover is:
- Exercise 1 - You will build out the layout for the experience home page. 
- Exercise 2 - You will add a data resource to query the database for a list of notes and add a repeater to the page to show those notes in a card view.
- Exercise 3 - You will add the ability to search and sort your notes.
- Exercise 4 - You will add the ability to edit existing notes in a modeless dialog window and create new notes

## Prerequisites
- **ServiceNow Version:** Washington D.C.
- **UI Builder Version:** 25.1.26
  - ** UI Builder is now a store application. If you see things different from how they are presented in the lab, check the application manager to see if you've got a pending update. 

## Download Lab Materials

- **Presentation:** [Coming soon]
- **Lab Guide PDF:** [Coming soon]

## PDI Instructions
To do this lab in a Washington DC PDI, follow these steps:

1. Download the following update set: [KillerNotesV1.1.xml](./downloads/KillerNotesV1.1.xml)
   > Right-click, "Save Link As"
2. Load the update set into your instance.
3. Make sure the sn_ui_builder store app is updated to 25.1.26
4. Add the x_snc_killer_notes.note_user role to Abel Tuter


# Exercise 0: Explore the App

In this exercise, you'll familiarize yourself with the application and experience created.

## Application

The application primarily consists of two tables with a few added fields:

1. Note [x_snc_killer_notes_note]
    
    1. Title | String
        
    2. Text | HTML
        
    3. User | Reference | User
        
    4. Category | Reference | Category
        
    
2. Category [x_snc_killer_notes_category]
    
    1. Name | String
        
    2. Icon | Icon
        
    3. Color | Color
        
    

Each table has some demo data available.

##  Experience

In addition to the two tables, there is a simple experience created with a blank homepage you'll populate throughout the rest of this lab.

![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FKVaHXkEmwRdXpiEaRHo5%252FCleanShot%25202024-04-01%2520at%252014.10.33%25402x.png%3Falt%3Dmedia%26token%3D4ad32f92-4313-4fb5-83fc-f844109353ed&width=768&dpr=4&quality=100&sign=4bf63985b46567745dde3903540132889f5ff49fb1b72dc258b0e23c0a5d00d6)

Experience creation screen

![](https://servicenow-events-or-lab-guidebo.gitbook.io/~gitbook/image?url=https%3A%2F%2F196815207-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFsTbaHkFN7UyELbzymFM%252Fuploads%252FHXD5YXD4P3H581n3UrZv%252FCleanShot%25202024-04-01%2520at%252014.12.53%25402x.png%3Falt%3Dmedia%26token%3D1795bd5f-5ee1-4f96-8e21-a36fb79b9b7f&width=768&dpr=4&quality=100&sign=4182783b6af72b4bddbc001bc17cdfb800435e360c9f0356ea95fbc2e9934f07)

Experience home page
