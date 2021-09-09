import { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';


const Time = styled.div`
    position: absolute;
    right: 86vw;
    margin-top: -26em;
`

const TimeContainer = styled.div`
    font-size: 30px;
`

const Timer = ({expiryTimestamp }) => {
  
  
  const start_try1 = () => {
    // useEffect(() => {
  //   if (time > 0) {
  //     setTimeout(() => setTime(time - 1), 1000);
  //   } else {
  //     setTime(time);
  //   }
  // });
  
    // const reset = () => {
    //   //reset the clock no matter where it is, but does not start the clock
    //   setTime(30) 
    // }

    // const start = (e) => {
    //   //commence countdown, does not reset the clock
    //   e.preventDefault()
    //   if (time === 30) {
    //     const start = setInterval(() => setTime(time - 1), 1000)
    //     if (time === 0) {
    //       clearInterval(start)
    //     }
    //   }
    //   // else if (time === 0) {
    //   //   clearInterval(start)        
    //   // }
    //   else {setTime(time)}
    //   // time > 0 ? setTimeout(() => setTime(time - 1), 1000) : setTime(time);
    // }
  }
  
  const {
    seconds,
    resume,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, });
  
  return (
    <Time>
      <TimeContainer>
        <div>
          {seconds}
          {seconds < 30
            ? <div onClick={() => {
                const timer = new Date()
                timer.setSeconds(timer.getSeconds() + 30)
              restart(timer)
              pause()
            }}
              >Reset</div>
            : <div onClick={resume}> G O </div> 
          }
        </div>  
      </TimeContainer>
    </Time>
  );
};

export default Timer;