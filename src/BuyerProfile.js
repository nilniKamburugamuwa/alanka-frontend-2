import React, { useState } from 'react';
import './SellerProfile.css'

function BuyerProfile() {
  const [firstName, setFirstName] = useState('Nilni');
  const [lastName, setLastName] = useState('Kamburugamuwa');
  const [email, setEmail] = useState('nilni@gmail.com');
  const [address, setAddress] = useState('123 Main St, Kandy, Sri Lanka');
  const [phoneNumber, setPhoneNumber] = useState("0752783543");
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className='profile'>
        <div className='profile__container'>
      <h2>Profile</h2>
      {editing ? (
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
            <br />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <button className='button' onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <div className='profile__button'><button className='button' onClick={handleEditClick}>Edit</button></div>
        </div>
      )}
    </div>
    </div>
  );
}

export default BuyerProfile;
