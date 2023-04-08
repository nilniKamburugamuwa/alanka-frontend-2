import React from 'react';
import './ProductSearchBar.css';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function ProductSearchBar ({ formSubmit, value, handleSearchKey, clearSearch }) {
  const [{basket}, dispatch] = useStateValue();
return(
  <div className='productSearchBar'>
    <Link to='/'>
        <img className='productSearchBar__logo' src='../alanka.png'></img>
    </Link>
    <form className='productSearchBar__search' onSubmit={formSubmit}>
      <input
        className='productSearchBar__input'
        type='text'
        placeholder='Search By Title'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span className='productSearchBar__cross' onClick={clearSearch}>X</span>}
      <button className='productSearchBar__button'>Search</button>
    </form>
{/*     <div className='productSearchBar__nav'>
      <Link to='/'>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Home</span>
        </div>
      </Link>
    </div> */}
          <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>

          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>

          <Link to='/blogHome'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Alanka</span>
              <span className='header__optionLineTwo'>Blog</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className='header__optionBasket'>
              <ShoppingBasketIcon/>
              <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
          </Link>

        </div>
  </div>
)};

export default ProductSearchBar;