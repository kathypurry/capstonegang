import React from 'react';

const Timer = ({ timer, time }) => {
    
    return (
        <div id="timer">
            {time}
            <button onClick={()=>timer(30)}>Start</button>
        </div>
    )
};

export default Timer;
