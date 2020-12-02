import { useState } from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    age: "",
    restaurant: "",
    location: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div id="register-main-container">
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
      <div id="input-main-box">
      <h3 id="register-title">Register</h3>
      <div id="name-box">
        <label>Name: </label>
          <input
          className="register-input"
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            autoFocus
            required
          />
       
      </div>
      <div id="address-box">
        <label>Home Address:</label>
          <input
          className="register-input"
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="email-box">
        <label>Email:</label>
          <input
          className="register-input"
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="username-box">
        <label>Username:</label>
          <input
          className="register-input"
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="password-box">
        <label>Password:</label>
          <input
          className="register-input"
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="confirm-box">
        <label>Confirm Password:</label>
          <input
          className="register-input"
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="phone-box">
        <label>Phone Number:</label>
          <input
          className="register-input"
            type='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
      </div>
      <div id="age-box">
        <label>Age:</label>
          <input
          className="register-input"
            type='number'
            name='age'
            value={formData.age}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="restaurant-box">
        <label>I work at...</label>
          <input
          className="register-input"
            type='text'
            name='restaurant'
            value={formData.restaurant}
            onChange={handleChange}
            required
          />
        
      </div>
      <div id="location-box">
        <label >My store is located in...</label>
          <input
          className="register-input"
            type='text'
            name='location'
            value={formData.location}
            onChange={handleChange}
            required
          />
      </div>
      <div id="register-terms-box">
          <label id="terms-label">I agree to the <a>Terms and Conditions</a>:
            <input
              className="login-input"
              type='checkbox'
              name='terms'
              // value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div id="register-community-box">
          <label id="community-label">I agree to the <a>Community Guidelines</a>:
            <input
              className="login-input"
              type='checkbox'
              name='community'
              // value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      <button id="register-submit">Submit</button>
      </div>
    </form>
    </div>
  )
}
