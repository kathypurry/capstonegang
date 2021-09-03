import React from 'react'

const Timer = () => {
    const timer = (number_ofSeconds) => {
        let tMinus = number_ofSeconds
        const countdown = () => {
            tMinus--;
            if (tMinus > 0) {
                clearInterval(timer)
            }
            return tMinus
        }
        const timer = setInterval(countdown, 1000)
        
    };    
    
    return (
        <div id="timer">
            {timer(30)}
        </div>
    )
}

export default Timer
