import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("Hey I am working");
    // Make an HTTP request to the backend PHP file
    const response = await fetch(
      "http://localhost:5000/api/auth/sign",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();
    console.log("The data");
    console.log(data);
    if (data.success) {
      setError("");
      console.log("Loggin response");
      console.log(data);
      navigate('/Tasks');
    } else {
      // Login failed, update error message state variable
      console.log(data);
      setError(data.message);
    }
  };
  return (
    <div className="home-page">
      <div className="home-page-background"></div>
      <div className="sign-in-holder">
        <div className="sign-in">
          <h1 className="home-page__h1">
            Task Manager
          </h1>
          <form
            className="form form--sign-in"
            onSubmit={handleSignIn}
          >
            <label
              className="form__label"
              required
              htmlFor="form--sign-in-username"
            >
              Username
            </label>
            <input
              className="form__input"
              required
              placeholder="Username"
              type="text"
              name="sign-in-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label
              className="form__label"
              required
              htmlFor="form--sign-in-password"
            >
              Password
            </label>
            <input
              className="form__input"
              required
              placeholder="Password"
              type="password"
              name="sign-in-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message" id="error-message-login">{error}</p>}
            <input
              className="form__submit button button--green"
              value="Sign In"
              type="submit"
              name="sign-in-submit"
            />
          </form>
          <Link
            to="/signup"
            className="sign-in-holder_p"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
