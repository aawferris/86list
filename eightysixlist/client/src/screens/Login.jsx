import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
        // {
        //   e.target.value !== formData.username ?
        //   alert(`username doesn't exist`)
        //   :
          e.preventDefault();
          props.handleLogin(formData);
        // }
        }}>
          <h3 id="login-title">Login</h3>
          <div id="login-sub-container">
            <div id="login-username-box">
              <label id="username-label">
                <input
                  className="login-input"
                  placeholder="Username"
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </label>
            </div>
            <br />
            <div id="login-password-box">
              <label id="password-label">
                <input
                  className="login-input"
                  placeholder="Password"
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
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
