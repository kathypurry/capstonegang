import React, { useState } from 'react';
import Timer from "../components/Timer.js";

const Home = () => {
    const [time, setTime] = useState(0);
    const timer = (number_ofSeconds) => {
        let tMinus = number_ofSeconds
        const countdown = () => {
            setTime(tMinus--);
            if (tMinus > 0) {
                clearInterval(timer);
            };
            return tMinus;
        };
        return setInterval(countdown, 1000);
    };
    return (
        <div>
            <h2>Home</h2>
            <Timer timer={timer} time={time} />
        </div>
    )
};

export default Home;
