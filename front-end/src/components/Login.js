import React from 'react';
import { firebase } from '../Services/firebase';
import styled from 'styled-components';

const TitleLine = styled.h1`
    margin-bottom: 40px;
    color: var(--neongreen);
`

const LoginContainer = styled.div`
    text-align: center;
    
    margin: 40vh;
`

// const InstructHeader = styled.h2`
//     margin-bottom: 10px;

//     color: var(--white);
// `

const LoginButton = styled.button`
    border: none;
    border-radius: 20px;
   

    width: 100%;
    padding: 15px 0;
    color: var(--neongreen);
    font-size: 16px;
    background: var(--grey);
    cursor: pointer;

    &:hover {
        border-radius: 10px;

        background: var(--neongreen);
        color: var(--grey);
    }
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
        <LoginContainer>
            <TitleLine>Tech Type</TitleLine>
            <LoginButton onClick={SignInWithFirebase}>
                <span> Login In with Google </span>
            </LoginButton>
        </LoginContainer>
    )
};

export default Login;