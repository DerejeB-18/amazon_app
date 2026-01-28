import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductCard from '../../Product/ProductCard';
import classes from './ProductDetail.module.css';

function ProductDetail() {
  const { productId } = useParams(); // Destructure productId from URL
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Fetch a single product by ID
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching product detail:", err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <section>
      {isLoading ? (
        <div style={{ padding: "40px", textAlign: "center" }}>Loading product...</div>
      ) : (
        <div className={classes.detail_container}>
          {/* Reuse ProductCard with specific props for detail view */}
          <ProductCard 
            renderData={product}
            flex={true}           // This will trigger horizontal layout
            renderDesc={true}     // This will show the description
            renderAdd={true}      // This shows the add to cart button
          />
        </div>
      )}
    </section>
  );
}

export default ProductDetail;