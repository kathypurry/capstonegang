import React, { useState } from 'react'
import StatGraph from '../components/StatGraph'
import Timer from '../components/Timer'
import MainMenu from '../components/MainMenu';
import Editor from '../components/Editor';
const TestPage = () => {
    
    return (
        <div>
            {/* <StatGraph/>
            <Timer expiryTimestamp={30} /> */}
            <MainMenu/>
            {/* <Editor/> */}
        </div>
    )
};

export default TestPage;
