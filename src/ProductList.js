import React from 'react';
import Product from './Product';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className='blogList-wrap'>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductList;