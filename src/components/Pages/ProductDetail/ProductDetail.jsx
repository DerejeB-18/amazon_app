import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductCard from '../../Product/ProductCard';
import Loader from '../../Loader/Loader';
import classes from './ProductDetail.module.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.detail_container}>
          <ProductCard 
            renderData={product} 
            flex={true}           
            renderDesc={true}     
            renderAdd={true}      
          />
        </div>
      )}
    </section>
  );
}

export default ProductDetail;