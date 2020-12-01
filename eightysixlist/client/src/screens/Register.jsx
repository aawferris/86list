import { useState } from 'react';
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
          />
      </div>
      <div id="age-box">
        <label>Age:</label>
          <input
          className="register-input"
            type='number'
            name='age'
            value={formData.phone}
            onChange={handleChange}
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
          />
        
      </div>
      <button id="register-submit">Submit</button>
      </div>
    </form>
    </div>
  )
}
