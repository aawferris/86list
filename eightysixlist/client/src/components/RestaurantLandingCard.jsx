import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RestaurantLandingCard.css";

const RestaurantLandingCard = (props) => {
  const [post, setPost] = useState([])
  const history = useHistory();
  
  // Iteration 1 - this will take you to a new screen to edit / Iteration 2 will edit the post right here

  return (
    <div id="restaurant-landing-card-main-container">
        <div>
          <div id="restaurant-landing-card-container">
            <p className="post-attr" id="landing-restaurant">{props.name}</p>
            <p className="post-attr" id="landing-city-state">{props.city}, {props.state}</p>
          </div>
        </div>
      </div>
  );
};

export default RestaurantLandingCard