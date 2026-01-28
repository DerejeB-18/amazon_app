import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; // Standard import for .css files

function CategoryCard({ data }) {
  // Check if data exists to avoid crashing
  if (!data) return null;

  const { title, name, imgLink } = data;

  return (
    /* Use a standard string if your file is Category.css */
    <div className="category"> 
      <Link to={`/category/${name}`}>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt={title} />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;