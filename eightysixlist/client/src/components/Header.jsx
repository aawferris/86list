import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div id="header-container">
      <div id="header-left">
        <img id="logo" src="/assets/86list-logo.png" alt="the iconic 86list image"/>
        <h1 id="title">86list</h1>
      </div>
      <div id="header-right">
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <div id="header-buttons">
            <Link to='/login'><button id="login-button">LOGIN</button></Link>
            <Link to='/register'><button id="register-button">REGISTER</button></Link>
          </div>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/restaurants'>restaurants</Link>
          <Link to='/posts'>posts</Link>
        </>
      }
      </div>
    </div>
  )
}
