import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const [formValues, setFormValues] = useState({firstName, lastName, email, password});
    const [formErrors, setFormErrors] = useState({});

    const validate = (values) => {

    }

    async function handleSubmit(event){
        event.preventDefault();

        try{
            await axios.post("http://localhost:8082/api/user/save",{
                firstName: firstName,
                lastName : lastName,
                email: email,
                password: password,
                type: type,

            });

            alert("User Registation Successfully");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setType("");
        }
        catch(err){
            alert("User Registation Failed");
        }
   }

    return (
        <div className='register'>
            <Link to='/'>
                <img className='register__logo' src='../alanka_black.png'/>
            </Link>

            <div className='register__container'>
                <h1>Register</h1>

                <form className="register__form" onSubmit={handleSubmit}> 
                    
                    <div className='register__radioButton'>       
                        <h5>Register as:</h5>      
                        <input type='radio' name="type" value="Buyer" onChange={e => setType(e.target.value)}/>
                        <p>Buyer</p> 
                        <input type='radio' name="type" value="Seller" onChange={e => setType(e.target.value)}/>
                        <p>Seller</p>               
                    </div>
                    
                    <div className='register__radioButton'>
                        
                    </div>

                    <h5>First Name</h5>
                    <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} required/>

                    <h5>Last Name</h5>
                    <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} required/>

                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}required/>

                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)}required/>

                    <button type='submit' /*onClick={signIn}*/ className='login__signInButton'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
