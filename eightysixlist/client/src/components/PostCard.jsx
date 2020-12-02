import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'
import {destroyPost, putPost } from '../services/posts'
import "./PostCard.css";

const LessonCard = (props) => {
  const [post, setPost] = useState([])
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Iteration 1 - this will take you to a new screen to edit / Iteration 2 will edit the post right here
  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPost(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/posts');
  }

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPost(prevState => prevState.filter(post => post.id !== id))
  }

  return (
    <div id="post-card-main-container">
      {/* <Link className="card" to={`/posts/${props._id}`}> */}
        <div>
          <div id="post-card-container">
            <div id="post-card-details">
              <p className="post-attr">Title: {props.title}</p>
              <p className="post-attr">Content: {props.content}</p>
            <p className="post-attr">{props.image_url}</p>
            <div id="post-card-bottom">
              <p id="comment-ternary">Hide | Show Comments</p>
              <div id="post-card-button-container">
                <NavLink id="post-card-edit-link" to={`/posts/${props._id}/edit`}><button id="post-card-edit-button">Edit</button></NavLink>
                <Button id="bootstrap-delete-button" id="post-card-delete-button" onClick={handleShow}>Delete</Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title variant="danger">¡Alert!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to delete this post? You cannot undo this action.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(post._id)} >I'm sure</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            </div>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default LessonCard;