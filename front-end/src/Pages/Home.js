import React from 'react';
import Timer from '../components/Timer';
// import Snippets from '../components/Snippets';
import MainMenu from '../components/MainMenu';
import Editor from '../components/Editor';
import styled from 'styled-components';


const Home = () => {
    return (
        <div>
            <MainMenu/>
            {/* <Timer />
            <Snippets /> */}
            <Timer />
            <Editor />
        </div>
    )
};

export default Home;
