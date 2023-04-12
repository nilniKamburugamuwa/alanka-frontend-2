import React, { useState } from 'react';

import './PriceRangeSelector.css';

function PriceRangeSelector(props) {
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

  return (
    <div className="price-range-selector">
      <div className="price-range-selector__label">Price range:</div>
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
  );
}

export default PriceRangeSelector;
