import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] =
    useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");

  const handleUserRegister = async (e) => {
    e.preventDefault();
    console.log("Hey I am working");
    // Make an HTTP request to the backend PHP file
    if (password !== repeatPassword) {
      setError(`Password don't match`);
    } else {
      setError('');
      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            firstname,
            lastname,
          }),
        }
      );
      const data = await response.json();
      console.log("The data");
      console.log(data);
      if (data.success) {
        console.log("Registering response");
        console.log(data.message);
        navigate('/SignupMessage');
      } else {
        // Login failed, update error message state variable
        setError(data.message);
        console.log(data.message);
      }
    }
  };
  return (
    <div className="home-page">
      <div className="home-page-background"></div>
      <div className="sign-in-holder">
        <div className="sign-in">
          <h1 className="home-page__h1">
            Sign Up
          </h1>
          <form className="form form--sign-in"
          onSubmit={handleUserRegister}
          >
            <label
              className="form__label"
              required
              htmlFor="form--sign-up-username"
            >
              Username
            </label>
            <input
              className="form__input"
              required
              placeholder="Username"
              type="text"
              name="sign-up-username"
              value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
            />
            <label
              className="form__label"
              required
              htmlFor=""
            >
              Firstname
            </label>
            <input
              className="form__input"
              required
              placeholder="Fist Name"
              type="text"
              name="sign-up-firstname"
              value={firstname}
                    onChange={(e) =>
                      setFirstname(e.target.value)
                    }
            />
            <label
              className="form__label"
              required
              htmlFor=""
            >
              Lastname
            </label>
            <input
              className="form__input"
              required
              placeholder="Last Name"
              type="text"
              name="sign-up-lastname"
              value={lastname}
                    onChange={(e) =>
                      setLastname(e.target.value)
                    }
            />
            <label
              className="form__label"
              required
              htmlFor="form--sign-up-password"
            >
              Password
            </label>
            <input
              className="form__input"
              required
              placeholder="Password"
              type="password"
              name="sign-up-password"
              value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
            />
            <label
              className="form__label"
              required
              htmlFor="form--sign-up-password-repeat"
            >
              Repeat Password
            </label>
            <input
              className="form__input"
              required
              placeholder="Repeat Password"
              type="password"
              name="repeat-sign-up-password"
              onChange={(e) =>
                setRepeatPassword(e.target.value)
              }
            />
            {error && (
                    <p
                      className="error-message"
                      id="error-message-login"
                    >
                      {error}
                    </p>
                  )}
            <input
              className="form__submit button button--green"
              value="Sign Up"
              type="submit"
              name="sign-up-submit"
            />
          </form>
          <Link
            to="/"
            className="sign-in-holder_p"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
