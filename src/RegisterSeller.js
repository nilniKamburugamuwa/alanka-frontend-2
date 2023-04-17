import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
function RegisterSeller() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState({});

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
        const errors = validateFormData(firstName, lastName, email, phoneNumber, password, confirmPassword);
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
        } else {
            try{
                await axios.post("http://localhost:8082/api/user/register",{
                    firstName: firstName,
                    lastName : lastName,
                    email: email,
                    password: password,
                    type: "buyer",
    
                });
    
                alert("User Registation Successfully");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                history.push("/sellerDashboard");
            }
            catch(err){
                alert("User Registation Failed");
            }        
        }
        
   }
   const validateFormData = (firstName, lastName, email, phoneNumber, password, confirmPassword) => {
        const errors = {};
        if (!firstName) {
        errors.firstName = 'First name is required';
        }
        if (!lastName) {
        errors.lastName = 'Last name is required';
        }
        if (!email) {
        errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email address';
        }
        if (!phoneNumber) {
          errors.phoneNumber = 'Phone number is required';
        }
        if (!password) {
        errors.password = 'Password is required';
        }
        if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    return (
        <div className='register'>
            <Link to='/'>
                <img className='register__logo' src='../alanka_black.png'/>
            </Link>

            <div className='register__container'>
                <h2>Register as Seller</h2>

                <form className="register__form" onSubmit={handleSubmit}> 

                    <h5>First Name</h5>
                    <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <div className='register__error'>{errors.firstName && <p>{errors.firstName}</p>}</div>

                    <h5>Last Name</h5>
                    <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                    <div className='register__error'>{errors.lastName && <p>{errors.lastName}</p>}</div>

                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <div className='register__error'>{errors.email && <p>{errors.email}</p>}</div>

                    <div className='register__phoneLabel'>
                    <h5>Phone Number</h5>
                    </div>
                    <div className='register__phone'>
                      <p>+94</p>
                      <input type='text' maxLength={9} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                      <Tooltip className='register__phone__tooltip' title="Phone number must be Sri Lankan as only Sri Lankans are allowed to register as Sellers on Alanka">
                        <InfoIcon />
                      </Tooltip>
                    </div>

                    <div className='register__error'>{errors.phoneNumber && <p>{errors.phoneNumber}</p>}</div>

                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className='register__error'>{errors.password && <p>{errors.password}</p>}</div>

                    <h5>Confirm Password</h5>
                    <input type='password'  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    <div className='register__error'>{errors.confirmPassword && <p>{errors.confirmPassword}</p>}</div>

                    <button type='submit' /*onClick={signIn}*/ className='login__signInButton'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterSeller
