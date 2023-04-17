import axios from 'axios';
import React, { useState } from 'react';
import './GetVerified.css'

function GetVerified() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImage1Change = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setImage1(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImage2Change = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setImage2(reader.result);
    };
    reader.readAsDataURL(file);
  };

  
  async function handleSubmit(event){
    event.preventDefault();
        try{
/*             await axios.post("http://localhost:8082/api/product/save",{
                name: name,
                description : description,
                price: price,
                stock: stock,
                category: category,

            }); */

            alert("Verification request sent!");
            setImage1(null);
            setImage2(null);
        } catch(err){
          alert("Request not sent");
      }       
    }
    

  return (
    <div className='addProduct'>
      <div className='addProduct__container'>
      <h2>Get Verified</h2>
      
      <form className="addProduct__form" onSubmit={handleSubmit}>
        <p>Please upload clear images of the front and back of your NIC</p>
        <br></br>
        <h5>Front</h5>
        <input type="file" onChange={handleImage1Change} />
        {image1 && (
          <div className='product__image'>
            <h2>Preview</h2>
            <img className='addProduct__image' src={image1} alt="preview" />
          </div>
        )}

        <h5>Back</h5>
        <input type="file" onChange={handleImage2Change} />
        {image2 && (
          <div className='product__image'>
            <h2>Preview</h2>
            <img className='addProduct__image' src={image2} alt="preview" />
          </div>
        )}

        <button>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default GetVerified;
