import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'
import { destroyPost, putPost } from '../services/posts'
import { postComment } from '../services/comments'

import DisplayComments from './DisplayComments'
import "./PostCard.css";

const PostCard = (props) => {
  const [post, setPost] = useState([])
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [refresh, setRefresh] = useState(false)

  const [comment, setComment] = useState({
    content: '',
    post_id: props.post_id
  });

  const [showComments, setShowComments] = useState(false)

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPost(prevState => prevState.filter(post => post.id !== id))
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postComment(comment)
    history.push('/posts')
  }

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
              </div> {/* THE } for the TERNARY GOES HERE post-card-button-container */} 
                <button id="comment-ternary"
                    onClick={() => setShowComments(!showComments)}>Hide | Show Comments</button>
                  {showComments ? (
                    <div id="show-comments-box">
                      <form id="new-comment-form" onSubmit={handleSubmit}>
                  <input
                    className="create-post-input"
                    id="new-comment"
                    type='text'
                    placeholder='Add a comment'
                    name='content'
                    value={comment.content}
                    onChange={handleChange}
                    />
                      </form>
                <DisplayComments comments={props.comments} currentUser={props.currentUser} user={props.user}/>
                    </div>
                  ) : (
                      null
                    )}
            </div> {/* post-card-bottom */}
          </div> {/* post-card-details */}
        </div> {/* post-card-container */}
    </div> // post-card-main-container 
  )
};

export default PostCard;