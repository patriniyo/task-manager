import React from 'react';

const LoginPage = () => {
    return (
        <div className="home-page">
            <div className="home-page-background"></div>
            <div className="sign-in-holder">
                <div className="sign-in">
                    <h1 className="home-page__h1">Task Manager</h1>
                    <form className="form form--sign-in">
                        <label className="form__label" required htmlFor="form--sign-in-username">Username</label>
                        <input className="form__input" required placeholder="Username" type="text" name="sign-in-username"/>
                        <label className="form__label" required htmlFor="form--sign-in-password">Password</label>
                        <input className="form__input" required placeholder="Password" type="password" name="sign-in-password"/>
                        <p className="error-message" id="error-message-login"></p>
                        <input className="form__submit button button--green" value="Sign In" type="submit" name="sign-in-submit"/>
                    </form>
                    <p className="sign-in-holder_p">Sign Up</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
