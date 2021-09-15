import React, { useState, useEffect } from 'react';
import { firebase } from '../Services/firebase';
import styled from 'styled-components';

const InstructHeader = styled.h2`
    margin-bottom: 10px;
`

const LoginButton = styled.button`
    border: none;
    border-radius: 20px;

    width: 100%;
    padding: 15px 0;
    color: var(--neongreen);
    font-size: 16px;
    background: var(--grey);
    cursor: pointer;
`

const Login = () => {
  
    const SignInWithFirebase = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <InstructHeader>Sign In</InstructHeader>
            <LoginButton onClick={SignInWithFirebase}>
                <span> Sign In with Google </span>
            </LoginButton>
        </div>
    )
};

export default Login;