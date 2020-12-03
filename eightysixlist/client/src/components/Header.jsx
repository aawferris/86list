import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div id="header-container">
      <Link to="/">
        <div id="header-left">
        <img id="logo" src="/assets/86list-logo.png" alt="the iconic 86list image"/>
        <h1 id="title">86list</h1>
      </div>
      </Link>
      <div id="header-right">
      {
        currentUser ?
          <>
            <p className="current-user-display">Welcome, {currentUser.name}!</p>
            <button id="logout-button" onClick={handleLogout}>Logout</button>
          </>
          :
          <div id="header-buttons">
            <Link to='/login'><button id="login-button">LOGIN</button></Link>
            <Link to='/register'><button id="register-button">REGISTER</button></Link>
          </div>
      }
      <hr />
      {
          <p className="current-user-display">{currentUser}</p> &&
        <>
          <Link to='/restaurants'><p id="header-restaurant-link">restaurants</p></Link>
          <p id="header-separator">|</p>
          <Link to='/posts'><p id="header-posts-link">posts</p></Link>
        </>
      }
      </div>
    </div>
  )
}
