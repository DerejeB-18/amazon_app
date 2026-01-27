import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './ProductCard.module.css';

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            setProducts(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);

    return (
        <section className={classes.products_container}>
        {isLoading ? (
            <div className={classes.loader}>Loading products...</div>
        ) : (
            <div className={classes.products_grid}>
                {products.map((singleProduct) => {
                return <ProductCard renderData={singleProduct} key={singleProduct.id} />
                })}
            </div>
        )}
        </section>
    );
    }

export default Product;