import React from 'react';
import { firebase } from '../Services/firebase';
import styled from 'styled-components';

const Section = styled.div`
    background: var(--black);

    height: 60vh;
`

const TitleLine = styled.h1`
    margin-bottom: 40px;
    color: var(--neongreen);
`

const LoginContainer = styled.div`
    text-align: center;
    
    margin: 40vh;
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

    &:hover {
        border-radius: 10px;

        background: var(--neongreen);
        color: var(--grey);
    }
`

const AuthPage = () => {

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
        <Section>
            <LoginContainer>
                <TitleLine>Tech Type</TitleLine>
                <LoginButton onClick={SignInWithFirebase}>
                    <span> Login with Google </span>
                </LoginButton>
            </LoginContainer>
        </Section>
    )
}

export default AuthPage;