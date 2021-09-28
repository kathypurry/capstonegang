import Editor from '../components/Editor';
import SelectDifficulty from '../components/SelectDifficulty';
import PlayerInput from '../components/PlayerInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

function GamePage() {
    const API = apiURL();
    const [ allSnippets, setAllSnippets ] = useState([]);
    const [ difficulty, setDifficulty ] = useState('');
    const [ currentSnippet, setCurrentSnippet ] = useState({});

    useEffect(() => {
        axios
          .get(`${API}/code/${difficulty}`)
          .then(
            (res) => {
              setAllSnippets(res.data)
              setCurrentSnippet(res.data)
            },
            (error) => console.log('get', error)
          )
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
            {/* <Editor 
                currentSnippet={currentSnippet}
                  
            /> */}
            <PlayerInput snippet={currentSnippet.snippet}/>
            {/* <PlayerInput snippet={currentSnippet.snippet}/> */}
            
        </div>
    );
};

export default GamePage;
