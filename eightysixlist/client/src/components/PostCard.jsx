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
              <p className="post-attr">Image Link: {props.image_url}</p>
            </div>
          </div>
        </div>
      {/* </Link> */}
      <div className="button-container">
        <NavLink className="edit-link" to={`/lessons/${props._id}/edit`}><button id="card-edit-button">Edit</button></NavLink>
        <NavLink className="delete-link" to={`/lessons/${props._id}/delete`}><button id="card-delete-button">Delete</button></NavLink>
      </div>
    </div>
  );
};

export default LessonCard;