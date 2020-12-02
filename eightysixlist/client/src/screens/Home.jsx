import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <div id="home-main-container">
      <h3>Hogar, Dulce Hogar!</h3>
      {/* I will need to add the post cards here - reference P3 */}
      <div id="create-post-container">
        <Link to="/posts/new"><button id="create-post-button">CREATE POST</button></Link>
      </div>
      <div id="post-card-container">
      </div>
    </div>
  );
}

export default Home;