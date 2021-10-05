import SelectDifficulty from '../components/SelectDifficulty';
import PlayerInput from '../components/PlayerInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

function GamePage() {
    const API = apiURL();

    const [ difficulty, setDifficulty ] = useState('');
    const [ currentSnippet, setCurrentSnippet ] = useState({});

    useEffect(() => {
        axios.get(`${API}/code/${difficulty}`)
          .then(
            (res) => {
              setCurrentSnippet(res.data[0])
            },
            (error) => console.log('get', error)
          )
          .then(res=>console.log(res))
            .catch((c) => console.warn('catch', c));
    }, [difficulty, API]);

    const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value); 
    };

    return (
        <div>
            <SelectDifficulty 
                handleDifficultyChange={handleDifficultyChange} 
                difficulty={difficulty} 
            />

            
            {difficulty === ''
                ? null
                : <PlayerInput snippet={currentSnippet.snippet}/> 
            }

        </div>
    );
};

export default GamePage;
