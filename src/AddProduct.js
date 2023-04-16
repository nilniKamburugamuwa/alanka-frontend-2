import React, { useState } from 'react';

function AddProduct() {
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

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <div>
          <h2>Preview</h2>
          <img src={image} alt="preview" />
        </div>
      )}
    </div>
  );
}

export default AddProduct;
