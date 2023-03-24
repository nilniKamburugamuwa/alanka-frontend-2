import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({product}) => {
  return (
    <div className='productItem'>
      <img className='productItem-cover' src={product.image} alt='cover' />
      {/*<Chip label={category} /> */}
      <Link className='productItem-wrap' to={`/product/${product.productId}`}>
        <h3>{product.name}</h3>
      </Link>
      <p className='productItem-desc'>{product.description}</p>
      {/*<footer>
        <div className='productItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='productItem-link' to={`/product/${id}`}>
          ➝
        </Link>
      </footer>*/}
    </div>
  );
};

export default ProductItem;