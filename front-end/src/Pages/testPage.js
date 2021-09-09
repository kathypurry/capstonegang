import React, { useState } from 'react'
import StatGraph from '../Components/StatGraph'
import Timer from '../Components/Timer'

const TestPage = () => {
    const [time, setTime] = useState(0);
    // const timer = (number_ofSeconds) => {
    //     let tMinus = number_ofSeconds
    //     const countdown = () => {
    //         setTime(tMinus--);
    //         if (tMinus >= 0) {
    //             clearInterval(timer);
    //         };
    //         return (
    //             tMinus >= 0
    //                 ? tMinus
    //                 : 0
    //         )   
    //     }
    //     return setInterval(countdown, 1000)
    // const timer = (number_ofSeconds) => {
    //     for (let i = number_ofSeconds; i > 0; i--) {
    //         setTimeout(() => {
    //             setTime(i)
    //         }, 1000)
    //     }
    // };
    return (
        <div>
            <StatGraph/>
            <Timer expiryTimestamp={30}/>
        </div>
    )
};

export default TestPage;
