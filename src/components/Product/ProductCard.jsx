import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './ProductCard.module.css';
import { StateContext } from '../../context/StateProvider';
import { Type } from '../../context/reducer'; // Import your types!

function ProductCard({ renderData, flex, renderDesc, renderAdd }) {
    // 1. CALL HOOKS AT THE VERY TOP (Always!)
    // We destructure as an array [state, dispatch]
    // const [, dispatch] = useContext(StateContext);
    const { dispatch } = useContext(StateContext);

    // 2. NOW you can do your conditional check
    if (!renderData) return null;

    const {
        id,
        title,
        image,
        price,
        rating,
        description
    } = renderData;

    const rate = rating?.rate || 0;
    const count = rating?.count || 0;

    const truncate = (str, n) =>
        str?.length > n ? str.substr(0, n - 1) + '...' : str;

    const addToCartHandler = () => {
        dispatch({
            type: Type.ADD_TO_BASKET, // Using the constant is safer than the string 'ADD_TO_CART'
            item: {
                id,
                title,
                image,
                price,
                rating,
                description
            }
        });
    };

    return (
        <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
            {/* Using /products/ instead of /product/ to match common Amazon clone routing */}
            <Link to={`/products/${id}`} className={classes.card_link}>
                <div className={classes.image_wrapper}>
                    <img src={image} alt={title} />
                </div>

                <div className={classes.content_wrapper}>
                    <h3>{flex ? title : truncate(title, 50)}</h3>

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

            {renderAdd && (
                <button className={classes.add_btn} onClick={addToCartHandler}>
                    Add to Cart
                </button>
            )}
        </div>
    );
}

ProductCard.defaultProps = {
    renderAdd: true,
    flex: false,
    renderDesc: false
};

export default ProductCard;