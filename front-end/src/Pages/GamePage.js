import Editor from '../components/Editor';
import SelectDifficulty from '../components/SelectDifficulty';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';

function GamePage() {
    const API = apiURL();
    const [ allSnippets, setAllSnippets ] = useState([]);
    const [ difficulty, setDifficulty ] = useState('');
    const [ currentSnippet, setCurrentSnippet ] = useState({});

    useEffect(() => {
        axios.get(`${API}/code/${difficulty}`)
          .then(
            (res) => {
              setAllSnippets(res.data)
              setCurrentSnippet(res.data[0])
            },
            (error) => console.log('get', error)
          )
          .catch((c) => console.warn('catch', c));
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
        </div>
    );
};

export default GamePage;
