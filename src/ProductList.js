import React from 'react';
import Product from './Product';
import './ProductList.css';
import ProductItem from './ProductItem';

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