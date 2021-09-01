import React from 'react'

// image files 
import Logo from "../assets/Typing-Game-Logo.svg";
import About from "../assets/About-Logo.svg";
import Leaderboard from "../assets/leaderboard-Logo-neon.svg";
import Profilepic from "../assets/profile-placeholder.jpeg";
import styled from "styled-components";

const Button = styled.button`
    background-color: var(--black);
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display: flex;
    justfify-content: center;
    align-items: center;

    position: relative;

    &::before, 
    &::after {
        content:"";
        background-color: var(--white);
        height: 2px;
        width: 1rem;
        position: absolute;
    }

    &::before {
        top: 1rem;
    }

    &::after {
        top: 1.5rem;
    }
`

const Sidebar = () => {

useState


    return (
        <div>
            <Button>Click</Button>

            <div>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <ul>
                    <li>
                        <img src={About} alt="about" />
                        <span>About</span>
                    </li>
                    <li>
                        <img src={Leaderboard} alt="leaderboard" />
                        <span>LeaderBoard</span>
                    </li>
                </ul>

            <div>
                <img src={Profilepic} alt="profile-pic" />
            </div>

            <div>
                <h5>Sponge Bob</h5>
                <a href="/#">Profile</a>
            </div>

            <button>

            </button>

            </div>
        </div>
    )
}

export default Sidebar;
