import axios from 'axios';
import React, { useState } from 'react';
import './AddProduct.css'

function ProductRequest() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  async function handleSubmit(event){
    event.preventDefault();
        try{
            await axios.post("http://localhost:8082/api/request/save",{
                title: name,
                description : description,
                budget: budget,
                quantity: quantity,
                dueDate: dueDate,
            });

            alert("Request Posted Successfully");
            setName("");
            setDescription("");
            setBudget("");
            setQuantity("");
        } catch(err){
          alert("Add Product Failed");
      }       
    }
    

  return (
    <div className='addProduct'>
      <div className='addProduct__container'>
      <h2>Product Request</h2>
      
      <form className="addProduct__form" onSubmit={handleSubmit}>
        <h5>Title</h5>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />

        <h5>Description</h5>
        <input type='text' value={description} onChange={e => setDescription(e.target.value)} />

        <div className='register__phone'>
          <h5>Budget</h5>
          <p>$</p>
          <input type='text' maxLength={9} value={budget} onChange={e => setBudget(e.target.value)}/>

          <h5>Quantity</h5>
          <input type='text' maxLength={9} value={quantity} onChange={e => setQuantity(e.target.value)}/>

          <h5>Due Date</h5>
          <input type='date' value={dueDate} onChange={e => setDueDate(e.target.value)}/>
        </div>

        <button>Post</button>
      </form>
      </div>
    </div>
  );
}

export default ProductRequest;
