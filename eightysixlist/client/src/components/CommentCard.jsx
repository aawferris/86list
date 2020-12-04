import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./CommentCard.css";

const CommentCard = (props) => {
  console.log(props);
  const history = useHistory();

  const [refresh, setRefresh] = useState(false)

  return (
      <div id="comment-card-main-container">
        <div id="comment-card-container">
            <p>{props.user}</p>
            <p id="home-content">{props.content}</p>
        </div> {/* comment-card-container */}
    </div> // comment-card-main-container 
  )
};

export default CommentCard;