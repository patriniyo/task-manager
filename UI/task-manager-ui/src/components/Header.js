import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 className="header__h1">TASK MANAGER</h1>
      <div className="header__account">
        <button className="button button--header">Sign Out</button>
        <img className="header__img" src="../../../UI/fas/public/assets/images/logo transparent.png" alt="Logo" />
      </div>
    </header>
  );
};

export default Header;