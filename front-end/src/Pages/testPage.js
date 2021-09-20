import React, { useState } from 'react'
import StatGraph from '../components/StatGraph'
import Timer from '../components/Timer'

const TestPage = () => {
    
    return (
        <div>
            <StatGraph/>
            <Timer expiryTimestamp={30} />
            
        </div>
    )
};

export default TestPage;
