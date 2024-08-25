import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../store';

const Container = styled.div`
  position:relative;
  .content {
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .body{
        gap:1rem;
        .text{
            gap:1rem;
            text-align:center;
            font-size: 2rem;
            h1{
                padding: 0 25rem;
            }
        }
        .form {
            display:grid;
            grid-template-columns:${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
            width:60%;
            input {
                color:black;
                border:none;
                font-size:1.2rem;
                border:1px solid black;
                padding: 1rem 1.2rem;
                &:focus {
                    outline:none;
                }
            }
            button {
                padding: 0.5rem 1rem;
                background-color:#e50914;
                border:none;
                cursor:pointer;
                color:white;
                border-radius:0.2rem;
                font-weight:bolder;
                font-size:1.05rem;
            }
        }
        button {
            padding: 0.5rem 1rem;
            background-color:#e50914;
            border:none;
            cursor:pointer;
            color:white;
            border-radius:0.2rem;
            font-weight:bolder;
            font-size:1.05rem;
        }
    }
  }
`;


const Signup = () => {

    const navigate=useNavigate();
    const initialState = {
        email: "",
        password: "",
    }
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState(initialState);
    const dispatch=useDispatch();
    // const getCurrentUser=useSelector((state)=>state.nextflix.currentUser)

    const FormHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSignIn = async () => {
        // try {
        //     const { email, password } = formValues;
        //     dispatch(createUser(email,password))
            
        // } catch (error) {
        //     console.log(error);
        // }
    };
 


    // useEffect(()=>{
    //     if(getCurrentUser){
    //        navigate("/"); 
    //     }
    // },[])


    return (
        <Container>
            <BackgroundImage />
            <div className='content'>
                <Header />
                <div className='body flex column a-center j-center'>
                    <div className='text flex column'>
                        <h1>Unlimited movies,TV shows and more</h1>
                        <h4>Watch anywhere. Cancel anytime.</h4>
                        <h6>
                            Ready to watch? Enter your email to create or restart membership
                        </h6>
                    </div>
                    <div className='form'>
                        <input type="email" placeholder='Email Address' name='email' value={formValues.email} onChange={FormHandler} />
                        {
                            showPassword && (
                                <input type='password' placeholder='Password' value={formValues.password} name='password' onChange={FormHandler} />
                            )
                        }
                        {
                            !showPassword && (

                                <button onClick={() => setShowPassword(true)}>Get Started</button>
                            )
                        }
                    </div>
                    <button  onClick={handleSignIn}>Sign Up</button>
                </div>
            </div>
        </Container>
    )
}

export default Signup
