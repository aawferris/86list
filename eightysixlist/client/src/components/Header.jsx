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
          <Link to='/login'><p id="login-link">Login | Register</p></Link>
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
