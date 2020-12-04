import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'
import { destroyPost, putPost } from '../services/posts'

import Comments from './Comments'
import "./PostCard.css";

const LessonCard = (props) => {
  console.log(props);
  const [post, setPost] = useState([])
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [refresh, setRefresh] = useState(false)
  
  // Iteration 1 - this will take you to a new screen to edit / Iteration 2 will edit the post right here
  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPost(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/posts');
  }

  const [showComments, setShowComments] = useState(false)

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPost(prevState => prevState.filter(post => post.id !== id))
    // setRefresh(refresh)
  }

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  const timeOptions = {
    timeZone:"Africa/Accra",
    hour12 : true,
    hour:  "2-digit",
    minute: "2-digit",
    second: "2-digit"
 };

  return (
      <div id="post-card-main-container">
        <div id="post-card-container">
          <div id="post-card-details">
            <div id="title-content-box">
              <p className="post-attr">{props.currentUser.username}</p> {/* CURRENTLY SHOWS THE CURRENT USER -- NOT THE USER WHO MADE IT */}
            <p className="post-attr">{props.created_at}</p>
              <p className="post-attr" id="home-title">{props.title}</p>
              <p className="post-attr" id="home-content">{props.content}</p>
            </div>
            <div id="image-container">
              <img className="post-attr" id="post-image" src={props.image_url} alt="user-generated image" />
            </div>
            <div id="post-card-bottom">
              <button id="comment-ternary"
                onClick={() => setShowComments(!showComments)}>Hide | Show Comments</button>
              {showComments ? (
                <div id="show-comments-box">
                  <Comments comment={post.comment} />
                </div>
              ) : (
                  null
                )}
              {/* CURRENTLY, THIS JUST DOESN'T SHOW ANYTHING */}
            {/* {props.currentUser.id !== post.user_id ?
              <div></div>
              : */}

              <div id="post-card-button-container">
                <NavLink id="post-card-edit-link" to={`/posts/${props.id}/edit`}><button id="post-card-edit-button">Edit</button></NavLink>
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
                    <Button variant="danger" onClick={() => handleDelete(post.id)}>
                      Yes, Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
                
              </div> {/* THE } for the TERNARY GOES HERE post-card-button-container */} 
            </div> {/* post-card-bottom */}
          </div> {/* post-card-details */}
        </div> {/* post-card-container */}
    </div> // post-card-main-container 
  )
};

export default LessonCard;