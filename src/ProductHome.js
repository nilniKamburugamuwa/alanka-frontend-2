import React, { useCallback, useEffect, useState } from 'react';
//import EmptyproductList from './EmptyproductList';
import ProductList from './ProductList';
import Header from './Header';
import ProductService from './ProductService';
import ProductSearchBar from './ProductSearchBar';
import { useHistory, useParams } from 'react-router-dom';
import ProductFilter from './ProductFilter';
import PriceRangeSelector from './PriceRangeSelector';

const ProductHome = (props) => {

  let history = useHistory();
  const [productList, setProductList] = useState([])
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    ProductService.getAllProducts().then((response) =>{
      setProductList(response.data)
      setProducts(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[]) 

  const {id} = useParams();
  const [searchKey, setSearchKey] = useState();

  useEffect(()=>{
    if (id){
      const allProducts = productList;
      const filteredProducts = allProducts.filter((product) =>
        product.category.toLowerCase().includes(id.toLowerCase().trim())
      );
      setProducts(filteredProducts);
    }

  })

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for product by title
  const handleSearchResults = () => {
    const allProducts = productList;
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setProducts(filteredProducts);
  };

  // Clear search and show all products
  const handleClearSearch = () => {
    setProducts(productList);
    setSearchKey('');
  };

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
    <div className='productHome'>

      {/* Search Bar */}
      <ProductSearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <ProductFilter/>
      {/* product List & Empty View */}
      <div className='productHome__grid'></div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductHome;