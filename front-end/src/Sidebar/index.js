import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AuthPage from '../Pages/AuthPage';
import { firebase } from '../Services/firebase';
import { getAuth } from "firebase/auth";


// image files 
import logo from '../assets/Typing-Game-Logo.svg';
import About from '../assets/About-Logo.svg';
import Leaderboard from '../assets/leaderboard-Logo-neon.svg';
// import login from '../assets/enter.svg';
import logout from '../assets/logout.svg';
import Profilepic from '../assets/profile-placeholder.jpeg';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;

    .active {
        border-right: 4px solid var(--neonyellow);
    }
`

const Button = styled.button`
    display: flex;
    justfify-content: center;
    align-items: center;

    background-color: var(--black);
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    
    position: relative;

    &::before, 
    &::after {
        content:"";
        background-color: var(--white);
        height: 2px;
        width: 1rem;
        margin-left: 12px;
        position: absolute;
        transition: all 0.3s ease;
    }

    &::before {
        top: 1.5;
        transform: ${(props) => (props.clicked? "rotate(135deg)" : "rotate(0)")}
    }

    &::after {
        top: 1.2;
        transform: ${(props) => (props.clicked? "rotate(-135deg)" : "rotate(0)")}
    }
`

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;

    background-color: var(--black);
    width: 3.5rem;
    height: 80vh;
    margin-top: 1rem;
    border-radius: 0 30px 30px 0;
    padding: 1rem 0;
`

const Logo = styled.div`
    width: 2rem;

    img {
        width: 30px;
        height: auto;
    }
`

const Bar = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 5rem;
    left: 0;
    
    background-color: var(--black);
    color: var(--neongreen);
    list-style: none;

    width: ${(props) => (props.clicked? "12rem" : "3.5rem")};
    padding: 2rem 0;
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0; 
`

const Item = styled(NavLink)`
    display: flex;

    width: 100%;
    padding: 1rem 0;
    padding-left: 1rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        border-right: 4px solid var(--neonyellow);
        filter: invert(0%) sepia(93%) saturate(0%) hue-rotate(256deg) brightness(97%) contrast(101%);
    }

    &:visited {
        color: var(--foam);
    }

    img {
        width: 2rem;
        height: auto;
    }
`

const Text = styled.span`
    width: ${(props) => (props.clicked? "100%" : "0")};
    margin-left: ${(props) => (props.clicked? "1.5rem" : "0")};
    margin-top: 5px;
    overflow: hidden;

    transition: all 0.3s ease;

    &:hover {
        color: var(--white);
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--black);

    transition: all 0.3s;

    padding: 0.5rem 1rem;
    border-radius: 0 30px 30px 0;
    margin-left: ${(props) => (props.clicked? "9rem" : "0")};
    width: ${(props) => (props.clicked? "16rem" : "3rem")};
    height: 3rem;

    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            border: 2px solid var(--neonyellow);
            padding: 2px;
        }
    }
`

const Details = styled.div`
    display: ${(props) => (props.clicked ? "flex" : "none")};
    justify-content: space-between;
    align-items: center;
`

const Name = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
        display: inline-block;
        color: var(--neonyellow);
    }

    a {
        font-size: 0.8rem;
        text-decoration: none;
        color: var(--white);

        &:hover {
            text-decoration: underline;
        }
    }

    padding: 0 1.5rem;
`

const Logout = styled.button`
    border: none;
    width: 2rem;
    height: 2rem;
    background-color: transparent;

    img {
        width: 100%;
        height: auto;
        &:hover {
            opacity: 0.5;
        }
    }
`

const Sidebar = () => {
    const [currentUser, setCurrentUser] = useState();
    

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, []);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);

    const LogOut = () => {
        firebase.auth().signOut();
    };
    

    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>Click</Button>
            <SidebarContainer>
                    <Logo>
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </Logo>

                    <Bar clicked={click}>
                        <Item onClick={() => setClick(false)} activeClassName="active" to="/leaderboard">
                            <img src={Leaderboard} alt="leaderboard" />
                            <Text clicked={click}>LeaderBoard</Text>
                        </Item>

                        <Item onClick={() => setClick(false)} activeClassName="active" to="/about">
                            <img src={About} alt="about" />
                            <Text clicked={click}>About</Text>
                        </Item>
                    </Bar>

                <Profile clicked={profileClick}>
                    {currentUser && <> <img onClick={() => handleProfileClick()} src={currentUser.photoURL} alt="profile-pic" /></>}
                    <Details clicked={profileClick}>
                        <Name>
                            
                            {currentUser && <> <h5 className="profileName">{currentUser.displayName}</h5></>}
                            <a href="/#">Profile</a>
                        </Name>

                        <Logout onClick={LogOut}>
                            <img src={logout} alt="logout" />
                        </Logout>

                </Details>
                </Profile>
            </SidebarContainer>
        </Container>
    )
}

export default Sidebar;
