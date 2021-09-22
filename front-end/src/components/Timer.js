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
const TimerBtn = styled.button`
  
`

const Timer = ({expiryTimestamp }) => {
  const {
    seconds,
    resume,
    pause,
    restart
  } = useTimer({ expiryTimestamp });
  
  return (
    <Time>
      <TimeContainer>
        <div>
          {seconds}
          {seconds < 30
            ? <div className="timer-button" onClick={() => {
                const timer = new Date()
                timer.setSeconds(timer.getSeconds() + 30)
              restart(timer)
              pause()
            }}

              ><button>Reset</button></div>
            : <div onClick={resume}> <button>G O!</button> </div> 

          }
        </div>  
      </TimeContainer>
    </Time>
  );
};

export default Timer;