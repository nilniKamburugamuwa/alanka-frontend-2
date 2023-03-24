import React, { useCallback, useEffect, useState } from 'react';
//import EmptyproductList from './EmptyproductList';
import ProductList from './ProductList';
import Header from './Header';
import ProductService from './ProductService';
import ProductSearchBar from './ProductSearchBar';
import { useParams } from 'react-router-dom';

const ProductHome = () => {

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

  return (
    <div className='productHome'>

      {/* Search Bar */}
      <ProductSearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* product List & Empty View */}
      <div className='productHome__grid'></div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductHome;