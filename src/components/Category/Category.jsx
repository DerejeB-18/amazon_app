import React from 'react';
import { categoryInfos } from './categoryFullInfos';
import CategoryCard from './CategoryCard';
import './Category.css';

function Category() {
  return (
    <section className="category__container">
      {categoryInfos.map((infos, index) => (
        // Passing the data to the card component
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;