import React from 'react';
import { FiMenu } from "react-icons/fi";
// We will add the styles to your existing Header.css file

function LowerHeader() {
  return (
    <div className="lower-header">
      <ul className="lower-header__list">
        {/* The "All" Menu with Icon */}
        <li className="lower-header__item lower-header__menu">
          <FiMenu className="lower-header__menu-icon" />
          <span>All</span>
        </li>

        {/* Navigation Links */}
        <li className="lower-header__item">Today's Deals</li>
        <li className="lower-header__item">Prime Video</li>
        <li className="lower-header__item">Registry</li>
        <li className="lower-header__item">Gift Cards</li>
        <li className="lower-header__item">Customer Service</li>
        <li className="lower-header__item">Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;