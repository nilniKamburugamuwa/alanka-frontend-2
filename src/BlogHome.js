import React, { useCallback, useEffect, useState } from 'react';
import EmptyBlogList from './EmptyBlogList';
import BlogList from './BlogList';
import BlogSearchBar from './BlogSearchBar';
//import { blogList } from './data';
import BlogService from './BlogService';

const BlogHome = () => {

  const [blogList, setBlogList] = useState([])
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    BlogService.getAllBlogs().then((response) =>{
      setBlogList(response.data)
      setBlogs(response.data)
    }).catch(error=>{
      console.log(error)
    })
  },[]) 


  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div className='blogHome'>

      {/* Search Bar */}
      <BlogSearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      <div className='blogHome__grid'></div>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default BlogHome;