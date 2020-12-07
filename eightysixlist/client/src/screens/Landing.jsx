import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import LandingFeed from '../components/LandingFeed'
import RestaurantsLandingFeed from '../components/RestaurantsLandingFeed'
import { getAllPosts } from '../services/posts'
import { getAllRestaurants } from '../services/restaurants'

import './Landing.css'

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]); 
  const [restaurants, setRestaurants] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getAllPosts();
      const restaurantData = await getAllRestaurants();
      setPosts(postData);
      setRestaurants(restaurantData);
    }
    fetchData();
  }, [])

  return (
    <div id="main-container-div">
      <div id="recent-post-box">
        <h3 id="recent-title">Recent Posts</h3>
        <div id="posts-display-box">
          <LandingFeed />
        </div>
      </div>
      <div id="recent-community-box">
        <h3>Join a Community</h3>
        <div id="community-display-box">
          <RestaurantsLandingFeed/>
        </div>
      </div>
    </div>
    
  )
}
