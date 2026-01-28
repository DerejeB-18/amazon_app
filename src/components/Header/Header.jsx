import React, { useContext } from 'react';
import './Header.css';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import LowerHeader from './lowerHeader';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context/StateProvider';

function Header() {
  const { state: { basket } } = useContext(StateContext);

  return (
    <section className="header_outer">
      <section className="header">

        {/* Logo */}
        <div className="header__logo_container">
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
        </div>

        {/* Deliver */}
        <div className="header__delivery">
          <SlLocationPin className="header__locationIcon" />
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Ethiopia</span>
          </div>
        </div>

        {/* Search */}
        <div className="header__search">
          <div className="header__search_left">
            <span>All</span>
            <IoMdArrowDropdown />
          </div>
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search Amazon"
          />
          <div className="header__searchIconContainer">
            <BsSearch className="header__searchIcon" aria-label="Search" />
          </div>
        </div>

        {/* Right Nav */}
        <div className="header__nav">

          {/* Language */}
          <div className="header__option header__language">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
            />
            <span className="header__optionLineTwo">EN</span>
            <IoMdArrowDropdown className="header__dropdown_arrow" />
          </div>

          {/* Account */}
          <div className="header__option">
            <span className="header__optionLineOne">Hello, sign in</span>
            <div className="header__optionLineTwoContainer">
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
          <Link to="/cart" className="header__optionBasket">
            <div className="header__cart_info">
              <span className="header__cartCount">{basket?.length || 0}</span>
              <BiCart size={38} aria-label="Cart" />
            </div>
            <span className="header__optionLineTwo">Cart</span>
          </Link>

        </div>
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header;