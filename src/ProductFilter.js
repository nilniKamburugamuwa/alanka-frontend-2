import React, { useState } from 'react';
import './ProductFilter.css'
const products = [
  { id: 1, name: 'Product 1', category: 'category1', price: 10 },
  { id: 2, name: 'Product 2', category: 'category2', price: 20 },
  { id: 3, name: 'Product 3', category: 'category1', price: 15 },
  { id: 4, name: 'Product 4', category: 'category2', price: 25 },
];



function ProductFilter(props) {
    const { minPrice, maxPrice, onPriceRangeChange } = props;

    const [selectedMinPrice, setSelectedMinPrice] = useState(minPrice);
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice);
  
    const handleMinPriceChange = (e) => {
      const newMinPrice = Number(e.target.value);
      setSelectedMinPrice(newMinPrice);
      onPriceRangeChange(newMinPrice, selectedMaxPrice);
    };
  
    const handleMaxPriceChange = (e) => {
      const newMaxPrice = Number(e.target.value);
      setSelectedMaxPrice(newMaxPrice);
      onPriceRangeChange(selectedMinPrice, newMaxPrice);
    };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'all' && selectedPriceRange === 'all') {
      return true;
    }
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (selectedPriceRange !== 'all' && product.price > selectedPriceRange) {
      return false;
    }
    return true;
  });

  return (
    <div className='productFilter'>
      <div className='category-selector'>

        <select className='selector' value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All categories</option>
          <option value="tea">Tea</option>
          <option value="crafts">Crafts</option>
          <option value="accessories">Accessories</option>
          <option value="clothes">Clothes</option>
          <option value="spices">Spices</option>
        </select>
      </div>
      <div>
        <div className="price-range-selector">
        <label>Price:</label>
      <div className="price-range-selector__input-group">
        <input
          type="number"
          min={minPrice}
          max={maxPrice}
          step={0.01}
          value={selectedMinPrice}
          onChange={handleMinPriceChange}
          className="price-range-selector__input"
          placeholder='Min'
        />
        <div className="price-range-selector__separator">-</div>
        <input
          type="number"
          min={minPrice}
          max={maxPrice}
          step={0.01}
          value={selectedMaxPrice}
          onChange={handleMaxPriceChange}
          className="price-range-selector__input"
          placeholder='Max'
        />
      </div>
    </div>
      </div>
    </div>
  );
}

export default ProductFilter;
