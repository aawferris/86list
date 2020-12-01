import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Posts from '../screens/Posts';
import RestaurantCreate from '../screens/RestaurantCreate';
import RestaurantDetail from '../screens/RestaurantDetail';
import RestaurantEdit from '../screens/RestaurantEdit';
import Restaurants from '../screens/Restaurants';
import { getAllPosts } from '../services/posts'
import { destroyRestaurant, getAllRestaurants, postRestaurant, putRestaurant } from '../services/restaurants'

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
      const restaurantsData = await getAllRestaurants();
      setRestaurants(restaurantData);
    }
    fetchPosts();
    fetchRestaurants();
  }, [])

  const handleCreate = async (restaurantData) => {
    const newRestaurant = await postRestaurant(restaurantData);
    setRestaurant(prevState => [...prevState, newRestaurant]);
    history.push('/restaurants');
  }

  const handleUpdate = async (id, restaurantData) => {
    const updatedRestaurant = await putRestaurant(id, restaurantData);
    setRestaurant(prevState => prevState.map(restaurant => {
      return restaurant.id === Number(id) ? updatedRestaurant : restaurant
    }))
    history.push('/restaurants');
  }

  const handleDelete = async (id) => {
    await destroyrestaurant(id);
    setRestaurants(prevState => prevState.filter(restaurant => restaurant.id !== id))
  }

  return (
    <Switch>
      <Route path='/flavors'>
        <Flavors flavors={flavors} />
      </Route>
      <Route path='/restaurants/:id/edit'>
        <RestaurantEdit restaurant={restaurants} handleUpdate={handleUpdate} />
      </Route>
      <Route path='/restaurant/new'>
        <RestaurantCreate handleCreate={handleCreate} />
      </Route>
      {/* Here, we're adding a route for our single food screen */}
      {/* we're passing it "flavors" to use in our drop down form */}
      <Route path='/restaurant/:id'>
        <RestaurantDetail flavors={flavors} />
      </Route>
      <Route path='/restaurant'>
        <Restaurants
          restaurant={restaurants}
          handleDelete={handleDelete}
          currentUser={props.currentUser}
        />
      </Route>
    </Switch>
  )
}
