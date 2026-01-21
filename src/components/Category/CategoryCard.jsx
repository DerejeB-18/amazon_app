import React from 'react';
// import styles from './Category.module.css'; // We will use CSS modules or standard CSS
import './Category.css';

function CategoryCard({ data }) {
  return (
    <div className="category__card">
      <div className="category__card_header">
        <h2>{data.title}</h2>
      </div>
      
      <div className="category__image_container">
        <a href="/">
            <img src={data.imgLink} alt={data.title} />
        </a>
      </div>

      <div className="category__link">
        <a href="/">{data.link}</a>
      </div>
    </div>
  );
}

export default CategoryCard;