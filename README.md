# 86List

## Overview

86List is a community for service-industry professionals to talk about the clients that they serve. This idea surfaced during a conversation with my neighbor, a career, high-end bartender. He mentioned that while guests can rate restaurants, restaurants can't rate guests. 86List is a place where servers and bartenders at a specific restaurant/eatery can talk about the clients that they serve and rate them. The title is a play on words, as '86' is the way to say 'get rid of' or 'without'. So this is geared towards guests they'd rather 86.

## MVP

- Leverage Ruby on Rails for full CRUD
- Link the backend to Postresql
- Link Restaurants to Locations, Locations to Employees, Employees to Posts, and Posts to Comments.
- Leverage React.js to create a simple, clean and elegant UI
- Allow users to login in order to see their Restaurant > Location

### Libraries and Dependencies

|     Library     | Description                                              |
| :-------------: | :------------------------------------------------------- |
|      React      | To render the front end and make it a dynamic SPA        |
|  React Router   | To use for navigation, link and history                  |
| React Bootstrap | To use for additional styling features beyond simple CSS |
|  Ruby on Rails  | To connect the fron and back ends                        |
|   Postgresql    | The DB to store our data                                 |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components.

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like.

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Header.css
      |__ Footer.jsx
      |__ Footer.css
      |__ Navigation.jsx
      |__ Navigation.css
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Landing.jsx
      |__ Landing.css
      |__ Register.jsx
      |__ Register.css
      |__ Login.jsx
      |__ Login.css
      |__ Threads.jsx
      |__ Threads.css
      |__ Post.jsx
      |__ Post.css
|__ services/
      |__ apiConfig.js
      |__ restaurants.js
      |__ locations.js
      |__ users.js
      |__ auth.js **(Post)
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ reportWebVitals.js
|__ .gitignore
|__ package-lock.json
|__ package.json
|__ README.md

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                             | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Ruby on Rails Boiler Plate |    L     |     3 hrs      |     2 hrs     |    3 hrs    |

| Create BE for restaurants, locations, and users | H | 6hrs | ---- | ---- |
| Create BE for posts and comments | H | 6hrs | ---- | ---- |
| Create CRUD Actions | H | 6hrs | ---- | ---- |
| Create sign up form | H | 3hrs | ---- | ---- |
| Create login screen | H | 3hrs | ---- | ---- |
| Create thread screen | H | 3hrs | ---- | ---- |
| Create post view/manipulations screens | H | 3hrs | ---- | ---- |
| Styling for aforementioned screens | H | 3hrs | ---- | ---- |
| Advanced styling | H | 3hrs | ---- | ---- |
| Debugging and Testing | M | 3hrs | ---- | ---- |
| Local Deployment | M | 3hrs | ---- | ---- |
| Netlify Deployment | M | 3hrs | ---- | ---- |
| TOTAL | | 45hrs | 3hrs | TBD |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

---

## PostMVP

- Require authorization for users to access their specific locations
- Require authorization for users to post and comment
- Create an admin login to see and manipulate the data for restraunts and locations (for apporval) and users

## Code Showcase

## Code Issues & Resolutions
