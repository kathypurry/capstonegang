import React, { useState } from 'react'
// import StatGraph from '../components/StatGraph'
import Timer from '../components/Timer'

const TestPage = () => {
    const [time, setTime] = useState(0);
    const timer = (number_ofSeconds) => {
        let tMinus = number_ofSeconds
        const countdown = () => {
            setTime(tMinus--);
            if (tMinus >= 0) {
                clearInterval(timer);
            };
            return (
                tMinus >= 0
                    ? tMinus
                    : 0
            )   
        }
        return setInterval(countdown, 1000)
    };

    return (
        <div>
            <Timer timer={timer} time={time}/>
            {/* <StatGraph/> */}
        </div>
    )
};

export default TestPage;
