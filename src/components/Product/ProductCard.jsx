import React from 'react';
// If you are using routing to go to a single page details, import Link
import { Link } from 'react-router-dom';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'; // Import your new component
import classes from './ProductCard.module.css';

function ProductCard({ renderData }) {
    const { id, title, image, price, rating } = renderData;

    // Helper to limit title length so cards stay even
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <div className={classes.card_container}>
        {/* Link to single product detail page */}
        <Link to={`/product/${id}`} className={classes.card_link}>
            
            <div className={classes.image_wrapper}>
            <img src={image} alt={title} />
            </div>

            <div className={classes.content_wrapper}>
            <h3>{truncate(title, 50)}</h3>
            
            {/* Rating Section */}
            <div className={classes.rating}>
                {/* Simple logic to display stars based on rating number */}
                {Array(5).fill().map((_, i) => (
                <p key={i}>{rating.rate >= i + 1 ? "★" : "☆"}</p>
                ))}
                <small>{rating.count}</small>
            </div>

            {/* Price Section */}
            <div className={classes.price}>
                <small>$</small>
                <strong>{price}</strong>
            </div>
            </div>

            <div>
          {/* Replace the old price div with this: */}
            <CurrencyFormat amount={price} />
        </div>

        </Link>

        <button className={classes.add_btn}>
            Add to Cart
        </button>
        </div>
    );
    }

export default ProductCard;