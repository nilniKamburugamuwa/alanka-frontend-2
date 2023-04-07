import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from './UserService';
import ProductService from './ProductService';

export const AdminPage = () => {

    const [sellers, setSellers] = useState([]);
    const [articles, setArticles] = useState([]);
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
        }).catch(error =>{
            console.log(error)
        })
    },[])

    useEffect(()=>{
        ProductService.getAllUsers().then((response) => {
            setProducts(response.data)
        }).catch(error =>{
            console.log(error)
        })
    },[])


  const handleDeleteArticle = (articleId) => {
    // Send a DELETE request to the API to delete the article
    axios.delete(`/api/articles/${articleId}`)
      .then(res => {
        // Remove the deleted article from the state
        setArticles(articles.filter(article => article.id !== articleId))
      })
      .catch(err => console.log(err));
  }

  const handleEditSeller = (sellerId) => {
    // TODO: implement the logic for editing a seller
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Counts</h2>
        <p>Buyers: {users.length()}</p>
        <p>Products: {products.length()}</p>
      </div>
      <div>
        <h2>Sellers</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditSeller(user.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>)}
