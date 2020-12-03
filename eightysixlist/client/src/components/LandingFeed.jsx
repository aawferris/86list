import React, { Component } from "react";
import { getAllPosts } from "../services/posts";
import LandingCard from "./LandingCard";

class LandingFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await getAllPosts();
    this.setState({ posts });
  }

  render() {
    const POSTSCARDS = this.state.posts
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
        <div className="cards">{POSTSCARDS}</div>
      </div>
    );
  }
}

export default LandingFeed;
