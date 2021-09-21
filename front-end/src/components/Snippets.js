import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

import styled from 'styled-components';

import DisplaySnippets from "./DisplaySnippets";
import useKeyboard from "../hooks/useKeyboard";
import { KeyframeTrack } from "three";

const LabelHousing = styled.div`
  margin-left: 15vw;
  margin-bottom: 5vh;
`

const SnippetContainer = styled.div`
  display: flex;

  margin-left: 15vw;
  z-index: -1;
`

const PopulateSnippets = styled.ul`
  list-style: none;
`

const Snippets = () => {
  const API = apiURL();
  const keyInput = useKeyboard();

  const [ allSnippets, setAllSnippets ] = useState([]);
  const [ difficulty, setDifficulty ] = useState([]);
  const [ currentSnippet, setCurrentSnippet ] = useState('');
  const [ completedSnippet, setCompletedSnippet ] = useState(false);

  useEffect(() => {
    axios.get(`${API}/code/${difficulty}`)
      .then(
        (res) => setAllSnippets(res.data),
        (error) => console.log('get', error)
      )
      .catch((c) => console.warn('catch', c));
  }, []);
 
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    setCurrentSnippet(allSnippets[0].snippet);
  };

  //const filteredSnippet = snippet.filter(snip => snip.difficulty === difficulty)

  
   console.log(currentSnippet)
    allSnippets.map((snippet, i) => {
      if (keyInput.length === currentSnippet.length) {
        setCompletedSnippet({ [snippet.id]: true });
        setCurrentSnippet(allSnippets[i]);
        console.log(completedSnippet)
        console.log(currentSnippet)
      };
    });


  return (
    <div>
      <LabelHousing>
          <label htmlFor='difficulty'>Pick your difficulty</label>
          <select 
            id='difficulty' 
            onChange={handleDifficultyChange} 
            value={Number(difficulty)}
          >
            <option>-Choose difficulty-</option>
            <option value='1' defaultChecked>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
      </LabelHousing>

        <SnippetContainer>

        <PopulateSnippets>
     
        <span id='cursor'>|</span>
        <h3 style={{whiteSpace: 'pre-wrap'}}>{currentSnippet}</h3>
          
          {/* {filteredSnippet.map(snip => {
            return (
              <li key={snip.id}>
                <DisplaySnippets snippet={snip}/>
              </li>
            )
          })} */}
        </PopulateSnippets>
      </SnippetContainer>
    </div>
  );
};

export default Snippets;