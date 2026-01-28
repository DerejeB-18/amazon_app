import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints'; 
import ProductCard from '../../Product/ProductCard';
import classes from './Results.module.css';

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const cleanCategory = decodeURIComponent(categoryName);
    
    axios.get(`${productUrl}/products/category/${cleanCategory}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        console.log("Success:", res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "0 30px" }}>Category / {categoryName}</p>
      <hr />
      
      {isLoading ? (
        <div style={{ padding: "30px" }}>Loading products...</div>
      ) : (
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              /* CRITICAL FIX: Prop name must be renderData to match your ProductCard */
              renderData={product} 
            />
          ))}
        </div>
      )}

      {!isLoading && results.length === 0 && (
        <div style={{ padding: "30px" }}>No products found.</div>
      )}
    </section>
  );
}

export default Results;