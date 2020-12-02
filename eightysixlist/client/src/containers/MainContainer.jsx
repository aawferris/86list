import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Posts from '../components/Posts';
import Restaurants from '../components/Restaurants';
import { getAllPosts } from '../services/posts'
import { destroyRestaurant, getAllRestaurants, postRestaurant, putRestaurant } from '../services/restaurants'

import './MainContainer.css'

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]); //formerly FLAVORS
  const [restaurants, setRestaurants] = useState([]); //formerly FOODS
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    const fetchRestaurants = async () => {
      const restaurantData = await getAllRestaurants();
      setRestaurants(restaurantData);
    }
    fetchPosts();
    fetchRestaurants();
  }, [])

  const handleCreate = async (restaurantData) => {
    const newRestaurant = await postRestaurant(restaurantData);
    setRestaurants(prevState => [...prevState, newRestaurant]);
    history.push('/restaurants');
  }

  const handleUpdate = async (id, restaurantData) => {
    const updatedRestaurant = await putRestaurant(id, restaurantData);
    setRestaurants(prevState => prevState.map(restaurant => {
      return restaurant.id === Number(id) ? updatedRestaurant : restaurant
    }))
    history.push('/restaurants');
  }

  const handleDelete = async (id) => {
    await destroyRestaurant(id);
    setRestaurants(prevState => prevState.filter(restaurant => restaurant.id !== id))
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
          {props.community}
        </div>
      </div>
    </div>
    
  )
}
