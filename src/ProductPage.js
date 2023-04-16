import React from 'react'
import "./ProductPage.css"
import ProductSearchBar from './ProductSearchBar'
import Header from './Header'
import ProductReview from './ProductReview'
function ProductPage() {
  return (
    <div>
        <ProductSearchBar/>
        <div className='product_exterior'>
    <div className='productPage'>
      <div className='productPage__container'>
        <img className='productPage__image' src='https://i5.walmartimages.com/asr/5b06fcb7-efe4-4878-b317-95e2040d55de_1.822275b9349286cb37db8d2008ce3fb6.jpeg'/>
        <div className='productPage__details'>
            <div>
                <h1>Ceylon Premium Black Tea</h1>
                <p className='productPage__seller'>sold by <strong>TeaDepot</strong></p>
            </div>

            <h2>$24.99</h2>
            <p>Original tea made in Sri Lanka. Net. weight: 500g</p>
            <div class="productPage__quantity">
                <p>Quantity:</p>
                <button>-</button>
                <label>1</label>
                <button>+</button>
                <p className='productPage__stock'>(10 in stock)</p>
            </div>
            <button className='productPage__button'>Add to Cart</button>
        </div>
      </div>
      </div>
      <ProductReview/>
    </div>
    </div>
  )
}

export default ProductPage
