import Editor from '../components/Editor';
import SelectDifficulty from '../components/SelectDifficulty';
import PlayerInput from '../components/PlayerInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';


function GamePage() {
    const API = apiURL();
    // const [ allSnippets, setAllSnippets ] = useState([]);
    const [ difficulty, setDifficulty ] = useState('');
    const [ currentSnippet, setCurrentSnippet ] = useState({});

    useEffect(() => {
        axios
          .get(`${API}/code/${difficulty}`)
          .then(
            (res) => {
            //   setAllSnippets(res.data)
              setCurrentSnippet(res.data[0])
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
            {difficulty === ''
                ? null
                : <PlayerInput snippet={currentSnippet.snippet}/> 
            }
            
            <SelectDifficulty 
                handleDifficultyChange={handleDifficultyChange} 
                difficulty={difficulty} 
            />
            
        </div>
    );
};

export default GamePage;
