import React, { useState } from 'react';

// image files 
import logo from "../assets/Typing-Game-Logo.svg";
import About from "../assets/About-Logo.svg";
import Leaderboard from "../assets/leaderboard-Logo-neon.svg";
import Profilepic from "../assets/profile-placeholder.jpeg";
import styled from "styled-components";

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

const Item = styled.li`
    display: flex;

    width: 100%;
    padding: 1rem 0;
    padding-left: 1rem;
    cursor: pointer;

    &:hover {
        border-right: 4px solid var(--neonyellow);

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
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--black);
    // border: 2px solid var(--neonyellow);

    transition: all 0.3s;

    // border: 2px solid var(--white);
    padding: 0.5rem 1rem;
    margin-left: ${(props) => (props.clicked? "9rem" : "0")};
    width: ${(props) => (props.clicked? "14rem" : "3rem")};
    height: 3rem;

    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

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
    }

    padding: 0 1.5rem;
`

const Sidebar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [profileClick, setProfileClick] = useState(false);
const handleProfileClick = () => setProfileClick(!profileClick);


    return (
        <div>
            <Button clicked={click} onClick={() => handleClick()}>Click</Button>
            <SidebarContainer>
                    <Logo>
                        <img src={logo} alt="logo" />
                    </Logo>

                    <Bar clicked={click}>
                        <Item>
                            <img src={Leaderboard} alt="leaderboard" />
                            <Text clicked={click}>LeaderBoard</Text>
                        </Item>

                        <Item>
                            <img src={About} alt="about" />
                            <Text clicked={click}>About</Text>
                        </Item>
                    </Bar>

                <Profile clicked={profileClick}>
                    <img onClick={() => handleProfileClick()} src={Profilepic} alt="profile-pic" />
                    <Details clicked={profileClick}>
                        <Name>
                            <h5>Sponge Bob</h5>
                            <a href="/#">Profile</a>
                        </Name>

                </Details>
                </Profile>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar;
