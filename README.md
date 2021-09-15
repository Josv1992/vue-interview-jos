# vue-interview
This is a starter kit for interviews.

## Setup
```
npm i -g @vue/cli
npm install
```

## Develop
```
npm run serve
```

## View Website
```
npm run build
npm i -g serve
serve -s dist
```

# Requirements
## Internship
- Only screen resolution what will be tested is 360x640. (mobile)

**Must**
- The text within the menubar should say `To Do List` instead of `menu`.
- The text `menu` should be vertically centered within the menu bar.
- The menu bar should stay at the top, even if the user scrolls down.
- The menubar should have a drop shadow.
- The input field should have a blue drop shadow if it's focussed.
- The `Add` button should be green.


**Should**
- If you click `Add`, there will be a item appended to the list with the content of the input.
- Disable the `Add` button if the input is empty.
- If you press `Enter` while the input is focussed, the same behaviour will be executed as the `Add` button.
- There should be a `Remove` button in every `Item` (on the right).
- The `Remove` button should be red.
- If you click `Remove`, the corresponding item should disappear from the list.
- The footer should have a minimal height of `10rem`.
- The footer should contain a copyright symbol. 

**Could**
- Works in IE11 with only possible visual bugs.
- Move the `div` with the class `item-creator` to a seperate component called `ItemCreator`. The functionality should still work, while the `Item` components are still a direct child of the `App` component.
- Use `SASS` or `LESS` for the styles in stead of `CSS`.
- The input field should as wide as the remaining width next to the button.
- Every second `Item` element should have a darker background color `#e0e0e0`.

**Would**
- Works in IE11 without bugs.
- If you refresh the page, the content is still the same. **Including the items you added!**
- The footer should stick to the bottom if the content is smaller then the viewport.

**Extra mile**
- If you `Add` a new to do list `Item`. The content must be encrypted using the `sha-256` algorithm.
- If you click a to do list `Item`. Show a popup with the decrypted content.

## Junior Front End Developer
Screen resolutions what will be tested are:
- **Mobile:** 320x500, 360x640, 412x700
- **Tablet:** 1024x768, 768x1024
- **Desktop:** 1920x1080

Deliveries:
- **Vue project** (Internship requirements)
- **Nuxt project** (Junior Front End Developer requirements)

**Must**
- Complete everything of the Internship requirements above (using [Bootstrap v4.1](https://getbootstrap.com/)).
- Create a [Nuxt.js](https://nuxtjs.org/guide) project, here you will be working in from now.
- Move everything from the `Vue` to the `Nuxt` project.
- The menubar should have a linear gradient, choose whatever colors and direction you like.

**Should**
- Replace all bootstrap components with [Bootstrap-vue](bootstrap-vue.js.org) components
- If you click on a `To Do List Item` you should go to a different page. Containing the decrypted content of that Item.

**Could**
- Move the `To Do List` data to a [Vuex store](https://vuex.vuejs.org/guide/).


## Technical SEO Front End Developer
Screen resolutions what will be tested are:
- **Mobile:** 320x500, 360x640, 412x700
- **Tablet:** 1024x768, 768x1024
- **Desktop:** 1920x1080

Deliveries:
- **Vue project** (Internship requirements)

**Must**
- Complete everything of the Internship requirements above (using [Bootstrap v4.1](https://getbootstrap.com/)).
- Have a contact page with placeholder text (content is not important)
- Have a privacy/legal page with placholder text (content is not important)
- Have an about page with placeholder text and a link to a personal page (content is not important)
- Have a personal page as subpage of the about page with your name
- Add an image to the contact page

**Should**
- Have an XML sitemap
- Make sure that the personal page is excluded from google
- Make sure the image on the contact page does not trigger possible CLS issues

**Could**
- Add a possible implementation of structured data, can have placeholder texts or non-existing data.

**Extra mile**
- Make a proposition about how to automatically test the google page speed of the project.

Answer:
Using the Google PageSpeed Insights API, web page performance could possibly be measured automatically when the page is being built:
https://developers.google.com/speed/docs/insights/v5/get-started

Using Jenkins, when the page is being built, the following command can be run:

curl https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=yourURL&key=yourAPIKey

I would suggest saving this JSON object in an S3 bucket, and use it to compare it with previously saved JSON output. 
With that you could build a visualisation (with line graphs for example), to visualize the increase or decrease of page performance compared to previous builds. You can have a separate report for each individual page.

This report can be made with javascript, using Google Data Studio API, resulting in a ‘report viewer page’, or directly with Google Data Studio.

In short, this way the reports will be automatically made, and those reports can be visualized to see improvements in performance.
