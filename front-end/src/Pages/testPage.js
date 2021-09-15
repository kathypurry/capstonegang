import React, { useState } from 'react'
import StatGraph from '../Components/StatGraph'
import Timer from '../Components/Timer'

const TestPage = () => {
    
    return (
        <div>
            <StatGraph/>
            <Timer expiryTimestamp={30} />
            <Snippets/>
            <PlayerInput />
        </div>
    )
};

export default TestPage;
