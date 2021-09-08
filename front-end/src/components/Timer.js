import { useState, useEffect } from 'react';
import styled from 'styled-components';


const Time = styled.div`
    position: absolute;
    right: 86vw;
    margin-top: -26em;
`

const TimeContainer = styled.div`
    font-size: 30px;
`


const Timer = () => {
    const [time, setTime] = useState(30);
    
    useEffect(() => {
      if (time > 0) {
        setTimeout(() => setTime(time - 1), 1000);
      } else {
        setTime(time);
      }
    },[time]);
  
    const reset = () => {
      //reset the clock no matter where it is, but does not start the clock
      
    }
  
  const start = () => {
    //commence countdown, does not reset the clock
  }
  
    return (
      <Time>
        <TimeContainer>
          {time}
        </TimeContainer>
      </Time>
    );
  };

export default Timer;