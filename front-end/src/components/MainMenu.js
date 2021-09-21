import React from 'react'

const MainMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="">
                        Story
                    </Link>
                </li>

                <li className="divider">&#9830;</li>

                <li>
                    <Link to="">
                        Practice
                    </Link>
                </li>

                <li className="divider">&#9830;</li>

                <li>
                    <Link to="">
                        Career
                    </Link>
                </li>

                <li className="divider">&#9830;</li>

                <li>
                    <Link to="">
                        Login/Logout
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default MainMenu;
