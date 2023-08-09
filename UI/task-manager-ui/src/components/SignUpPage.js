import React from 'react';
import { Link } from 'react-router-dom';

const signUp = () => {
    return (
        <div className="home-page">
            <div className="home-page-background"></div>
            <div className="sign-in-holder">
                <div className="sign-in">
                    <h1 className="home-page__h1">Sign Up</h1>
                    <form className="form form--sign-in">
                        <label className="form__label" required htmlFor="form--sign-up-username">Username</label>
                        <input className="form__input" required placeholder="Username" type="text" name="sign-up-username"/>
                        <label className="form__label" required htmlFor="">Firstname</label>
                        <input className="form__input" required placeholder="Fist Name" type="text" name="sign-up-firstname"/>
                        <label className="form__label" required htmlFor="">Lastname</label>
                        <input className="form__input" required placeholder="Last Name" type="text" name="sign-up-lastname"/>
                        <label className="form__label" required htmlFor="form--sign-up-password">Password</label>
                        <input className="form__input" required placeholder="Password" type="password" name="sign-up-password"/>
                        <label className="form__label" required htmlFor="form--sign-up-password-repeat">Repeat Password</label>
                        <input className="form__input" required placeholder="Repeat Password" type="password" name="repeat-sign-up-password"/>
                        <p className="error-message" id="error-message-login"></p>
                        <input className="form__submit button button--green" value="Sign Up" type="submit" name="sign-up-submit"/>
                    </form>
                    <Link to="/" className="sign-in-holder_p">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default signUp;
