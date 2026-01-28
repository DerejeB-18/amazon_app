import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './ProductCard.module.css';

function ProductCard({ renderData, flex, renderDesc, renderAdd }) {
    if (!renderData) return null;

    const {
        id,
        title,
        image,
        price,
        rating,
        description // Added to display in detail view
    } = renderData;

    const rate = rating?.rate || 0;
    const count = rating?.count || 0;

    const truncate = (str, n) =>
        str?.length > n ? str.substr(0, n - 1) + '...' : str;

    return (
        /* If 'flex' is true, it adds the .product_flexed class 
           This is what changes the layout for the Detail page.
        */
        <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
            <Link to={`/product/${id}`} className={classes.card_link}>
                <div className={classes.image_wrapper}>
                    <img src={image} alt={title} />
                </div>

                <div className={classes.content_wrapper}>
                    {/* On detail page (flex), we show the full title. In grid, we truncate. */}
                    <h3>{flex ? title : truncate(title, 50)}</h3>

                    {/* Show description ONLY if renderDesc prop is passed as true */}
                    {renderDesc && (
                        <div className={classes.description_box}>
                            <p>{description}</p>
                        </div>
                    )}

                    <div className={classes.rating}>
                        {Array(5)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>{rate >= i + 1 ? '★' : '☆'}</p>
                            ))}
                        <small>{count}</small>
                    </div>

                    <div className={classes.price_box}>
                        <CurrencyFormat amount={price} />
                    </div>
                </div>
            </Link>

            {/* Toggle 'Add to Cart' button visibility with renderAdd prop */}
            {renderAdd && (
                <button className={classes.add_btn}>
                    Add to Cart
                </button>
            )}
        </div>
    );
}

// Default props so existing code on Landing/Results doesn't break
ProductCard.defaultProps = {
    renderAdd: true,
    flex: false,
    renderDesc: false
};

export default ProductCard;