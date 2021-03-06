import SelectDifficulty from '../components/SelectDifficulty';
import PlayerInput from '../components/PlayerInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

function GamePage() {
   const API = apiURL();
   const [ difficulty, setDifficulty ] = useState('');
  const [currentSnippet, setCurrentSnippet] = useState({});

  const dice = (nat, min) => {
    return Math.floor(Math.random() * nat + min);
  };


  useEffect(() => {
      axios
        .get(`${API}/code/${difficulty}`)
        .then(
          (res) => {
            setCurrentSnippet(res.data[dice(res.data.length, 0)])
          },
          (error) => console.log('get', error))
        .then(res=>console.log(res))
        .catch((c) => console.warn('catch', c));
  }, [difficulty]);

  const handleDifficultyChange = (e) => {
      setDifficulty(e.target.value); 
  };

  return (
      <div>
          {difficulty === ''
              ? null
              : <PlayerInput snippet={currentSnippet?.snippet}/> 
          }
          
          <SelectDifficulty 
              handleDifficultyChange={handleDifficultyChange} 
              difficulty={difficulty} 
          />
          
      </div>
  );

};

export default GamePage;
