import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'

const apiLink = "http://localhost:8082/api/v1/auth"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp=(e)=>{
        e.preventDefault();
        const user = {email, password}
        fetch(apiLink+"/authenticate", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user)
            })
            .then(res=>{
                console.log(res)
                if(res.status===403){
                    alert("Your email address or password is wrong");
                }
                if(res.status===200){
                    return res.json();
                }
                else{
                    console.error(res);
                }
            }).then(data=>{
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        token: data.token,
                        refreshToken: data.refreshToken,
                    })
                    
                )
                history.push("/home2");
                //getUsername();
            }).catch(error=>{
                console.log(error)
            })
/*             .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data !=null){
                    console.log("User is added.");
                    history.push("/userPage");
                }
                else{
                    console.log("Error:", data.message);
                }
            })
            .catch(error =>{
                console.error("Error:", error);
            }); */
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

                    <button type='submit' onClick={(e)=>handleSignUp(e)} className='login__signInButton'>Sign In</button>
                </form>

                <button onClick={register} className='login__registerButton'>Create your Alanka Account</button>
            </div>
        </div>
    )
}

export default Login
