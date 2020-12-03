import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAllPosts, postPost, putPost, destroyPost } from '../services/posts'
import { destroyRestaurant, getAllRestaurants, postRestaurant, putRestaurant } from '../services/restaurants'

import Posts from '../components/Posts'
import './Landing.css'

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]); //formerly FLAVORS
  // const [restaurants, setRestaurants] = useState([]); //formerly FOODS
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchPosts();
  }, [])

  return (
    <div id="main-container-div">
      <div id="recent-post-box">
        <h3>Recent Posts</h3>
        <div id="posts-display-box">
          {props.posts}
        </div>
      </div>
      <div id="recent-community-box">
        <h3>Join a Community</h3>
        <div id="community-display-box">
          {props.resturant}
        </div>
      </div>
    </div>
    
  )
}
