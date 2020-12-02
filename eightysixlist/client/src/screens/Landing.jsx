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

  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/posts');
  }

  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/posts');
  }

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }

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
