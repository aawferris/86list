# 86List

## Overview

86List is a community for service-industry professionals to talk about the clients that they serve. This idea surfaced during a conversation with my neighbor, a career, high-end bartender. He mentioned that while guests can rate restaurants, restaurants can't rate guests. 86List is a place where servers and bartenders at a specific restaurant/eatery can talk about the clients that they serve and rate them. The title is a play on words, as '86' is the way to say 'get rid of' or 'without'. So this is geared towards guests they'd rather 86.

## MVP

- Leverage Ruby on Rails for full CRUD
- Link the backend to Postresql
- Link Restaurants to Users and Posts to both Users and Restaurants
- Leverage React.js to create a simple, clean and elegant UI

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

https://www.figma.com/file/hhDs0Zzcj7HipqUA3qnL0i/86list?node-id=0%3A1

- Desktop, Tablet, and Mobile

#### Component Tree

https://drive.google.com/drive/folders/1S--7pPaJlY2KVtCWv35L0tuRgBYdXdwN

#### Component Hierarchy

```

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ CommentCard.jsx
      |__ DisplayComments.jsx
      |__ DisplayPost.jsx
      |__ LandingCard.jas
      |__ LandingFeed.jsx
      |__ PostCard.jsx
      |__ RestaurantLandingCard.jsx
      |__ RestaurantLandingFeed.jsx
|__ layouts/
      |__ Layout
      |__ Header
      |__ Footer
|__ screens/
      |__ Landing.jsx
      |__ Register.jsx
      |__ Login.jsx
      |__ CreatePost.jsx
      |__ EditPost.jsx
      |__ Home.jsx
|__ services/
      |__ apiConfig.js
      |__ restaurants.js
      |__ locations.js
      |__ users.js
      |__ auth.js
      |__ posts.js
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

#### Time Estimates

| Task                                            | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Ruby on Rails Boiler Plate                |    L     |      3hrs      |     3hrs      |    3hrs     |
| Create BE for restaurants, locations, and users |    H     |      6hrs      |     6hrs      |    6hrs     |
| Create BE for posts and comments                |    H     |      6hrs      |     6hrs      |    6hrs     |
| Create CRUD Actions                             |    H     |      6hrs      |     6hrs      |    6hrs     |
| Create sign up form                             |    H     |      3hrs      |     3hrs      |    3hrs     |
| Create login screen                             |    H     |      3hrs      |     3hrs      |    3hrs     |
| Create thread screen                            |    H     |      3hrs      |     3hrs      |    3hrs     |
| Create post view/manipulations screens          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Styling for aforementioned screens              |    H     |      3hrs      |     3hrs      |    3hrs     |
| Advanced styling                                |    H     |      3hrs      |     3hrs      |    3hrs     |
| Debugging and Testing                           |    M     |      3hrs      |     3hrs      |    3hrs     |
| Local Deployment                                |    M     |      3hrs      |     3hrs      |    3hrs     |
| Netlify Deployment                              |    M     |      3hrs      |     3hrs      |    3hrs     |
| TOTAL                                           |          |     45hrs      |     45hrs     |    45hrs    |

<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1S6sTTIWZM4-rZq8ah-UJLti7qx6Jh6cl/view?usp=sharing

<br>

---

## PostMVP

- Allow users to login in order to see only their Restaurant
- Create the ability to add comments to posts
- Require authorization for users to access their specific locations
- Require authorization for users to post and comment
- Create an admin login to see and manipulate the data for restraunts and locations (for apporval) and users

## Code Showcase

- I've been quite pleased with my comfort with ternaries this time around. I leveraged a few for small 1%'s that make the UX even better.

```
{props.image_url ?
          <img className="post-attr" id="post-image" src={props.image_url} alt="user-generated" />
          :
          null
        }
```

```
<div id="post-card-button-container">
          <NavLink id="post-card-edit-link" to={`/posts/${props.post_id}/edit`}><button id="post-card-edit-button">Edit</button></NavLink>
          <button id="post-card-delete-button" onClick={handleShow}>Delete</button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>¡Alert!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this post? This action cannot be undone.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" autoFocus onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={() => handleDelete(props.post_id)}>
                Yes, Delete
              </Button>
            </Modal.Footer>
          </Modal>
```

## Code Issues & Resolutions

- It was tough to figure out the associations between tables for making posts.
- I am still working my way through creating new users.
