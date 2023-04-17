import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';

function Product({product}) {
  
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
  }
  
  return (
    <div className='product'>
        <div className="product__info">
          <Link className='productItem-wrap' to={`/product/${product.productId}`}>
            <p>{product.name}</p>
            </Link>
            <p className='product__price'><small>$</small><strong>{product.price}</strong></p>
            <div className="product__rating">
                {Array(product.rating).fill().map((_, i)=>(<p>⭐</p>
                ))}
            </div>
        </div>

        <img src={product.image}/>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
