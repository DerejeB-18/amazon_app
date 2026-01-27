import React from 'react';
import './Header.css';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import LowerHeader from './lowerHeader';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
  return (
    <section className="header_outer">
      <section className="header">
        {/* Logo */}
        <div className="header__logo_container">
          <a href="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
        </div>

        {/* Deliver to Ethiopia */}
        <div className="header__delivery">
          <SlLocationPin className="header__locationIcon" />
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Ethiopia</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="header__search">
          <div className="header__search_left">
            <span>All</span>
            <IoMdArrowDropdown />
          </div>
          <input className="header__searchInput" type="text" placeholder="Search Amazon" />
          <div className="header__searchIconContainer">
            <BsSearch className="header__searchIcon" />
          </div>
        </div>

        {/* Right Side Nav */}
        <div className="header__nav">
          {/* Language Selection */}
          <div className="header__option header__language">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" 
              alt="US Flag" 
            />
            <span className="header__optionLineTwo">EN</span>
            <IoMdArrowDropdown className="header__dropdown_arrow" />
          </div>

          {/* Sign In */}
          <div className="header__option">
            <span className="header__optionLineOne">Hello, sign in</span>
            <div className="header__option_lineTwo_container">
                <span className="header__optionLineTwo">Account & Lists</span>
                <IoMdArrowDropdown className="header__dropdown_arrow" />
            </div>
          </div>

          {/* Orders */}
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          {/* Cart */}
          <div className="header__optionBasket">
            <div className="header__cart_info">
                <span className="header__cartCount">0</span>
                <BiCart size={38} />
            </div>
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;