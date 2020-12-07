import React from 'react';
import { Link } from 'react-router-dom'
import DisplayPost from '../components/DisplayPost'
import './Home.css'

function Home(props) {
  return (
    <div id="home-main-container">
      <div id="create-post-container">
        <Link to="/posts/new"><button id="create-post-button">CREATE POST</button></Link>
      </div>
      <div id="post-card-container">
        <DisplayPost currentUser={props.currentUser}/>
      </div>
    </div>
  );
}

export default Home;