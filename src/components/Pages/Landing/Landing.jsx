import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints'; 
import ProductCard from '../../Product/ProductCard';
import Loader from '../../Loader/Loader'; 
import classes from './Landing.module.css'; // Fixed path
import Carousel from '../../Carousel/Carousel'; // Re-import your Banner
import Category from '../../Category/Category'; // Re-import your Categories

function Landing() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Landing Error:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Carousel />    {/* This brings back your Banner */}
      <Category />    {/* This brings back your Category cards */}
      
      <section>
        {isLoading ? (
          <Loader /> 
        ) : (
          <div className={classes.products_container}>
            {products?.map((item) => (
              <ProductCard 
                key={item.id} 
                renderData={item} 
                renderAdd={true} 
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Landing;