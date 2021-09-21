import React from 'react'

const MainMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    //make a path for Story mode setup
                    <Link to="">
                        Story
                    </Link>
                </li>

                <li>
                    //path for Practice mode without story visuals
                    <Link to="">
                        Practice
                    </Link>
                </li>

                <li>
                    //path to page of user career stats
                    <Link to="">
                        Career
                    </Link>
                </li>

                <li>
                    //path to new user form page
                    //should also be conditionally rendered so that if the user is logged in "Log Out" appears || "Log In" if they are not
                    <Link to="">
                        Login/Logout
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default MainMenu;
