<<<<<<< HEAD
import React, { useState } from 'react';
import Timer from "../components/Timer.js";
=======
import React from 'react';
import Timer from '../Components/Timer';
>>>>>>> c94a0863b104b535a3543a773046d9c8aa1a64d1

const Home = () => {
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
        };
        return setInterval(countdown, 1000);
    };
    return (
        <div>
            <Timer />
            <h2>Home</h2>
            <Timer timer={timer} time={time} />
        </div>
    )
};

export default Home;
