import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
        <img className='header__logo' src="../alanka.png"/>
      </Link>
        <Link to='/productHome/craft'>
          <div className='header__categories'>
            Crafts
          </div>
        </Link>
        <Link to='/productHome/accessories'>
          <div className='header__categories'>
            Accessories
          </div>
        </Link>
        <Link to='/productHome/clothes'>
          <div className='header__categories'>
            Clothes
          </div>
        </Link>
        <Link to='/productHome/spices'>
          <div className='header__categories'>
            Spices
          </div>
        </Link>
        <Link to='/productHome/tea'>
          <div className='header__categories'>
            Tea
          </div>
        </Link>
        

      <div className='header__search'>
          {/* <input className='header__searchInput' type="text"/> */}
          <Link to='/productHome'>
            <SearchIcon className='header__searchIcon'/>
          </Link>
          
      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Nilni</span>
            <span className='header__optionLineTwo'>Profile</span>
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
  )
}

export default Header
