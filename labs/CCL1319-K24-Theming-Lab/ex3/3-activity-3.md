---
id: activity-3
title: "Exercise 3 - Activity 3"
hide_table_of_contents: true
draft: false
sidebar_label: "Activity 3"

---
## Unified Navigation Colors

We will use this as our example on how to make the changes you going to be making in the Challenges section. This is the general workflow you will follow to make almost all changes you want to make when it comes to custom theming. This is also typically the first thing that people change when they create a theme from Theme Builder and start customizing it.

Note: The theming team is looking in to how to make editing the Unified Navigator an easier experience without leaving Theme Builder, so these specific steps might be moot in the future. But this still serves as a great example on how you will go about identifying what theming hooks to edit for any manual changes you want to make to your themes moving forward.

## Browser tools

The most important tool we will be using moving forward is the Browser Developer Tools. These vary in use in every browser, but they all share a few features, one of which is the Inspect tool. We will use this tool to inspect the HTML of the ServiceNow pages and identify what SCSS variables we will want to be editing in our themes to get the results we want.

If you are unfamiliar with them, here is how you can access the browser tools in multiple different browsers. If these instructions aren't enough, i encourage you to google your specific browser and look up more thorough instructions for your specific use. The rest of the instructions in this lab will assume you are using Google Chrome as your browser.

### Google Chrome

- Command + Option + i (Mac)
    
- Ctrl + Shift + i (Windows/Linux).
    
- Open the Chrome settings menu in the top-right corner of your browser window and select `More Tools` > `Developer Tools`.
    

### Mozilla Firefox

- Command + Option + i (Mac)
    
- Ctrl + Shift + i (Windows/Linux).
    
- Open the Chrome settings menu in the top-right
    

### Internet Explorer

- Pressing `F12`
    
- Command + Option + i (Mac)
    
- Ctrl + Shift + i (Windows/Linux).
    
- Open the Chrome settings menu in the top-right
    

### Microsoft Edge

- Just like Internet Explorer, to open developer tools in Microsoft Edge simply press `F12`.

### Safari

- Develop menu in Safari’s Advanced preferences
    
- Right-click on any page element and select Inspect Element
    
- Command + Option + i
    

## Identifying what we want to change

We want to change the background color of the Unified Navigation from white to our Infinite blue color. Here are the steps required to identify the correct theming hook we want to modify.

1. Starting in the platform view of ServiceNow, pin the **All menu.**
    
2. Open browser tools.
    
3. Open the "Elements" tab, or the equivalent that shows you the HTML structure of your browser page.
    
4. Click on the Inspect arrow. This is typically in the top left of the browser tools.
    
:::info 
The way the Inspect arrow works is complex but straightforward. As you hover over different parts of the browser, it will highlight the HTML element that you are hovering over in the HTML body in the browser tools. It will also visually show you the constraints of the element on the page you are inspecting and give you a brief summary of the properties of the element you are inspecting. Once you click on an element, you will be taken to the specific location it's at in the HTML and be shown the properties below it. We will use this to learn what we need to edit to get the results we desire.

The rest of the instructions describe the general way you'll be looking for the theming hooks, but just know that it's more of an art than a science. Everyone finds the HTML elements in different ways, so if you are able to find them faster as you get more experience with it, don't worry too much about following the same formula each time.

The way I found and wrote the instructions for you below was by clicking around and through trial and error. You won't always find the theming hook immediately, and that's ok. Just keep searching, and clicking on the surrounding HTML elements until you find the right one. For the purposes of demonstration, I will be giving you direct instructions on how to find this specific theming hook.
:::
5. Hover over the pinned All menu until you find and are able to highlight the majority of the menu itself.
    
6. In this case, the HTML element we highlighted has the class `sn-polaris-nav-body`.
    
7. In the Styles tab on the bottom half of the Browser tools, find the "Filter" search bar, type "background".
    
8. Click on the parent HTML element with the class `sn-polaris-nav`.
    
9. In the Styles tab again, you should find the `.sn-polaris-nav` class has a property `background-color`.
    
10. Note that the first theming hook referenced is `--now-unified-nav_menu--background-color`.
    
11. To verify that this is the correct hook, let's change the background-color to be blue by highlighting the text, erasing it, and typing in "blue".
    
12. Verify that the pinned menu now looks horrendous, and we know we have the hook we are looking for! Using outlandish colors is a great way to find what you are looking for when testing hooks.
    

## Updating our theming record

We will now update our theming record to reflect the change we want to make.

1. Type "Theme" in to the Filter Navigator in the top left corner.
    
2. Under "Now Experience Framework" find and click on **Themes.**
    
3. This will bring up the UX Themes table. Search for "Custom Wasabi Donut" under Name and click on the record to open it.
    
4. Under the UX Theme Styles, select and open "Wasabi Donut - Colors".
    
5. Click in to the Style box.
    
6. Click Ctrl + F or Command + F to open the search bar.
    
7. Paste the theming hook we found, `--now-unified-nav_menu--background-color`.
    
8. You can see that it's currently set to `255,255,255`. Remove that.
    
9. Set the theming hook to be: `"3, 45, 66"`.
    
10. Click **Update**.
    
11. Refresh your page, and you should see your changes take effect!