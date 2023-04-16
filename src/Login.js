import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GetCurrentUser } from './GetCurrentUser';

const apiLink = "http://localhost:8082/api/v1/auth"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUserName=(e)=>{
        fetch(apiLink + "/getUserName",{
            method: "GET",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${GetCurrentUser().token}`},
        })
        .then(res=>{
            if(res.ok){
                return res.text();
            }
            else{
                throw new Error("Network response was not ok.");
            }
        })
    }

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
                history.push("/userPage");
                getUserName();
            }).catch(error=>{
                console.log(error)
            })
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
                <div>
                <button onClick={handleOpen} className='login__registerButton'>Create your Alanka Account</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    
                    <Box  sx={style}>
                    <h2>Register as:</h2>
                    <div className='register__box'>
                        <div className='register__section'>
                            <img className='register__image' src='buyer.png'/>
                            <Link to='/RegisterBuyer'><button className='register__button'>Buyer</button></Link>
                        </div>
                        <div className='register__section'>
                            <img className='register__image' src='seller.png'/>
                            <Link to='/RegisterSeller'><button className='register__button'>Seller</button></Link>
                        </div>
                        </div>
                    </Box>
                </Modal>
                </div>
                
            </div>
        </div>
    )
}

export default Login
