import axios from 'axios';
import React, { useState } from 'react';

function SellerForm() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (id) => {
    const formData = new FormData();
    formData.append("file", image);
    await axios.post(`http://localhost:8082/api/seller/setImage/${id}`, formData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  return (
    <form onSubmit={handleSubmit}>
        <label></label>
      <label>
        Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SellerForm;
