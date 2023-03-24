import React from 'react';
import './ProductSearchBar.css';
import { Link } from 'react-router-dom';

const ProductSearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (

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
    <div className='productSearchBar__nav'>
      <Link to='/'>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Home</span>
        </div>
      </Link>
    </div>
  </div>
);

export default ProductSearchBar;