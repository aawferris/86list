import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div id="login-main-container">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
      }}>
      <div id="login-sub-container">
        <h3 id="login-title">Login</h3>
        <div id="username-box">
          <label id="username-label">Username:
            <input
              className="login-input"
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div id="password-box">
          <label id="password-label">Password:
            <input
              className="login-input"
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div id="login-link-boxes">
          <button id="login-submit">Submit</button>
          <Link to='/register'><p id="register-link">I don't have an account</p></Link>
        </div>
      </div>
      </form>
    </div>
  )
}
