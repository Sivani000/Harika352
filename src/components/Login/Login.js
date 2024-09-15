import React, { useState } from "react";
import axios from "axios";
import './Login.css'; // Importing the CSS file

function Login() {
  const SignUp = async () => {
    window.location.replace("/SignUp");
  };

  // State hooks for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const LoginUser = async (e) => {
    e.preventDefault();

    try {
      // Using axios to send POST request to the server
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      if (response.data.status === "success") {
        localStorage.setItem("user_data", JSON.stringify(response.data.data));
        alert("Login successful");
        window.location.replace('/About');
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-title">Login</h3>

        {/* Login form */}
        <form onSubmit={LoginUser}>
          <label htmlFor="email" className="form-label">Email ID or Mobile Number</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Enter your email"
            className="form-input"
            required
          />

          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter your Password"
            className="form-input"
            required
          />

          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
