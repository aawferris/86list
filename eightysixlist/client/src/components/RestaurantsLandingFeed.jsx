import React, { Component } from "react";
import { getAllRestaurants} from "../services/restaurants"
import RestaurantLandingCard from './RestaurantLandingCard'

class RestaurantsLandingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  async componentDidMount() {
    const restaurants = await getAllRestaurants()
    this.setState({ restaurants }) 
  }

  render() {
    const RESTAURANTCARDS = this.state.restaurants
      .reverse()
      .map((restaurant, index) =>
        index < 5 ? (
          <RestaurantLandingCard
            id={restaurant.id}
            name={restaurant.name}
            city={restaurant.city}
            state={restaurant.state }
            key={index}
          />
        ) : null
    );
    
    return (
      <div className="post-cards">
        <div className="cards">{RESTAURANTCARDS}</div>
      </div>
    );
  }
}

export default RestaurantsLandingFeed;
