import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import Layout from "./layouts/Layout/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import CreatePost from "./screens/CreatePost";
import EditPost from "./screens/EditPost";
// import {
//   getAllPosts,
//   postPost,
//   putPost,
//   destroyPost,
//   getOnePosts,
// } from "./services/posts";
// import {
//   destroyRestaurant,
//   getAllRestaurants,
//   postRestaurant,
//   putRestaurant,
//   getOneRestaurant,
// } from "./services/restaurants";
// import {
//   getAllUsers,
//   postUser,
//   putUser,
//   destroyUser,
//   getOneUser,
// } from "./services/users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push("/");
      }
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  // CRUD HANDLING //

  // const [users, setUsers] = useState([]);
  // const [restaurants, setRestaurants] = useState([]);
  // const [posts, setPosts] = useState([]);

  // GET ALL
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const postData = await getAllPosts();
  //     setPosts(postData);
  //   };
  //   const fetchUsers = async () => {
  //     const userData = await getAllUsers();
  //     setUsers(userData);
  //   };
  //   const fetchRestaurants = async () => {
  //     const restaurantData = await getAllRestaurants();
  //     setRestaurants(restaurantData);
  //   };
  // });

  // GET ONE
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const postData = await getOnePosts();
  //     setPosts(postData);
  //   };
  //   const fetchUser = async () => {
  //     const userData = await getOneUser();
  //     setUsers(userData);
  //   };
  //   const fetchRestaurant = async () => {
  //     const restaurantData = await getOneRestaurant();
  //     setRestaurants(restaurantData);
  //   };
  // });

  // CREATE
  // const handlePostCreate = async (postData) => {
  //   const newPost = await postPost(postData);
  //   setPosts((prevState) => [...prevState, newPost]);
  //   history.push("/posts");
  // };

  // const handleRestaurantCreate = async (restaurantData) => {
  //   const newRestaurant = await postRestaurant(restaurantData);
  //   setRestaurants((prevState) => [...prevState, newRestaurant]);
  //   history.push("/restaurants");
  // };

  // const handleUserCreate = async (userData) => {
  //   const newUser = await postUser(userData);
  //   setUsers((prevState) => [...prevState, newUser]);
  //   history.push("/users");
  // };

  // UPDATE
  // const handlePostUpdate = async (id, postData) => {
  //   const updatedPost = await putPost(id, postData);
  //   setPosts((prevState) =>
  //     prevState.map((post) => {
  //       return post.id === Number(id) ? updatedPost : post;
  //     })
  //   );
  //   history.push("/posts");
  // };

  // const handleRestaurantUpdate = async (id, restaurantData) => {
  //   const updatedRestaurant = await putRestaurant(id, restaurantData);
  //   setRestaurants((prevState) =>
  //     prevState.map((restaurant) => {
  //       return restaurant.id === Number(id) ? updatedRestaurant : restaurant;
  //     })
  //   );
  //   history.push("/foods");
  // };

  // const handleUpdate = async (id, userData) => {
  //   const updatedUser = await putUser(id, userData);
  //   setUsers((prevState) =>
  //     prevState.map((user) => {
  //       return user.id === Number(id) ? updatedUser : user;
  //     })
  //   );
  //   history.push("/users");
  // };

  // DESTROY
  // const handlePostDelete = async (id) => {
  //   await destroyPost(id);
  //   setPosts((prevState) => prevState.filter((post) => post.id !== id));
  // };

  // const handleRestaurantDelete = async (id) => {
  //   await destroyRestaurant(id);
  //   setRestaurants((prevState) =>
  //     prevState.filter((restaurant) => restaurant.id !== id)
  //   );
  // };

  // const handleUserDelete = async (id) => {
  //   await destroyUser(id);
  //   setUsers((prevState) => prevState.filter((user) => user.id !== id));
  // };

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route exact path="/posts/new" component={CreatePost} />
        <Route exact path="/posts/:id/edit" component={EditPost} />

        <Route path="/login">
          {/* login */}
          <Login handleLogin={handleLogin} />
        </Route>

        <Route path="/register">
          {/* register */}
          <Register handleRegister={handleRegister} />
        </Route>

        <Route path="/">
          {/* container */}
          {currentUser ? (
            <>
              <Home currentUser={currentUser} />
            </>
          ) : (
            <>
              <Landing />
            </>
          )}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
