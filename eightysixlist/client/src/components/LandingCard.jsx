import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingCard.css";

const LandingCard = (props) => {
  const [post, setPost] = useState([])
  const history = useHistory();
  
  // Iteration 1 - this will take you to a new screen to edit / Iteration 2 will edit the post right here

  return (
    <div id="landing-card-main-container">
        <div>
          <div id="landing-card-container">
          <div id="landing-card-details">
            <div id="landing-title-content-box">
              <p className="post-attr">{props.currentuser}</p> {/* Currently not working */}
              <p className="post-attr" id="landing-title">{props.title}</p>
              <p className="post-attr" id="landing-content">{props.content}</p>
            </div>
            <div id="landing-image-container">
            {props.image_url ?
              <img className="post-attr" id="landing-post-image" src={props.image_url} alt="user-generated image" />
              :
            null
            }
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingCard;