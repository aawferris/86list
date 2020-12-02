import React, { Component } from "react";
import PostCard from "./PostCard";
import { getAllPosts } from "../services/posts";
import "./DisplayPost.css";

class DisplayPost extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await getAllPosts();
    this.setState({ posts });
  }

  render() {
    const CARDS = this.state.posts
      .map((post, index) =>
        index < 8 ? (
          <PostCard
            id={post.id}
            title={post.title}
            content={post.content}
            image={post.image_url }
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

export default DisplayPost;
