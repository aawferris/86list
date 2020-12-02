import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./PostCard.css";

const LessonCard = (props) => {
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
                <NavLink id="post-card-edit-link" to={`/lessons/${props._id}/edit`}><button id="post-card-edit-button">Edit</button></NavLink>
                <NavLink id="post-card-delete-link" to={`/lessons/${props._id}/delete`}><button id="post-card-delete-button">Delete</button></NavLink>
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