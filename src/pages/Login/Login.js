import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ authenticate }) => {
  const protectedRoutes = () => {
    authenticate();
    navigate("/dashboard");
  };

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || !email.indexOf("@") > 0) {
      setError(true);
    } else {
      setTimeout(() => {
        setSubmitted(true);
        setError(false);
      }, 1000);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>redirecting...</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields correctly!</h1>
      </div>
    );
  };

  return (
    <div className="login-form">
      <form id="form">
        <h1 className="form-title">Login Form</h1>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={handleEmail}
          className="email"
          value={email}
          name="email"
          type="email"
        />

        <label htmlFor="password">Your Password</label>
        <input
          onChange={handlePassword}
          className="password"
          value={password}
          name="password"
          type="password"
        />

        <button onClick={() => { protectedRoutes(); handleSubmit();}} className="submit" type="submit">
          Login
        </button>
        <span className="messages">
          {errorMessage()}
          {successMessage()}
        </span>
      </form>
    </div>
  );
};

export default Login;
