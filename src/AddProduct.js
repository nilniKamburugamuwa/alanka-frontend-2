import axios from 'axios';
import React, { useState } from 'react';
import './AddProduct.css'

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  async function handleSubmit(event){
    event.preventDefault();
        try{
            await axios.post("http://localhost:8082/api/product/save",{
                name: name,
                description : description,
                price: price,
                stock: stock,
                category: category,

            });

            alert("Product Added Successfully");
            setName("");
            setDescription("");
            setPrice("");
            setStock("");
            setCategory("");
        } catch(err){
          alert("Add Product Failed");
      }       
    }
    

  return (
    <div className='addProduct'>
      <div className='addProduct__container'>
      <h2>Add Product</h2>
      
      <form className="addProduct__form" onSubmit={handleSubmit}>
        <h5>Title</h5>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />

        <h5>Description</h5>
        <input type='text' value={description} onChange={e => setDescription(e.target.value)} />

        <div className='register__phone'>
          <h5>Price</h5>
          <p>$</p>
          <input type='text' maxLength={9} value={price} onChange={e => setPrice(e.target.value)}/>

          <h5>Stock</h5>
          <input type='text' maxLength={9} value={stock} onChange={e => setStock(e.target.value)}/>
        </div>

        <h5>Product Image</h5>
        <input type="file" onChange={handleImageChange} />
        {image && (
          <div className='product__image'>
            <h2>Preview</h2>
            <img src={image} alt="preview" />
          </div>
        )}

        <button>Add Product</button>
      </form>
      </div>
    </div>
  );
}

export default AddProduct;
