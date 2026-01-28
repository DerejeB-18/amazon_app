// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* SECTION 0: Personalized Recommendations (Added per image requirement) */}
      <section className="footer__recommend">
        <div className="footer__recommend-container">
          <p className="footer__recommend-text">See personalized recommendations</p>
          <button type="button" className="footer__recommend-button">Sign in</button>
          <p className="footer__recommend-new-cust">
            New customer? <a href="/auth">Start here.</a>
          </p>
        </div>
      </section>

      {/* SECTION 1: Back to Top Bar */}
      <div 
        className="footer__back-to-top" 
        onClick={scrollToTop} 
        role="button" 
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
      >
        Back to top
      </div>

      {/* SECTION 2: Main Navigation Links */}
      <nav className="footer__main-links">
        <div className="footer__links-container">
          <div className="footer__link-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press Releases</a></li>
              <li><a href="/science">Science</a></li>
            </ul>
          </div>
          <div className="footer__link-column">
            <h3>Make Money with Us</h3>
            <ul>
              <li><a href="/sell">Sell on our platform</a></li>
              <li><a href="/affiliate">Become an Affiliate</a></li>
              <li><a href="/advertise">Advertise Your Products</a></li>
              <li><a href="/publish">Self-Publish with Us</a></li>
            </ul>
          </div>
          <div className="footer__link-column">
            <h3>Payment Products</h3>
            <ul>
              <li><a href="/business-card">Business Card</a></li>
              <li><a href="/points">Shop with Points</a></li>
              <li><a href="/reload">Reload Your Balance</a></li>
              <li><a href="/currency">Currency Converter</a></li>
            </ul>
          </div>
          <div className="footer__link-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li><a href="/account">Your Account</a></li>
              <li><a href="/orders">Your Orders</a></li>
              <li><a href="/shipping">Shipping Rates</a></li>
              <li><a href="/returns">Returns & Replacements</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* SECTION 3: Middle Branding Section */}
      <div className="footer__branding">
        <div className="footer__logo">
          <span className="footer__logo-text">LOGO</span>
        </div>
        <div className="footer__selectors">
          <button type="button" className="footer__select-btn">🌐 English</button>
          <button type="button" className="footer__select-btn">$ USD - U.S. Dollar</button>
          <button type="button" className="footer__select-btn">🇺🇸 United States</button>
        </div>
      </div>

      {/* SECTION 4: Deep Footer (SEO & Ecosystem) */}
      <section className="footer__deep">
        <div className="footer__deep-container">
          <div className="footer__service-item">
            <h4>Cloud Drive</h4>
            <p>Secure storage</p>
          </div>
          <div className="footer__service-item">
            <h4>Music Stream</h4>
            <p>Millions of songs</p>
          </div>
          <div className="footer__service-item">
            <h4>Market Ads</h4>
            <p>Reach customers</p>
          </div>
          <div className="footer__service-item">
            <h4>Global Selling</h4>
            <p>Market internationally</p>
          </div>
          <div className="footer__service-item">
            <h4>Web Services</h4>
            <p>Scalable Computing</p>
          </div>
          {/* Add more as needed */}
        </div>
      </section>

      {/* SECTION 5: Legal Strip */}
      <div className="footer__legal">
        <div className="footer__legal-links">
          <a href="/conditions">Conditions of Use</a>
          <a href="/privacy">Privacy Notice</a>
          <a href="/ads">Interest-Based Ads</a>
        </div>
        <p className="footer__copyright">© 1996-2024, E-Commerce Platform, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;