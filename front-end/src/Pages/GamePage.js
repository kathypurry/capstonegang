import Editor from '../components/Editor';
import SelectDifficulty from '../components/SelectDifficulty';
import PlayerInput from '../components/PlayerInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;

  margin-left: 30vw;
  z-index: -1;
`;

function GamePage() {
    const API = apiURL();
    const [ allSnippets, setAllSnippets ] = useState([]);
    const [ difficulty, setDifficulty ] = useState('');
    const [ currentSnippet, setCurrentSnippet ] = useState({});

    useEffect(() => {
        axios.get(`${API}/code/${difficulty}`)
          .then(
            (res) => {
              
              setCurrentSnippet(res.data[0].snippet)
            },
            (error) => console.log('get', error)
          )
          .then(res=>console.log(res))
            .catch((c) => console.warn('catch', c));
        console.log(currentSnippet, 'test curSnippet');
        // console.log(allSnippets, 'test allSnippets');
      }, [difficulty]);

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value); 
    };

    return (
        <div>
            <SelectDifficulty 
                handleDifficultyChange={handleDifficultyChange} 
                difficulty={difficulty} 
            />
            <Editor 
                currentSnippet={currentSnippet}
                  
            /> 
            {/* <PlayerInput snippet={currentSnippet}/> */}
            <InputContainer>
              <PlayerInput snippet={currentSnippet}/>
            {/* <PlayerInput snippet={currentSnippet.snippet}/> */}
            </InputContainer>
        </div>
    );
};

export default GamePage;
