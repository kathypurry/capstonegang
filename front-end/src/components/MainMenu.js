import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuOptions = styled.div`
    li:hover {
        border-radius: 25px;
        color: var(--white);
    }
`

const MainMenu = () => {
    const Button = styled.li`
        list-style-type: none;
        border: 0.5vh solid;
        border-radius: 25px;
        border-color: neongreen;
        font-size: 50px;
    `

    return (
        <MenuOptions>
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
                                to="/career"
                                style={{
                                    color: "#39FF14",
                                    textDecoration: "none",
                                }}>
                                Career
                            </Link>
                        </li>
                    </Button>
                </ul>
            </nav>
        </MenuOptions>
    )
};

export default MainMenu;
