import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { GetCurrentUser } from './GetCurrentUser';
import axios from 'axios';

function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(GetCurrentUser());
        const token = JSON.parse(localStorage.getItem('user'));
        console.log(token.token)
        const response = await axios.get('http://localhost:8082/api/v1/auth/user', {
          headers: {
            Authorization: `Bearer ${token.token}$`
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [{basket}, dispatch] = useStateValue();
  const history=useHistory();
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


        {user ? (
          <Link to='/userProfile'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Profile</span>
            </div>
          </Link>
          ) : (
          <Link to='/login'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Hello Guest</span>
              <span className='header__optionLineTwo'>Sign In</span>
            </div>
          </Link>
        )}

        {user ? (
          <Link to='/request'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Post Product</span>
            <span className='header__optionLineTwo'>Request</span>
          </div>
          </Link>
          ) : (
          <></>
        )}


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
