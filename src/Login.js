import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'

const apiLink = "http://localhost:8082/api/user"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp=(e)=>{
        e.preventDefault();
        const user = {email, password}
        fetch(apiLink+"/authenticate")
    }

    const signIn = e => {
        e.preventDefault();
        
    }

    const register = e => {
        e.preventDefault();
        history.push('/register')
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='../alanka_black.png'/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>By signing-in you agree to Amazon Clone's Conditions of Use & Sale.</p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
