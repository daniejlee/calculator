import React from 'react';

const Header = () => {


    return (
      <nav className="navbar navbar-dark navcolor justify-content-between py-1">
        <div className="navbar-brand header cursor-pointer" id="home">
          {' '} Hi-Fi Planet
        </div>
        <div className="cart" id="cart">
          <i className="fas fa-shopping-cart ml-2"></i>
        </div>
      </nav>
    );
}


export default Header
