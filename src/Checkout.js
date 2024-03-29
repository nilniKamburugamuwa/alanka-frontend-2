import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            
            {basket.map(item =>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            
            {/*Basket Item*/}
            {/*Basket Item*/}
            {/*Basket Item*/}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
