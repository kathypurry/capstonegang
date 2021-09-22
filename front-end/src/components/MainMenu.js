import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainMenu = () => {
    const Button = styled.li`
        list-style-type: none;
        border: 0.5vh solid;
        border-radius: 25px;
        border-color: neongreen;
        font-size: 50px;
    `

    return (
        <nav>
            <ul>
                <Button>
                    <li>
                        
                        <Link
                            to="/story"
                            style={{
                                textDecoration: "none",
                                color: "#39FF14"
                            }}>
                            Story
                        </Link>
                    </li>
                </Button>
                <br />
                <Button>
                    <li>
                        
                        <Link
                            to="/practice"
                            style={{
                                textDecoration: "none",
                                color: "#39FF14"
                            }}>
                            Practice
                        </Link>
                    </li>
                </Button>
                <br />
                <Button>
                    <li>
                        
                        <Link
                            to="/user/career"
                            style={{
                                color: "#39FF14",
                                textDecoration: "none",
                            }}>
                            Career
                        </Link>
                    </li>
                </Button>
                <br />
                <Button>
                    <li>
                        {/*should also be conditionally rendered so that if the user is logged in "Log Out" appears || "Log In" if they are not */}
                        <Link
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "#39FF14"
                            }}>
                            Login/Logout
                        </Link>
                    </li>
                </Button>
            </ul>
        </nav>
    )
};

export default MainMenu;
