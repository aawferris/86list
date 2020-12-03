import React, { Component } from "react";
import PostCard from "./PostCard";
import { getAllPosts } from "../services/posts";
import { getAllRestaurants} from "../services/restaurants"
import LandingCard from "./LandingCard";
// import "./LandingFeed.css";

class LandingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      restaurants: []
    };
  }

  async componentDidMount() {
    const posts = await getAllPosts();
    const restaurants = await getAllRestaurants()
    this.setState({ posts });
    this.setState({ restaurants }) 
  }

  render() {
    const CARDS = this.state.posts
      .map((post, index) =>
        index < 3 ? (
          <LandingCard
            id={post.id}
            title={post.title}
            content={post.content}
            image_url={post.image_url }
            key={index}
          />
        ) : null
      );

    return (
      <div className="post-cards">
        <div className="cards">{CARDS}</div>
      </div>
    );
  }
}

export default LandingFeed;
