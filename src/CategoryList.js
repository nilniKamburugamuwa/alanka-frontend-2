import React from 'react';
import './CategoryList.css';

const CategoryList = () =>{
    return (
      <div className='categoryList'>
        <div className='categoryList__row'>
            <div className='categoryList__col'>
                <h3>Crafts</h3>
            </div>
            <div className='categoryList__col'>
                <h3>Accessories</h3>
            </div>
            <div className='categoryList__col'>
                <h3>Clothes</h3>
            </div>
            <div className='categoryList__col'>
                <h3>Spices</h3>
            </div>
            <div className='categoryList__col'>
                <h3>Tea</h3>
            </div>
        </div>
      </div>  
    );
}

export default CategoryList;