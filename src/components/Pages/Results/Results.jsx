import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints'; 
import ProductCard from '../../Product/ProductCard';
import Loader from '../../Loader/Loader'; 
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
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "0 30px" }}>Category / {categoryName}</p>
      <hr />
      
      {isLoading ? (
        <Loader /> 
      ) : (
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              renderData={product}
              renderAdd={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Results;